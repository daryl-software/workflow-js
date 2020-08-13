"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Provider_1 = require("./Provider");
const Type_1 = require("../Elements/Types/Type");
class Type extends Provider_1.Provider {
    getProviderType() {
        return Type_1.Type;
    }
}
exports.Type = Type;
