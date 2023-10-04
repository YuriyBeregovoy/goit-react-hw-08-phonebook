import { createSlice} from "@reduxjs/toolkit";
import { fetchContacts, addContacts, deleteContacts } from "./operations";
import { logOut } from 'redux/auth/authoperations';






const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  reducers: {},
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
     .addCase(logOut.fulfilled, (state) => {
         state.items = [];
      state.error = null;
      state.isLoading = false;
      }

      )
     
  },
  
});

export const contactsReducer = contactsSlice.reducer;
export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;