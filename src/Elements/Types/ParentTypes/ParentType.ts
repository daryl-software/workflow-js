import {Type} from '../Type';
import {Loader} from "../../../Loader";

export abstract class ParentType extends Type {

    protected values: Array<Type> = new Array<Type>();

    public getValues(): Array<Type> {
        return this.values;
    }

    public addValue(value: Type): any {
        this.values.push(value);
        return this;
    }

    protected runThroughTree(vars: any) {
        let childrenValues:any[] = [];
        let values = this.getValues();

        for (let value of values) {
            //@TODO isValid
            if (value instanceof ParentType) {
                childrenValues.push(value.runThroughTree(vars));
            }else{
                childrenValues.push(value.getResult(vars, []));
            }
        }
        return this.getResult(vars, childrenValues)
    }

    public abstract createFromParser(parsedData: Object, configLoader: Loader): any;
}
