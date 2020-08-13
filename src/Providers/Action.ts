import {Provider} from "./Provider";
import {Action as ActionElement} from "../Elements/Actions/Action";

export class Action extends Provider {
    getProviderType(): Function {
        return ActionElement;
    }

}
