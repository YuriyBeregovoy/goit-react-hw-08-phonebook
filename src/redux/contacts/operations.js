import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://connections-api.herokuapp.com/";


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
  async (name, pone, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", name, pone );
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
