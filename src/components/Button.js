import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
    background-color: black;
    color: white;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    padding: 0.5rem 1rem;
    outline: none;
    border: 2px solid white;
    text-transform: uppercase;

    &:hover {
        color: black;
        background-color: white;
        border-color: black;
    }
`

export default function Button(props) {
    const { 
        children,
        onClick
    } = props

    return (
        <ButtonWrapper onClick={onClick}>
            {children}
        </ButtonWrapper>
    )
}