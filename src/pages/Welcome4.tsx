import { Link } from 'react-router-dom'
import cloud from '../assets/images/cloud.svg'
export const Welcome4: React.FC = () => {
  return (
    <div>
      <img w-129px h-83px src={cloud} />
      <h2>
        云备份 <br/>
        再也不怕数据丢失
      </h2>
      <div mt-64px>
        <Link text-32px color="#6035BF" font-bold to="/home">开启应用</Link>
      </div>
    </div>)
}
