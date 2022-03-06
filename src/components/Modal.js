import React, { useState } from 'react'
import Button from './styled/button'
import axiosWrapper from '../modules/axiosWrapper'
import { useDispatch } from 'react-redux'
import { HOST, LOGIN, USER_LOGIN} from '../store/modules/user'
import { isBlank } from '../common'

function Modal() {
    const [modal, setModal] = useState(false)
    const toggleModal = () =>{
        setModal(!modal)
    }
    const [state, setState] = useState({
        email:'',
        password:''
    })
    const dispatch = useDispatch()
    const handleSubmit = e =>{
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
    return (
    <>
    {/* {user ? <Logout/> : <Login/>} */}
    <Button onClick={toggleModal}>로그인</Button>
    {modal &&(
        <div className='modal'>
            <div className='modal__content'>
                로그인/회원가입 탭메뉴
                <form className='modal__form' onSubmit={e => handleSubmit(e)}>
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
                    <div className='modal__button'>
                        <Button type="submit">로그인</Button>
                        <Button primary onClick={toggleModal}>취소</Button>
                    </div>
                </form>
            </div>
            <div className='modal__overlay'></div>
        </div>
    )}
    </>
  )
}

export default Modal