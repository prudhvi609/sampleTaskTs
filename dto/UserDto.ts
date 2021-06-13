export class UserDto {

    constructor(id: String, name: string, eMailId: string, mobileNumber: String, hashedPassword: String, status: Boolean, roleId: String) {
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
    public mobileNumber: String;
    public hashedPassword: String;
    public status: Boolean;
    public roleId: String;
}