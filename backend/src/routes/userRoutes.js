"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userContoller_1 = require("../controllers/userContoller");
const router = express_1.default.Router();
router.post('/register', userContoller_1.registerUser);
router.post('/login', userContoller_1.loginUser);
router.post('/logout', userContoller_1.logoutUser);
exports.default = router;
