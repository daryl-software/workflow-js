import ParentType from './ParentType';
import Type from '../Type';
import Loader from '../../../Loader';
import CompareOperator from '../../CompareOperators/CompareOperator';

export default class Comparator extends ParentType {

    public name = 'comparator';
    public comparator: CompareOperator | null = null;

    getHash(): string {
        if (this.comparator) {
            return this.hashValues(this.comparator?.getOperands(), this.comparator?.getName());
        } else {
            return '';
        }
    }

    getJSONData(): { [p: string]: unknown } | null {
        return {
            type: this.name,
            comparator: this.comparator?.getName(),
            value: this.comparator?.getOperands()
        };
    }

    getResult(vars: any, childrenValues: any): unknown {
        return this.comparator?.getResult(vars, childrenValues);
    }

    createFromParser(parsedData: { comparator: string }, loader: Loader): any {
        let instance = Comparator.create(loader);
        instance.comparator = loader.getComparatorProviderConfig().createInstance(parsedData.comparator);
        return instance;
    }

    isValid(vars: any, childrenValues: any): boolean {
        if (this.comparator === null) {
            return false;
        }
        return this.comparator.isValid(vars, childrenValues);
    }

    public setComparator(comparator: CompareOperator): this {
        this.comparator = comparator;
        return this;
    }

    public addValue(value: Type): any {
        if (!this.comparator) {
            throw `Can't add operand without any comparator`;
        }

        this.comparator.addOperand(value);
        return this;
    }

    public removeValue(index: number) {
        if (!this.comparator) {
            throw `Can't add operand without any comparator`;
        }

        this.comparator.removeOperand(index);
    }

    toString(): string {
        if (!this.comparator) {
            return '';
        }
        return this.comparator.toString();
    }

    public getValues(): Array<Type> {
        if (!this.comparator) {
            return [];
        }
        return this.comparator.getOperands();
    }
}
