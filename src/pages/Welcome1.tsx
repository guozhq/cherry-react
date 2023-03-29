import { Link } from 'react-router-dom'
import pot from '../assets/images/pot.svg'
export const Welcome1: React.FC = () => {
  return (
    <div>
      <img w-128px h-130px src={pot} />
      <h2>
        会挣钱 <br/>
        还要会省钱
      </h2>
      <div mt-64px>
        <Link text-32px color="#6035BF" font-bold to="/welcome/2">下一页</Link>
      </div>
    </div>)
}
