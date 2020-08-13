import {ScalarType} from './ScalarType';
import {Loader} from "../../../Loader";

export class Vars extends ScalarType {

    public name = 'vars';
    public scalarValue: number | string | Array<any> | null = null;

    getHash(): string {
        return '';
    }

    getJSONData(): { [p: string]: unknown } {
        return {};
    }

    getResult(vars: any, childrenValues: any) {
        if(this.scalarValue === null){
            throw 'Unknown error' //@TODO
        }
        if (!vars.hasOwnProperty(this.scalarValue)) {
            throw 'Vars "' + this.scalarValue + '" does not exist';
        }
        // @ts-ignore
        return vars[this.scalarValue];
    }

    createFromParser(parsedData: { value: any }, configLoader: Loader): any {
        let instance = new Vars();
        instance.scalarValue = parsedData.value;
        return instance;
    }

    isValid(vars: any, childrenValues: any): boolean {
        return this.scalarValue !== null;
    }


}
