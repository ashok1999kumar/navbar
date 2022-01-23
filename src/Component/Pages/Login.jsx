import { Button } from 'bootstrap';
import React, { useState } from 'react';
import { Navgation } from './Navgation';
export const Login = (prop) => {
    const [loginEmail,setEmail] = useState('');
    const [loginPassword,setPassword] = useState('');
  return <div>
  <Navgation/>
      <div className='main-div'>
        <div className='child-div w-75'>
            <div className='row'>
                <div className='col-sm-6 col-md-6 col-lg-6 bg-light'>
                <div className='p-3'>
                    <h1 className='fs-3 text-center '>Sign-In</h1>
                    <center><hr className='m-0 p-0 login-hr'></hr></center>
                </div>
                    <form className='container w-75' method='' onSubmit={(e)=>{
                        e.preventDefault();
                        if((localStorage.getItem('Email') && localStorage.getItem('Password')) == (loginEmail && loginPassword)){
                            alert('waaiting....')
                        }else{
                            alert('invalid userid and password..')
                        }

                    }}>
                        <div className='my-3'>
                        <input
                        placeholder="Email"
                        value={loginEmail}
                        onChange={(e) => setEmail(e.target.value)}
                        className='form-control'
                    />
                        </div>
                        <div className='my-3'>
                        <input
                        placeholder="Password"
                        value={loginPassword}
                        onChange={(e) => setPassword(e.target.value)}
                        className='form-control'
                    />
                        </div>
                        <div className='my-3'>
                            <button type='sumit' 
                            name='password' 
                            className='form-control bg-success text-light'>
                            SignIn</button>
                        </div>
                        <div className='my-3'>
                            <p className='text-center'>
                            forget the password 
                            <span>
                            <a href='#'>click here</a>
                            </span>
                            </p>
                        </div>
                        <div className='my-3'>
                            <button type=''
                             name='' 
                             className='form-control bg-light text-black'>
                             SignUp</button>
                        </div>
                    </form>
                   
                </div>
                <div className='col-sm-6 col-md-6 col-lg-6'>
                    <img src='../Image/login.jpg' className='img-fluid w-100'></img>
                </div>
            </div>
        </div>
      </div>
  </div>;
};
