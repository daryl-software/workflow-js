import Provider from './Provider';
import ActionFunction from '../Elements/Actions/ActionFunction';
export default class ActionProvider extends Provider<ActionFunction> {
    getProviderType(): string;
}
