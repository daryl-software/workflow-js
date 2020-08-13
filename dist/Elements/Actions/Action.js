"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Element_1 = require("../Element");
class Action extends Element_1.Element {
    constructor() {
        super(...arguments);
        this.args = new Array();
    }
    addArgs(arg) {
        this.args.push(arg);
    }
    getArgs() {
        return this.args;
    }
    getHash() {
        return this.hash(this.args);
    }
    getJSONData() {
        return {};
    }
}
exports.Action = Action;
