import PropTypes from 'prop-types';
import { List, Item, Name, Number, Button } from './ContactList.styled';

import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';

export default function ContactList() {
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
      {visibleContacts.map(({ id, name, phone }) => {
        return (
          <Item key={id}>
            <Name>
              {name}: <Number>{phone}</Number>
            </Name>
            <Button type="button" onClick={() => handleDelete(id)}>
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
