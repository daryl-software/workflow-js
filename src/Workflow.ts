import Rule from './Elements/Types/ParentTypes/Rule';
import * as Crypto from 'crypto';
import Loader from './Loader';
import {ScalarValue} from './typing/ScalarValue';

export default class Workflow {
    static readonly behaviorAllMatches: string = 'allMatches';
    static readonly behaviorFirstMatches: string = 'firstMatches';
    static readonly STRING_SEPARATOR: string = '|';

    /**
     * Workflow name
     */
    private name: string;

    private rules: Array<Rule> = new Array<Rule>();

    private loader!: Loader;

    constructor(name: string, loader: Loader) {
        this.name = name;
        this.loader = loader;
    }

    public getJSON(): string {
        return JSON.stringify(this);
    }

    public toJSON() {
        return {
            name: this.name,
            value: this.rules
        }
    }

    public getName(): string {
        return this.name;
    }

    public getFirstRule(): Rule | null {
        return this.rules.length > 0 ? this.rules[0] : null;
    }

    public getRules(): Array<Rule> {
        return this.rules;
    }

    public addRules(rule: Rule): Workflow {
        this.rules.push(rule);
        return this;
    }

    public getResult(vars: Map<string, ScalarValue>, behavior: string) {
        switch (behavior) {
            case Workflow.behaviorAllMatches:
                return this.getAllMatches(vars);
            case Workflow.behaviorFirstMatches:
                return this.getFirstMatch(vars)
            default:
                throw 'This behavior (' + behavior + ') does not exist';
        }
    }

    public getAllMatches(vars: Map<string, ScalarValue>) {
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

    public getFirstMatch(vars: Map<string, ScalarValue>) {
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

    public toString() {
        return this.getRules().join(Workflow.STRING_SEPARATOR);
    }

    public getDebugString(): string {
        return this.toString();
    }

    public attachNewRule() {
        const rule = Rule.create(this.loader);
        this.addRules(rule);
        return rule;
    }
}
