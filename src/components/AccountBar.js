import { Nav, ListGroup, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import './AccountBar.css';
import LoginForm from './LoginForm';

function AccountBar() {
    const [account, setAccount] = useState(null);
    const [panel, setPanel] = useState(null);

    return (
        <Nav className="ml-auto top-right-nav">
            <Nav.Link onClick={() => lisenter("./myplans")}> 我的教案 </Nav.Link>
            <Nav.Link className="btn-danger btn-sm" onClick={() => lisenter("./write")}>立即撰寫</Nav.Link>
            <Nav.Link className="account-img" onClick={() => lisenter("./account")}><i className="fas fa-user-circle"></i></Nav.Link>
            {panel}
        </Nav>
    );

    function lisenter(href) {
        if (account == null) {
            setAccount("123")
        }
        if (panel == null) {
            setPanel(
                <div className="account-panel">
                    <LoginForm></LoginForm>
                </div>
            );
        } else {
            setPanel(null);
        }

    }
}




export default AccountBar;