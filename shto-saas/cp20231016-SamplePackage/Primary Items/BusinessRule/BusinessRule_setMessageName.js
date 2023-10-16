/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "setMessageName",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "setMessageName",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "MEssage" ],
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
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "logger",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,logger) {
var objType = node.getObjectType().getName();
var id = node.getID();
var staticText = "My name is ";
logger.info(objType);
logger.info(id);
logger.info(staticText);
if(objType != null || id  != null || staticText != null){
	node.setName(staticText + " "
			+ id + " " 
				+ objType + " " 
					+ "!!!");

} else {
	//do nothing
}

}