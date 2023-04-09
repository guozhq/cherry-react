import { Navigate, useLocation, useRouteError } from 'react-router-dom'
import { ErrorEmptyData, ErrorUnauthorized } from '../errors'

export const ItemsPageError: React.FC = () => {
  const error = useRouteError() as Error
  const loc = useLocation()
  if (error instanceof ErrorUnauthorized) {
    const from = encodeURIComponent(`${loc.pathname}${loc.search}`)
    return <Navigate to={`/sign_in?from=${from}`} />
  } else if (error instanceof ErrorEmptyData) {
    return <Navigate replace to="/home" />
  } else {
    return <div>出错了</div>
  }
}
