import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { LOGIN } from '../features/userSlice'
import { isBlank, fetchPost, checkStatusAndParse } from '../common'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = e =>{
        e.preventDefault()
        if(!isBlank(email)){
            alert('이메일을 입력해주세요')
            return false
        }
        if(!isBlank(password)){
            alert('비밀번호를 입력해주세요')
            return false
        }
        console.log(email)
        const requestBody = {
            email:email,
            password:password
        }
        const login = data => {
            console.log(data)
            if(data.resultCode === 200){
                dispatch(LOGIN({
                email:email,
                password:password,
                loggedIn:true,
        }))
            }else{
                alert('등록되지 않은 아이디이거나 아이디 또는 비밀번호를 잘못 입력하였습니다')
            }
        }
        fetchPost(`http://localhost:3000/user/login`,requestBody)
        .then(checkStatusAndParse)
        .then(login)
        .catch(error => console.log(error))
    }
  return (
    <div>
        <form onSubmit={e => handleSubmit(e)}>
            <input 
                type="text" 
                placeholder="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)
            }/>
            <input 
                type="password" 
                placeholder="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)}
            />
            <input type="submit" value="로그인"/>
        </form>
    </div>
  )
}

export default Login