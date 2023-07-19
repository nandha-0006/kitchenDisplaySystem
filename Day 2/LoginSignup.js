import React, { useState } from "react";
import "./LoginSignup.css"
import { FaTwitter, FaFacebook, FaGoogle, FaLinkedinIn, FaUserCircle, FaLock } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoDocumentText } from 'react-icons/io5'
import { BsCalendarHeart } from "react-icons/bs";
import registerImage from "../../assets/chef.png"
import logImage from "../../assets/female-chef.png"
import { useNavigate } from "react-router-dom";
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const LoginSignup = () => {
  const [signIn, setSignIn] = useState(true);
  const [containerClass, setContainerClass] = useState("");
  const [selectedRole, setSelectedRole] = useState('admin');
  // const [selectedRole, setSelectedRole] = useState('');
  const navigate = useNavigate();

  // useState(() => {
  //   console.log(selectedRole);
  // }, [selectedRole])

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };


  const SignIn = (e) => {
    e.preventDefault();
    console.log(selectedRole)
    if (selectedRole === 'admin') {
      navigate('/dash');
      // console.log("Its Admin")
    }

    if (selectedRole === 'foh-staff') {
      navigate('/dash1');
    }

    if (selectedRole === 'kitchen-staff') {
      navigate('/dash2');
    }
  }
  const handleSignUp = () => {
    setContainerClass("sign-up-mode");
  };

  const handleSignIn = () => {
    setContainerClass("");
  };
  const LoginIn = () => {
    setContainerClass("");
    navigate("/login");
  };

  return (
    <div className={`container ${containerClass}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form"onSubmit={SignIn} >
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="user"> <FaUserCircle /> </i>
              <input type="text" placeholder="Username" required />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"><FaLock /></i>
              <input type="password" placeholder="Password" pattern=".{8,}" required title="8 characters minimum" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"><FaLock /></i>
              <select name="cars" id="cars" value={selectedRole} onChange={handleRoleChange}>
                <option value="admin">Admin</option>
                <option value="foh-staff">FOH Staff</option>
                <option value="kitchen-staff">Kitchen Staff</option>
              </select>
              {console.log(selectedRole)}
            </div>
            <button  type="Submit" value="Login" className="btn">Login</button>
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f">
                  <FaFacebook />
                </i>
              </a>
              <a href="#" className="social-icon">

                <i className="fab fa-twitter">
                  <FaTwitter />
                </i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google">
                  <FaGoogle />
                </i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in">
                  <FaLinkedinIn />
                </i>
              </a>
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"><FaUserCircle /></i>
              <input type="text" placeholder="Username" required />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"><IoDocumentText /></i>
              <input type="password" placeholder="Identification Number" required />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"><BiLogoGmail /></i>
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"><FaLock /></i>
              <input type="password" placeholder="Password" pattern=".{8,}" required title="8 characters minimum" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"><FaLock /></i>
              <input type="password" placeholder="Confirm Password" pattern=".{8,}" required title="8 characters minimum" />
            </div>
            <button type="submit" className="btnm" onSubmit={LoginIn} value="Sign up">Sign up</button>
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-twitter">
                  <FaFacebook />
                </i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter">
                  <FaTwitter />
                </i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google">
                  <FaGoogle />
                </i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in">
                  <FaLinkedinIn />
                </i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Are You New ?</h3>

            <button className="btn transparent" onClick={handleSignUp}>
              Sign up
            </button>
          </div>
          <img src={logImage} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Already Have an Account ?</h3>

            <button className="btn transparent" onClick={handleSignIn}>
              Sign in
            </button>
          </div>
          <img src={registerImage} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;