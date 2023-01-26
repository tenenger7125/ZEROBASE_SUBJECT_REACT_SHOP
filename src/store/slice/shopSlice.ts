import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts } from './../../apis/getData';
import { filterCloth, filterElectronic, filterJewelery } from "../../utils/productUtils";

export interface ShopState {
  isDark: boolean;
  status: string;
  rawProductData: ProductItem[];
  fashion: ProductItem[];
  accessory: ProductItem[];
  digital: ProductItem[];
}

const initialState: ShopState = {
  isDark: false,
  status: '',
  rawProductData: [],
  fashion: [],
  accessory: [],
  digital: [],
};

export const getProductData = createAsyncThunk(
  'users/getProductData',
  async () => {
    const data = await fetchProducts();
    return data
  })

export const shopSlice = createSlice({
  name: "shopSlice",
  initialState,
  reducers: {
    initIsDark: (state, action: PayloadAction<boolean>) => {
      state.isDark = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProductData.pending, (state, action) => {
      state.status = 'pending';
    }),
    builder.addCase(getProductData.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.rawProductData = action.payload;
      state.fashion = filterCloth(action.payload);
      state.accessory = filterJewelery(action.payload);
      state.digital = filterElectronic(action.payload);
    }),
    builder.addCase(getProductData.rejected, (state, action) => {
      state.status = 'rejected';
      throw new Error('fetch error!')
    })
  }
});

export const { initIsDark } = shopSlice.actions;

export default shopSlice.reducer;
