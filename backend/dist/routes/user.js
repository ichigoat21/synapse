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
const express_1 = require("express");
const zod_1 = __importDefault(require("zod"));
const schema_1 = __importDefault(require("../schema"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const User = zod_1.default.object({
    username: zod_1.default.string().max(10).min(3),
    password: zod_1.default.string().max(20).min(8)
});
const userRouter = (0, express_1.Router)();
userRouter.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = User.parse(req.body);
        if (!user) {
            return res.status(411).json({
                message: 'Error in Inputs'
            });
        }
        const username = user.username;
        const password = user.password;
        const hashedPassword = yield bcrypt_1.default.hash(password, 9);
        const userDB = yield schema_1.default.create({
            username: username,
            password: hashedPassword
        });
        res.status(200).json({
            message: 'You are signed in',
            userid: userDB._id
        });
    }
    catch (_a) {
        res.status(500).json({
            message: 'Server Error'
        });
    }
}));
exports.default = userRouter;
