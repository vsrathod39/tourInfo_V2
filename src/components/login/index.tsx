import React, { useEffect, useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from 'mdb-react-ui-kit';
import { isEqual, toLower } from 'lodash';
import './styel.css';
import logo from '../../assets/logo.png';
import google from '../../assets/google.png';
import twitter from '../../assets/twitter.png';
import Login from './login';
import Signup from './signup';

function LoginSignup() {
  const [optSmModal, setOptSmModal] = useState(false);
  const [formState, setFormState] = useState({email: '', password: ''});
  const [isLogiIn, setIsLoginIn] = useState(false);

  const toggleShow = () => setOptSmModal(!optSmModal);

  const handleChnage = (event: any) => {
    const {name="", value=""} = event.target;
    setFormState({...formState, [name]: isEqual(name, 'email') ? toLower(value) : value});
  }

  return (
    <>
      <MDBBtn onClick={toggleShow}>Login</MDBBtn>
      <MDBModal show={optSmModal} tabIndex='-1' setShow={setOptSmModal}>
        <MDBModalDialog size='fullscreen-md-down'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
              {/* <MDBModalTitle>Login/Signup</MDBModalTitle> */}
            </MDBModalHeader>
            <MDBModalBody>
            <div className='d-flex justify-content-center align-items-center flex-column mb-3'>
                <div className='login-signup-logo-container border-outlined mb-2'>
                  <img src={logo} className='img-fluid shadow-2-strong' alt='logo' />
                </div>
                <div className='light-small-text mb-3'>
                  Get started today by entering just a few details
                </div>
                {/* <div className='bold-large-text'>
                  Login
                </div> */}
                <div className='d-flex justify-content-center align-items-center'>
                  <MDBBtn onClick={() => setIsLoginIn(false)} className='me-1'>SignUp</MDBBtn>
                  <MDBBtn onClick={() => setIsLoginIn(true)} className='ms-1'>LogIn</MDBBtn>
                </div>
              </div>
              <div className="d-flex flex-column">
                <div className="d-flex justify-content-center align-items-center mb-3 border-outlined padding-top-buttom-8">
                  <div className='login-signup-secondary-logo me-3'>
                    <img src={google} className='img-fluid shadow-2-strong' alt='google' />
                  </div>
                  <div className='bold-sm-text'>
                    Sign in with Google
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center mb-3 border-outlined padding-top-buttom-8">
                  <div className='login-signup-secondary-logo me-3'>
                    <img src={twitter} className='img-fluid shadow-2-strong' alt='twitter' />
                  </div>
                  <div className='bold-sm-text'>
                    Sign in with Twitter
                  </div>
                </div>
              </div>
              <div className='d-flex justify-content-center align-items-center mb-3'>
                <div className='horizontal-line me-2'></div>
                or
                <div className='horizontal-line ms-2'></div>
              </div>
              {isLogiIn ? <Login /> : <Signup />}
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default LoginSignup;