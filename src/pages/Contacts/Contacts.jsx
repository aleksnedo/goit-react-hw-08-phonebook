import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Helmet } from 'react-helmet';
import { ContactEditor } from 'components/ContactEditor/ContactEditor';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/operations';

import { Section } from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>

      <Section>
        <ContactEditor />
        <ContactList />
      </Section>
    </>
  );
}
