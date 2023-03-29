import { Link } from 'react-router-dom'
import clock from '../assets/images/clock.svg'
export const Welcome2: React.FC = () => {
  return (
    <div>
      <img w-128px h-150px src={clock} />
      <h2>
        每日提醒 <br/>
        不会遗漏每一笔账单
      </h2>
      <div mt-64px>
        <Link text-32px color="#6035BF" font-bold to="/welcome/3">下一页</Link>
      </div>
    </div>)
}
