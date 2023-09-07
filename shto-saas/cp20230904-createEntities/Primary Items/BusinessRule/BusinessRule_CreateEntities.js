/*===== export metadata =====
{
  "contextId" : null,
  "workspaceId" : null
}
*/
/*===== business rule definition =====
{
  "id" : "CreateEntities",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "Create Entities",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "EntityCategory", "Messages", "MyEntities" ],
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
var children = node.getChildren();
var iMax = 111;
for (var i=0; i<iMax; i++) {
	node.createEntity("","MEssage");
	iCurrent = i + 1;
	log.info("Created entity " + iCurrent + " of " + iMax);
}
}