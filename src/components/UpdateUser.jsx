import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const UpdateUser = () => {
    const {id} = useParams();
   // const dispatch = useDispatch();
    const allusers = useSelector((state) => state.app.users);
    const[UpdatedData,setUpdatedData] = useState();


    useEffect(()=>{
        if(id){
           const data = allusers.filter((element) => element.id == id);
           setUpdatedData(data);
        }
    },[allusers,id]);
   
    const handleInput = (e) =>{
        setUpdatedData({...UpdatedData,[e.target.name]:e.target.value});
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
    }
   console.log(UpdatedData);
  return (
    <div>
        <div className='row mt-3'>
            <div className='col-md-6 col-sm-12 offset-lg-3'>
                <div className='card'>
                    <div className='card-header'>
                        <h3>Registration Form</h3>
                    </div>
                    <div className='card-body'>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" placeholder='Enter name' name='name' onChange={handleInput} id="name"  value={UpdatedData[0].name ? UpdatedData[0].name: null} aria-describedby="name" />                  
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" placeholder='Enter email' name='email' onChange={handleInput} id="email" value={UpdatedData[0].email ? UpdatedData[0].email: null} aria-describedby="emailHelp" />                    
                            </div>
                            <div className="mb-3">
                                <label htmlFor="age" className="form-label">Age</label>
                                <input type="number" className="form-control" name='age' placeholder='Enter age' id="age" onChange={handleInput} value={UpdatedData[0].age ? UpdatedData[0].age: null}  />
                            </div>                                 
                            <div className="form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" value="Male" id="gender1" onChange={handleInput} defaultChecked={UpdatedData[0].gender ? UpdatedData[0].gender : null}/>
                                <label className="form-check-label" htmlFor="gender1">Male</label>
                            </div>
                            <div className="form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" value="Female" id="gender2" onChange={handleInput} defaultChecked={UpdatedData[0].gender ? UpdatedData[0].gender :null} />
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

export default UpdateUser