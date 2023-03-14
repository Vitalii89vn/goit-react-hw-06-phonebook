// import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ contacts }) => {
    return (
        <ul>
            {contacts.map(({id, name, number}) => (
                <ContactListItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    // onDelete={() => onDelete(id)}
                />
            ))} 
        </ul>

    )
};

// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired
//     })).isRequired,
    // onDelete: PropTypes.func.isRequired
// }