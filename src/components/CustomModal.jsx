import React from 'react'
import { useSelector } from 'react-redux'
import './CustomModal.css';

const CustomModal = ({id,showPopup,setShowPopup}) => {
    const allUsers = useSelector((state)=>state.app.users);
    const singleUser = allUsers.filter((ele)=> ele.id === id);
  return (
    <div>
        <div id="myModal" className="modal">
            <div className="modal-content">
                <div className="modal-content-right">
                    <h3 className='text-center'>Student Inormation</h3>
                    <div className="modal-header">
                        <span className="close" onClick={()=>setShowPopup(false)}>×</span>
                    </div>
                    <div className="modal-body">
                        <h3 className='text-success'>Name : { singleUser[0].name }</h3>
                        <h3 className='text-danger'>Email :{singleUser[0].email}</h3>
                        <h3 className='text-info'>Age : {singleUser[0].age}</h3>
                        <h3 className='text-warning'>Gender : {singleUser[0].gender}</h3>
                    </div>
                </div>
            </div>
        </div>{/* END the modal*/}
    </div>
  )
}

export default CustomModal