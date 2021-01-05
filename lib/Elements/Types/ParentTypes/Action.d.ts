import ParentType from './ParentType';
import Loader from '../../../Loader';
import ActionElement from '../../Actions/ActionOperator';
export default class Action extends ParentType {
    name: string;
    function: ActionElement | null;
    getJSONData(): {
        [p: string]: unknown;
    } | null;
    getResult(vars: any, childrenValues: any): unknown;
    createFromParser(parsedData: {
        name: string;
    }, loader: Loader): Action;
    isValid(vars: any, childrenValues: any): boolean;
    toString(): string;
}
