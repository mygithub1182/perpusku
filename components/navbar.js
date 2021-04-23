import {Navbar, Container, Nav} from 'react-bootstrap'
import Dropdown from './dropdown'
export default function Navibar(){
    return(
        <Navbar collapseOnSelect fixed="top" expand='sm' bg='success' variant='dark'>
            <Container>
                <Navbar.Toggle aria-control="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="#">Test 1</Nav.Link>
                        <Nav.Link href="#">Test 1</Nav.Link>
                        <Nav.Link href="#">Test 1</Nav.Link>
                        <Nav.Link href="#">Test 1</Nav.Link>
                        <Nav.Link href="#">Test 1</Nav.Link>
                        <Nav.Link href="#">Test 1</Nav.Link>
                        <Dropdown></Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}