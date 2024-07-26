import { Injectable } from "@angular/core";
import { IContactRepository } from "../../domain/contacts/contact.repository";
import { Contact } from "../../domain/contacts/contact.model";

@Injectable()
export class ContactRepository implements IContactRepository {

    private localStorageKey: string = 'contacts';

    constructor() { }

    public getContacts(): Contact[] {
        const contactsJson = localStorage.getItem(this.localStorageKey);

        if (contactsJson) {
            return JSON.parse(contactsJson);
        }

        return [];
    }

    public addContact(contact: Contact): boolean {
        try {
            const contacts = this.getContacts();
            contacts.push(contact);
            localStorage.setItem(this.localStorageKey, JSON.stringify(contacts));

            return true;
        }
        catch (error) {
            console.error('Error adding contact:', error);
            return false;
        }
    }

}