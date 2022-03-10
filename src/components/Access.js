import React, { useState } from 'react'
import { isBlank } from 'common'
import Button from 'components/styled/button'
import Input from 'components/styled/input'
import axiosWrapper from 'modules/axiosWrapper'
import { useDispatch } from 'react-redux'
import { HOST, LOGIN, USER_LOGIN, USER_SIGNUP} from 'store/modules/user'
import FormInput from 'components/FormInput'

function Access() {
  const [state, setState] = useState({
    email:'',
    password:'',
    rePassword:'',
    nickname:'',
})
const dispatch = useDispatch()
const handleLoginSubmit = e =>{
    e.preventDefault()
    if(!isBlank(state.email,'이메일을 입력해주세요'))return false
    if(!isBlank(state.password,'비밀번호를 입력해주세요'))return false
    
    const url = `${HOST}/${USER_LOGIN}`
    const requestBody = {
        email:state.email,
        password:state.password,
    }
    const login = data => {
        if(!data){
            alert('등록되지 않은 아이디이거나 아이디 또는 비밀번호를 잘못 입력하였습니다')
            return false
        }
		window.location.href = "/";
        dispatch(LOGIN({
            email:state.email,
            password:state.password,
            // loggedIn:true,
            // token:data.token,
            nickname:data.nickname,
            is_logined:data.is_logined,
            // cookieeeee:ReactSession.set("username", "Bob")
        }))
    }
    axiosWrapper('POST',url,requestBody)
    .then(login)
}

const handleSignUpSubmit = e =>{
    e.preventDefault()
    if(!isBlank(state.nickname,'닉네임을 입력해주세요'))return false
    if(!isBlank(state.email,'이메일을 입력해주세요'))return false
    if(!isBlank(state.password,'비밀번호를 입력해주세요'))return false
    if(state.password !== state.rePassword ){
        alert('비밀번호가 다릅니다')
        return false
    }
    const url = `${HOST}/${USER_SIGNUP}`
    const requestBody = {
        email:state.email,
        nickname:state.nickname,
        password:state.password,
    }
    axiosWrapper('POST',url,requestBody)
    // alert('회원가입이 완료되었습니다.')
    // window.location.href = "/";
}
const [toggleActive, setToggleActive] = useState(0)

const toggletab = (index) =>{
    setToggleActive(index)
}
  return (
    <section>
        <div className='tab'>
            <div className="tab__links">
				<button className={toggleActive === 0 ? 'tab__links--button active' : 'tab__links--button'} onClick={() => toggletab(0)}>로그인</button>
				<button className={toggleActive === 1 ? 'tab__links--button active' : 'tab__links--button'} onClick={() => toggletab(1)}>회원가입</button>
			</div>
			<div className={toggleActive === 0 ? "tab__form active" : "tab__form"}>
				<form 
					onSubmit={e => handleLoginSubmit(e)}
				>
					<FormInput
						label={"이메일"}
						id="email"
						name="email"
						type="text" 
						placeholder="example@email.com" 
						value={state.email} 
						onChange={e => setState({
							...state,
							[e.target.name]:e.target.value})
						}		
					/>
					<FormInput
						label="비밀번호"
						id="password"
						name="password"
						type="password" 
						placeholder="비밀번호" 
						value={state.password} 
						onChange={e => setState({
							...state,
							[e.target.name]:e.target.value})
						}
					/>
					<div className='modal__button'>
						<Button type="submit" fullSize>로그인</Button>
					</div>
				</form>
			</div>
			<div className={toggleActive === 1 ? 'tab__form active' : 'tab__form'} >
				<form 
					onSubmit={e => handleSignUpSubmit(e)}
				>
					<label htmlFor='nickname'>닉네임</label>
					<Input fullSize
						id="nickname"
						name="nickname"
						type="text" 
						placeholder="2자이상 10자 미만" 
						value={state.nickname} 
						onChange={e => setState({
							...state,
							[e.target.name]:e.target.value})
					}/>
					<label htmlFor='email'>이메일</label>
					<Input fullSize
						id="email"
						name="email"
						type="text" 
						placeholder="example@email.com"
						value={state.email} 
						onChange={e => setState({
							...state,
							[e.target.name]:e.target.value})
					}/>
					<label htmlFor='password'>비밀번호</label>
					<Input fullSize
						id="password"
						name="password"
						type="password" 
						placeholder="특수문자포함 8자이상" 
						value={state.password} 
						onChange={e => setState({
							...state,
							[e.target.name]:e.target.value})
						}
					/>
					<label htmlFor='rePassword'>비밀번호 확인</label>
					<Input fullSize
						id="rePassword"
						name="rePassword"
						type="password" 
						placeholder="비밀번호 다시 입력" 
						value={state.rePassword} 
						onChange={e => setState({
							...state,
							[e.target.name]:e.target.value})
						}
					/>
					<div className='modal__button'>
						<Button fullSize type="submit">회원가입</Button>
					</div>
				</form>
			</div>
        </div>
    </section>
  )
}

export default Access