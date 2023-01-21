import {
  Container,
  Section,
  MainTitle,
  SecondaryTitle,
  Wrapper,
} from './App.styled';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Form from './Form/Form';
import { Loader } from './Loader/Loader';
import { selectIsLoading, selectError } from 'redux/selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section>
        <MainTitle>Phonebook</MainTitle>
        <Form />
      </Section>

      <Section>
        <SecondaryTitle>Contacts</SecondaryTitle>
        <Wrapper>
          <Filter />
          <ContactList />
          {isLoading && !error && <Loader />}
        </Wrapper>
      </Section>
    </Container>
  );
};
