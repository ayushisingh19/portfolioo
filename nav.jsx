import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const  P = () => {
    return (
      <>


<Navbar  className='fl'>
        <Container>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          <div className='nav'>
          <Nav className='me-auto' >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Skills</Nav.Link>
            <Nav.Link href="#about">about</Nav.Link>
            <Nav.Link href="#service">Projects</Nav.Link>
            <Nav.Link href="#service"><i class="fa-brands fa-linkedin"></i></Nav.Link>
            <Nav.Link href="#service"><i class="fa-brands fa-github"></i></Nav.Link>
            <Nav.Link href="#service"><i class="fa-solid fa-envelope"></i></Nav.Link>

            <Nav.Link href="#contact">Let contact</Nav.Link>
           

          </Nav>
          </div>
        </Container>
      </Navbar>

      </>
 
    )
  };
       


export default P