import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import netflixLogo from '../../assets/Images/icons/nflxlogo.png'
function BasicExample() {
    
  return (
            <Navbar expand="lg" className="bg-transparent text-white" variant='dark'>
                    <Container fluid >

                        <Navbar.Brand href="#home">
                                <div className="netflix-logo"><img src={netflixLogo} alt="Netflix-Logo" /></div>
                        </Navbar.Brand>
                      
                        <>
                        <Navbar.Toggle className={`me-auto border-0 outline-0`} >
                            Browse<span className="material-symbols-outlined">arrow_drop_down</span>
                        </Navbar.Toggle>

                        <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-3">
                                    <Nav.Link href="#home" >Home</Nav.Link>
                                    <Nav.Link href="#linwk" >Tv shows</Nav.Link>
                                    <Nav.Link href="#h" >movies</Nav.Link>
                                    <Nav.Link href="#link" >latest</Nav.Link>     
                                    <Nav.Link href="#liwwnk" >My List</Nav.Link>
                                    <Nav.Link href="#linkww" >Browse by Languages</Nav.Link>
                                </Nav>
                        </Navbar.Collapse>
                        </>
                       

                    </Container>
                    <div className='nav-icons'  >
                                    <SearchIcon />
                                    <NotificationsNoneOutlinedIcon />
                                    <PersonOutlineIcon />
                                    <ArrowDropDownIcon />
                    </div>
            </Navbar>
  );
}

export default BasicExample;