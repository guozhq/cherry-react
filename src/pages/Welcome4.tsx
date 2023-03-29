import { useNavigate } from 'react-router-dom'
import cloud from '../assets/images/cloud.svg'
import { useLocalStore } from '../stores/useLocalStore'
export const Welcome4: React.FC = () => {
  const { sethasReadWelcomes } = useLocalStore()
  const nav = useNavigate()
  const onSkip = () => {
    sethasReadWelcomes(true)
    nav('/welcome/xxx')
  }
  return (
    <div>
      <img w-129px h-83px src={cloud} />
      <h2>
        云备份 <br/>
        再也不怕数据丢失
      </h2>
      <div mt-64px>
        <span text-32px color="#6035BF" font-bold onClick={onSkip}>开启应用</span>
      </div>
    </div>)
}
