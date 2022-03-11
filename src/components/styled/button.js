import React from "react"; 
import styled, {css} from "styled-components";

const StyledButton = styled.button`
min-width: 100px;
/* display: inline-flex;  */
outline: none; 
border-radius: 4px; 
border: none;
color: #fff; 
cursor: pointer; 
/* padding:1rem;  */
/* 크기 */
height: 2.25rem;
font-size: 1rem;
font-weight: bold;
/* 색상 */ 
background: rgb(0, 204, 170);
&:hover { background: rgb(0, 181, 148); }
&:active { background: rgb(0, 181, 148); } 
/* 기타 */ 
& + & { margin-left: 1rem; } 

${props => props.primary && css`
    border: 1px solid rgb(234, 236, 238); 
    background:#fff;
    color:rgb(33, 37, 42);
    &:hover{
        background-color:rgb(242, 244, 246);
    }
`}

${props => props.fullSize && css`
    width:100% ;
`}
`; 

export default function Button({ children, ...rest }) { 
    return <StyledButton {...rest}>{children}</StyledButton>; 
}


