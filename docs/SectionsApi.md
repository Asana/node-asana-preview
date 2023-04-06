# AsanaPreview.SectionsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSectionsForProject**](SectionsApi.md#getSectionsForProject) | **GET** /projects/{project_gid}/sections | Get sections in a project



## getSectionsForProject

> GetSectionsForProject200Response getSectionsForProject(projectGid, opts)

Get sections in a project

Returns the compact records for all sections in the specified project.

### Example

```javascript
import AsanaPreview from 'asana-preview';

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personal_access_token
let personal_access_token = defaultClient.authentications['personal_access_token'];
personal_access_token.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.SectionsApi();
let projectGid = 1331; // String | Globally unique identifier for the project.
let opts = {
  'optFields': ["gid","resource_type"], // [String] | Defines fields to return.  Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.  The gid of included objects will always be returned, regardless of the field options.
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'limit': 50, // Number | The number of objects to return per page. The value must be between 1 and 100.
  'offset': eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9 // String | Offset token.  An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.  'Note: You can only pass in an offset that was returned to you via a previously paginated request.
};

apiInstance.getSectionsForProject(projectGid, opts, (error, data, response) => {
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
 **projectGid** | **String**| Globally unique identifier for the project. | 
 **optFields** | [**[String]**](String.md)| Defines fields to return.  Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.  The gid of included objects will always be returned, regardless of the field options. | [optional] 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **limit** | **Number**| The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token.  An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.  &#39;Note: You can only pass in an offset that was returned to you via a previously paginated request. | [optional] 

### Return type

[**GetSectionsForProject200Response**](GetSectionsForProject200Response.md)

### Authorization

[personal_access_token](../README.md#personal_access_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

