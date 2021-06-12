import { Request, Response } from "express";
import User from "../../models/userModel";

export const getUsers = async (req: Request, res: Response) => {
    try {
        const userList = await User.find((err: String, list: Object) => {
            if (err) {
                res.status(400).send({
                    data: err,
                    message: `User List Error`
                })
            }
            res.status(200).send({
                data: list,
                message: `User List Found Successfully.`
            })
        })
    }
    catch (err) {
        res.status(500).send({
            success: false,
            message: `Internal Server Problem`,
            data: `${err}`
        })
    }

}