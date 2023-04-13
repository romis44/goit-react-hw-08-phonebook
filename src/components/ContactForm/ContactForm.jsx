import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
      <div className="inputForm">
        <label className="inputLabel">
          Name
          <input
            className="inputField"
            type="text"
            value={name}
            onChange={handleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Roman Kovalchuk"
            required
          />
        </label>
      </div>
      <div className="inputForm">
        <label className="inputLabel">
          Number
          <input
            className="inputField"
            type="tel"
            value={number}
            onChange={handleChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="+380-00-000-0000"
            required
          />
        </label>
      </div>
      <button className="inputButton" type="submit">
        Add contact
      </button>
    </form>
  );
}
