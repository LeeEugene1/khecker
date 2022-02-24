import React from 'react'
import { useDispatch } from 'react-redux'
import {LOGOUT} from '../store/modules/user'

function Logout() {
    const dispatch = useDispatch()
    const handleLogout = e =>{
        e.preventDefault()
        dispatch(LOGOUT())
    }
  return (
    <div>
        환영합니다.
        {/* {user.name} */}
        <button onClick={e=>handleLogout(e)}>로그아웃</button>
    </div>
  )
}

export default Logout