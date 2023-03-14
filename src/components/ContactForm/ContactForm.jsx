// import { useState } from "react";
import { nanoid } from 'nanoid'
import css from "./ContactForm.module.css"
import Notiflix from 'notiflix';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { addContacts, getContacts } from '../../redux/contactsSlice';



export const ContactForm = () => {
    // const [name, setName] = useState('');
    // const [number, setNumber] = useState('')
    let nameId = nanoid();
    let numberId = nanoid();

    const dispatch = useDispatch();
    const contactsArr = Object.values(useSelector(getContacts));
 const contacts = contactsArr.slice(0, contactsArr.length - 1)
    

    // const handleChange = e => {
    //     if (e.currentTarget.name === 'name') setName(e.currentTarget.value);
    //     if (e.currentTarget.name === 'number') setNumber(e.currentTarget.value);
    // };
    
    // const addContacts = (name, number) => {
    // const contact = { id: nanoid(10), name, number };
      
    // contacts.find(item => item.name.toLowerCase() === name.toLowerCase())
    //   ?
    //   Notiflix.Notify.failure(`${name} is already in contacts`)
    //   :
    //   setContacts([...contacts, contact])
 
//   };

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
    //     contacts.find(item => item.name.toLowerCase() === name.toLowerCase())
    //   ?
    //   Notiflix.Notify.failure(`${name} is already in contacts`)
    //   :
        dispatch(addContacts(
            name, number
            
        ))
        // onSubmitForm(name, number);
        const findName = contacts.find(item => item.name.toLowerCase() === name.toLowerCase());
        if (!findName) form.reset();
    };

    // const reset = () => {
    //     setName('')
    //     setNumber('')
    // };

    return (<div className={css.container}>
        <form onSubmit={handleSubmit}>
            <label htmlFor={nameId}>Name</label>
            <input
                type="text"
                id={nameId}
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                // value={name}
                // onChange={handleChange}
            />
            <label htmlFor={numberId}>Number</label>
            <input
                type="tel"
                id={numberId}
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                // value={number}
                // onChange={handleChange}
            />
            <button type="submit" className={css.btn}>Add contact</button>
        </form>
    </div>)
};

// ContactForm.propTypes = {
//     onSubmitForm: PropTypes.func.isRequired,
//     contacts: PropTypes.arrayOf(PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired
//     }).isRequired)
// };
