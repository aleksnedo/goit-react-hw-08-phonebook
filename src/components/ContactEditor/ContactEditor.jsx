import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

import { Form } from '../Form/Form';
import { Loader } from '../Loader/Loader';
import { Filter } from '../Filter/Filter';

export const ContactEditor = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <section>
        <Filter />
        <Form />
        {isLoading && !error && <Loader />}
      </section>
    </div>
  );
};
