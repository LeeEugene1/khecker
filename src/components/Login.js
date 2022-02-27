// import useFetch from '../hooks/useFetch'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {LOGIN} from '../store/modules/user'
import { isBlank, } from '../common'
import useSessionStorage from '../hooks/useSessionStorage';
import axiosWrapper from '../modules/axiosWrapper'
function Login() {
    // hook example
    const [storedTheme, setTheme] = useSessionStorage("theme");
    useEffect(()=>{
      setTheme("dark")
    },[setTheme])

    const [state, setState] = useState({
        email:'',
        password:''
    })
    const dispatch = useDispatch()
    const handleSubmit = e =>{
        e.preventDefault()
        if(!isBlank(state.email)){
            alert('이메일을 입력해주세요')
            return false
        }
        if(!isBlank(state.password)){
            alert('비밀번호를 입력해주세요')
            return false
        }
        const url = 'http://localhost:3000/user/login'
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
    <div>
        {/* {loading && <span>Loading...</span>}
        {!loading && error ? (
            <span>Error in fetching data...</span>
        ) : <span>로그인 성공{JSON.stringify(data)}</span>} */}
        <form onSubmit={e => handleSubmit(e)}>
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
            <input type="submit" value="로그인"/>
        </form>
    </div>
  )
}

export default Login