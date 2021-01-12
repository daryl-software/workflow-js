"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Workflow_1 = __importDefault(require("./Workflow"));
const Rule_1 = __importDefault(require("./Elements/Types/ParentTypes/Rule"));
const Loader_1 = __importDefault(require("./Loader"));
class Parser {
    static createFromJson(json) {
        let decodedJson = null;
        try {
            decodedJson = JSON.parse(json);
        }
        catch (exception) { }
        if (decodedJson === null) {
            throw 'Invalid Workflow JSON';
        }
        const loader = new Loader_1.default();
        let workflow = new Workflow_1.default(decodedJson.name, loader);
        for (const value of decodedJson.value) {
            let parsedValue = Parser.parse(value, loader);
            if (parsedValue instanceof Rule_1.default) {
                workflow.addRules(parsedValue);
            }
        }
        return workflow;
    }
    static parse(decodedData, loader) {
        if (!decodedData.hasOwnProperty('type')) {
            throw '[Workflow parsing error] : Object type property must be defined';
        }
        let classType = loader.getTypeProviderConfig().createInstance(decodedData.type);
        let typeElement = classType.createFromParser(decodedData, loader);
        if (Array.isArray(decodedData.value)) {
            for (const value of decodedData.value) {
                typeElement.addValue(this.parse(value, loader));
            }
        }
        return typeElement;
    }
}
exports.default = Parser;
