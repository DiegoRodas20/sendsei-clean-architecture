import { Injectable } from "@angular/core";
import { IUserRepository } from "../../domain/users/user.repository";
import { UseCase } from "../base/use-case.base";

@Injectable({
    providedIn: 'root'
})
export class SignInUseCase implements UseCase<string, boolean> {

    constructor(
        private _userRepository: IUserRepository
    ) { }

    public execute(dni: string): boolean {

        const result = this._userRepository.signInUser(dni)

        return result
    }

}