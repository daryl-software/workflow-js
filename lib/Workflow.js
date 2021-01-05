"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = __importDefault(require("./Elements/Types/ParentTypes/Rule"));
const Crypto = __importStar(require("crypto"));
class Workflow {
    constructor(name, loader) {
        this.rules = new Array();
        this.name = name;
        this.loader = loader;
    }
    getJSON() {
        return JSON.stringify(this);
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
    getFirstRule() {
        return this.rules.length > 0 ? this.rules[0] : null;
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
    toString() {
        return this.getRules().join(Workflow.STRING_SEPARATOR);
    }
    getDebugString() {
        return this.toString();
    }
    attachNewRule() {
        const rule = Rule_1.default.create(this.loader);
        this.addRules(rule);
        return rule;
    }
}
exports.default = Workflow;
Workflow.behaviorAllMatches = 'allMatches';
Workflow.behaviorFirstMatches = 'firstMatches';
Workflow.STRING_SEPARATOR = '|';
