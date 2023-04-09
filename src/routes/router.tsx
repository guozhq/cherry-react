import { createBrowserRouter } from 'react-router-dom'
import type { AxiosError } from 'axios'
import axios from 'axios'
import { preload } from 'swr'
import { Root } from '../components/Root'
import { WelcomeLayout } from '../layouts/WelcomeLayout'
import { Home } from '../pages/Home'
import { ItemsNewPages } from '../pages/ItemsNewPage'
import { ItemsPages } from '../pages/ItemsPage'
import { SignInPage } from '../pages/SignInPage'
import { TagsNewPage } from '../pages/TagsNewPage'
import { Welcome1 } from '../pages/Welcome1'
import { Welcome2 } from '../pages/Welcome2'
import { Welcome3 } from '../pages/Welcome3'
import { Welcome4 } from '../pages/Welcome4'
import { TagsEditPage } from '../pages/TagsEditPage'
import { StatisticsPage } from '../pages/StatisticsPage'
import { ItemsPageError } from '../pages/ItemsPageError'
import { ErrorEmptyData, ErrorUnauthorized } from '../errors'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: 'welcome',
    element: <WelcomeLayout />,
    children: [
      { path: '1', element: <Welcome1 /> },
      { path: '2', element: <Welcome2 /> },
      { path: '3', element: <Welcome3 /> },
      { path: '4', element: <Welcome4 /> }
    ]
  },
  {
    path: '/items',
    element: <ItemsPages />,
    errorElement: <ItemsPageError />,
    loader: async () => {
      const onError = (error: AxiosError) => {
        if (error.response?.status === 401) { throw new ErrorUnauthorized() }
        throw error
      }
      return preload('/api/v1/items?page=1', async (path) => {
        const response = await axios.get<Resources<Item>>(path).catch(onError)
        if (response.data.resources.length > 0) {
          return response.data
        } else {
          throw new ErrorEmptyData()
        }
      })
    }
  },
  { path: '/items/new', element: <ItemsNewPages /> },
  { path: '/tags/new', element: <TagsNewPage /> },
  { path: '/tags/:id', element: <TagsEditPage /> },
  { path: '/sign_in', element: <SignInPage /> },
  { path: '/statistics', element: <StatisticsPage /> },
  { path: '/chart', element: <div>图表</div> },
  { path: '/export', element: <div>敬请期待</div> },
  { path: '/tags', element: <div>标签</div> },
  { path: '/noty', element: <div>敬请期待</div> },
])
