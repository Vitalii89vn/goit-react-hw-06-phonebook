import { useState } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
// import Notiflix from 'notiflix';
// import { nanoid } from 'nanoid';
// import {useLocalStorage} from '../hooks/useLocalStorage'
import {  useSelector } from "react-redux";
import {  getContacts } from '../redux/contactsSlice';


export const App = () => {
  // const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');
  const contactsArr = Object.values(useSelector(getContacts));
 const contacts = contactsArr.slice(0, contactsArr.length - 1)
  console.log(Object.values(contacts))
  // const addContacts = (name, number) => {
  //   const contact = { id: nanoid(10), name, number };
      
  //   contacts.find(item => item.name.toLowerCase() === name.toLowerCase())
  //     ?
  //     Notiflix.Notify.failure(`${name} is already in contacts`)
  //     :
  //     setContacts([...contacts, contact])
 
  // };
  
  // const deleteContact = contactId => {
  //   setContacts(contacts.filter(contact => contact.id !== contactId))
   
  // };
console.log(contacts)
  const filterContacts = e => {
    setFilter(e.currentTarget.value)
  }
  // const normalizedFilter = filter.toLowerCase();
  // const visibleContacts = contacts.filter(
  //   contact => contact.name.toLowerCase().includes(normalizedFilter))

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm/>
      {/* <ContactForm onSubmitForm={addContacts} contacts={contacts} /> */}
      <h2>Contacts</h2>
      <Filter onFilter={filterContacts} />
      <ContactList
        contacts={contacts}
        // onDelete={deleteContact}
      />
    </div>
  )

};
