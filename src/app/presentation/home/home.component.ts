import { Component, OnInit } from '@angular/core';
import { AddContactUseCase } from '../../application/contacts/add-contact.usecase';
import { GetContactsUseCase } from '../../application/contacts/get-contacts.usecase';
import { CreateTransactionUseCase } from '../../application/transactions/create-transaction.usecase';
import { Contact } from '../../domain/contacts/contact.model';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {

    constructor(
        private _addContactUseCase: AddContactUseCase,
        private _getContactsUseCase: GetContactsUseCase,
        private _createTransactionUseCase: CreateTransactionUseCase
    ) { }

    ngOnInit() { }

    addContract() {

        let contact: Contact = {
            id: '1',
            userId: '1',
            age: 18,
            name: 'Diego'
        }

        const result = this._addContactUseCase.execute(contact)
    }

    getContacts() {
        const result = this._getContactsUseCase.execute()
    }
}
