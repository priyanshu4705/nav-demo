import React from 'react'
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Link to="/">
                    <Navbar.Brand><h3>GNKart</h3></Navbar.Brand>
                </Link>
                <Form inline className="ml-auto">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
                <Nav className="ml-auto">
                    <Link to="/profile">
                        <Navbar.Brand>Profile</Navbar.Brand>
                    </Link>
                    <Link to="/cart">
                        <Navbar.Brand>Cart</Navbar.Brand>
                    </Link>
                    <Link to="/signup">
                        <Navbar.Brand>Sign up</Navbar.Brand>
                    </Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar
