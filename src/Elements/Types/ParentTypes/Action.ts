import ParentType from './ParentType';
import Loader from '../../../Loader';
import ActionElement from '../../Actions/ActionOperator';

export default class Action extends ParentType {
    public name = 'internalFunction';
    public function: ActionElement | null = null;

    getJSONData(): { [p: string]: unknown } | null {
        return {};
    }

    getResult(vars: any, childrenValues: any): unknown {
        return this.function?.getResult(vars, childrenValues);
    }

    createFromParser(parsedData: { name: string }, loader: Loader): Action {
        let instance = Action.create(loader);
        instance.function = loader.getActionProviderConfig().createInstance(parsedData.name);
        return instance;
    }

    isValid(vars: any, childrenValues: any): boolean {
        if (this.function === null) {
            return false;
        }
        return this.function.isValid(vars, childrenValues);
    }

    public toString(): string {
        if (!this.function) {
            return '';
        }
        return '(' + this.function.toString() + ')';
    }
}
