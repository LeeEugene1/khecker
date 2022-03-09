import React, { useEffect, useState } from 'react'
import Modal from 'components/Modal'
import Button from 'components/styled/button'
import Input from 'components/styled/input'
import axiosWrapper from 'modules/axiosWrapper'
import { useDispatch } from 'react-redux'
import { HOST, LOGIN, USER_LOGIN, USER_SIGNUP} from 'store/modules/user'
import { isBlank } from 'common'

function Login() {
  const [isOpen, setIsOpen] = useState(false)
  // const [modal, setModal] = useState(false)
  const toggleModal = () =>{
    setIsOpen(true)
}
  const [state, setState] = useState({
      email:'',
      password:'',
      rePassword:'',
      nickname:'',
  })
  const dispatch = useDispatch()
  const handleLoginSubmit = e =>{
      e.preventDefault()
      if(!isBlank(state.email,'이메일을 입력해주세요'))return false
      if(!isBlank(state.password,'비밀번호를 입력해주세요'))return false
      
      const url = `${HOST}/${USER_LOGIN}`
      const requestBody = {
          email:state.email,
          password:state.password,
      }
      const login = data => {
          if(!data){
              alert('등록되지 않은 아이디이거나 아이디 또는 비밀번호를 잘못 입력하였습니다')
              return false
          }
          dispatch(LOGIN({
              email:state.email,
              password:state.password,
              // loggedIn:true,
              // token:data.token,
              nickname:data.nickname,
              is_logined:data.is_logined,
              // cookieeeee:ReactSession.set("username", "Bob")
          }))
      }
      axiosWrapper('POST',url,requestBody)
      .then(login)
  }
  const handleSignUpSubmit = e =>{
      e.preventDefault()
      if(!isBlank(state.nickname,'닉네임을 입력해주세요'))return false
      if(!isBlank(state.email,'이메일을 입력해주세요'))return false
      if(!isBlank(state.password,'비밀번호를 입력해주세요'))return false
      if(state.password !== state.rePassword ){
          alert('비밀번호가 다릅니다')
          return false
      }
      const url = `${HOST}/${USER_SIGNUP}`
      const requestBody = {
          email:state.email,
          nickname:state.nickname,
          password:state.password,
      }
      axiosWrapper('POST',url,requestBody)
      alert('회원가입이 완료되었습니다.')
      window.location.href = "/";
  }
  const [toggleActive, setToggleActive] = useState(0)

  const toggletab = (index) =>{
      setToggleActive(index)
  }

  return (
      <>
		<li><a href="/access">로그인/회원가입</a></li>
      </>
  )
}

export default Login