import React from "react"; 
import styled, {css} from "styled-components";

const StyledInput = styled.input`
outline: none; 
background-color: none;
border-radius: 4px; 
border: 1px solid #eaecee;
color: #21252a;
height: 2.25rem;
font-size: 1rem;
text-indent: 10px;
/* 색상 */ 
&:hover{border: 1px solid lightgray;}
&:focus{border: 1px solid rgb(33, 37, 42);}
& + & { 
    margin-top: 1rem;
    margin-bottom: 1rem; }

${props => props.primary && css`
    border: 1px solid rgb(234, 236, 238); 
    background:#fff;
    color:rgb(33, 37, 42);
    &:hover{
        background-color:rgb(242, 244, 246);
    }
`}

${props => props.fullSize && css`
    width: calc(100% - 6px);
`}
`; 

export default function Input({ children, ...rest }) { 
    return <StyledInput {...rest}>{children}</StyledInput>; 
}


