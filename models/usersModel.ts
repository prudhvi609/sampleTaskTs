import mongoose, { Schema, Document } from 'mongoose';

export interface IUserModel extends Document {
    eMailId: string;
    mobileNumber: Number;
    hashedPassword: String;
    name: String;
    status: Boolean;
    roleId: String;
}

const UserSchema: Schema = new Schema({
    eMailId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    mobileNumber: { type: Number, required: false },
    hashedPassword: { type: String, required: true },
    status: { type: Boolean, required: false },
    roleId: { type: String, required: true },
});

// Export the model and return your IUser interface
const UserModel = mongoose.model<IUserModel>('users', UserSchema);
export default UserModel;


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

