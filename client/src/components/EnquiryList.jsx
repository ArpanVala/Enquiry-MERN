import React from 'react'

const EnquiryList = () => {
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
        <tr>
          <th scope='row'>1</th>
          <td>Mark</td>
          <td>jdoi@jd.com</td>
          <td>9082</td>
          <td>Hello</td>
          <td>
            <button className='btn btn-sm btn-danger me-2'>delete</button>
            <button className='btn btn-sm btn-primary'>edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default EnquiryList
