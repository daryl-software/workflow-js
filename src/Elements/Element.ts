import * as Crypto from 'crypto';
import Loader from '../Loader';
import {ScalarValue} from '../typing/ScalarValue';

export default abstract class Element {

    constructor() {}

    protected abstract name: string;

    private loader!: Loader;

    public toJSON() {
        let jsonData = this.getJSONData();
        if (!jsonData) {
            return {};
        }

        // add object hash
        jsonData.hash = this.getHash();
        return jsonData;
    }

    protected hashValues<T extends Element>(elements: Array<T>, extraType: string = ''): string
    {
        let hashes: Array<string> = new Array<string>();
        for (let element of elements) {
            hashes.push(element.getHash());
        }
        hashes.sort();
        return this.hashString(this.constructor.name + '.' + extraType + '.' + hashes.join('.'));
    }

    protected hashString(string: string): string {
        return Crypto.createHash('md5').update(string).digest('hex');
    }

    public static create<T extends Element>(this: new () => T, loader: Loader): T {
        const instance = new this();
        instance.loader = loader;
        return instance;
    }

    public getName(): string {
        return this.name;
    }

    protected getLoader(): Loader {
        return this.loader;
    }

    public abstract getHash(): string;

    public abstract getJSONData(): { [p: string]: unknown } | null;

    public abstract getResult(vars: Map<string, ScalarValue>, childrenValues: any): unknown;

    public abstract isValid(vars: any, childrenValues: any): boolean;

    public abstract toString(): string;
}
