import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import Container from '../components/Container'
import Button from '../components/Button'

const NotFoundWrapper = styled(Container)`
    text-align: center;
    margin-top: 4rem;

    h2 {
        margin-bottom: 2rem;
    }
`

export default function NotFound(props) {
    const history = useHistory()
    const onClickHome = () => history.push('/')

    return (
        <NotFoundWrapper>
            <h2>Sorry, we couldn't find that page!</h2>
            <Button onClick={onClickHome}>Home</Button>
        </NotFoundWrapper>
    )
}