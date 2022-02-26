// import useFetch from '../hooks/useFetch'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {LOGIN} from '../store/modules/user'
import { checkStatusAndParse, fetchPost, isBlank,  } from '../common'
import useSessionStorage from '../hooks/useSessionStorage';
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
        const requestBody = {
            email:state.email,
            password:state.password,
        }
        const login = data => {
            console.log(data)
            if(data.error === false){
                dispatch(LOGIN({
                email:state.email,
                password:state.password,
                // loggedIn:true,
                // token:data.token,
                nickname:data.nickname,
                is_logined:data.is_logined,
                // cookieeeee:ReactSession.set("username", "Bob")
        }))
            }else{
                alert('등록되지 않은 아이디이거나 아이디 또는 비밀번호를 잘못 입력하였습니다')
            }
            return data
        }
        fetchPost(`http://localhost:3000/user/login`,requestBody)
        .then(checkStatusAndParse)
        .then(login)
        .then(data => console.log(`dsfsdfsdfsdfsdf${data.is_logined}`))
        .catch(error => console.log(error))
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