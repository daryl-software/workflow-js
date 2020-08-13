"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Provider_1 = require("./Provider");
const Comparator_1 = require("../Elements/Comparators/Comparator");
class Operator extends Provider_1.Provider {
    getProviderType() {
        return Comparator_1.Comparator;
    }
}
exports.Operator = Operator;
