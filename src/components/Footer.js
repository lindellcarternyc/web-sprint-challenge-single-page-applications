import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
    position: fixed;
    width: 100%;
    bottom: 0;
    background-color: black;
    color: white;
    padding: 1rem;
    text-align: center;
`

export default function Footer(props) {
    return (
        <FooterWrapper>
            <p>&copy; 2021 - Lindell Carter @codingtenor</p>
        </FooterWrapper>
    )
}