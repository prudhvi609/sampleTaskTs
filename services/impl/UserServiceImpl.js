"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServiceImpl = void 0;
const usersModel_1 = __importDefault(require("../../models/usersModel"));
const inversify_1 = require("inversify");
const UserDto_1 = require("../../dto/UserDto");
let UserServiceImpl = class UserServiceImpl {
    constructor() {
        this.usersList = new Array();
    }
    addUser(userObj) {
        let user = usersModel_1.default.create({ "id": "", "name": "prudhvi", "eMailId": "prudhvi@gmail.com", "mobileNumber": "9192939495", "hashedPassword": "abc@123", "status": true, "roleId": "a" });
        return userObj;
        // return this.usersList.push(userObj);
    }
    updateUserById(id, updateObj) {
        return new UserDto_1.UserDto('1', 'abc', 'abc@gmail.com', "9897877676", 'abc@123', true, "321");
    }
    listUsers() {
        return this.usersList;
    }
    getUserById(id) {
        return new UserDto_1.UserDto('1', 'abc', 'abc@gmail.com', "9897877676", 'abc@123', true, "321");
    }
    deleteUserById(id) {
        return new UserDto_1.UserDto('1', 'abc', 'abc@gmail.com', "9897877676", 'abc@123', true, "321");
    }
};
UserServiceImpl = __decorate([
    inversify_1.injectable()
], UserServiceImpl);
exports.UserServiceImpl = UserServiceImpl;
