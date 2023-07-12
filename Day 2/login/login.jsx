import React from 'react';
import './login.css';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
  from 'mdb-react-ui-kit';
  import  {Link} from "react-router-dom"

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function Login() {
  return (
    <div> 
      <MDBContainer className="my-5 gradient-form">

        <MDBRow>

          <MDBCol col='6' className="mb-5">
            <div className="d-flex flex-column ms-5">

              <div className="text-center">
                <img src="https://static.vecteezy.com/system/resources/previews/008/212/809/original/kitchen-cooking-logo-design-vector.jpg"
                  style={{ width: '300px' }} alt="logo" />

              </div>

              <p>Please login with your account</p>


              <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' className='text-light' />
              <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' />


              <div className="text-center pt-1 mb-5 pb-1">
              <Link to="/home">
                <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
                </Link>
                <a className="text-muted" href="#!">Forgot password?</a>
              </div>

              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">

                <p className="mb-0">Don't have an account?</p>
                <Link to="/register">
                <MDBBtn outline className='mx-2' color='danger'>
                  Register
                </MDBBtn>
                </Link>
              </div>

            </div>

          </MDBCol>

          <MDBCol col='6' className="mb-5">
            <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

              <div className="picture text-white px-3 py-4 p-md-5 mx-md-4">

              </div>

            </div>

          </MDBCol>

        </MDBRow>

      </MDBContainer>
    </div>
  );
}

export default Login;