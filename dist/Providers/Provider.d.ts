import { Element } from "../Elements/Element";
export declare abstract class Provider {
    abstract getProviderType(): Function;
    private registeredElements;
    register(element: Element): this;
    getClass(element: string): any;
}
