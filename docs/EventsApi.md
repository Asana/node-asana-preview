# AsanaPreview.EventsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEvents**](EventsApi.md#getEvents) | **GET** /events | Get events on a resource



## getEvents

> GetEvents200Response getEvents(resource, opts)

Get events on a resource

Returns the full record for all events that have occurred since the sync token was created.  A &#x60;GET&#x60; request to the endpoint &#x60;/[path_to_resource]/events&#x60; can be made in lieu of including the resource ID in the data for the request.  Asana limits a single sync token to 100 events. If more than 100 events exist for a given resource, &#x60;has_more: true&#x60; will be returned in the response, indicating that there are more events to pull.  *Note: The resource returned will be the resource that triggered the event. This may be different from the one that the events were requested for. For example, a subscription to a project will contain events for tasks contained within the project.*

### Example

```javascript
import AsanaPreview from 'asana-preview';

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personal_access_token
let personal_access_token = defaultClient.authentications['personal_access_token'];
personal_access_token.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.EventsApi();
let resource = 12345; // String | A resource ID to subscribe to. The resource can be a task or project.
let opts = {
  'sync': de4774f6915eae04714ca93bb2f5ee81, // String | A sync token received from the last request, or none on first sync. Events will be returned from the point in time that the sync token was generated.  *Note: On your first request, omit the sync token. The response will be the same as for an expired sync token, and will include a new valid sync token.If the sync token is too old (which may happen from time to time) the API will return a `412 Precondition Failed` error, and include a fresh sync token in the response.*
  'optFields': ["gid","resource_type"], // [String] | Defines fields to return.  Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.  The gid of included objects will always be returned, regardless of the field options.
  'optPretty': true // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
};

apiInstance.getEvents(resource, opts, (error, data, response) => {
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
 **resource** | **String**| A resource ID to subscribe to. The resource can be a task or project. | 
 **sync** | **String**| A sync token received from the last request, or none on first sync. Events will be returned from the point in time that the sync token was generated.  *Note: On your first request, omit the sync token. The response will be the same as for an expired sync token, and will include a new valid sync token.If the sync token is too old (which may happen from time to time) the API will return a &#x60;412 Precondition Failed&#x60; error, and include a fresh sync token in the response.* | [optional] 
 **optFields** | [**[String]**](String.md)| Defines fields to return.  Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.  The gid of included objects will always be returned, regardless of the field options. | [optional] 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 

### Return type

[**GetEvents200Response**](GetEvents200Response.md)

### Authorization

[personal_access_token](../README.md#personal_access_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

