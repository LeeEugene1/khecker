// import useFetch from '../hooks/useFetch'
import logo from './logo.png'
import React, { useEffect, useState } from 'react'
import useSessionStorage from '../hooks/useSessionStorage';
import useWindowWidth from '../hooks/useWindowWidth';
import Modal from './Modal'
function Login() {
    const [modal, setModal] = useState(false)
    const toggleModal = () =>{
        setModal(!modal)
    }
    // hook example
    const [storedTheme, setTheme] = useSessionStorage("theme");
    useEffect(()=>{
      setTheme("dark")
    },[setTheme])
    const width = useWindowWidth()

 
  return (
      <>
        <nav>
            <a href="/"><img src={logo}/></a>
            <a href="/qna">궁금해요</a>
            {/* <Modal/> */}
            {/* {loading && <span>Loading...</span>}
            {!loading && error ? (
                <span>Error in fetching data...</span>
            ) : <span>로그인 성공{JSON.stringify(data)}</span>} */}
 
            <Modal/>
        </nav>
      </>
  )
}

export default Login