import { Transaction } from "./transaction.model";

export abstract class ITransactionRepository {

    abstract createTransaction(transaction: Transaction): boolean

    abstract getTransactions(): Transaction[]

}