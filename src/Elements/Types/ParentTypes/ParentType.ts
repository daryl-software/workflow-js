import Type from '../Type';
import Loader from '../../../Loader';
import {ScalarValue} from '../../../typing/ScalarValue';

export default abstract class ParentType extends Type {

    protected values: Array<Type> = new Array<Type>();

    public getValues(): Array<Type> {
        return this.values;
    }

    public addValue(value: Type): any {
        this.values.push(value);
        return this;
    }

    public removeValue(index: number) {
        this.values.splice(index, 1);
    }

    protected runThroughTree(vars: Map<string, ScalarValue>) {
        let childrenValues:any[] = [];
        let values = this.getValues();

        for (let value of values) {
            if (value instanceof ParentType) {
                childrenValues.push(value.runThroughTree(vars));
            } else {
                if (!value.isValid(vars, [])) {
                    throw `Child ${value.constructor.name} has not a valid value`;
                }
                childrenValues.push(value.getResult(vars,  []));
            }
        }

        if (!this.isValid(vars, childrenValues)) {
            throw `${this.constructor.name} has not valid value`;
        }
        return this.getResult(vars, childrenValues);
    }

    getHash(): string {
        return this.hashValues(this.getValues());
    }

    public abstract createFromParser(parsedData: Object, configLoader: Loader): any;
}
