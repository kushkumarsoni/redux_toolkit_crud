import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createuser } from "../features/UserSlice";
import { useNavigate } from "react-router-dom";

const UserCreate = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const[user,setUser] = useState({});
    const handleInput = (e) =>{
        setUser({...user,[e.target.name]:e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createuser(user));
        navigate("/read");
    }
    return(
        <div>
            <div className='row mt-3'>
                <div className='col-md-6 col-sm-12 offset-lg-3'>
                    <div className='card'>
                        <div className='card-header'>
                            <h3>Registration Form</h3>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" placeholder='Enter name' name='name' onChange={handleInput} id="name" aria-describedby="name" />                  
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" placeholder='Enter email' name='email' onChange={handleInput} id="email" aria-describedby="emailHelp" />                    
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="age" className="form-label">Age</label>
                                    <input type="number" className="form-control" name='age' placeholder='Enter age' id="age" onChange={handleInput} />
                                </div>                                 
                                <div className="form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" value="Male" id="gender1" onChange={handleInput} />
                                    <label className="form-check-label" htmlFor="gender1">Male</label>
                                </div>
                                <div className="form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" value="Female" id="gender2" onChange={handleInput} />
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

export default UserCreate;