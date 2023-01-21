import { Helmet } from 'react-helmet';
import { Container, Banner } from './Home.styled';
// import Button from '@mui/material/Button';

export default function Home() {
  return (
    <Container>
      <Helmet>
        <title>My phonebook</title>
      </Helmet>
      <Banner>My phonebook, welcome page!</Banner>
      {/* <Button variant="contained" href="goit-react-hw-08-phonebook/contacts">
        Go to my contacts
      </Button> */}
    </Container>
  );
}
