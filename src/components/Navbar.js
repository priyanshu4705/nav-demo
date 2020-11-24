import React from 'react'
import { Button, Form, FormControl, Nav } from 'react-bootstrap'
import { Link } from 'react-router'

function Navbar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>GNKart</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/profile">
                        Profile
                    </Link></Nav.Link>
                    <Nav.Link><Link to="/cart">
                        Cart
                    </Link></Nav.Link>
                    <Nav.Link><Link to="/signup">
                        Sign UP
                    </Link></Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}

export default Navbar
