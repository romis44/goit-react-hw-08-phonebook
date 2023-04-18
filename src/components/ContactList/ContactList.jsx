import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { useSelector } from 'react-redux';
import { Button, Typography } from '@mui/material';

import { selectVisibleContacts } from 'redux/selectors';

export default function ContactList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul className="list">
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {/* <p>
              {name}: {number}
            </p> */}
            <Typography
              variant="h7"
              component="h2"
              color="#1577d8"
              borderRadius="5px"
              padding="2px"
              backgroundColor="#c4ffd6"
            >
              {name}: {number}
            </Typography>
            <Button
              type="button"
              variant="contained"
              sx={{
                mt: '20px',
              }}
              id={id}
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
