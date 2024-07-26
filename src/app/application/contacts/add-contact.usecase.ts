import { Injectable } from "@angular/core";
import { Contact } from "../../domain/contacts/contact.model";
import { IContactRepository } from "../../domain/contacts/contact.repository";
import { UseCase } from "../base/use-case.base";

@Injectable({
    providedIn: 'root'
})
export class AddContactUseCase implements UseCase<Contact, boolean> {

    constructor(
        private _contactRepository: IContactRepository
    ) { }

    public execute(contact: Contact): boolean {

        const result = this._contactRepository.addContact(contact)

        return result
    }

}