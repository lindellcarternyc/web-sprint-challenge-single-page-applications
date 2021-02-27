import React, { useState } from 'react'
import axios from 'axios'

import Container from '../components/Container'
import Form from '../components/Form'

export default function Pizza(props) {
    const [order, setOrder] = useState(null)
    const onSubmit = (data) => {
        axios.post(`https://reqres.in/api/users`, data)
            .then(response => {
                setOrder(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <Container maxWidth="400px">
            {order && <pre>{JSON.stringify(order)}</pre>}
            <Form onSubmit={onSubmit} />
        </Container>
    )
}