import { Nav, ListGroup, Navbar } from 'react-bootstrap';
import AccountBar from "./AccountBar";
import { useState } from 'react';
import * as React from "react"
import './NavBar.css';

function CNavbar() {
    const [open, setOpen] = useState(false);
    let l = [{
        title: "Explore",
        href: "#"
    }, {
        title: "Why CoTeach?",
        href: "#"
    }, {
        title: "about us",
        href: "#"
    }
    ]

    let className = open ? "open" : "closed";
    return (
        <div>
            <div id="menu_mask" className={className} onClick={() => setOpen(false)}></div>

            <div id="left" className={className} >
                <ListGroup>
                    {l.map(function (ele,c) { return <ListGroup.Item href={ele.href} key={c.toString()}>{ele.title}</ListGroup.Item> })}
                </ListGroup>
            </div>

            <div id="top">
                <Navbar bg="light">
                    <button className='left-btn' onClick={() => setOpen(!open)} > ≡ </button>
                    <Navbar.Brand href="#home">CoTeach</Navbar.Brand>
                    <Nav className="mr-auto top-left-nav">
                        {l.map(function (ele,c) { return <Nav.Link href={ele.href} key={c.toString()}>{ele.title}</Nav.Link> })}
                    </Nav>
                    <AccountBar></AccountBar>
                </Navbar>
            </div>
        </div>
    );
}


export default CNavbar;