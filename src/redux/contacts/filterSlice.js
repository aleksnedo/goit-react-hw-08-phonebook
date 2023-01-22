import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,

  reducers: {
    onChangeFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { onChangeFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
