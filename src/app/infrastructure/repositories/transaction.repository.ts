import { Injectable } from "@angular/core";
import { Transaction } from "../../domain/transactions/transaction.model";
import { ITransactionRepository } from "../../domain/transactions/transaction.repository";

@Injectable()
export class TransactionRepository implements ITransactionRepository {

    constructor() { }

    public createTransaction(transaction: Transaction): boolean {
        throw new Error("Method not implemented.");
    }

    public getTransactions(): Transaction[] {
        throw new Error("Method not implemented.");
    }

}