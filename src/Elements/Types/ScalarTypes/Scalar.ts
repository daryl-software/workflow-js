import {ScalarType} from './ScalarType';
import {Loader} from "../../../Loader";

export class Scalar extends ScalarType {

    public name = 'scalar';
    public scalarValue: number | string | Array<any> | null = null;

    getHash(): string {
        return '';
    }

    getJSONData(): { [p: string]: unknown } {
        return {}
    }

    getResult(vars: any, childrenValues: any): any {
        return this.scalarValue;
    }

    createFromParser(parsedData: { value: any }, configLoader: Loader): any {
        let instance = new Scalar();
        instance.scalarValue = parsedData.value;
        return instance;
    }
    isValid(vars: any, childrenValues: any): boolean {
        return this.scalarValue !== null;
    }
}
