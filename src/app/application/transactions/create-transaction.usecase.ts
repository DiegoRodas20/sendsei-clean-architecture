import { Injectable } from "@angular/core";
import { Transaction } from "../../domain/transactions/transaction.model";
import { ITransactionRepository } from "../../domain/transactions/transaction.repository";
import { UseCase } from "../base/use-case.base";

@Injectable({
    providedIn: 'root'
})
export class CreateTransactionUseCase implements UseCase<Transaction, boolean> {

    minimumAmount: number = 20

    constructor(
        private _transactionRepository: ITransactionRepository
    ) { }

    public execute(transaction: Transaction): boolean {

        if (transaction.totalAmount <= this.minimumAmount) {
            throw new Error(`El monto minimo es de ${this.minimumAmount} dolares`);
        }

        const result = this._transactionRepository.createTransaction(transaction)

        return result
    }

}