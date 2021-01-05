import Provider from './Provider';
import { CompareOperator } from '../Elements';
export default class ComparatorProvider extends Provider<CompareOperator> {
    getProviderType(): string;
}
