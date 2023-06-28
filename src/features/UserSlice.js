import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

//create action
export const createuser = createAsyncThunk("createuser",async(data,{rejectWithValue})=>{
    const response = await fetch("http://localhost/ecommerce/api/users/store", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json;',
          },
        body: JSON.stringify(data),
      });
    try {
        const result = await response.json();
        return result;
    }catch(error){
        return rejectWithValue(error);
    }
});

//delete action
export const deleteUser = createAsyncThunk("deleteUser",async(id,{rejectWithValue})=>{
    const response = await fetch(`http://localhost/ecommerce/api/users/delete/${id}`,{
        method: 'DELETE',
    })
    try{       
        const result = await response.json();
        return result;
    }catch(error){
        return rejectWithValue(error);
    }
});

//read action
export const showUser = createAsyncThunk("showUser",async(args, {rejectWithValue})=>{
    try{
        const response  = await fetch("http://localhost/ecommerce/api/users");
        const result    = await response.json();
        return result;
    }catch(error){
        return rejectWithValue(error);
    }
});

//update action
export const updateUser = createAsyncThunk("updateUser",async(data,{rejectWithValue})=>{
    const response = await fetch("http://localhost/ecommerce/api/users/update", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json;',
          },
        body: JSON.stringify(data),
      });
    try {
        const result = await response.json();
        return result;
    }catch(error){
        return rejectWithValue(error);
    }
});

export const userSlice = createSlice({
    name: "userDetails",
    initialState: {
        users:[],
        loading:false,
        error:null,
        message: null,
        searchData: [],
    },
    reducers:{
        searchUser:(state,action)=>{
            state.searchData = action.payload;
        }
    },
    extraReducers:{
        [createuser.pending]:(state)=>{
            state.loading = true;
        },
        [createuser.fulfilled]:(state,action) =>{
            state.loading   = false;
            state.message   = action.payload.message;
            state.users.push(action.payload.users);
        },
        [createuser.rejected]:(state,action) =>{
            state.loading   = false;
            state.error     = action.payload;
            state.message   = action.payload.message;
        },
        [showUser.pending]:(state)=>{
            state.loading = true;
        },
        [showUser.fulfilled]:(state,action) =>{
            state.loading   = false;
            state.users     = action.payload.users;
            state.message   = action.payload.message;
        },
        [showUser.rejected]:(state,action) =>{
            state.loading   = false;
            state.error     = action.payload;
            state.message   = action.payload.message;
        },
        [deleteUser.pending]:(state)=>{
            state.loading = true;
        },
        [deleteUser.fulfilled]:(state,action) =>{
            state.loading   = false;
            console.log('data',action.payload.users);
            const {id}      = action.payload.users;
            if(id){
                state.users = state.users.filter((user)=> user.id !== id)
            }
        },
        [deleteUser.rejected]:(state,action) =>{
            state.loading   = false;
            state.error     = action.payload;
            state.message   = action.payload.message;
        },
        [updateUser.pending]:(state) =>{
            state.loading = true;
        },
        [updateUser.fulfilled] : (state,action)=>{
            state.loading = false;
            state.users = state.users.map((ele)=>(
                ele.id == action.payload.users.id ? action.payload.users : ele
            ));
        },
        [updateUser.rejected]:(state,action) =>{
            state.loading = false;
            state.error = action.payload.message;
            state.message = action.payload.message;
        }
    }
});


export default userSlice.reducer;
export const {searchUser} = userSlice.actions;
