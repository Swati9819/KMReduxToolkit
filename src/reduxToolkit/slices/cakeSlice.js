import {createSlice} from '@reduxjs/toolkit';

const INITIAL_STATE = {
  numOfCakes: 10,
};

const CakeSlice = createSlice({
  name: 'cake',
  initialState: INITIAL_STATE,
  reducers: {
    ordered: state => {
      state.numOfCakes = Math.max(state.numOfCakes - 1, 0);
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export const {ordered, restocked} = CakeSlice.actions;
export default CakeSlice.reducer;
