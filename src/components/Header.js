import React from 'react'
import { useHistory, useLocation, Link } from 'react-router-dom'
import styled from 'styled-components'

import Button from './Button'

const HeaderWrapper = styled.header`
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    color: white;
    position: fixed;
    width: 100%;

    a {
        color: white;
    }

    button {
        margin-right: 1rem;

        &.active {
            color: black;
            background-color: white;
            border: 2px solid black;
        }
    }
`

export default function Header(props) {
    const history = useHistory()
    
    const location = useLocation()
    const onClickHome = () => {
        if (location.pathname !== '/') {
            history.push('/')
        }
    }

    return (
        <HeaderWrapper>
            <h3>
                <Link to="/">LAMBDA EATS</Link>
            </h3>

            <div>
                <Button onClick={onClickHome} className={location.pathname === '/' ? 'active' : ''}>Home</Button>
                <Button>Help</Button>
            </div>
        </HeaderWrapper>
    )
}