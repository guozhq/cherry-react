import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RedirectToWelcome1 } from './components/RedirectToWelcome1'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!<Outlet /></div>,
    errorElement: <RedirectToWelcome1 />,
    children: [
      { index: true, element: <div>请选择 1 2 3</div> },
      {
        path: 'welcome',
        element: <div><Outlet /></div>,
        children: [
          { index: true, element: <div></div> },
          { path: '1', element: <div>1</div> },
          { path: '2', element: <div>2</div> },
          { path: '3', element: <div>3</div> },
          { path: '4', element: <div>4</div> }
        ]
      },
    ]
  },
])

const div = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(div)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
