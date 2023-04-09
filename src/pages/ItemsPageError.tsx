import { Navigate, useRouteError } from 'react-router-dom'
import { ErrorEmptyData, ErrorUnauthorized } from '../errors'

export const ItemsPageError: React.FC = () => {
  const error = useRouteError() as Error
  if (error instanceof ErrorUnauthorized) {
    return <Navigate to="/sign_in" />
  } else if (error instanceof ErrorEmptyData) {
    return <Navigate to="/home" />
  } else {
    return <div>出错了</div>
  }
}
