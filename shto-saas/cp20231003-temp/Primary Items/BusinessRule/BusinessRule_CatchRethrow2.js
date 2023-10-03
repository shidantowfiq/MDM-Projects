/*===== export metadata =====
{
  "contextId" : "English US",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "CatchRethrow2",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "CatchRethrow2",
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
	classification.getValue("NonExistentAttribute")
} catch (e) {
	if (e.javaException!=null && e.javaException.getClass().getName().equals("java.lang.IllegalArgumentException"))
		logger.info("Attempting to ignore exception: " + e.javaException);
	/*else
		throw e;*/
}
}