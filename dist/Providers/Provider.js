"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Provider {
    constructor() {
        this.registeredElements = {};
    }
    register(element) {
        let providerType = this.getProviderType();
        if (!(element instanceof providerType)) {
            throw 'To register an element, you must extends ' + providerType.name;
        }
        if (!this.registeredElements.hasOwnProperty(providerType.name)) {
            this.registeredElements[providerType.name] = {};
        }
        this.registeredElements[providerType.name][element.name] = element;
        return this;
    }
    getClass(element) {
        let type = this.registeredElements[this.getProviderType().name];
        let el = null;
        if (type === null) {
            throw 'Element ' + this.getProviderType().name + ' does not exist';
        }
        else {
            if (type.hasOwnProperty(element)) {
                el = type[element];
            }
            else {
                throw 'Element ' + element + ' does not exist';
            }
        }
        return el;
    }
}
exports.Provider = Provider;
