import React from 'react';
import { FiUserMinus } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { List, Item, Name, Number, Delete } from './ContactList.styled';

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <List>
      {contacts.map(({ name, number, id }) => {
        return (
          <Item key={id}>
            <Name>{name}:</Name>
            <Number>{number}</Number>
            <Delete
              type="button"
              onClick={() => handleDelete(id)}
              aria-label="Delete contact"
            >
              <FiUserMinus size="26" />
            </Delete>
          </Item>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  handleDelete: PropTypes.func.isRequired,
};
