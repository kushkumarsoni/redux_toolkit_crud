import React, { useEffect, useState } from 'react'
import { showUser,deleteUser } from '../features/UserSlice';
import {useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CustomModal from './CustomModal';
import UpdateUserModal from './UpdateUserModal';

const ReadUser = () => {
    const dispatch = useDispatch();
    const {users,loading,searchData} = useSelector((state)=>state.app);
    useEffect(()=>{
        dispatch(showUser());
    },[]);

    const[id,setId] = useState();
    const[showPopup,setShowPopup] = useState(false);
    const[showUserUpdatePopup,setshowUserUpdatePopup] = useState(false);
    const[radioData,setRadioData] = useState("");
  return (
    <div>
        {showPopup && <CustomModal id={id} showPopup={showPopup} setShowPopup={setShowPopup} />}       
        {showUserUpdatePopup && <UpdateUserModal id={id} showPopup={showUserUpdatePopup} setShowPopup={setshowUserUpdatePopup} />}       
        <div className='row'>
            <h2 className='text-center'>All Data</h2>
            <div className='offset-lg-5 col-lg-2'>
                <div className='form-check-inline'>
                    <label htmlFor="all" className='form-check-label'>All</label>
                    <input type='radio' name='gender' id="all" value="" className='form-check-input' checked={radioData === ''} onChange={(e) =>setRadioData(e.target.value)} />
                </div>
                <div className='form-check-inline'>
                    <label for="Male" className='form-check-label'>Male</label>
                    <input type='radio' name='gender' id='Male' value="Male" className='form-check-input'  checked={radioData === 'Male'} onChange={(e) =>setRadioData(e.target.value)} />
                </div>
                <div className='form-check-inline'>
                    <label for="Female" className='form-check-label'>Female</label>
                    <input type='radio' name='gender' id='Female' value="Female" className='form-check-input'  checked={radioData === 'Female'} onChange={(e) =>setRadioData(e.target.value)} />
                </div>
            </div>
      
            { loading ? <h2 className='text-center'>Loading...</h2>: 
                
                users && 
                users.filter((ele)=>{
                    if(searchData.length === 0){
                        return ele
                    }else{
                        return ele.name.toLowerCase().includes(searchData.toLowerCase()) 
                        || ele.email.toLowerCase().includes(searchData.toLowerCase());
                    }
                }).filter((ele)=>{
                    if(radioData === 'Male') {
                        return ele.gender === radioData;
                    }else if(radioData === 'Female') {
                        return ele.gender === radioData;
                    }else{
                        return ele;
                    }
                })
                .map((user,index)=>{
                    return(
                        <div className='offset-lg-3 col-lg-6 mb-2' key={index}>
                            <div className='card'>
                                <div className='card-body'>
                                    <div className='text-center'>
                                        <h5>Name : {user.name }</h5>
                                        <h5>Email : {user.email }</h5>
                                        <h5>Age : {user.gender }</h5>                                        
                                        <button className='card-link' onClick={()=>[setShowPopup(true),setId(user.id)]}>View</button>
                                        <Link to={`/edit/${user.id}`} className='card-link'>Edit</Link>
                                        {/* <Link onClick={()=>[setshowUserUpdatePopup(true),setId(user.id)]} className='card-link'>Edit</Link> */}
                                        <Link onClick={()=>dispatch(deleteUser(user.id))} className='card-link'>Delete</Link>
                                    </div>
                                </div>
                            </div>
                        </div>                    
                    );
                })}
        </div>        
    </div>
  )
}

export default ReadUser