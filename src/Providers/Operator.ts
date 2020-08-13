import {Provider} from "./Provider";
import {Comparator} from "../Elements/Comparators/Comparator";

export class Operator extends Provider {
    getProviderType(): Function {
        return Comparator;
    }

}
