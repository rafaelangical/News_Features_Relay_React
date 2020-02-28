/**
 * @flow
 * @relayHash 9955873a11d395f6b20276d1510db08f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type App_QueryVariables = {|
  id: string
|};
export type App_QueryResponse = {|
  +user: ?{|
    +_id: ?string,
    +id: string,
    +name: ?string,
    +email: ?string,
  |}
|};
export type App_Query = {|
  variables: App_QueryVariables,
  response: App_QueryResponse,
|};
*/


/*
query App_Query(
  $id: ID!
) {
  user(id: $id) {
    _id
    id
    name
    email
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "user",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "User",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "_id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "email",
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
    "name": "App_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "App_Query",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "App_Query",
    "id": null,
    "text": "query App_Query(\n  $id: ID!\n) {\n  user(id: $id) {\n    _id\n    id\n    name\n    email\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9b9eb5852e1cbd67c5caaeadff7a41b9';

module.exports = node;
