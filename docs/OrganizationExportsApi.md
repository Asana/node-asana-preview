# AsanaPreview.OrganizationExportsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrganizationExport**](OrganizationExportsApi.md#createOrganizationExport) | **POST** /organization_exports | Create an organization export request
[**getOrganizationExport**](OrganizationExportsApi.md#getOrganizationExport) | **GET** /organization_exports/{organization_export_gid} | Get details on an org export request



## createOrganizationExport

> CreateOrganizationExport201Response createOrganizationExport(createOrganizationExportRequest, opts)

Create an organization export request

This method creates a request to export an Organization. Asana will complete the export at some point after you create the request.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.OrganizationExportsApi();
let createOrganizationExportRequest = new AsanaPreview.CreateOrganizationExportRequest(); // CreateOrganizationExportRequest | The organization to export.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9, // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'optFields': ["download_url","created_at","state","organization"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.createOrganizationExport(createOrganizationExportRequest, opts, (error, data, response) => {
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
 **createOrganizationExportRequest** | [**CreateOrganizationExportRequest**](CreateOrganizationExportRequest.md)| The organization to export. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#39; | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**CreateOrganizationExport201Response**](CreateOrganizationExport201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json; charset=UTF-8


## getOrganizationExport

> CreateOrganizationExport201Response getOrganizationExport(organizationExportGid, opts)

Get details on an org export request

Returns details of a previously-requested Organization export.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.OrganizationExportsApi();
let organizationExportGid = 12345; // String | Globally unique identifier for the organization export.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["download_url","created_at","state","organization"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.getOrganizationExport(organizationExportGid, opts, (error, data, response) => {
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
 **organizationExportGid** | **String**| Globally unique identifier for the organization export. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**CreateOrganizationExport201Response**](CreateOrganizationExport201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=UTF-8

