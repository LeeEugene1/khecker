import React from 'react'
import { useDispatch } from 'react-redux'
import {LOGOUT} from '../store/modules/user'
import Menu from './Menu'
import Button from './styled/button'

function Logout() {
    const dispatch = useDispatch()
    const handleLogout = e =>{
        e.preventDefault()
        dispatch(LOGOUT())
    }
  return (
    <nav>
        <Menu></Menu>
        {/* {user.name} */}
        <Button onClick={e=>handleLogout(e)}>로그아웃</Button>
    </nav>
  )
}

export default Logout