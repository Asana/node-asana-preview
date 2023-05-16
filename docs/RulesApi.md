# AsanaPreview.RulesApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**triggerRule**](RulesApi.md#triggerRule) | **POST** /rule_triggers/{rule_trigger_gid}/run | Trigger a rule



## triggerRule

> TriggerRule200Response triggerRule(ruleTriggerGid, triggerRuleRequest, opts)

Trigger a rule

Trigger a rule which uses an [\&quot;incoming web request\&quot;](/docs/incoming-web-requests) trigger.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.RulesApi();
let ruleTriggerGid = 12345; // String | The ID of the incoming web request trigger. This value is a path parameter that is automatically generated for the API endpoint.
let triggerRuleRequest = new AsanaPreview.TriggerRuleRequest(); // TriggerRuleRequest | A dictionary of variables accessible from within the rule.
let opts = {
  'optFields': ["message"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.triggerRule(ruleTriggerGid, triggerRuleRequest, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' +  JSON.stringify(data, 0, 2));
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ruleTriggerGid** | **String**| The ID of the incoming web request trigger. This value is a path parameter that is automatically generated for the API endpoint. | 
 **triggerRuleRequest** | [**TriggerRuleRequest**](TriggerRuleRequest.md)| A dictionary of variables accessible from within the rule. | 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**TriggerRule200Response**](TriggerRule200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

