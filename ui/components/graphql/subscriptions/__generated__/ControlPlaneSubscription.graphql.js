/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MeshType = "ALL_MESH" | "APP_MESH" | "CITRIX_SERVICE_MESH" | "CONSUL" | "INVALID_MESH" | "ISTIO" | "KUMA" | "LINKERD" | "NETWORK_SERVICE_MESH" | "NGINX_SERVICE_MESH" | "OCTARINE" | "OPEN_SERVICE_MESH" | "TANZU" | "TRAEFIK_MESH" | "%future added value";
export type ServiceMeshFilter = {|
  type?: ?MeshType
|};
export type ControlPlaneSubscriptionVariables = {|
  filter?: ?ServiceMeshFilter
|};
export type ControlPlaneSubscriptionResponse = {|
  +controlPlanesState: $ReadOnlyArray<{|
    +name: string,
    +members: $ReadOnlyArray<{|
      +name: string,
      +version: string,
      +component: string,
      +namespace: string,
    |}>,
  |}>
|};
export type ControlPlaneSubscription = {|
  variables: ControlPlaneSubscriptionVariables,
  response: ControlPlaneSubscriptionResponse,
|};
*/


/*
subscription ControlPlaneSubscription(
  $filter: ServiceMeshFilter
) {
  controlPlanesState: listenToControlPlaneState(filter: $filter) {
    name
    members {
      name
      version
      component
      namespace
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "filter"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = [
  {
    "alias": "controlPlanesState",
    "args": [
      {
        "kind": "Variable",
        "name": "filter",
        "variableName": "filter"
      }
    ],
    "concreteType": "ControlPlane",
    "kind": "LinkedField",
    "name": "listenToControlPlaneState",
    "plural": true,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "ControlPlaneMember",
        "kind": "LinkedField",
        "name": "members",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "version",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "component",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "namespace",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ControlPlaneSubscription",
    "selections": (v2/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ControlPlaneSubscription",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "e552aaa57cd93a93a1bd7bf1a9a27e57",
    "id": null,
    "metadata": {},
    "name": "ControlPlaneSubscription",
    "operationKind": "subscription",
    "text": "subscription ControlPlaneSubscription(\n  $filter: ServiceMeshFilter\n) {\n  controlPlanesState: listenToControlPlaneState(filter: $filter) {\n    name\n    members {\n      name\n      version\n      component\n      namespace\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '615008f1bb16f855507fa1c841187200';

module.exports = node;
