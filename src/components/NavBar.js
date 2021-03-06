import { Nav, ListGroup,Navbar } from 'react-bootstrap';
import { useState } from 'react';
import './NavBar.css';

function CNavbar() {
    const [open, setOpen] = useState(false);
    let l=[
        <a href="#">Explore</a>,
        <a href="#">Why CoTeach?</a>,
        <a href="#">about us</a>
    ]
    return (
        <div>
            <div id="menu_mask" className={open ? "open" : "closed"} onClick={()=>setOpen(false)}></div>
            
            <div id="left" className={open ? "open" : "closed"} >
                <ListGroup>
                    {  l.map(function(ele){ return <ListGroup.Item>{ele}</ListGroup.Item> })  }
                </ListGroup>
            </div>

            <div id="top">
                <Navbar bg="light">
                    <Nav>
                        <Nav.Link><button className='left-btn' onClick={() => setOpen(!open)} > ≡ </button></Nav.Link>
                    </Nav>
                    <Navbar.Brand href="#home">CoTeach</Navbar.Brand>
                    <Nav className="mr-auto top-left-nav">
                        {  l.map(function(ele){ return <Nav.Link>{ele}</Nav.Link> })  }
                    </Nav>
                </Navbar>
            </div>
        </div>
    );
}


export default CNavbar;