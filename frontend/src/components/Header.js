import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../actions/userActions'
import SearchBox from './SearchBox'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const navigate = useNavigate()

  const logoutHandler = () => {
    dispatch(logout())
  }

  const profileHandler = () => {
    navigate('/profile')
  }

  const userListHandler = () => {
    navigate(`/admin/userlist`)
  }

  const productListHandler = () => {
    navigate(`/admin/productlist`)
  }

  const orderListHandler = () => {
    navigate(`/admin/orderlist`)
  }

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            Basta
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <SearchBox />
            <Nav style={{ marginLeft: 'auto' }}>
              <Nav.Link as={Link} to='/cart'>
                <i className='fas fa-shopping-cart'></i> Cart
              </Nav.Link>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <NavDropdown.Item onClick={profileHandler}>
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link as={Link} to='/login'>
                  <i className='fas fa-user'></i> Sign In
                </Nav.Link>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <NavDropdown.Item onClick={userListHandler}>
                    Users
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={productListHandler}>
                    Products
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={orderListHandler}>
                    Orders
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
