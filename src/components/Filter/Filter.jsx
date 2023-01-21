import { Label, Input } from './Filter.styled';

import { useSelector, useDispatch } from 'react-redux';
import { onChangeFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const { filter } = useSelector(selectFilter);

  const handleChangeFilter = e => {
    dispatch(onChangeFilter(e.currentTarget.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChangeFilter}
      />
    </Label>
  );
}
