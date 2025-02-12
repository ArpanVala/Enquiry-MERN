import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
const EnquiryList = ({ data, getEnquiryData, Swal ,setFormData}) => {
  const deleteRow = (id) => {
    Swal.fire({
      title: 'Are you sure you want to delete?',
      icon:'error',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        
        axios.delete(`http://localhost:8000/api/delete/${id}`)
    .then((res) => {
      if(res.data.statusCode){
          Swal.fire({
          title: 'Deleted!',
          text: 'Enquiry has been deleted.',
          icon: 'success',
        })
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
    })


  }

  const editRow =(editid) => {
    axios.get(`http://localhost:8000/api/single/${editid}`)
    .then((res) => {
      let data = res.data;
      setFormData(data.enquiry);
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
        {data.length < 1 ? (
          <tr>
            <td colSpan='6' className='text-center'>
              No data found!
            </td>
          </tr>
        ) : (
          data.map((item, index) => (
            <tr key={index}>
              <th scope='row'>{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.msg}</td>
              <td>
                <button
                  className='btn btn-sm btn-danger me-2'
                  onClick={() => deleteRow(item._id)}
                >
                  delete
                </button>
                <button className='btn btn-sm btn-primary'
                onClick={() => editRow(item._id)}
                >edit</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  )
}

export default EnquiryList
