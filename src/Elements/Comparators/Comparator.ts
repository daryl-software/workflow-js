import {Element} from '../Element';
import {Type} from '../Types/Type';

export abstract class Comparator extends Element {

    protected operands: Array<Type> = new Array<Type>();

    getHash(): string {
        return this.hash(this.operands);
    }
}
