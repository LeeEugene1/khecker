import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const handleSubmit = e =>{
        if(email === ''){
            alert('아이디를 입력해주세요')
            return false
        }
        if(password === ''){
            alert('비밀번호를 입력해주세요')
            return false
        }
        e.preventDefault()
        console.log(email)
        const data = fetch(`http://localhost:3000/user/login`,{
            method : "POST",
            headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json', },
            body: JSON.stringify({
                email:email,
                password:password
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(data.resultCode === 200){
                dispatch(login({
                email:email,
                password:password,
                loggedIn:true,
        }))
            }else{
                alert('등록되지 않은 아이디이거나 아이디 또는 비밀번호를 잘못 입력하였습니다')
            }
        })
        .catch(error => {
            console.log(error)
        })
        if(data.error){
          return
        }

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