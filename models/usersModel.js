"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const UserSchema = new mongoose_1.Schema({
    eMailId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    mobileNumber: { type: Number, required: false },
    hashedPassword: { type: String, required: true },
    status: { type: Boolean, required: false },
    roleId: { type: String, required: true },
});
// Export the model and return your IUser interface
const UserModel = mongoose_1.default.model('users', UserSchema);
exports.default = UserModel;
// export class UserModel {
//     constructor(id: String, name: string, eMailId: string, mobileNumber: String, hashedPassword: String, status: Boolean, roleId: String) {
//         this.id = id;
//         this.name = name;
//         this.eMailId = eMailId;
//         this.mobileNumber = mobileNumber;
//         this.hashedPassword = hashedPassword;
//         this.status = status;
//         this.roleId = roleId;
//     }
//     public id: String;
//     public name: string;
//     public eMailId: string;
//     public mobileNumber: String;
//     public hashedPassword: String;
//     public status: Boolean;
//     public roleId: String;
// }
