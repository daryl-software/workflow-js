import Rule from './Elements/Types/ParentTypes/Rule';
import Loader from './Loader';
import { ScalarValue } from './typing/ScalarValue';
export default class Workflow {
    static readonly behaviorAllMatches: string;
    static readonly behaviorFirstMatches: string;
    static readonly STRING_SEPARATOR: string;
    private name;
    private rules;
    private loader;
    constructor(name: string, loader: Loader);
    getJSON(): string;
    toJSON(): {
        name: string;
        value: Rule[];
    };
    getName(): string;
    getFirstRule(): Rule | null;
    getRules(): Array<Rule>;
    addRules(rule: Rule): Workflow;
    getResult(vars: Map<string, ScalarValue>, behavior: string): any;
    getAllMatches(vars: Map<string, ScalarValue>): any[];
    getFirstMatch(vars: Map<string, ScalarValue>): any;
    isValid(vars: Map<string, ScalarValue>): boolean;
    getHash(): string;
    toString(): string;
    getDebugString(): string;
    attachNewRule(): Rule;
}
