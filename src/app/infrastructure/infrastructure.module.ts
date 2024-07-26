import { NgModule } from "@angular/core";
import { IContactRepository } from "../domain/contacts/contact.repository";
import { ITransactionRepository } from "../domain/transactions/transaction.repository";
import { IUserRepository } from "../domain/users/user.repository";
import { ContactRepository } from "./repositories/contact.repository";
import { TransactionRepository } from "./repositories/transaction.repository";
import { UserRepository } from "./repositories/user.repository";

@NgModule({
    providers: [
        { provide: IUserRepository, useClass: UserRepository },
        { provide: IContactRepository, useClass: ContactRepository },
        { provide: ITransactionRepository, useClass: TransactionRepository }
    ]
})

export class InfrastructureModule { }