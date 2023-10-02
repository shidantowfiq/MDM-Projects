/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "LOVCrossValidation2",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Conditions" ],
  "name" : "LOV Cross Validation(2)",
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
    "value" : "<map>\n  <entry>\n    <key LOVID=\"BestForLOV\">AR</key>\n    <value>\n      <set>\n        <element LOVID=\"SportLOV\">SO</element>\n      </set>\n    </value>\n  </entry>\n  <entry>\n    <key LOVID=\"BestForLOV\">SO</key>\n    <value>\n      <set>\n        <element LOVID=\"SportLOV\">RU</element>\n      </set>\n    </value>\n  </entry>\n  <entry>\n    <key LOVID=\"BestForLOV\">RO</key>\n    <value>\n      <set>\n        <element LOVID=\"SportLOV\">CY</element>\n      </set>\n    </value>\n  </entry>\n  <entry>\n    <key LOVID=\"BestForLOV\">GR</key>\n    <value>\n      <set>\n        <element LOVID=\"SportLOV\">SO</element>\n      </set>\n    </value>\n  </entry>\n  <entry>\n    <key LOVID=\"BestForLOV\">HA</key>\n    <value>\n      <set>\n        <element LOVID=\"SportLOV\">RU</element>\n      </set>\n    </value>\n  </entry>\n</map>"
  }, {
    "id" : "DefiningAttribute",
    "type" : "com.stibo.core.domain.Attribute",
    "value" : "BestFor"
  }, {
    "id" : "DependentAttribute",
    "type" : "com.stibo.core.domain.Attribute",
    "value" : "Sport"
  } ],
  "pluginType" : "Operation"
}
*/
