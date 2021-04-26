import Dropdown from 'react-bootstrap/Dropdown'
import {Navbar ,Nav , InputGroup ,Form,FormControl, Button, Container} from 'react-bootstrap'

export default function  header (){
    return (

 

<Navbar   collapseOnSelect  bg="success" expand="sm"  variant="dark">
      <Container  >
        <Navbar.Toggle aria-controls ='responsive-navbar-nav'/>
        <Navbar.Collapse id='responsive-navbar-nav'>  
        <Dropdown >
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  <img className="border rounded-circle img-profile" src="assets/img/user8-128x128.jpg" style={{width: 30, height: 30}} />
     
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/profil">Profil</Dropdown.Item>
    <Dropdown.Item href="/password">Ganti password</Dropdown.Item>
    <Dropdown.Item href="../">Log out</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>     
            <Navbar.Brand href="home">PERPUSKU</Navbar.Brand>
            <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/pinjaman">Pinjaman</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    <form>
    <InputGroup size="sm" className="mb-3">
    <InputGroup.Prepend>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
    </InputGroup.Prepend>
    <Button href="cari" className="btn btn-dark">cari</Button>
  </InputGroup>
  </form>
</Container>
</Navbar>

 
    
     

    )
}