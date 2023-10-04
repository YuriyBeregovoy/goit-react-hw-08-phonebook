import { useSelector } from "react-redux";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { ContactList } from "../components/ContactList/ContactList";
import { Filter } from "../components/Filter/Filter";
import { Layout } from "../components/Layout";
import {  useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import { getIsLoading, getError } from "../redux/contacts/contactsSlice";
import { useDispatch } from 'react-redux';

export  default function Contacts () {
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
  
