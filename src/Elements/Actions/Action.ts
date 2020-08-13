import {Element} from '../Element';
import {Type} from '../Types/Type';

export abstract class Action extends Element {

    protected args: Array<Type> = new Array<Type>();

    public addArgs(arg: Type): void {
        this.args.push(arg);
    }

    public getArgs(): Array<Type> {
        return this.args;
    }

    public getHash(): string {
        return this.hash(this.args);
    }

    getJSONData(): { [p: string]: unknown } {
        return {};
    }
}
