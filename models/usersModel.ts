export class UserModel {

    constructor(id: String, name: string, eMailId: string, mobileNumber: number, hashedPassword: String, status: Boolean, roleId: String) {
        this.id = id;
        this.name = name;
        this.eMailId = eMailId;
        this.mobileNumber = mobileNumber;
        this.hashedPassword = hashedPassword;
        this.status = status;
        this.roleId = roleId;
    }

    public id: String;
    public name: string;
    public eMailId: string;
    public mobileNumber: number;
    public hashedPassword: String;
    public status: Boolean;
    public roleId: String;
}