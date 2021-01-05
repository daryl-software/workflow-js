import Type from '../Type';
import {ScalarValue} from '../../../typing/ScalarValue';

export default abstract class ScalarType extends Type {

    protected scalarValue: ScalarValue | null = null;

    public getJSONData(): { [p: string]: unknown } | null {
        return {
            'type': this.getName(),
            'value': this.getValue()
        }
    }

    public getValue(): ScalarValue | null {
        return this.scalarValue;
    }

    public setValue(value: ScalarValue): void {
        this.scalarValue = value;
    }

    public getHash(): string {
        return this.hashString('Scalar:' + this.constructor.name + '.' + this.getValue());
    }
}
