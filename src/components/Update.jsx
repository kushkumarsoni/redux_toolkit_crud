import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from "../features/UserSlice";

const Update = () => {
    const {id}                      = useParams();
    const[updateData,setUpdateData] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {users,loading}           = useSelector((state) => state.app);
    
    useEffect(()=>{
        if(id){
            const singleuser = users.filter((ele) => ele.id == id);
            setUpdateData(singleuser[0]);
        }
    },[]);
    const handleInput =(e) =>{
        setUpdateData({...updateData,[e.target.name]:e.target.value});
        console.log('hello');
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(updateUser(updateData));
        navigate('/');
    }
  return (
    <div>
        <div className='row mt-3'>
                <div className='col-md-6 col-sm-12 offset-lg-3'>
                    <div className='card'>
                        <div className='card-header'>
                            <h3>Update Student</h3>
                        </div>
                        <div className='card-body'>
                            { loading ? <h2>Loading...</h2> :
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" placeholder='Enter name' name='name' onChange={handleInput} id="name" value={updateData && updateData.name} aria-describedby="name" />                  
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" placeholder='Enter email' name='email' onChange={handleInput} value={updateData && updateData.email } id="email" aria-describedby="emailHelp" />                    
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="age" className="form-label">Age</label>
                                    <input type="number" className="form-control" name='age' placeholder='Enter age' id="age" onChange={handleInput} value={updateData && updateData.age} />
                                </div>                                 
                                <div className="form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" value="Male" id="gender1" onChange={handleInput} checked={updateData && updateData.gender === 'Male'} />
                                    <label className="form-check-label" htmlFor="gender1">Male</label>
                                </div>
                                <div className="form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" value="Female" id="gender2" onChange={handleInput} checked={updateData && updateData.gender === 'Female'} />
                                    <label className="form-check-label" htmlFor="gender2">Female</label>
                                </div>                                
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                            }
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Update