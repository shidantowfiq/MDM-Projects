/*===== export metadata =====
{
  "contextId" : "",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "Create10Leafs",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "Create 10 Leafs",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "CurrentObjectBindContract",
    "alias" : "node",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node) {
var children = node.getChildren();
if (children==null || children.size()==0) {
	for (var i=0; i<10; i++) {
		node.createProduct("","Tree");
	}
}

}