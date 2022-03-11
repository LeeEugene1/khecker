import { useEffect, useRef, useState } from 'react'

import {EMAIL_REGEX, PW_REGEX, ERROR_MSG, NICKNAME_REGEX } from 'common'

const FormInput = ({id, label, ...inputProps}) =>{
    const inputSelected = useRef(null)
    const initialErrorMessage = {
        id:'',
        email:'',
        password:'',
        confirmedPassword:'',
    }
    const [errorMessage,setErrorMessage] = useState(initialErrorMessage)
    useEffect(()=>{
        if(id === 'email'){
            inputSelected.current.focus()
        }
    },[])
    
    const checkRegex = (id, inputProps) =>{
        console.log(inputProps.value)
        let result
        if(inputProps.value.length === 0){
            result = 'required'
        }else{
            switch(id){
                case 'email':
                    result = EMAIL_REGEX.test(inputProps.value) ? true : 'invalidEmail'
                    break
                case 'password' :
                    result = PW_REGEX.test(inputProps.value) ? true : 'invalidPassword'
                    break
                case 'confirmPassword':
                    result = inputProps.value ===  errorMessage['password'] ? true : 'invalidPasswordCheck'
                    break
                case 'nickname':
                    result = NICKNAME_REGEX.test(inputProps.value) ? true : 'invalidNickname'
                    break
                default:
                    return
            }
        }
        setErrorMessage({
            ...errorMessage,
            [id] : result
        })
    }

    return(
        <div className='tab__input'>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                ref={inputSelected}
                onBlur={() => {
                    checkRegex(id, inputProps)
                }}
                {...inputProps}
            />
            <div className='tab__input--error'>{ERROR_MSG[errorMessage[id]]}</div>
        </div>
    )
}
export default FormInput