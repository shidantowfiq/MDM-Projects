/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "ObjectTypeEntity",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Conditions" ],
  "name" : "Object Type Entity",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "Entity" ],
  "allObjectTypesValid" : false,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "ValidHierarchiesBusinessCondition",
  "parameters" : [ {
    "id" : "HierarchyRoots",
    "type" : "java.util.List",
    "values" : [ "step://entity?id=CustomerHierarchy", "step://entity?id=PoojaCorpEmployees" ]
  } ],
  "pluginType" : "Operation"
}
*/
