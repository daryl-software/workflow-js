import {Provider} from "./Provider";
import {Type as TypeElement} from "../Elements/Types/Type";

export class Type extends Provider {
    getProviderType(): Function {
        return TypeElement;
    }


}
