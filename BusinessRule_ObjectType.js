/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Approved"
}
*/
/*===== business rule definition =====
{
  "id" : "ObjectType",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Conditions" ],
  "name" : "Object Type Product",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "Item", "Level2", "Level3", "ObjectWithDCs" ],
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
    "values" : [ "step://product?id=ProductsRoot" ]
  } ],
  "pluginType" : "Operation"
}
*/
