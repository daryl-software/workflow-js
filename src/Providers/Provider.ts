import Element from '../Elements/Element';

export default abstract class Provider<T extends Element> {
    public abstract getProviderType(): string;
    private registeredElements: Map<string, Map<string, new() => T>> = new Map();

    public register(element: new() => T): this {
        const providerType = this.getProviderType();
        if (!this.registeredElements.has(providerType)) {
            this.registeredElements.set(providerType, new Map());
        }

        this.registeredElements.get(providerType)!.set(new element().getName(), element);

        return this;
    }

    public createInstance(element: string): T {
        let type = this.registeredElements.get(this.getProviderType());
        let el = null;
        if (!type) {
            throw 'Provider ' + this.getProviderType + ' does not exist';
        } else {
            if (type.has(element)) {
                el = type.get(element)!;
            } else {
                throw 'Element ' + element + ' does not exist or not registered';
            }
        }

        return new el();
    }

    public getRegisteredElement(): Array<string> {
        return Array.from(this.registeredElements.get(this.getProviderType())?.keys() || []);
    }
}
