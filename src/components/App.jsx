import { useSelector } from "react-redux";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Layout } from "./Layout";
import {  useEffect, lazy } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { getIsLoading, getError } from "redux/contacts/contactsSlice";
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import { useAuth } from 'hooks';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Tasks'));

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
  
