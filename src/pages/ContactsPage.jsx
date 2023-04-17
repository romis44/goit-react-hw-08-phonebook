import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography } from '@mui/material';

import { fetchContacts } from 'redux/operations';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

export default function ContactsPage() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h7" component="h2">
        Phonebook
      </Typography>
      <ContactForm />

      <Typography variant="h7" component="h2">
        Contacts
      </Typography>
      <Filter />

      {isLoading && !error && <p style={{ textAlign: 'center' }}>Loading...</p>}

      {contacts.length === 0 && !isLoading ? (
        <p style={{ textAlign: 'center', fontWeight: 500 }}>
          You don't have any contacts yet
        </p>
      ) : (
        <ContactList />
      )}
    </Container>
  );
}
