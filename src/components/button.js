import React from "react"; 
import styled from "styled-components";

const StyledButton = styled.button`
min-width: 100px;
/* display: inline-flex;  */
outline: none; 
border: none; 
border-radius: 4px; 
color: #fff; 
cursor: pointer; 
/* padding:1rem;  */
/* 크기 */
height: 2.25rem;
font-size: 1rem;
/* 색상 */ 
background: #1FBB9C; 
&:hover { background: #339af0; }
&:active { background: #1c7ed6; } 
/* 기타 */ 
& + & { margin-left: 1rem; } `; 

export default function Button({ children, ...rest }) { 
    return <StyledButton {...rest}>{children}</StyledButton>; 
}


