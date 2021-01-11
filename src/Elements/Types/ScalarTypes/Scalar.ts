import ScalarType from './ScalarType';
import Loader from '../../../Loader';

export default class Scalar extends ScalarType {

    public name = 'scalar';

    getResult(vars: any, childrenValues: any): any {
        return this.scalarValue;
    }

    createFromParser(parsedData: { value: any }, loader: Loader): any {
        let instance = Scalar.create(loader);
        instance.scalarValue = parsedData.value;
        return instance;
    }

    isValid(vars: any, childrenValues: any): boolean {
        return this.scalarValue !== null;
    }

    public toString(): string {
        return this.getValue() as string;
    }
}
