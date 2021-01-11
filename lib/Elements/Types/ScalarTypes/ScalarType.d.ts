import Type from '../Type';
import { ScalarValue } from '../../../typing/ScalarValue';
export default abstract class ScalarType extends Type {
    protected scalarValue: ScalarValue | null;
    getJSONData(): {
        [p: string]: unknown;
    } | null;
    getValue(): ScalarValue | null;
    setValue(value: ScalarValue): void;
    getHash(): string;
}
