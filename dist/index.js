"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Parser_1 = require("./Parser");
const Workflow_1 = require("./Workflow");
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
};
let workflow = Parser_1.Parser.createFromJson(JSON.stringify(obj));
console.log(workflow.getResult({ 'channelId': 2 }, Workflow_1.Workflow.behaviorAllMatches));
console.log(workflow);
