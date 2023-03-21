import { NavLink } from 'react-router-dom'
import { WelcomeLayout } from '../layouts/WelcomeLayout'

export const welcomeRoutes = {
  path: 'welcome',
  element: <WelcomeLayout />,
  children: [
    { path: '1', element: <div>1<NavLink to="/welcome/2">下一页</NavLink></div> },
    { path: '2', element: <div>2<NavLink to="/welcome/3">下一页</NavLink></div> },
    { path: '3', element: <div>3<NavLink to="/welcome/4">下一页</NavLink></div> },
    { path: '4', element: <div>4<NavLink to="/welcome/xxx">下一页</NavLink></div> }
  ]
}
