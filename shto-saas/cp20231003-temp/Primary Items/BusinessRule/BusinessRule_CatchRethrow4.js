/*===== export metadata =====
{
  "contextId" : "English US",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "CatchRethrow4",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "CatchRethrow4",
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
	var stringMoreThan2K = "LongString";
	for (var i=0;i<2001;i++) {
		stringMoreThan2K = stringMoreThan2K + "A"; 
	}
	node.setName(stringMoreThan2K);
} catch (e) {
	if (e.javaException!=null && e.javaException instanceof com.stibo.core.domain.ValueValidatorException)
		logger.info("Ignore Exception");
	/*else 
		throw e;*/
}
}