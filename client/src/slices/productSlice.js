import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"
import { apiUrl } from '../utils/config'
import { toast } from "react-toastify"

const initialState = {
    items: [],
    status: null,
    createStatus : null
  
}

export const productsAdd = createAsyncThunk(
    "products/productsCreate",
    async (values) => {
        try {
            const response = await axios.post(`${apiUrl}/api/products/add`, values);
            return response.data;
        } catch (e) {
            console.log(e);
            toast.error(e.response?.data);
        }
    }
);

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async (values) => {
    try {
        const response = await axios.get(`${apiUrl}/api/products/add`, values);
        return response.data;
    } catch (e) {
        console.log(e);
        toast.error(e.response?.data);
    }
}
);

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(productsAdd.pending, (state) => {
          state.createStatus = 'loading';
        })
        .addCase(productsAdd.fulfilled, (state, action) => {
          state.createStatus = 'succeeded';
          state.items.push(action.payload);
        })
        .addCase(productsAdd.rejected, (state, action) => {
          state.createStatus = 'failed';
          console.log(action.error);
        });
    },
  });
  
// export const { productsAdd } = productSlice.actions
export default productSlice.reducer;

