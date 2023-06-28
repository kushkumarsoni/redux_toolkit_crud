import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from "../features/UserSlice";

const UpdateUserModal = ({id,showPopup,setShowPopup}) => {
    const dispath = useDispatch();
    const allUsers = useSelector((state)=>state.app.users);
    const singleUser = allUsers.filter((ele)=> ele.id === id);

    const[user,setUser]= useState({});

    const handleInput = (e) =>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        user.append({'id':id});
        dispath(updateUser(user));
    }
  return (
    <div>
        <div id="myModal" className="modal">
            <div className="modal-content">
                <div className="modal-content-right">
                    <h3 className='text-center'>Student Update</h3>
                    <div className="modal-header">
                        <span className="close" onClick={()=>setShowPopup(false)}>×</span>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" placeholder='Enter name' name='name' onChange={handleInput} value={singleUser[0].name} id="name" aria-describedby="name" />                  
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" placeholder='Enter email' name='email' onChange={handleInput} value={singleUser[0].email} id="email" aria-describedby="emailHelp" />                    
                            </div>
                            <div className="mb-3">
                                <label htmlFor="age" className="form-label">Age</label>
                                <input type="number" className="form-control" name='age' placeholder='Enter age' id="age" onChange={handleInput} value={singleUser[0].age} />
                            </div>                                 
                            <div className="form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" value="Male" id="gender1" onChange={handleInput} defaultChecked={singleUser[0].gender === "Male"} />
                                <label className="form-check-label" htmlFor="gender1">Male</label>
                            </div>
                            <div className="form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" value="Female" id="gender2" onChange={handleInput} defaultChecked={singleUser[0].gender === "Female"} />
                                <label className="form-check-label" htmlFor="gender2">Female</label>
                            </div>                                
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpdateUserModal