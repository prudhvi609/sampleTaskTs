import { IUser } from "../UserService";
import { UserModel } from '../../models/usersModel';
import { injectable, inject } from "inversify";
import { SERVICE_IDENTIFIER } from "../../constant";

@injectable()
export class UserServiceImpl implements IUser {

    private usersList: UserModel[] = new Array()

    addUser(userObj: UserModel): number {
        return this.usersList.push(userObj);
    }

    updateUserById(id: string, updateObj: UserModel): UserModel {
        return new UserModel('1', 'abc', 'abc@gmail.com', 9897877676, 'abc@123', true, "321");
    }

    listUsers(): UserModel[] {
        return this.usersList;
    }

    getUserById(id: String): UserModel {
        return new UserModel('1', 'abc', 'abc@gmail.com', 9897877676, 'abc@123', true, "321");
    }

    deleteUserById(id: String): UserModel {
        return new UserModel('1', 'abc', 'abc@gmail.com', 9897877676, 'abc@123', true, "321");
    }

}

