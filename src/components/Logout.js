import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LOGOUT, selectUser } from '../features/userSlice'

function Logout() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const handleLogout = e =>{
        e.preventDefault()
        dispatch(LOGOUT())
    }
  return (
    <div>
        환영합니다.{user.name}
        <button onClick={e=>handleLogout(e)}>로그아웃</button>
    </div>
  )
}

export default Logout