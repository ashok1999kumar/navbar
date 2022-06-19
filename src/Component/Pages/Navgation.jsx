import React from 'react';
import { Link } from 'react-router-dom';
import { ContactUs } from './ContactUs';
import { Login } from './Login';
import { Signup } from './Signup';
import Home from './Home';
export const Navgation = () => {
  return <>
    <section class="--section-header">
            <nav class="nav justify-content-around">
                <label class="--brand">myhome</label>
                <ul id="ul">
                <li>
                    <a aria-current="page"><Link to='/' element={<Home/>}>home</Link></a>
                </li>
                <li>
                    <a aria-current="page"><Link to='/login' element={<Login/>}>about us</Link></a>
                </li>
                <li>
                    <a aria-current="page"><Link to='/login' element={<ContactUs/>}>contact us</Link></a>
                </li>
                <li>
                    <a aria-current="page"><Link to='/login' element={<Login/>}>login</Link></a>
                </li>
                <li>
                    <a aria-current="page"><Link to='/login' element={<Login/>}>admin</Link></a>
                </li>
                </ul>
                <input type="checkbox" id="check" onClick={()=>{
                    let x = document.getElementById("check").value;
                        if(x == 'unchecked'){
                            document.getElementById("ul").style.right='0';
                            document.getElementById("check").value = "checked";
                            }
                            else{
                            document.getElementById("ul").style.right= '-100%';
                            document.getElementById("check").value = "unchecked";}
                        
                }} value="unchecked" />
                <label for="check" id="checkbtn"><i className='fa fa-bars'></i></label>
            </nav>
	</section>
   
    </>
};
