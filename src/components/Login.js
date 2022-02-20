import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'

const Login = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const handleSubmit = e =>{
        e.preventDefault()
        dispatch(login({
            name:name,
            password:password,
            loggedIn:true,
        }))
    }
  return (
    <div>
        <form onSubmit={e => handleSubmit(e)}>
            <input 
                type="text" 
                placeholder="id" 
                value={name} 
                onChange={e => setName(e.target.value)
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