import { useSelector } from "react-redux";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { ContactList } from "../components/ContactList/ContactList";
import { Filter } from "../components/Filter/Filter";
import {  useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import { getIsLoading } from "../redux/contacts/contactsSlice";
import { useDispatch } from 'react-redux';
import { Container } from "components/Container.styled";

export  default function Contacts () {
  const dispatch = useDispatch();
   const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
    <Container>
      <h1>Contacts</h1>
        <ContactForm />
        {isLoading ? <b>Request in progress...</b> : null}
      <h2>Contacts list</h2>
        <Filter />
        <ContactList/>
    </Container>
    );


}
  
