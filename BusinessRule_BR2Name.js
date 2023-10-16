/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BR2Name",
  "type" : "BusinessAction",
  "setupGroups" : [ "SAASMTLSActions" ],
  "name" : "BR2",
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
    "contract" : "GatewayBinding",
    "alias" : "gateway",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.gateway.FrontGatewayIntegrationEndpointImpl",
    "value" : "Saasaksqa1",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (gateway) {
var parameters = new java.util.HashMap();
parameters.put("context","Context1");
parameters.put("workspace","Main");
var result = gateway.post().body('--abcde12345\nContent-Disposition: form-data; name=nodeID\r\nContent-Type: text/plain\r\n\r\nAsset\r\n--abcde12345\nContent-Disposition: form-data; name=nodeType\r\nContent-Type: text/plain\r\n\r\nAsset\r\n--abcde12345\nContent-Disposition: form-data; name=contextID\r\nContent-Type: text/plain\r\n\r\nContext1\r\n--abcde12345\nContent-Disposition: form-data; name=workspaceID\r\nContent-Type: text/plain\r\n\r\nMain\r\n--abcde12345--').bodyContentType("multipart/form-data; boundary=abcde12345").path("IntegrationAPI/assetdownload").pathQuery(parameters).invoke();
logger.info(result);
}