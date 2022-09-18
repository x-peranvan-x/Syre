
import { InputGroup,Form, Button, Navbar,Nav } from "react-bootstrap";
import {BsSearch} from "react-icons/bs";

const NavbarS=()=>{
    return(
        <Navbar bg="success">
            <Navbar.Brand href="http://youtube.com">
                &#36;&#165;&#8377;&#8364;
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="http://YOUTUBE.com">Learn</Nav.Link>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon2"/>
                    <InputGroup.Text id="basic-addon2"><BsSearch/></InputGroup.Text>
                </InputGroup>
                <Nav.Link href="/login"><Button>Login</Button></Nav.Link>
                <Nav.Link><Button>Register</Button></Nav.Link>
            </Nav>
        </Navbar>


    
    );



}
export default NavbarS;