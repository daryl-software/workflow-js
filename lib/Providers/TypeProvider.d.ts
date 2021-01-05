import Provider from './Provider';
import Type from '../Elements/Types/Type';
export default class TypeProvider extends Provider<Type> {
    getProviderType(): string;
}
