import React from 'react'
import styled from 'styled-components'

const MainWrapper = styled.main`
    padding-top: 68px;
    padding-bottom: 60px;
`

export default function Main(props) {
    const { children } = props

    return (
        <MainWrapper>
            {children}
        </MainWrapper>
    )
}