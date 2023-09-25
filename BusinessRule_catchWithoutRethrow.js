/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "catchWithoutRethrow",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "catchWithoutRethrow",
  "description" : null,
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
    "contract" : "ReferenceTypeBindContract",
    "alias" : "referenceType",
    "parameterClass" : "com.stibo.core.domain.impl.ReferenceTypeImpl",
    "value" : "CrossSell",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,logger,referenceType) {
// PA Child Create Reference Action
// Demoing try/catch without rethrow issue

 

var targetNodeID = "SHTO-0003";       // Arbitrarily select an existing node to serve as our reference target
var targetNode = node.getManager().getProductHome().getProductByID(targetNodeID);
if (!targetNode) {
	throw targetNodeID+" not found";
}

 

// Create a reference. But if the reference already exists you get an error:
try {
   var newReference = node.createReference(targetNode, referenceType.getID());
} catch (e) {
   logger.info("Could not create "+referenceType.getID()+" reference from "+node.getID()+" to "+targetNode.getID()+" "+e.toString());
}

 

// How to properly handle? Query before creation!

/* 

var referenceExists = false;
var query = node.queryReferences(referenceType);
query.forEach(function(qref) {
    referenceExists = true;
    return true;
});
if (referenceExists) {
   logger.info(referenceType.getID()+" from "+node.getID()+" to "+targetNode.getID()+" already exists");
} else {
   var newReference = node.createReference(targetNode, referenceType.getID());
   logger.info(referenceType.getID()+" from "+node.getID()+" to "+targetNode.getID()+" was created");
}
*/
}