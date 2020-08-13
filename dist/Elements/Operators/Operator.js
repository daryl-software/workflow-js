"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Element_1 = require("../Element");
class Operator extends Element_1.Element {
    constructor() {
        super(...arguments);
        this.operands = new Array();
    }
    getHash() {
        return this.hash(this.operands);
    }
}
exports.Operator = Operator;
