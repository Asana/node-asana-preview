# AsanaPreview.RulesApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**triggerRule**](RulesApi.md#triggerRule) | **POST** /rule_triggers/{rule_trigger_gid}/run | Trigger a rule

<a name="triggerRule"></a>
# **triggerRule**
> RuleTriggerResponseData triggerRule(body, rule_trigger_gid)

Trigger a rule

Trigger a rule which uses an [\&quot;incoming web request\&quot;](/docs/incoming-web-requests) trigger.

### Example
```javascript
import {AsanaPreview} from 'asana-preview';
let defaultClient = AsanaPreview.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new AsanaPreview.RulesApi();
let body = new AsanaPreview.RuleTriggerGidRunBody(); // RuleTriggerGidRunBody | A dictionary of variables accessible from within the rule.
let rule_trigger_gid = "12345"; // String | The ID of the incoming web request trigger. This value is a path parameter that is automatically generated for the API endpoint.

apiInstance.triggerRule(body, rule_trigger_gid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RuleTriggerGidRunBody**](RuleTriggerGidRunBody.md)| A dictionary of variables accessible from within the rule. | 
 **rule_trigger_gid** | **String**| The ID of the incoming web request trigger. This value is a path parameter that is automatically generated for the API endpoint. | 

### Return type

[**RuleTriggerResponseData**](RuleTriggerResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

