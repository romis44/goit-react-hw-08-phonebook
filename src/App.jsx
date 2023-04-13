import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/operations';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';

import Layout from './components/Layout/Layout';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';

export default function App() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <h1 className="title">Phonebook</h1>
      <ContactForm />

      <h2 className="title">Contacts</h2>
      <Filter />

      {isLoading && !error && <p style={{ textAlign: 'center' }}>Loading...</p>}
      {contacts.length === 0 && !isLoading ? (
        <p style={{ textAlign: 'center' }}>You don't have any contacts yet</p>
      ) : (
        <ContactList />
      )}
    </Layout>
  );
}
