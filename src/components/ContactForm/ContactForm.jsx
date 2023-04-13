import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();

    if (
      contacts.some(
        event =>
          event.name.toLowerCase() === name.toLowerCase() &&
          event.number === number
      )
    ) {
      alert(`${name}: ${number} is already in contacts!`);
      return;
    }

    dispatch(
      addContact({
        name,
        number,
      })
    );

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <TextField
          id="standard-basic"
          type="text"
          value={name}
          label="Name"
          variant="standard"
          onChange={handleChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          fullWidth
          sx={{
            mb: '1rem',
            color: '#1976d2',
            backgroundColor: '#fffefe',
          }}
        />
      </Box>
      <Box>
        <TextField
          type="tel"
          value={number}
          onChange={handleChange}
          name="number"
          id="standard-basic"
          label="Number"
          variant="standard"
          required
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          sx={{
            mb: '1rem',
            color: '#1976d2',
            backgroundColor: '#fffefe',
          }}
        />
      </Box>
      <Button
        type="submit"
        variant="contained"
        sx={{
          mt: '20px',
        }}
      >
        Add contact
      </Button>
    </form>
  );
}
