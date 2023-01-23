import PropTypes from 'prop-types';
import { List, Item, Name, Number, Button } from './ContactList.styled';

import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { contactsList } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contactsList.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const visibleContacts = getFilterContacts();

  return (
    <List>
      {visibleContacts.length === 0 && <p>There is not any contacts</p>}
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <Name>
              {name}: <Number>{number}</Number>
            </Name>
            <Button type="button" onClick={() => handleDelete(id)}>
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
