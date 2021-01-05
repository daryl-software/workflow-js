import Element from '../Elements/Element';
export default abstract class Provider<T extends Element> {
    abstract getProviderType(): string;
    private registeredElements;
    register(element: new () => T): this;
    createInstance(element: string): T;
    getRegisteredElement(): Array<string>;
}
