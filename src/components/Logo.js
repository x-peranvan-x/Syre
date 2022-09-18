import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BsSearch} from "react-icons/bs";
import { InputGroup,Form,Row, Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function Navbar1(props) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   
  return (
    <>
      <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="/" className='nav'>&#36;&#165;&#8377;&#8364;</Navbar.Brand>
          <Container fluid="lg">
                <Row>
                   <InputGroup className="mb-3">
                    <Form.Control
                        className="w-50"
                        type='text'
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                        />
                    <InputGroup.Text id="basic-addon2"><BsSearch/></InputGroup.Text>
                </InputGroup>
                </Row>
            </Container>
          
          <Nav className="me-auto">
            <Nav.Link href="/learn">Learn</Nav.Link>
            <Nav.Link  onClick={handleShow}>Login</Nav.Link>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='modaltitle'>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <h2>Username</h2>
                        <input></input>
                        <h2>Password</h2><input></input>
                        <Button>Submit</Button>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
            <Nav.Link href="/register">Register</Nav.Link>  
          </Nav>
         
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar1;