import { useDispatch } from "react-redux";
import { addContacts} from "redux/contacts/operations";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { FormButtonStyles, FormStyles, LabelStyles } from "components/AllForm.styled";


export const ContactForm = () => {

  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items) || [];
  
   const handleNameSet = e => {
    e.preventDefault();
      const { name, number} = e.currentTarget.elements;
     const newContact ={ name: name.value, number: number.value, };
     

  const isExistingContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
  if (!isExistingContact) {
    dispatch(addContacts(newContact));
  } else {
    alert(`${newContact.name} is already in contacts!`);
  }
         e.currentTarget.reset();
      }
  

  return  <FormStyles onSubmit={handleNameSet}>
      <LabelStyles htmlFor={contacts.id}>
          <span>Name</span>
          <input
        id = {nanoid()} 
        type="text"
        name="name"
          />
        </LabelStyles>
        <LabelStyles>
          <span>Number</span>
          <input
        type="tel"
        name="number"
                />
        </LabelStyles>
       <FormButtonStyles type="submit">Add contact</FormButtonStyles>
      </FormStyles>
}