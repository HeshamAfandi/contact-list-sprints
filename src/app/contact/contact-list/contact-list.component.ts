import { Component, OnInit } from '@angular/core';

interface Contact {
  id: number;
  name: string;
  phone: string;
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {

  newContact: Contact = { id: 0, name: '', phone: '' };
  searchText: string = '';
  contacts: Contact[] = [];
  filteredContacts: Contact[] = [];
  editingContact:Contact |null=null;
  
  addContact(): void {
    if (this.newContact.name.trim() !== '') {
      this.newContact.id = this.contacts.length + 1;
      this.contacts.push({ ...this.newContact });
      this.newContact = { id: 0, name: '', phone: '' };
      this.filteredContacts = this.contacts;
    }
  }

  searchContacts(): void {
    this.filteredContacts = this.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  editContact(contact: Contact): void {
    this.editingContact = contact;
  }

  saveEditedContact(contact: Contact): void {
    this.editingContact = null; // Clear the editing state
  }
  deleteContact(contact: Contact): void {
    const index = this.contacts.indexOf(contact);
    if (index !== -1) {
      this.contacts.splice(index, 1);
      this.filteredContacts = this.contacts;
    }
  }

}
