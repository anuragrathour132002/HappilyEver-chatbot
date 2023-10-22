import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    studentInfo :{name: '',
    age: ''
}
}

export const firstReducer = createSlice({
    name:'update',
    initialState,
    reducers:{
       updateStudentName:(state,action)=>{
         const name = action.payload;
         state.studentInfo = {...state.studentInfo,name};
       },
       updateStudentAge:(state,action)=>{
         const age = action.payload;
         state.studentInfo = {...state.studentInfo,age};
       }
    }
});

export const {updateStudentName,updateStudentAge} = firstReducer.actions;
export default firstReducer.reducer;