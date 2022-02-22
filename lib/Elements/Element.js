"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Crypto = __importStar(require("crypto"));
class Element {
    constructor() { }
    toJSON() {
        let jsonData = this.getJSONData();
        if (!jsonData) {
            return {};
        }
        jsonData.hash = this.getHash();
        return jsonData;
    }
    hashValues(elements, extraType = '') {
        let hashes = new Array();
        for (let element of elements) {
            hashes.push(element.getHash());
        }
        hashes.sort();
        return this.hashString(this.constructor.name + '.' + extraType + '.' + hashes.join('.'));
    }
    hashString(string) {
        return Crypto.createHash('md5').update(string).digest('hex');
    }
    static create(loader) {
        const instance = new this();
        instance.loader = loader;
        return instance;
    }
    getName() {
        return this.name;
    }
    getLoader() {
        return this.loader;
    }
}
exports.default = Element;
