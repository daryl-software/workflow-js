"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Provider {
    constructor() {
        this.registeredElements = new Map();
    }
    register(element) {
        const providerType = this.getProviderType();
        if (!this.registeredElements.has(providerType)) {
            this.registeredElements.set(providerType, new Map());
        }
        this.registeredElements.get(providerType).set(new element().getName(), element);
        return this;
    }
    createInstance(element) {
        let type = this.registeredElements.get(this.getProviderType());
        let el = null;
        if (!type) {
            throw 'Provider ' + this.getProviderType + ' does not exist';
        }
        else {
            if (type.has(element)) {
                el = type.get(element);
            }
            else {
                throw 'Element ' + element + ' does not exist or not registered';
            }
        }
        return new el();
    }
}
exports.default = Provider;
