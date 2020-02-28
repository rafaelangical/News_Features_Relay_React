/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserComponent_user$ref: FragmentReference;
declare export opaque type UserComponent_user$fragmentType: UserComponent_user$ref;
export type UserComponent_user = {|
  +name: ?string,
  +id: string,
  +email: ?string,
  +_id: ?string,
  +$refType: UserComponent_user$ref,
|};
export type UserComponent_user$data = UserComponent_user;
export type UserComponent_user$key = {
  +$data?: UserComponent_user$data,
  +$fragmentRefs: UserComponent_user$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "UserComponent_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "email",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "_id",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '4513536caaa771a2cde318bfb6667c7a';

module.exports = node;
