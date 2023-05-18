import React, { Component } from 'react';
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

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactsFromLocalStorage = localStorage.getItem('contacts');
    if (contactsFromLocalStorage) {
      this.setState({ contacts: JSON.parse(contactsFromLocalStorage) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  addContact = newContact => {
    const { contacts } = this.state;
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
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };
  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };
  render() {
    const { filter } = this.state;
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm handleAddContact={this.addContact} />
        <Title>Contacts</Title>
        <Filter onChange={this.changeFilter} value={filter} />
        <ContactList
          contacts={this.getFilteredContacts()}
          handleDelete={this.deleteContact}
        />
      </Container>
    );
  }
}
