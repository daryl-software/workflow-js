import { Rule } from './Elements/Types/ParentTypes/Rule';
export declare class Workflow {
    static readonly behaviorAllMatches: string;
    static readonly behaviorFirstMatches: string;
    static readonly stringSeparator: string;
    private name;
    private rules;
    constructor(name: string);
    toJSON(): {
        name: string;
        value: Rule[];
    };
    getName(): string;
    getRules(): Array<Rule>;
    addRules(rule: Rule): Workflow;
    getResult(vars: Object, behavior: string): any;
    getAllMatches(vars: Object): any[];
    getFirstMatch(vars: Object): any;
    getHash(): string;
}
