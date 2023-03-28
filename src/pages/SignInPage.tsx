import type { FormEventHandler } from 'react'
import { Gradient } from '../components/Gradient'
import { Icon } from '../components/Icon'
import { TopNav } from '../components/TopNav'
import { validate } from '../lib/validate'
import { useSignInStore } from '../stores/useSignInStore'

export const SignInPage: React.FC = () => {
  const { data, error, setData, setError } = useSignInStore()
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const error = validate(data, [
      { key: 'email', type: 'required', message: '请输入邮箱' },
      { key: 'code', type: 'required', message: '请输入验证码' },
    ])
    setError(error)
  }
  return (<div>
    <Gradient>
      <TopNav title='登录' icon={<Icon className="w-24px h-24px" name='back'/>} />
    </Gradient>
    <div text-center pt-40px pb-16px>
        <Icon name="logo" className='w-64px h-68px' />
        <h1 text-32px text="#7878FF" font-bold>山竹记账</h1>
      </div>
      <form j-form onSubmit={onSubmit}>
        <div>
          <span j-form-label>邮箱地址{ error.email?.[0] && <span>{error.email[0]}</span>}</span>
          <input j-input-text type="text"
          placeholder='请输入邮箱，然后点击发送验证码'
          value={data.email} onChange={e => setData({ email: e.target.value })}
          />
        </div>
        <div>
          <span j-form-label>验证码{ error.code?.[0] && <span>{error.code[0]}</span>}</span>
          <div flex gap-x-16px>
            <input j-input-text type="text" placeholder='六位数字'
            value={data.code} onChange={e => setData({ code: e.target.value })}/>
            <button j-btn>发送验证码</button>
          </div>
        </div>
        <div mt-100px>
          <button j-btn type="submit">登录</button>
        </div>
      </form>
  </div>)
}
