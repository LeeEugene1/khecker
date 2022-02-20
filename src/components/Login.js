import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const handleSubmit = e =>{
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
                alert('fail login')
            }
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