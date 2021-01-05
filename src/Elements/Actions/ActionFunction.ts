import Element from '../Element';
import Type from '../Types/Type';

export default abstract class ActionFunction extends Element {

    protected args: Array<Type> = [];

    public addArgs(arg: Type): void {
        this.args.push(arg);
    }

    public getArgs(): Array<Type> {
        return this.args;
    }

    public removeArgs(index: number) {
        return this.args.splice(index, 1);
    }

    public getHash(): string {
        return this.hashValues(this.args);
    }

    getJSONData(): { [p: string]: unknown } | null {
        return null;
    }
}
