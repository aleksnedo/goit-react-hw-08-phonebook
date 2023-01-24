import { Form, TextFieldStyle } from './Filter.styled';

import { useSelector, useDispatch } from 'react-redux';
import { onChangeFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(selectFilter);

  const handleChangeFilter = e => {
    dispatch(onChangeFilter(e.currentTarget.value));
  };

  return (
    <Form>
      <TextFieldStyle
        value={filter}
        onChange={handleChangeFilter}
        type="text"
        name="filter"
        label="Find contacts by name"
        placeholder="Enter name"
        fullWidth
        margin="normal"
      />
    </Form>
  );
};
