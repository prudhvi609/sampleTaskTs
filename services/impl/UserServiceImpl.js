"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const usersModel_1 = require("../../models/usersModel");
const inversify_1 = require("inversify");
let UserServiceImpl = class UserServiceImpl {
    constructor() {
        this.usersList = new Array();
    }
    addUser(userObj) {
        return this.usersList.push(userObj);
    }
    updateUserById(id, updateObj) {
        return new usersModel_1.UserModel('1', 'abc', 'abc@gmail.com', 9897877676, 'abc@123', true, "321");
    }
    listUsers() {
        return this.usersList;
    }
    getUserById(id) {
        return new usersModel_1.UserModel('1', 'abc', 'abc@gmail.com', 9897877676, 'abc@123', true, "321");
    }
    deleteUserById(id) {
        return new usersModel_1.UserModel('1', 'abc', 'abc@gmail.com', 9897877676, 'abc@123', true, "321");
    }
};
UserServiceImpl = __decorate([
    inversify_1.injectable()
], UserServiceImpl);
exports.UserServiceImpl = UserServiceImpl;
