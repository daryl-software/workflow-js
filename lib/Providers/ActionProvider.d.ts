import Provider from './Provider';
import ActionOperator from '../Elements/Actions/ActionOperator';
export default class ActionProvider extends Provider<ActionOperator> {
    getProviderType(): string;
}
