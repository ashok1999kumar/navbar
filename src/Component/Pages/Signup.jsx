import { Button } from 'bootstrap';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Login } from './Login';
import { Navgation } from './Navgation';
export const Signup = () => {
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [contact,setContact] = useState('');
    const [password,setPassword] = useState('');
    const [newuser, setNewuser] = useState([]);
    const handle = (e) => {
        e.preventDefault();
        // setNewuser(JSON.parse(localStorage.getItem('newuser') || '[]'))
        var usersData = JSON.parse(localStorage.getItem('usersData') || '[]')
        var user={
            name,email,contact,password
        }
        if(usersData.push(user))
        {
            localStorage.setItem('usersData',JSON.stringify(usersData))
            alert('successfully submit')
            setName('');
            setEmail('');
            setContact('');
            setPassword('');
        }
        else
            alert('not submit data')
    };

  return <div>
  <Navgation/>
      <div className='container'>
        <div className='container-fluid'>
            <div className='row mt-5 w-100'>
                <div className='col-sm-6 col-md-6 col-lg-6'>
                <img src='../Image/Signup.jpg' className='h-100 img-fluid '/>  
                </div>
                <div className='col-sm-6 col-md-6 col-lg-6 bg-light'>
                <div className='p-3'>
                    <h1 className='fs-5 text-center '>Sign-Up</h1>
                    <center><hr className='m-0 p-0 login-hr'></hr></center>
                </div>
                <form className='container w-75' method='' onSubmit={handle}>
                    <div className='my-4'>
                    <label className='py-1 fs-4'>All field required * </label>
                    <input
                        type='text'
                        placeholder="Name"
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                        className='form-control fs-4 '
                    ></input>
                    </div>
                    <div className='my-4'>
                    <input
                        type='email'
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='form-control fs-4 '
                        required
                    />
                    </div>
                    <div className='my-4'>
                    <input
                        type='number'
                        placeholder="contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        className='form-control fs-4 '
                        required
                    />
                    </div>
                    <div className='my-4'>
                    <input
                        type='number'
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='form-control fs-4 '
                        required
                    />
                    </div>
                    
                    <div className='my-4'>
                        <button type='submit' className='form-control fs-4  bg-success text-light'>SignUp</button>
                    </div>
                   
                    <div className='my-4'>
                        <p className='text-center fs-4'>create the account <span><a href='#'>condition</a></span></p>
                    </div>
                    
                </form>
                    <div className='my-4 container w-75'>
                    <Link to='/login' element={<Login/>}><button className='form-control fs-4  bg-light text-black'>SignIn</button></Link>
                    </div>  
                </div>
            </div>
        </div>
      </div>
  </div>;
};
