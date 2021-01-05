"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Provider_1 = __importDefault(require("./Provider"));
class ComparatorProvider extends Provider_1.default {
    getProviderType() {
        return 'comparator';
    }
}
exports.default = ComparatorProvider;
