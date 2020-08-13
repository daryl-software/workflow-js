import {Action} from '../Action';

export class Times extends Action {

    public name = 'times';

    getHash(): string {
        return '';
    }

    getResult(vars: any, childrenValues: any): number {
        let result = childrenValues.shift();
        for (let childrenValue of childrenValues) {
            result *= childrenValue;
        }

        return result;
    }

    public isValid(vars: any, childrenValues: Array<any>): boolean {
        if (childrenValues.length === 0) {
            return false;
        }

        for (let childrenValue of childrenValues) {
            if (isNaN(Number(childrenValue))) {
                return false;
            }
        }
        return true;
    }
}
