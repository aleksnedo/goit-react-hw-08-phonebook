import { Formik } from 'formik';
import { FormStyle, Label, Input, Button } from './Form.styled';
import { TextField } from 'formik-mui';

import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

export const Form = () => {
  const { contactsList } = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const dublicateContact = findDublicate(values, contactsList);
    dublicateContact
      ? alert(`${values.name} or ${values.phone} is already in contacts`)
      : dispatch(addContact(values));

    resetForm();
  };

  const findDublicate = (contact, contactsList) => {
    return contactsList.find(
      item =>
        item.name.toLowerCase() === contact.name.toLowerCase() ||
        item.number === contact.number
    );
  };

  const initialValues = {
    name: '',
    number: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Required';
        } else if (!values.number) {
          errors.number = 'Required';
        } else if (
          !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){3,14}(\s*)?$/i.test(
            values.number
          )
        ) {
          errors.number = 'Invalid - only digits, at least 3';
        }
        return errors;
      }}
      onSubmit={handleSubmit}
    >
      <FormStyle autoComplete="on">
        <Label htmlFor="name">
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter name"
            component={TextField}
          />
        </Label>
        <Label htmlFor="number">
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Enter number"
            component={TextField}
          />
        </Label>

        <Button type="submit">Add Contact</Button>
      </FormStyle>
    </Formik>
  );
};
