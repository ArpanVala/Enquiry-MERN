import React from 'react'
import EnquiryList from './EnquiryList';

const Enquiry = () => {
  const formSubmitted = (e) =>{
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let phone = e.target.phone.value;
    let msg = e.target.msg.value;
    alert(name + "\n" + email + "\n" + phone + "\n" + msg);
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
                />
                <label for='floatingInput'>Name</label>
              </div>
              <div className='form-floating mb-3'>
                <input
                  type='email'
                  name='email'
                  className='form-control'
                  id='floatingEmail'
                  placeholder='Enter your email'
                />
                <label for='floatingEmail'>Email</label>
              </div>
               <div className='form-floating mb-3'>
                <input
                  type='number'
                  name='phone'
                  className='form-control'
                  id='floatingPhone'
                  maxLength={10}
                  placeholder='Enter your Phone number'
                />
                <label for='floatingPhone'>Phone</label>
              </div>
              <div class="form-floating mb-3">
                <textarea class="form-control" name="msg" placeholder="Leave a message here" id="floatingTextarea" ></textarea>
                <label for="floatingTextarea">Message</label>
              </div>
               <button type="submit" class="btn btn-lg btn-dark w-100 " onSubmit={formSubmitted}>Submit</button>
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
