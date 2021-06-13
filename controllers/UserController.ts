import * as express from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import { injectable, inject } from "inversify";

import { UserServiceImpl } from "../services/impl/UserServiceImpl";
import { IUser } from "../services/UserService";
import UserModel, { IUserModel } from "../models/usersModel";
import { Request } from "express";
import { SERVICE_IDENTIFIER } from "../constant";
import { UserDto } from "../dto/UserDto";


@controller("/user")
export class UserController implements interfaces.Controller {

    constructor(@inject(SERVICE_IDENTIFIER.UserService) private userService: IUser) { }
    @httpGet("/")
    private index(): string {
        return `Hello World with Typescript`;
    }

    @httpGet("/list")
    private listUsers(): UserDto[] {
        return this.userService.listUsers();
    }

    @httpPost("/add-user")
    private addUser(): UserDto {
        return this.userService.addUser({ "id": "", "name": "prudhvi", "eMailId": "prudhvi@gmail.com", "mobileNumber": "9192939495", "hashedPassword": "abc@123", "status": true, "roleId": "a" });
    }
}





