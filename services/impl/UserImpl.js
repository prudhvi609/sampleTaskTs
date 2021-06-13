"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const customer_1 = __importDefault(require("../../models/customer"));
exports.getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userList = yield customer_1.default.find((err, list) => {
            if (err) {
                res.status(400).send({
                    data: err,
                    message: `User List Error`
                });
            }
            res.status(200).send({
                data: list,
                message: `User List Found Successfully.`
            });
        });
    }
    catch (err) {
        res.status(500).send({
            success: false,
            message: `Internal Server Problem`,
            data: `${err}`
        });
    }
});
