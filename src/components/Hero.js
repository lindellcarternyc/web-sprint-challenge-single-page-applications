import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const HeroWrapper = styled.div`
    width: 100%;
    height: 400px;
    background-image: url(${(props) => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    color: white;

    h1 {
        margin-bottom: 2rem;
    }
`

export default function Hero(props) {
    const {
        title,
        backgroundImage,
        actionText,
        actionOnClick
    } = props

    return (
        <HeroWrapper backgroundImage={backgroundImage}>
            <h1>{title}</h1>
            <Button onClick={actionOnClick}>{actionText}</Button>
        </HeroWrapper>
    )
}