/**
 * @flow
 * @relayHash 4bb2381091c18952395ef726006b5726
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateDailyTaskInput = {|
  clientMutationId: string,
  token: string,
  taskName: string,
  state: number,
|};
export type CreateDailyTaskMutationVariables = {|
  input: CreateDailyTaskInput
|};
export type CreateDailyTaskMutationResponse = {|
  +createDailyTask: ?{|
    +id: ?string
  |}
|};
export type CreateDailyTaskMutation = {|
  variables: CreateDailyTaskMutationVariables,
  response: CreateDailyTaskMutationResponse,
|};
*/


/*
mutation CreateDailyTaskMutation(
  $input: CreateDailyTaskInput!
) {
  createDailyTask(input: $input) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateDailyTaskInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createDailyTask",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateDailyTaskPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateDailyTaskMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateDailyTaskMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateDailyTaskMutation",
    "id": null,
    "text": "mutation CreateDailyTaskMutation(\n  $input: CreateDailyTaskInput!\n) {\n  createDailyTask(input: $input) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2eeff74f1965ed6f90a8e2bc316236ae';
module.exports = node;
