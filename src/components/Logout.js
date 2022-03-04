import React from 'react'
import { useDispatch } from 'react-redux'
import {LOGOUT} from '../store/modules/user'
import Button from './styled/button'
import logo from './logo.png'

function Logout() {
    const dispatch = useDispatch()
    const handleLogout = e =>{
        e.preventDefault()
        dispatch(LOGOUT())
    }
  return (
    <nav>
        <a href="/"><img src={logo}/></a>
        <a href="/qna">궁금해요</a>
        {/* {user.name} */}
        <Button onClick={e=>handleLogout(e)}>로그아웃</Button>
    </nav>
  )
}

export default Logout