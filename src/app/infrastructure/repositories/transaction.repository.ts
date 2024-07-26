import { Injectable } from "@angular/core";
import { Transaction } from "../../domain/transactions/transaction.model";
import { ITransactionRepository } from "../../domain/transactions/transaction.repository";

@Injectable()
export class TransactionRepository implements ITransactionRepository {

    private localStorageKey: string = 'transactions';

    constructor() { }

    public createTransaction(transaction: Transaction): boolean {
        try {
            const transactions = this.getTransactions();
            transactions.push(transaction);
            localStorage.setItem(this.localStorageKey, JSON.stringify(transactions));
            return true;
        } catch (error) {
            console.error('Error creating transaction:', error);
            return false;
        }
    }

    public getTransactions(): Transaction[] {
        const transactionsJson = localStorage.getItem(this.localStorageKey);
        if (transactionsJson) {
            return JSON.parse(transactionsJson);
        }
        return [];
    }

}