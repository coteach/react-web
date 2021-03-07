import { Nav, ListGroup, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
    const [account, setAccount] = useState(null);
    const [panel, setPanel] = useState(null);

    return (
        <form role="form" className="login-form">
            <div className="form-group">

                <label htmlFor="exampleInputEmail1">
                    Email address
					</label>
                <input type="email" className="form-control" id="exampleInputEmail1" />
            </div>
            <div className="form-group">

                <label htmlFor="exampleInputPassword1">
                    Password
					</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>

            <div className="form-group">

            <button className="btn btn-secondary" type="button">
            Google login
				</button> 
            </div>

            <div className="btn-group" role="group">
				 
				<button className="btn btn-secondary" type="button">
					sign up
				</button> 
				<button type="submit" className="btn btn-primary">
                    login
                </button>
			</div>
            
        </form>
    );
}


export default LoginForm;