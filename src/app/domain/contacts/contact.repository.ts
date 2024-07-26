import { Contact } from "./contact.model";

export abstract class IContactRepository {

    abstract getContacts(): Contact[]

    abstract addContact(contact: Contact): boolean

}