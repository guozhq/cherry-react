import useSWR from 'swr'
import { Navigate } from 'react-router-dom'
import pot from '../assets/images/pot.svg'
import { ajax } from '../lib/ajax'
import { AddItemFloatButton } from '../components/AddItemFloatButton'
import { Loading } from '../components/Loading'
export const Home: React.FC = () => {
  const { data: meData, isLoading: isLoadingMe }
  = useSWR('/api/v1/me', async path => (
    await ajax.get<Resource<User>>(path)).data.resource
  )
  const { data: itemsData, isLoading: isLoadingItems }
   = useSWR(meData ? '/api/v1/items' : null, async path =>
     (await ajax.get<Resources<Item>>(path)).data)

  if (isLoadingMe || isLoadingItems) {
    return <Loading />
  }
  if (itemsData?.resources[0]) {
    return <Navigate to="/items"/>
  }
  return <div>
    <div flex justify-center items-center>
      <img mt-20vh mb-20vh width="128" height="130" src={pot} />
    </div>
    <div px-16px>
      <button h-48px w-full bg="#5C33BE" b-none text-white
        rounded-8px
      >开始记账</button>
    </div>
    <AddItemFloatButton />
  </div>
}
