import type { FormEventHandler } from 'react'
import { useNavigate } from 'react-router-dom'
import { Gradient } from '../components/Gradient'
import { Icon } from '../components/Icon'
import { Input } from '../components/Input'
import { TopNav } from '../components/TopNav'
import { ajax } from '../lib/ajax'
import { hasError, validate } from '../lib/validate'
import { useSignInStore } from '../stores/useSignInStore'

export const SignInPage: React.FC = () => {
  const { data, error, setData, setError } = useSignInStore()
  const nav = useNavigate()
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const newError = validate(data, [
      { key: 'email', type: 'required', message: '请输入邮箱' },
      { key: 'code', type: 'required', message: '请输入验证码' },
    ])
    setError(newError)
    if (!hasError(newError)) {
      ajax.post('/api/v1/session', data)
      nav('/home')
    }
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
        <Input label='邮箱地址' placeholder='请输入邮箱，然后点击发送验证码'
          value={data.email} onChange={email => setData({ email })}
          error={error.email?.[0]} />
        </div>
        <Input label='验证码' type="sms_code" placeholder='六位数字' value={data.code}
          onChange={value => setData({ code: value })}
          error={error.code?.[0]} />
        <div mt-100px>
          <button j-btn type="submit">登录</button>
        </div>
      </form>
  </div>)
}
