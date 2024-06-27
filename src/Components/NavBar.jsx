import '../App.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Images/logo.png'
function Navigationbar() {
  return (
    <>
      <Navbar className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" ><img src={logo} alt="logo" className='logo' /></Navbar.Brand>
        </Container>
      </Navbar> 
      </>

       );
}

export default Navigationbar;