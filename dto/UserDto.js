"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
class UserDto {
    constructor(id, name, eMailId, mobileNumber, hashedPassword, status, roleId) {
        this.id = id;
        this.name = name;
        this.eMailId = eMailId;
        this.mobileNumber = mobileNumber;
        this.hashedPassword = hashedPassword;
        this.status = status;
        this.roleId = roleId;
    }
}
exports.UserDto = UserDto;
