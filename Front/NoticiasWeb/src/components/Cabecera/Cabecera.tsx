// import './Cabecera.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

interface Parameters {
  parentMethod: (categoria: string) => void;
}

export const Cabecera = ({ parentMethod }: Parameters) => {

  const handleCiencia = () => {
    parentMethod('CIENCIA')
  }

  const handleOtros = () => {
    parentMethod('OTROS')
  }

  const handleDeportes = () => {
    parentMethod('DEPORTES')
  }

  const handleEfemerides = () => {
    parentMethod('EFEMERIDES')
  }

  const handleHome = () => {
    parentMethod('')
  }


  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>Noticias</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={handleHome}>Home</Nav.Link>
            <NavDropdown title="Categorías" id="navbarScrollingDropdown">
              <NavDropdown.Item  onClick={handleCiencia}>Ciencia</NavDropdown.Item>
              <NavDropdown.Item onClick={handleEfemerides}>Efemerides</NavDropdown.Item>
              <NavDropdown.Item onClick={handleDeportes}>Deportes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  onClick={handleOtros}>Otros</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}