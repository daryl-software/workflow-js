"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Crypto = __importStar(require("crypto"));
class Workflow {
    constructor(name) {
        this.rules = new Array();
        this.name = name;
    }
    toJSON() {
        return {
            name: this.name,
            value: this.rules
        };
    }
    getName() {
        return this.name;
    }
    getRules() {
        return this.rules;
    }
    addRules(rule) {
        this.rules.push(rule);
        return this;
    }
    getResult(vars, behavior) {
        switch (behavior) {
            case Workflow.behaviorAllMatches:
                return this.getAllMatches(vars);
            case Workflow.behaviorFirstMatches:
                return this.getFirstMatch(vars);
            default:
                throw 'This behavior (' + behavior + ') does not exist';
        }
    }
    getAllMatches(vars) {
        let rules = this.rules;
        let results = [];
        for (const rule of rules) {
            let result = rule.run(vars);
            if (result) {
                results.push(rule.getReturn());
            }
        }
        return results;
    }
    getFirstMatch(vars) {
        let rules = this.rules;
        for (const rule of rules) {
            let result = rule.run(vars);
            if (result) {
                return rule.getReturn();
            }
        }
    }
    getHash() {
        let elements = this.rules;
        let hashes = new Array();
        for (let element of elements) {
            hashes.push(element.getHash());
        }
        hashes.sort();
        return Crypto.createHash('md5').update(this.constructor.name + '.' + hashes.join('.')).digest('hex');
    }
}
exports.Workflow = Workflow;
Workflow.behaviorAllMatches = 'allMatches';
Workflow.behaviorFirstMatches = 'firstMatches';
Workflow.stringSeparator = '|';
