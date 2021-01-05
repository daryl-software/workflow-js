import ScalarType from './ScalarType';
import Loader from '../../../Loader';
import {ScalarValue} from '../../../typing/ScalarValue';

export default class Variable extends ScalarType {

    public name = 'variable';

    getResult(vars: Map<string, ScalarValue>, childrenValues: any) {
        if (this.scalarValue === null){
            throw 'No value defined';
        }
        if (!vars.has(this.scalarValue as string)) {
            throw 'Variable "' + this.scalarValue + '" does not exist';
        }
        return vars.get(this.scalarValue as string);
    }

    createFromParser(parsedData: { value: any }, loader: Loader): any {
        let instance = Variable.create(loader);
        instance.scalarValue = parsedData.value;
        return instance;
    }

    isValid(vars: Map<string, ScalarValue>, childrenValues: Array<any>): boolean {
        if (this.getValue()) {
            console.log('la');
            console.log(vars.has(this.getValue() as string) !== null);
            return vars.has(this.getValue() as string) !== null;
        }
        throw `Variable must have a value`;
    }

    public toString(): string {
        return this.getValue() as string;
    }
}
