/*===== export metadata =====
{
  "contextId" : "",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "DeleteItems",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "DeleteItems",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "Item" ],
  "allObjectTypesValid" : false,
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
if (node!=null) {
	node.delete();
}
}