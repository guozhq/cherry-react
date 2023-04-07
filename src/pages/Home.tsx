import useSWR from 'swr'
import { Navigate, useNavigate } from 'react-router-dom'
import type { AxiosError } from 'axios'
import pot from '../assets/images/pot.svg'
import { ajax } from '../lib/ajax'
import { AddItemFloatButton } from '../components/AddItemFloatButton'
import { Loading } from '../components/Loading'
import { useTitle } from '../hooks/useTitle'
interface Props {
  title?: string
}
export const Home: React.FC<Props> = (props) => {
  useTitle(props.title)
  const nav = useNavigate()
  const onHttpError = (error: AxiosError) => {
    if (error.response) {
      if (error.response.status === 401) {
        nav('/sign_in')
      }
    }
    throw error
  }
  const { data: meData, isLoading: isLoadingMe }
  = useSWR('/api/v1/me', async path => (
    await ajax.get<Resource<User>>(path)).data.resource
  )
  const { data: itemsData, isLoading: isLoadingItems }
   = useSWR(meData ? '/api/v1/items' : null, async path =>
     (await ajax.get<Resources<Item>>(path)).data)

  if (isLoadingMe || isLoadingItems) {
    return <Loading className="h-screen" message='正在加载页面，请稍等'/>
  }
  if (itemsData?.resources[0]) {
    return <Navigate to="/items"/>
  }
  return <div>
    <div flex justify-center items-center>
      <img mt-20vh mb-20vh width="128" height="130" src={pot} />
    </div>
    <div px-16px>
    <button j-btn>开始记账</button>
    </div>
    <AddItemFloatButton />
  </div>
}
