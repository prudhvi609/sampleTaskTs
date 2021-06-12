"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_1 = require("inversify");
const constant_1 = require("../constant");
let UserController = class UserController {
    constructor(IUser) {
        this.IUser = IUser;
    }
    index() {
        return `Hello World with Typescript`;
    }
    listUsers() {
        return this.IUser.listUsers();
    }
};
__decorate([
    inversify_express_utils_1.httpGet("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], UserController.prototype, "index", null);
__decorate([
    inversify_express_utils_1.httpGet("/list"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], UserController.prototype, "listUsers", null);
UserController = __decorate([
    inversify_express_utils_1.controller("/user"),
    __param(0, inversify_1.inject(constant_1.SERVICE_IDENTIFIER.UserService)),
    __metadata("design:paramtypes", [Object])
], UserController);
exports.UserController = UserController;
