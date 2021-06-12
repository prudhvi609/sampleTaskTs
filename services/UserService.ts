import { UserModel } from "../models/usersModel";

export interface IUser {
    addUser(userObj: UserModel): number,
    updateUserById(id: String, updaeObj: UserModel): UserModel,
    listUsers(): UserModel[],
    getUserById(id: String): UserModel
    deleteUserById(id: String): UserModel
}

