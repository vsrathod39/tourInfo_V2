import React, { useEffect, useState } from 'react';
import {
  MDBBtn,
  MDBInput,
  MDBValidationItem,
  MDBValidation
} from 'mdb-react-ui-kit';
import { isEqual, toLower } from 'lodash';
import './styel.css';

function Login() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [isShowPassword, setIsShowPassword] = useState(false);

  const passwordPattern = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';
  const emailPattern = '[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})';

  const handleChnage = (event: any) => {
    const { name = "", value = "" } = event.target;
    setFormState({ ...formState, [name]: isEqual(name, 'email') ? toLower(value) : value });
  }

  return (
    <>
      <MDBValidation>
        <div className="d-flex flex-column mb-3">
          <MDBValidationItem className='mb-3' feedback='Please provide a valid email.' tag="span" invalid>
            <div className="inputWithIcon">
              <MDBInput onChange={(e) => handleChnage(e)} value={formState.email} label='Email' name='email' id='typeEmail' type='email' required pattern={emailPattern} />
              <i className="fa fa-envelope fa-lg fa-fw left-icon" aria-hidden="true"></i>
            </div>
          </MDBValidationItem>
          <MDBValidationItem feedback='Please provide a valid password. EX: "Password123!"' tag="span" invalid>
            <div className='inputWithIcon'>
              <MDBInput onChange={(e) => handleChnage(e)} value={formState.password} label='Password' name='password' id='typePassword' type={isShowPassword ? 'text' : 'password'} required pattern={passwordPattern} />
              <i className={`fa ${isShowPassword ? 'fa-unlock' : 'fa-lock'} fa-lg fa-fw left-icon`} aria-hidden="true"></i>
              <i onClick={() => setIsShowPassword(!isShowPassword)} className={`fa ${isShowPassword ? 'fa-eye' : 'fa-eye-slash'} fa-lg fa-fw right-icon`} aria-hidden="true"></i>
            </div>
          </MDBValidationItem>
        </div>
        <div>
          <MDBBtn type='submit' className='w-100'>
            Login
          </MDBBtn>
        </div>
      </MDBValidation>
    </>
  );
}

export default Login;