import React from 'react'

const Enquiry = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='container my-5'>
          <div className='row'>
            <div className='col-4'>
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
              <div className='form-floating'>
                <input
                  type='email'
                  name='email'
                  className='form-control'
                  id='floatingPassword'
                  placeholder='Enter your email'
                />
                <label for='floatingPassword'>Email</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Enquiry
