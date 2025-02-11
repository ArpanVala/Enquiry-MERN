import React from 'react'
import axios from 'axios';
import EnquiryList from './EnquiryList';

const Enquiry = () => {
  const formSubmitted = (e) =>{
    e.preventDefault();
    const formData ={
      "name":e.target.name.value,
      "email":e.target.email.value,
      "phone":e.target.phone.value,
      "msg":e.target.msg.value
    }
    console.log(formData);
    axios.post('http://localhost:8000/api/insert',formData).then((res)=>{
      console.log(res);
      alert("Hello "+ formData.name + " your enquiry has been submitted successfully"); 
    })
    
  }

  return (
    <>
      <div className='container-fluid'>
        <div className='container my-5 py-3 px-5 rounded shadow-lg enquiry-div'>
        <div className="row mb-4">
          <div className="col text-center">
            <h1>Enquiry portal</h1>
          </div>
        </div>
          <div className='row'>
            <div className='col-4'>
            <form onSubmit={formSubmitted}>
                <div className='form-floating mb-3'>
                <input
                  type='text'
                  name='name'
                  className='form-control'
                  id='floatingInput'
                  placeholder='Enter your name'
                  required
                />
                <label htmlFor='floatingInput'>Name</label>
              </div>
              <div className='form-floating mb-3'>
                <input
                  type='email'
                  name='email'
                  className='form-control'
                  id='floatingEmail'
                  placeholder='Enter your email'
                  required
                />
                <label htmlFor='floatingEmail'>Email</label>
              </div>
               <div className='form-floating mb-3'>
                <input
                  type='number'
                  name='phone'
                  className='form-control'
                  id='floatingPhone'
                  maxLength={10}
                  placeholder='Enter your Phone number'
                  required
                />
                <label htmlFor='floatingPhone'>Phone</label>
              </div>
              <div className="form-floating mb-3">
                <textarea className="form-control" name="msg" placeholder="Leave a message here" id="floatingTextarea" required></textarea>
                <label htmlFor="floatingTextarea">Message</label>
              </div>
               <button type="submit" className="btn btn-lg btn-dark w-100 " onSubmit={formSubmitted}>Submit</button>
            </form>

            </div>
            <div className="col-8">
             <EnquiryList/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Enquiry
