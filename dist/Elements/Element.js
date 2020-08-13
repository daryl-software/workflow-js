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
    constructor() {
    }
    toJSON() {
        let jsonData = this.getJSONData();
        jsonData.hash = this.getHash();
        return jsonData;
    }
    hash(elements) {
        let hashes = new Array();
        for (let element of elements) {
            hashes.push(element.getHash());
        }
        hashes.sort();
        return Crypto.createHash('md5').update(this.constructor.name + '.' + hashes.join('.')).digest('hex');
    }
    static create() {
        return new this();
    }
}
exports.Element = Element;
