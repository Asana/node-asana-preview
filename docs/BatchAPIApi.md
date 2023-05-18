# AsanaPreview.BatchAPIApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBatchRequest**](BatchAPIApi.md#createBatchRequest) | **POST** /batch | Submit parallel requests



## createBatchRequest

> CreateBatchRequest200Response createBatchRequest(createBatchRequestRequest, opts)

Submit parallel requests

Make multiple requests in parallel to Asana&#39;s API.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.BatchAPIApi();
let createBatchRequestRequest = new AsanaPreview.CreateBatchRequestRequest(); // CreateBatchRequestRequest | The requests to batch together via the Batch API.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["headers","body","status_code"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.createBatchRequest(createBatchRequestRequest, opts, (error, data, response) => {
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
 **createBatchRequestRequest** | [**CreateBatchRequestRequest**](CreateBatchRequestRequest.md)| The requests to batch together via the Batch API. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**CreateBatchRequest200Response**](CreateBatchRequest200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json; charset=UTF-8

