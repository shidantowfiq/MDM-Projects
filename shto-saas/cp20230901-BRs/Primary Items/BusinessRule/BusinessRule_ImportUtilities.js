/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "ImportUtilities",
  "type" : "BusinessLibrary",
  "setupGroups" : [ "Libraries" ],
  "name" : "ImportUtilities",
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
function setBusinessName(node, log) {
	var lastName = node.getValue("LastName").getSimpleValue();
	if("".equals(lastName) || lastName == null) {
		//Do nothing
		log.info("LastName is blank, so skipping rule to set business name for " + node.getID());
	} else {
		node.getValue("BusinessName").setSimpleValue(lastName);
	    	node.getValue("LastName").setSimpleValue("");
	}
}
/*===== business library exports - this part will not be imported to STEP =====*/
exports.setBusinessName = setBusinessName