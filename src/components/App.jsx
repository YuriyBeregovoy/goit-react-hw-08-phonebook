import { useSelector } from "react-redux";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Layout } from "./Layout";
import {  useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { getIsLoading, getError } from "redux/contactsSlice";
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
   const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
      <Layout>
      <h1>Phonebook</h1>
        <ContactForm />
        {isLoading && !error ? <b>Request in progress...</b> : null}
      <h2>Contacts</h2>
        <Filter />
        <ContactList/>
</Layout>
    );


}
  
