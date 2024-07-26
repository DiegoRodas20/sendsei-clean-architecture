import { Injectable } from "@angular/core";
import { User } from "../../domain/users/user.model";
import { IUserRepository } from "../../domain/users/user.repository";
import { UseCase } from "../base/use-case.base";

@Injectable({
    providedIn: 'root'
})
export class RegisterUserUseCase implements UseCase<User, boolean> {

    constructor(
        private _userRepository: IUserRepository
    ) { }

    public execute(user: User): boolean {

        const users = this._userRepository.getUsers()

        const dniRegistered = users.some(value => value.dni === user.dni)

        if (dniRegistered) {
            throw new Error('El DNI ya está registrado');
        }

        const result = this._userRepository.registerUser(user)

        return result
    }

}