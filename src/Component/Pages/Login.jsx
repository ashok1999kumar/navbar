import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Navgation } from './Navgation';
import { Signup } from './Signup';
export const Login = () => {
    const [loginEmail,setEmail] = useState('');
    const [loginPassword,setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const submitData = (e) =>{
        e.preventDefault();
            let data = JSON.parse(localStorage.getItem('usersData'))
                let obj = data.find(o=>o.email === loginEmail && o.password === loginPassword)
                if(obj){
                    setLoggedIn(true);
                    alert("loading....")
                }else{
                    alert('invalid userid and password')
                }
    }
    if(loggedIn){
        return 
    }else return <div>
    <Navgation/>
      <div className='container'>
        <div className='child-div w-100'>
            <div className='row mt-5'>
                <div className='col-sm-6 col-md-6 col-lg-6 bg-light'>
                <div className='p-5'>
                    <h1 className='fs-1 text-center'>Sign-In</h1>
                    <center><hr className='m-0 p-0 login-hr'></hr></center>
                </div>
                    <form className='container w-75' onSubmit={submitData}>
                        <div className='my-4'>
                        <input
                        placeholder="Email"
                        value={loginEmail}
                        onChange={(e) => setEmail(e.target.value)}
                        className='form-control fs-4'
                    />
                        </div>
                        <div className='my-4'>
                        <input
                        placeholder="Password"
                        value={loginPassword}
                        onChange={(e) => setPassword(e.target.value)}
                        className='form-control fs-4'
                    />
                        </div>
                        <div className='my-4'>
                            <button type='sumit'  
                            className='form-control fs-4 bg-success text-light'>
                            SignIn</button>
                        </div>
                        <div className='my-4'>
                            <p className='text-center fs-4'>
                            forget the password 
                            <span>
                            <a href='#'>click here</a>
                            </span>
                            </p>
                        </div>
                        <div className='my-4'>
                            <button 
                             className='form-control bg-light fs-4 text-black'>
                             <Link to={'/signup'} elment={<Signup/>}>Signup</Link> </button>
                        </div>
                    </form>
                   
                </div>
                <div className='col-sm-6 col-md-6 col-lg-6'>
                    <img src='../Image/login.jpg' className='img-fluid w-100 h-100 img-cover'></img>
                </div>
            </div>
        </div>
      </div>
  </div>;
};
