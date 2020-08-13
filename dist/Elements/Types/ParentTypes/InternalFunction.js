"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ParentType_1 = require("./ParentType");
class InternalFunction extends ParentType_1.ParentType {
    constructor() {
        super(...arguments);
        this.name = 'internalFunction';
    }
    getHash() {
        return '';
    }
    getJSONData() {
        return {};
    }
    getResult(vars) {
        return vars;
    }
}
exports.InternalFunction = InternalFunction;
