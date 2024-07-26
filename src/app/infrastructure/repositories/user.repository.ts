import { Injectable } from "@angular/core";
import { IUserRepository } from "../../domain/users/user.repository";
import { User } from "../../domain/users/user.model";

@Injectable()
export class UserRepository implements IUserRepository {

    private localStorageKey: string = 'users';

    constructor() { }

    public registerUser(user: User): boolean {
        try {
            const users = this.getUsers();
            users.push(user);
            localStorage.setItem(this.localStorageKey, JSON.stringify(users));
            return true;
        } catch (error) {
            console.error('Error registering user:', error);
            return false;
        }
    }

    public signInUser(dni: string): boolean {
        const users = this.getUsers();
        const user = users.find(u => u.dni === dni);
        return user !== undefined;
    }

    public getUsers(): User[] {
        const usersJson = localStorage.getItem(this.localStorageKey);
        if (usersJson) {
            return JSON.parse(usersJson);
        }
        return [];
    }

}