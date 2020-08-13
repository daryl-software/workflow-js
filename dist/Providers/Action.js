"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Provider_1 = require("./Provider");
const Action_1 = require("../Elements/Actions/Action");
class Action extends Provider_1.Provider {
    getProviderType() {
        return Action_1.Action;
    }
}
exports.Action = Action;
