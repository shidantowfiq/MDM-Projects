/*===== export metadata =====
{
  "contextId" : "English US",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "CatchRethrow1",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "CatchRethrow1",
  "description" : "RD-20365",
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
    "contract" : "ManagerBindContract",
    "alias" : "manager",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "logger",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
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
exports.operation0 = function (manager,logger,node) {
var classification = manager.getClassificationHome().getClassificationByID("ConfigurationsRoot");
try {
	classification.removeAsset(null);
} catch (e) {
	logger.info("Attempting to ignore exception: " + e.javaException);
}
}