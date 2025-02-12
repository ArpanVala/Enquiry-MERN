import React from 'react'

const EnquiryList = ({data}) => {
  return (
    <table className='table table-striped'>
      <thead className='table-dark'>
        <tr>
          <th scope='col'>sr.</th>
          <th scope='col'>Name</th>
          <th scope='col'>eMail</th>
          <th scope='col'>Phone</th>
          <th scope='col'>Message</th>
          <th scope='col'>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          data.length < 1 ? (
            <tr>
              <td colSpan='6'>No data found!</td>
            </tr>
          ) : 
            data.map((item, index) => (
               <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.msg}</td>
                <td>
                  <button className='btn btn-sm btn-danger me-2'>delete</button>
                  <button className='btn btn-sm btn-primary'>edit</button>
                </td>
              </tr>
            ))
        }
      </tbody>
    </table>
  )
}

export default EnquiryList
