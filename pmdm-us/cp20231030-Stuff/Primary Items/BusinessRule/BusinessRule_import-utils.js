/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "import-utils",
  "type" : "BusinessLibrary",
  "setupGroups" : [ "Libraries" ],
  "name" : "import-utils",
  "description" : null,
  "scope" : null,
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : false,
  "runPrivileged" : false,
  "onApprove" : null,
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessLibrary",
  "binds" : [ ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
function log(msg) {
	logger.info('LogMe : ' + msg)
}

/*===== business library exports - this part will not be imported to STEP =====*/
exports.log = log