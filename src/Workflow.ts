import {Rule} from './Elements/Types/ParentTypes/Rule';
import * as Crypto from "crypto";

export class Workflow {
    static readonly behaviorAllMatches: string = 'allMatches';
    static readonly behaviorFirstMatches: string = 'firstMatches';
    static readonly stringSeparator: string = '|';

    /**
     * Workflow name
     */
    private name: string;
    private rules: Array<Rule> = new Array<Rule>();

    constructor(name: string) {
        this.name = name;
    }

    public toJSON() {
        return {
            name: this.name,
            value: this.rules
        };
    }

    public getName(): string {
        return this.name;
    }

    public getRules(): Array<Rule> {
        return this.rules;
    }

    public addRules(rule: Rule): Workflow {
        this.rules.push(rule);
        return this;
    }

    public getResult(vars: Object, behavior: string) {
        switch (behavior) {
            case Workflow.behaviorAllMatches:
                return this.getAllMatches(vars);
            case Workflow.behaviorFirstMatches:
                return this.getFirstMatch(vars)
            default:
                throw 'This behavior (' + behavior + ') does not exist';
        }
    }

    public getAllMatches(vars: Object) {
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

    public getFirstMatch(vars: Object) {
        let rules = this.rules;
        for (const rule of rules) {
            let result = rule.run(vars);
            if (result) {
                return rule.getReturn();
            }
        }
    }

    public getHash() {
        let elements = this.rules;
        let hashes: Array<string> = new Array<string>();
        for (let element of elements) {
            hashes.push(element.getHash());
        }
        hashes.sort();
        return Crypto.createHash('md5').update(this.constructor.name + '.' + hashes.join('.')).digest('hex');
    }
}
