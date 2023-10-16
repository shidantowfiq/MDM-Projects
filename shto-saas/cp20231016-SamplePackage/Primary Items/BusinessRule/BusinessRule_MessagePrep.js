/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "MessagePrep",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "MessagePrep",
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
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "manager",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,logger,manager) {
var startTime = java.lang.System.currentTimeMillis();
var attr = manager.getAttributeHome().getAttributeByID("Subject");
node.setSimpleValue(attr, java.util.UUID.randomUUID().toString());
logger.info(node.getValue("Subject").getValue());
/*
var parent = node.getParent();
logger.info(parent.getID());
var kids = parent.getChildren();
for (var i = 0; i<10; i++) {
	parent.createEntity("","MEssage");
}
var parentCount = parent.getChildren().size();
logger.info(parentCount);
parent.getValue("MessageCount").setValue(parentCount);
*/
var endTime = java.lang.System.currentTimeMillis();
var attr2 = manager.getAttributeHome().getAttributeByID("BodyText");
node.setSimpleValue(attr2, "Once upon a time there was a guy who said, " +node.getName()+ " and he was born on "+ (startTime/1000) +" and died on " + (endTime/1000));

logger.info(node.getValue("BodyText").getSimpleValue());
	
}