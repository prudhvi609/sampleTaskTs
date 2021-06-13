import { IUser } from "../UserService";
import UserModel, { IUserModel } from '../../models/usersModel';
import { injectable, inject } from "inversify";
import { SERVICE_IDENTIFIER } from "../../constant";
import { UserDto } from '../../dto/UserDto';

@injectable()
export class UserServiceImpl implements IUser {

    private usersList: UserDto[] = new Array()

    addUser(userObj: UserDto): UserDto {
        let user = UserModel.create({ "id": "", "name": "prudhvi", "eMailId": "prudhvi@gmail.com", "mobileNumber": "9192939495", "hashedPassword": "abc@123", "status": true, "roleId": "a" });
        return userObj;
        // return this.usersList.push(userObj);
    }

    updateUserById(id: string, updateObj: UserDto): UserDto {
        return new UserDto('1', 'abc', 'abc@gmail.com', "9897877676", 'abc@123', true, "321");
    }

    listUsers(): UserDto[] {
        return this.usersList;
    }

    getUserById(id: String): UserDto {
        return new UserDto('1', 'abc', 'abc@gmail.com', "9897877676", 'abc@123', true, "321");
    }

    deleteUserById(id: String): UserDto {
        return new UserDto('1', 'abc', 'abc@gmail.com', "9897877676", 'abc@123', true, "321");
    }

}

