import React from 'react'
import styled from 'styled-components'

const ContainerWrapper = styled.div`
    margin: 0 auto;
    max-width: ${(props) => props.maxWidth || '900px'};
`

export default function Container(props) {
    const { children, maxWidth, className } = props

    return (
        <ContainerWrapper maxWidth={maxWidth} className={className}>
            {children}
        </ContainerWrapper>
    )
}