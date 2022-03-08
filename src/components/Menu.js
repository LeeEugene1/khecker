import React from 'react'
import logo from './logo.png'
import Logout from './Logout'
import Login from './Login'

function Menu({user}) {
  return (
    <div className='Menu'>        
        <div className='Menu__logo'>
          <a href="/"><img src={logo}/></a>
        </div>
        <nav>
          <ul>
            {user.user ? <Logout/> : <Login/>}
            <li><a href="/qna">궁금해요</a></li>
            <li><a href="/access">계정</a></li>
          </ul>
        </nav>
    </div>
  )
}

export default Menu