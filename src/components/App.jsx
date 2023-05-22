import React, { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { Container, Title } from './App.styled';

const options = {
  width: '320px',
  fontSize: '20px',
  clickToClose: true,
  position: 'right-top',
  distance: '15px',
  borderRadius: '15px',
  timeout: 3000,
  showOnlyTheLastOne: true,
  pauseOnHover: true,
};

 export const App = () => {
  const [contacts, setContacts] = useState(()=> JSON.parse(window.localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsFromLocalStorage = window.localStorage.getItem('contacts');
    if (contactsFromLocalStorage) {
      setContacts(JSON.parse(contactsFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const isContactExists = contacts.some(
      contact =>
        contact.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim() ||
        contact.number.trim() === newContact.number.trim()
    );

    if (isContactExists) {
      Notify.failure(`${newContact.name} is already in contacts`, options);
      return;
    }

    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = event => {
    setFilter(event.target.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm handleAddContact={addContact} />
      <Title>Contacts</Title>
      <Filter onChange={changeFilter} value={filter} />
      <ContactList
        contacts={getFilteredContacts()}
        handleDelete={deleteContact}
      />
    </Container>
  );
};


