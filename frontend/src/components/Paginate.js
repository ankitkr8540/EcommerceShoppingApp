import React from 'react'
import { Button, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
    return (
        pages > 1 && (
            <Nav style={{ justifyContent: 'center' }}>
                <Nav.Item style={{ display: 'flex' }}>
                    {[...Array(pages).keys()].map((x) => (
                        <Nav.Link
                            style={{ textDecoration: 'none' }}
                            key={x + 1}
                            as={Link}
                            to={
                                !isAdmin
                                    ? keyword
                                        ? `/search/${keyword}/page/${x + 1}`
                                        : `/page/${x + 1}`
                                    : `/admin/productlist/${x + 1}`
                            }
                        >
                            {x + 1 === page ? (
                                <Button>{x + 1}</Button>
                            ) : (
                                <Button
                                    style={{ backgroundColor: 'whitesmoke', color: 'black' }}
                                >
                                    {x + 1}
                                </Button>
                            )}
                        </Nav.Link>
                    ))}
                </Nav.Item>
            </Nav>
        )
    )
}

export default Paginate
