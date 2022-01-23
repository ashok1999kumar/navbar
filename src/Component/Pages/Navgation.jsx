import React from 'react';
import { Link } from 'react-router-dom';
import { ContactUs } from './ContactUs';
import { Login } from './Login';
import { Signup } from './Signup';

export const Navgation = () => {
  return <div>
      <div className=''>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fw-bold">
            <div className="container p-2 p-md-2">
                <a className="navbar-brand" href="#">Software</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">  </div>
                <div className=''>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page"><Link to='/Login' element={<Login/>}>Home</Link></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page"><Link to='/login' element={<Login/>}>SignIn</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page"><Link to='/signup' element={<Signup/>}>SignUp</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page"><Link to='/contact' element={<ContactUs/>}>Contact</Link></a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
      </div>
  </div>
};
