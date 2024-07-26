import { Injectable } from "@angular/core";
import { Transaction } from "../../domain/transactions/transaction.model";
import { ITransactionRepository } from "../../domain/transactions/transaction.repository";
import { UseCase } from "../base/use-case.base";

@Injectable({
    providedIn: 'root'
})
export class GetTransactionsUseCase implements UseCase<null, Transaction[]> {

    constructor(
        private _transactionRepository: ITransactionRepository
    ) { }

    public execute(): Transaction[] {

        const result = this._transactionRepository.getTransactions()

        return result
    }

}