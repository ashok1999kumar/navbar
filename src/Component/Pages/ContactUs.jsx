import React from 'react';
import { BsMessenger } from "react-icons/bs";
import { BiEnvelope,BiTab,BiMap } from "react-icons/bi";
import { Navgation } from './Navgation';
export const ContactUs = () => {
  return <>
  <Navgation/>
      <div className='container mt-5'>
        <div className='row g-5'>
          <div className='col-sm-4 col-md-4 col-lg-4'>
            <div className='row border p-2'>
              <div className='col-sm-2 col-md-2 col-lg-2 contactUs-icon-style'>
                <BiTab className='fs-3'/>
              </div>
              <div className='col-sm-10 col-md-10 col-lg-10'>
                <div className=''>
                  <p className='p-0 m-1 fw-bold'>Phone</p>
                  <p className='p-0 m-1'>9631786224</p>
                </div>
              </div>
            </div>
          </div>
          {/* second icon */}
          <div className='col-sm-4 col-md-4 col-lg-4'>
            <div className='row border p-2'>
              <div className='col-sm-2 col-md-2 col-lg-2 contactUs-icon-style'>
                <BiEnvelope className='fs-3'/>
              </div>
              <div className='col-sm-10 col-md-10 col-lg-10'>
                <div className=''>
                  <p className='p-0 m-1 fw-bold'>Email</p>
                  <p className='p-0 m-1'>ak9885129@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          {/* third icon */}
          <div className='col-sm-4 col-md-4 col-lg-4'>
            <div className='row border p-2'>
              <div className='col-sm-2 col-md-2 col-lg-2 contactUs-icon-style'>
                <BiMap className='fs-3'/>
              </div>
              <div className='col-sm-10 col-md-10 col-lg-10'>
                <div className=''>
                  <p className='p-0 m-1 fw-bold'>Address</p>
                  <p className='p-0 m-1'>lal-kothi hazaribagh</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* end row */}
      </div>
        <div className='container mt-5 bg-light p-5 border contact-us-width'>
          <h1 className='fs-3 display-2 text-uppercase'>get in touch</h1>
          <form method='' className='container mt-5'>
              <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-4'>
                  <input type='text' className='form-control' placeholder='Name'/>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-4'>
                  <input type='text' className='form-control' placeholder='Email'/>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-4'>
                  <input type='text' className='form-control' placeholder='Phone'/>
                </div>
              </div>
              <div className='row py-2'>
                <div className='col-sm-12 col-md-12 col-lg-12'>
                  <textarea className='form-control' placeholder='message..'></textarea>
                </div>
              </div>
              <div className='row py-2'>
                <div className='col-sm-12 col-md-12 col-lg-12'>
                  <button className='btn btn-success'>sned meaasgae</button>
                </div>
              </div>
          </form>
        </div>   
  </>
};
