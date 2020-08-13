import {Parser} from "./Parser";
import {Workflow} from "./Workflow";

console.log('---------Starting---------');

let obj = {
    "name": "TestWorkflowInterface",
    "value": [
        {
            "type": "rule",
            "value": [
                {
                    "type": "condition",
                    "value": [
                        {
                            "type": "operator",
                            "value": [
                                {
                                    "type": "vars",
                                    "value": "channelId"
                                },
                                {
                                    "type": "scalar",
                                    "value": 2
                                }
                            ],
                            "operator": "equal"
                        },
                        {
                            "type": "operator",
                            "value": [
                                {
                                    "type": "vars",
                                    "value": "countryIso"
                                },
                                {
                                    "type": "scalar",
                                    "value": "FR"
                                }
                            ],
                            "operator": "equal"
                        }
                    ],
                    "operator": "all"
                }
            ],
            "return": 4
        }
    ]
}
let workflow = Parser.createFromJson(JSON.stringify(obj));

console.log(workflow.getResult({'channelId': 2}, Workflow.behaviorAllMatches))

console.log(workflow);
