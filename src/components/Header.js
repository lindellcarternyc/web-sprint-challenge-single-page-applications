import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    color: white;
    position: fixed;
    width: 100%;

    & > div > button {
        margin-right: 1rem;
        padding: 0.5rem 1rem;
        background-color: black;
        color: white;
        outline: none;
        border: 2px solid white;
        cursor: pointer;

        transition: all 0.3s ease-in-out;

        &:hover {
            background-color: white;
            color: black;
        }
    }
`

export default function Header(props) {
    return (
        <HeaderWrapper>
            <h3>LAMBDA EATS</h3>

            <div>
                <button>Home</button>
                <button>Help</button>
            </div>
        </HeaderWrapper>
    )
}