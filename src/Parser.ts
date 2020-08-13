import {Workflow} from "./Workflow";
import {Rule} from "./Elements/Types/ParentTypes/Rule";
import {Type} from "./Elements/Types/Type";
import {Loader} from "./Loader";

export class Parser {

    public static createFromJson(json: string): Workflow {
        let decodedJson = JSON.parse(json);
        if (decodedJson === null) {
            throw 'Invalid JSON';
        }
        let workflow = new Workflow(decodedJson.name)

        for (const value of decodedJson.value) {
            let parsedValue = Parser.parse(value);
            if (parsedValue instanceof Rule) {
                workflow.addRules(parsedValue);
            }
        }
        return workflow;
    }

    private static parse(decodedData: any, loader?: Loader): Type {

        if (!decodedData.hasOwnProperty('type')) {
            //@TODO
            throw 'Object type property must be defined';
        }

        if (typeof loader == 'undefined') {
            loader = new Loader();
        }

        let classType = loader.getTypeProviderConfig().getClass(decodedData.type);

        let typeElement = classType.createFromParser(decodedData, loader);
        if (Array.isArray(decodedData.value)) {
            for (let value of decodedData.value) {
                typeElement.addValue(this.parse(value, loader))
            }
        }
        return typeElement;
    }
}
