"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncriptPassHelpers = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class EncriptPassHelpers {
    encodePassword(pass) {
        const recurso = 10;
        let passEncoded = bcrypt_1.default.hash(pass, recurso);
        return passEncoded;
    }
    authPass(passEncoded, hashingPass) {
        let result = bcrypt_1.default.compare(passEncoded, hashingPass);
        return result;
    }
}
exports.EncriptPassHelpers = EncriptPassHelpers;
