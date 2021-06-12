import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    emailId: string;
    mobileNumber: Number;
    hashedPassword: String;
    firstName: string;
    lastName: string;
    status: Boolean;
    roleId: String;
}

const UserSchema: Schema = new Schema({
    emailId: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    mobileNumber: { type: Number, required: false },
    hashedPassword: { type: String, required: true },
    status: { type: Boolean, required: false },
    roleId: { type: String, required: true },
});

// Export the model and return your IUser interface
const User = mongoose.model<IUser>('User', UserSchema);
export default User;