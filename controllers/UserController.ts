import * as express from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import { injectable, inject } from "inversify";

import { UserServiceImpl } from "../services/impl/UserServiceImpl";
import { IUser } from "../services/UserService";
import { UserModel } from "../models/usersModel";
import { Request } from "express";
import { SERVICE_IDENTIFIER } from "../constant";


@controller("/user")
export class UserController implements interfaces.Controller {

    constructor(@inject(SERVICE_IDENTIFIER.UserService) private IUser: IUser) { }
    @httpGet("/")
    private index(): string {
        return `Hello World with Typescript`;
    }

    @httpGet("/list")
    private listUsers(): UserModel[] {
        return this.IUser.listUsers();
    }
}





