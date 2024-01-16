import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const fetchAxios = createSlice({
  name: "fetchAxiosbella",
  initialState: {
    containerFetchAxios: null,
  },

  reducers: {
    setContainerFetchAxios: (state, action) => {
      state.containerFetchAxios = action.payload;
    },
  },
});

export const fetch = createAsyncThunk("fetchAxiosbella/fetchAxios", (payload, thunkAPI) => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Errore reperimento api");
      } else {
        return response.json();
      }
    })
    .then((data) => {
      thunkAPI.dispatch(setContainerFetchAxios(data));
    })
    .catch((error) => {
      console.log("Errore catch");
      thunkAPI.rejectWithValue({ error: error.message });
    });
});
export const { setContainerFetchAxios } = fetchAxios.actions;
export default fetchAxios.reducer;
