import React from 'react'
import { useDispatch } from 'react-redux'
import {LOGOUT} from 'store/modules/user'

function Logout() {
    const dispatch = useDispatch()
    const handleLogout = e =>{
        e.preventDefault()
        dispatch(LOGOUT())
    }
  return (
    <>
        {/* {user.name} */}
        <li><a href=''>내정보</a></li>
        <li><a href="/" onClick={e=>handleLogout(e)}>로그아웃</a></li>
    </>
  )
}

export default Logout