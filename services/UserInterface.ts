import { Request } from 'express';
import { ICustomer } from '../models/customer';

export interface IUserRequest extends Request {
    user: ICustomer
}