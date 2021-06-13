import { IUserModel } from "../models/usersModel";
import { UserDto } from "../dto/UserDto";

export interface IUser {
    addUser(userObj: UserDto): UserDto,
    updateUserById(id: String, updaeObj: UserDto): UserDto,
    listUsers(): UserDto[],
    getUserById(id: String): UserDto
    deleteUserById(id: String): UserDto
}

