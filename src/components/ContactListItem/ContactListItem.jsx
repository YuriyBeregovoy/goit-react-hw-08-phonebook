import { Item, ItemButton } from "./ContactListItem.styled."

export const ContactListItem = ({ contact:{id, name, phone}, onContactDelete}) => {
  return <Item key={id}>
            <p>{name}: {phone}</p>
            <ItemButton type="button" onClick={() => onContactDelete(id)}>Delete</ItemButton>
          </Item> 
}