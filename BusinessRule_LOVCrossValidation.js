/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "LOVCrossValidation",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Conditions" ],
  "name" : "LOV Cross Validation",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "Item" ],
  "allObjectTypesValid" : false,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "LOVCrossValidationBusinessCondition",
  "parameters" : [ {
    "id" : "Config",
    "type" : "com.stibo.core.domain.parameter.LOVCrossValidationConfig",
    "value" : "<map>\n  <entry>\n    <key LOVID=\"SportLOV\">SO</key>\n    <value>\n      <set>\n        <element LOVID=\"BestForLOV\">GR</element>\n        <element LOVID=\"BestForLOV\">AR</element>\n      </set>\n    </value>\n  </entry>\n  <entry>\n    <key LOVID=\"SportLOV\">CY</key>\n    <value>\n      <set>\n        <element LOVID=\"BestForLOV\">RO</element>\n      </set>\n    </value>\n  </entry>\n  <entry>\n    <key LOVID=\"SportLOV\">RU</key>\n    <value>\n      <set>\n        <element LOVID=\"BestForLOV\">HA</element>\n        <element LOVID=\"BestForLOV\">SO</element>\n      </set>\n    </value>\n  </entry>\n</map>"
  }, {
    "id" : "DefiningAttribute",
    "type" : "com.stibo.core.domain.Attribute",
    "value" : "Sport"
  }, {
    "id" : "DependentAttribute",
    "type" : "com.stibo.core.domain.Attribute",
    "value" : "BestFor"
  } ],
  "pluginType" : "Operation"
}
*/
