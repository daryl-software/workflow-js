"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operator = exports.Any = exports.All = void 0;
const All_1 = __importDefault(require("./Operators/All"));
exports.All = All_1.default;
const Any_1 = __importDefault(require("./Operators/Any"));
exports.Any = Any_1.default;
const Operator_1 = __importDefault(require("./Operators/Operator"));
exports.Operator = Operator_1.default;
