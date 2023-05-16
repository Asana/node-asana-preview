# AsanaPreview.TimeTrackingEntriesApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTimeTrackingEntry**](TimeTrackingEntriesApi.md#createTimeTrackingEntry) | **POST** /tasks/{task_gid}/time_tracking_entries | Create a time tracking entry
[**deleteTimeTrackingEntry**](TimeTrackingEntriesApi.md#deleteTimeTrackingEntry) | **DELETE** /time_tracking_entries/{time_tracking_entry_gid} | Delete a time tracking entry
[**getTimeTrackingEntriesForTask**](TimeTrackingEntriesApi.md#getTimeTrackingEntriesForTask) | **GET** /tasks/{task_gid}/time_tracking_entries | Get time tracking entries for a task
[**getTimeTrackingEntry**](TimeTrackingEntriesApi.md#getTimeTrackingEntry) | **GET** /time_tracking_entries/{time_tracking_entry_gid} | Get a time tracking entry
[**updateTimeTrackingEntry**](TimeTrackingEntriesApi.md#updateTimeTrackingEntry) | **PUT** /time_tracking_entries/{time_tracking_entry_gid} | Update a time tracking entry



## createTimeTrackingEntry

> CreateTimeTrackingEntry201Response createTimeTrackingEntry(taskGid, createTimeTrackingEntryRequest, opts)

Create a time tracking entry

Creates a time tracking entry on a given task.  Returns the record of the newly created time tracking entry.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TimeTrackingEntriesApi();
let taskGid = 321654; // String | The task to operate on.
let createTimeTrackingEntryRequest = new AsanaPreview.CreateTimeTrackingEntryRequest(); // CreateTimeTrackingEntryRequest | Information about the time tracking entry.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["created_at","created_by","task","entered_on","duration_minutes"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.createTimeTrackingEntry(taskGid, createTimeTrackingEntryRequest, opts, (error, data, response) => {
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
 **taskGid** | **String**| The task to operate on. | 
 **createTimeTrackingEntryRequest** | [**CreateTimeTrackingEntryRequest**](CreateTimeTrackingEntryRequest.md)| Information about the time tracking entry. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**CreateTimeTrackingEntry201Response**](CreateTimeTrackingEntry201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTimeTrackingEntry

> DeleteAttachment200Response deleteTimeTrackingEntry(timeTrackingEntryGid, opts)

Delete a time tracking entry

A specific, existing time tracking entry can be deleted by making a &#x60;DELETE&#x60; request on the URL for that time tracking entry.  Returns an empty data record.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TimeTrackingEntriesApi();
let timeTrackingEntryGid = 917392; // String | Globally unique identifier for the time tracking entry.
let opts = {
  'optPretty': true // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
};

apiInstance.deleteTimeTrackingEntry(timeTrackingEntryGid, opts, (error, data, response) => {
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
 **timeTrackingEntryGid** | **String**| Globally unique identifier for the time tracking entry. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 

### Return type

[**DeleteAttachment200Response**](DeleteAttachment200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTimeTrackingEntriesForTask

> GetTimeTrackingEntriesForTask200Response getTimeTrackingEntriesForTask(taskGid, opts)

Get time tracking entries for a task

Returns time tracking entries for a given task.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TimeTrackingEntriesApi();
let taskGid = 321654; // String | The task to operate on.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9, // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'optFields': ["entered_on","duration_minutes","created_by"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.getTimeTrackingEntriesForTask(taskGid, opts, (error, data, response) => {
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
 **taskGid** | **String**| The task to operate on. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#39; | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GetTimeTrackingEntriesForTask200Response**](GetTimeTrackingEntriesForTask200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTimeTrackingEntry

> CreateTimeTrackingEntry201Response getTimeTrackingEntry(timeTrackingEntryGid, opts)

Get a time tracking entry

Returns the complete time tracking entry record for a single time tracking entry.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TimeTrackingEntriesApi();
let timeTrackingEntryGid = 917392; // String | Globally unique identifier for the time tracking entry.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["created_at","created_by","task","entered_on","duration_minutes"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.getTimeTrackingEntry(timeTrackingEntryGid, opts, (error, data, response) => {
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
 **timeTrackingEntryGid** | **String**| Globally unique identifier for the time tracking entry. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**CreateTimeTrackingEntry201Response**](CreateTimeTrackingEntry201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateTimeTrackingEntry

> CreateTimeTrackingEntry201Response updateTimeTrackingEntry(timeTrackingEntryGid, updateTimeTrackingEntryRequest, opts)

Update a time tracking entry

A specific, existing time tracking entry can be updated by making a &#x60;PUT&#x60; request on the URL for that time tracking entry. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the task.  Returns the complete updated time tracking entry record.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TimeTrackingEntriesApi();
let timeTrackingEntryGid = 917392; // String | Globally unique identifier for the time tracking entry.
let updateTimeTrackingEntryRequest = new AsanaPreview.UpdateTimeTrackingEntryRequest(); // UpdateTimeTrackingEntryRequest | The updated fields for the time tracking entry.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["created_at","created_by","task","entered_on","duration_minutes"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.updateTimeTrackingEntry(timeTrackingEntryGid, updateTimeTrackingEntryRequest, opts, (error, data, response) => {
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
 **timeTrackingEntryGid** | **String**| Globally unique identifier for the time tracking entry. | 
 **updateTimeTrackingEntryRequest** | [**UpdateTimeTrackingEntryRequest**](UpdateTimeTrackingEntryRequest.md)| The updated fields for the time tracking entry. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**CreateTimeTrackingEntry201Response**](CreateTimeTrackingEntry201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

