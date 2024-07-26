import { Injectable } from "@angular/core";
import { Contact } from "../../domain/contacts/contact.model";
import { IContactRepository } from "../../domain/contacts/contact.repository";
import { UseCase } from "../base/use-case.base";

@Injectable({
    providedIn: 'root'
})
export class GetContactsUseCase implements UseCase<null, Contact[]> {

    constructor(
        private _contactRepository: IContactRepository
    ) { }

    public execute(): Contact[] {

        const result = this._contactRepository.getContacts()

        return result
    }

}