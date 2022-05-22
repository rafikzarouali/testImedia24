import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';
import { fetchData } from './homeApi';

export interface HomeState {
  data: [] ,
  loading:boolean
}

const initialState: HomeState = {
  data: [],
 loading:false
};



export const incrementAsync:any = createAsyncThunk(
  'home/fetchdata',
  async (more: number) => {
    console.log(more)
    const response:any = await fetchData(more);    
    return response.data
  }
)

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    deleteProfil: (state:any, action:any) => {
    
      
      state.data = state.data.filter((item:any)=>item.id !==action.payload)
  }
  },
  extraReducers:<any>{
    [incrementAsync.pending]:(state:any,action:any)=>{

      state.loading=true
    },
    [incrementAsync.fulfilled]:(state:any,action:any)=>{
    
        state.loading=false
      
     
     state.data = [...state.data,...action.payload.data]
    },
    [incrementAsync.rejected]:(state:any,action:any)=>{
      state.loading=false
     
    }
  },
});

export const { deleteProfil } = homeSlice.actions;

export default homeSlice.reducer;
