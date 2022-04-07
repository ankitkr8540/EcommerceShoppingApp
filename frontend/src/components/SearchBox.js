import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SearchBox = () => {
    const navigate = useNavigate()
    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            navigate(`/search/${keyword}`)
        } else {
            navigate('/')
        }
    }

    return (
        <Form onSubmit={submitHandler} style={{ 'display': "flex", 'marginLeft': "90px" }}>
            <Form.Control
                type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                placeholder='Search Products...'
                className='mr-sm-2 ml-sm-5'
            ></Form.Control>
            <Row className='mx-1'>
                <Col>
                    <Button type='submit' variant='outline-success'>
                        Search
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default SearchBox