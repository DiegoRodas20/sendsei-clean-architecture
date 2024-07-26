import { Injectable } from "@angular/core";
import { Transaction } from "../../domain/transactions/transaction.model";
import { ITransactionRepository } from "../../domain/transactions/transaction.repository";
import { UseCase } from "../base/use-case.base";

@Injectable({
    providedIn: 'root'
})
export class CreateTransactionUseCase implements UseCase<Transaction, boolean> {

    constructor(
        private _transactionRepository: ITransactionRepository
    ) { }

    public execute(transaction: Transaction): boolean {

        const result = this._transactionRepository.createTransaction(transaction)

        return result
    }

}