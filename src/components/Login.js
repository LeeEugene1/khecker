// import useFetch from '../hooks/useFetch'
import React, { useEffect, useState } from 'react'
import useSessionStorage from '../hooks/useSessionStorage';
import useWindowWidth from '../hooks/useWindowWidth';
import Menu from './Menu';
import Modal from './Modal'
function Login() {
    // hook example
    const [storedTheme, setTheme] = useSessionStorage("theme");
    useEffect(()=>{
      setTheme("dark")
    },[setTheme])
    const width = useWindowWidth()

 
  return (
      <>
        <nav>
            <Menu/>
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