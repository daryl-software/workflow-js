"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Workflow_1 = require("./Workflow");
const Rule_1 = require("./Elements/Types/ParentTypes/Rule");
const Loader_1 = require("./Loader");
class Parser {
    static createFromJson(json) {
        let decodedJson = JSON.parse(json);
        if (decodedJson === null) {
            throw 'Invalid JSON';
        }
        let workflow = new Workflow_1.Workflow(decodedJson.name);
        for (const value of decodedJson.value) {
            let parsedValue = Parser.parse(value);
            if (parsedValue instanceof Rule_1.Rule) {
                workflow.addRules(parsedValue);
            }
        }
        return workflow;
    }
    static parse(decodedData, loader) {
        if (!decodedData.hasOwnProperty('type')) {
            throw 'Object type property must be defined';
        }
        if (typeof loader == 'undefined') {
            loader = new Loader_1.Loader();
        }
        let classType = loader.getTypeProviderConfig().getClass(decodedData.type);
        let typeElement = classType.createFromParser(decodedData, loader);
        if (Array.isArray(decodedData.value)) {
            for (let value of decodedData.value) {
                typeElement.addValue(this.parse(value, loader));
            }
        }
        return typeElement;
    }
}
exports.Parser = Parser;
