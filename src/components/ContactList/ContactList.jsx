import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { useSelector } from 'react-redux';

import { selectVisibleContacts } from 'redux/selectors';

export default function ContactList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul className="list">
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li key={id} className="listContact">
            <p>
              {name}: {number}
            </p>
            <button
              className="listButton"
              type="button"
              id={id}
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
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
