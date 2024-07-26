import { Injectable } from "@angular/core";
import { IUserRepository } from "../../domain/users/user.repository";
import { User } from "../../domain/users/user.model";

@Injectable()
export class UserRepository implements IUserRepository {

    constructor() { }

    public registerUser(user: User): boolean {
        throw new Error("Method not implemented.");
    }

    public signInUser(dni: string): boolean {
        throw new Error("Method not implemented.");
    }
}