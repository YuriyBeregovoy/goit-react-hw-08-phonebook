import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  });

export const addContacts = createAsyncThunk(
  "contacts/addContacts",
  async (name, number, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", name, number );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const deleteContacts = createAsyncThunk(
  "contacts/deleteContacts",
  async (Id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${Id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
