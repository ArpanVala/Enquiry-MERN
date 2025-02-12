import React from 'react'
import axios from 'axios';
import {toast,ToastContainer} from 'react-toastify';
const EnquiryList = ({data,getEnquiryData}) => {
  const deleteRow = (id) => {
    console.log("id :",id)
    axios.delete(`http://localhost:8000/api/delete/${id}`)
    .then((res) => {
      if(res.data.statusCode){
        toast.success(res.data.message);
        getEnquiryData();
      }
      else{
        toast.error(res.data.message);
      }
    })
    .catch((e) => {
      toast.error(e);
    })
  }

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
              <td colSpan='6' className='text-center'>No data found!</td>
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
                  <button className='btn btn-sm btn-danger me-2' onClick={()=> deleteRow(item._id)}>delete</button>
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
