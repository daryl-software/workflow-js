import {Element} from "../Elements/Element";

export abstract class Provider {
    public abstract getProviderType(): Function;

    private registeredElements: Object = {};

    public register(element: Element) {
        let providerType = this.getProviderType();
        if (!(element instanceof providerType)) {
            throw 'To register an element, you must extends ' + providerType.name
        }
        if (!this.registeredElements.hasOwnProperty(providerType.name)) {
            // @ts-ignore
            this.registeredElements[providerType.name] = {};
        }

        // @ts-ignore
        this.registeredElements[providerType.name][element.name] = element;
        return this;
    }

    public getClass(element: string) {

        // @ts-ignore
        let type = this.registeredElements[this.getProviderType().name];
        let el = null;

        if (type === null) {
            throw 'Element ' + this.getProviderType().name + ' does not exist';
        } else {
            if (type.hasOwnProperty(element)) {
                el = type[element];
            } else {
                throw 'Element ' + element + ' does not exist';
            }
        }
        return el;
    }
}
