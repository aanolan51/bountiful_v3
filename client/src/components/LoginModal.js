import React from 'react';
import ReactDOM from 'react-dom';

import logo from "../assets/images/b-logo.png";


const LoginModal = ({ isLoginShowing, hide, loginFormState, loginHandleChange, loginHandleFormSubmit }) => isLoginShowing ? ReactDOM.createPortal(
    <React.Fragment>
        
        <div id="login-modal" className="modal">
            <form
                className="modal-content animate login-form"
                onSubmit={loginHandleFormSubmit}
                >
                <div className="imgcontainer">
                <span
                    onClick={hide}
                    className="close"
                    title="Close Modal"
                    >&times;</span
                >
                <img src={logo} alt="bountiful logo" className="avatar" />
                </div>
                <div className="container">
                <label htmlFor="emailLogin"><b>Email Address</b></label>
                <input
                    id = "email-login"
                    type="email"
                    placeholder="Enter Email Address"
                    name="email"
                    onChange={loginHandleChange}
                    required
                />
                <label htmlFor="psw"><b>Password</b></label>
                <input
                    id = "password-login"
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    onChange={loginHandleChange}
                    required/>
                {/* <!-- REMEMBER ME BUTTON -->  
                <!-- <button type="submit">Login</button> */}
                {/* <label>
                    <input type="checkbox" checked="checked" name="remember" /> Remember
                    me
                </label>--> */}
                </div> 
                <div className="container" style={{background: "var(--gray)"}}>
                <button
                type="submit"
                className="submitbtn">
                Login
                </button>
                {/* <!-- FORGOT PASSWORD LINK -->
                <!-- <span className="psw">Forgot <a href="#">password?</a></span> --> */}
                </div>
            </form>
        </div>
    </React.Fragment>, document.getElementById('root')
    ) : null;

export default LoginModal;