import * as express from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import { injectable, inject } from "inversify";


@controller("/user")
export class UserController implements interfaces.Controller {
    @httpGet("/")
    private index(): string {
        return `Hello World`;
    }
}





