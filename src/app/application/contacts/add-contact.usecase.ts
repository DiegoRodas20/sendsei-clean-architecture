import { Injectable } from "@angular/core";
import { Contact } from "../../domain/contacts/contact.model";
import { IContactRepository } from "../../domain/contacts/contact.repository";
import { UseCase } from "../base/use-case.base";

@Injectable({
    providedIn: 'root'
})
export class AddContactUseCase implements UseCase<Contact, boolean> {

    minimumAge : number = 18

    constructor(
        private _contactRepository: IContactRepository
    ) { }

    public execute(contact: Contact): boolean {

        if (contact.age <= this.minimumAge) {
            throw new Error(`La edad minima es de ${this.minimumAge} años`);
        }

        const result = this._contactRepository.addContact(contact)

        return result
    }

}