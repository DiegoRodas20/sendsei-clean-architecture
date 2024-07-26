import { Injectable } from "@angular/core";
import { IContactRepository } from "../../domain/contacts/contact.repository";
import { Contact } from "../../domain/contacts/contact.model";

@Injectable()
export class ContactRepository implements IContactRepository {

    constructor() { }

    public getContacts(): Contact[] {
        throw new Error("Method not implemented.");
    }

    public addContact(contact: Contact): boolean {
        throw new Error("Method not implemented.");
    }

}