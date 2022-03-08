import React, { useState } from 'react'
import { isBlank } from '../common'
import Button from './styled/button'
import axiosWrapper from '../modules/axiosWrapper'
import { useDispatch } from 'react-redux'
import { HOST, LOGIN, SIGNUP, USER_LOGIN, USER_SIGNUP} from '../store/modules/user'

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
    alert('회원가입이 완료되었습니다.')
    window.location.href = "/";
}
const [toggleState, setToggleState] = useState(0)

const toggletab = (index) =>{
    setToggleState(index)
}
  return (
    <>
        <div className=''>
            <div className='tab'>
                {/* 로그인/회원가입 탭메뉴 */}
                <div className="">
                    <button className='tab__menu active' onClick={() => toggletab(0)}>로그인</button>
                    <button className='tab__menu' onClick={() => toggletab(1)}>회원가입</button>
                </div>
                    <form 
                        className={toggleState === 0 ? "tab__form active" : "tab__form"} 
                        onSubmit={e => handleLoginSubmit(e)}
                    >
                        <input 
                            name="email"
                            type="text" 
                            placeholder="email" 
                            value={state.email} 
                            onChange={e => setState({
                                ...state,
                                [e.target.name]:e.target.value})
                        }/>
                        <input 
                            name="password"
                            type="password" 
                            placeholder="password" 
                            value={state.password} 
                            onChange={e => setState({
                                ...state,
                                [e.target.name]:e.target.value})
                            }
                        />
                        <div className=''>
                            <Button type="submit">로그인</Button>
                        </div>
                    </form>
                    <form 
                        className={toggleState === 1 ? 'tab__form active' : 'tab__form'} 
                        onSubmit={e => handleSignUpSubmit(e)}
                    >
                        <input 
                            name="nickname"
                            type="text" 
                            placeholder="nickname" 
                            value={state.nickname} 
                            onChange={e => setState({
                                ...state,
                                [e.target.name]:e.target.value})
                        }/>
                        <input 
                            name="email"
                            type="text" 
                            placeholder="email" 
                            value={state.email} 
                            onChange={e => setState({
                                ...state,
                                [e.target.name]:e.target.value})
                        }/>
                        <input 
                            name="password"
                            type="password" 
                            placeholder="password" 
                            value={state.password} 
                            onChange={e => setState({
                                ...state,
                                [e.target.name]:e.target.value})
                            }
                        />
                        <input 
                            name="rePassword"
                            type="password" 
                            placeholder="rePassword" 
                            value={state.rePassword} 
                            onChange={e => setState({
                                ...state,
                                [e.target.name]:e.target.value})
                            }
                        />
                        <div className=''>
                            <Button type="submit">회원가입</Button>
                        </div>
                    </form>
            </div>
        </div>
    </>
  )
}

export default Access