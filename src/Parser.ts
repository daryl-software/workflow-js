import Workflow from './Workflow';
import Rule from './Elements/Types/ParentTypes/Rule';
import Loader from './Loader';
import ParentType from './Elements/Types/ParentTypes/ParentType';

export default class Parser {

    public static createFromJson(json: string): Workflow {
        let decodedJson = JSON.parse(json);
        if (decodedJson === null) {
            throw 'Invalid JSON';
        }
        const loader = new Loader();

        let workflow = new Workflow(decodedJson.name, loader)

        for (const value of decodedJson.value) {
            let parsedValue = Parser.parse(value, loader);
            if (parsedValue instanceof Rule) {
                workflow.addRules(parsedValue);
            }
        }
        return workflow;
    }

    private static parse(decodedData: any, loader: Loader): ParentType {
        if (!decodedData.hasOwnProperty('type')) {
            throw 'Object type property must be defined';
        }

        let classType = loader.getTypeProviderConfig().createInstance(decodedData.type) as ParentType;
        let typeElement: ParentType = classType.createFromParser(decodedData, loader);
        if (Array.isArray(decodedData.value)) {
            for (const value of decodedData.value) {
                typeElement.addValue(this.parse(value, loader))
            }
        }
        return typeElement;
    }
}
