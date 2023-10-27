/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "CatchRethrow3",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "CatchRethrow3",
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
try {
	new java.lang.String("Hello World").substring(0,100);
} catch (e) {
	if (e.javaException!=null && e.javaException.getClass().getName().equals("java.lang.StringIndexOutOfBoundsException"))
		logger.info("Attempting to ignore exception: " + e.javaException);
	/*else
		throw e;*/
}
}