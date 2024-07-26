import { User } from "./user.model";

export abstract class IUserRepository {

    abstract registerUser(user: User): boolean

    abstract signInUser(dni: string): boolean

}