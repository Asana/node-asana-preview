# AsanaPreview.StoriesApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createStoryForTask**](StoriesApi.md#createStoryForTask) | **POST** /tasks/{task_gid}/stories | Create a story on a task
[**deleteStory**](StoriesApi.md#deleteStory) | **DELETE** /stories/{story_gid} | Delete a story
[**getStoriesForTask**](StoriesApi.md#getStoriesForTask) | **GET** /tasks/{task_gid}/stories | Get stories from a task
[**getStory**](StoriesApi.md#getStory) | **GET** /stories/{story_gid} | Get a story
[**updateStory**](StoriesApi.md#updateStory) | **PUT** /stories/{story_gid} | Update a story



## createStoryForTask

> GetStory200Response createStoryForTask(taskGid, updateStoryRequest, opts)

Create a story on a task

Adds a story to a task. This endpoint currently only allows for comment stories to be created. The comment will be authored by the currently authenticated user, and timestamped when the server receives the request.  Returns the full record for the new story added to the task.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.StoriesApi();
let taskGid = 321654; // String | The task to operate on.
let updateStoryRequest = new AsanaPreview.UpdateStoryRequest(); // UpdateStoryRequest | The story to create.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["created_at","new_enum_value","created_by","new_number_value","is_edited","previews","old_multi_enum_values","new_name","new_people_value","project","follower","new_resource_subtype","tag","old_resource_subtype","task","is_editable","sticker_name","story","new_section","num_likes","num_hearts","old_name","resource_subtype","html_text","duplicate_of","hearts","source","target","likes","liked","old_date_value","old_enum_value","hearted","old_section","new_date_value","type","new_approval_status","text","old_people_value","assignee","new_dates","new_text_value","duplicated_from","custom_field","dependency","old_text_value","is_pinned","old_dates","old_approval_status","old_number_value","new_multi_enum_values"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.createStoryForTask(taskGid, updateStoryRequest, opts, (error, data, response) => {
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
 **updateStoryRequest** | [**UpdateStoryRequest**](UpdateStoryRequest.md)| The story to create. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GetStory200Response**](GetStory200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteStory

> DeleteAttachment200Response deleteStory(storyGid, opts)

Delete a story

Deletes a story. A user can only delete stories they have created.  Returns an empty data record.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.StoriesApi();
let storyGid = 35678; // String | Globally unique identifier for the story.
let opts = {
  'optPretty': true // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
};

apiInstance.deleteStory(storyGid, opts, (error, data, response) => {
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
 **storyGid** | **String**| Globally unique identifier for the story. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 

### Return type

[**DeleteAttachment200Response**](DeleteAttachment200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStoriesForTask

> GetStoriesForTask200Response getStoriesForTask(taskGid, opts)

Get stories from a task

Returns the compact records for all stories on the task.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.StoriesApi();
let taskGid = 321654; // String | The task to operate on.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9, // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'optFields': ["created_at","new_enum_value","created_by","new_number_value","is_edited","previews","old_multi_enum_values","new_name","new_people_value","project","follower","new_resource_subtype","tag","old_resource_subtype","task","is_editable","sticker_name","story","new_section","num_likes","num_hearts","old_name","resource_subtype","html_text","duplicate_of","hearts","source","target","likes","liked","old_date_value","old_enum_value","hearted","old_section","new_date_value","type","new_approval_status","text","old_people_value","assignee","new_dates","new_text_value","duplicated_from","custom_field","dependency","old_text_value","is_pinned","old_dates","old_approval_status","old_number_value","new_multi_enum_values"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.getStoriesForTask(taskGid, opts, (error, data, response) => {
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

[**GetStoriesForTask200Response**](GetStoriesForTask200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStory

> GetStory200Response getStory(storyGid, opts)

Get a story

Returns the full record for a single story.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.StoriesApi();
let storyGid = 35678; // String | Globally unique identifier for the story.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9, // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'optFields': ["created_at","new_enum_value","created_by","new_number_value","is_edited","previews","old_multi_enum_values","new_name","new_people_value","project","follower","new_resource_subtype","tag","old_resource_subtype","task","is_editable","sticker_name","story","new_section","num_likes","num_hearts","old_name","resource_subtype","html_text","duplicate_of","hearts","source","target","likes","liked","old_date_value","old_enum_value","hearted","old_section","new_date_value","type","new_approval_status","text","old_people_value","assignee","new_dates","new_text_value","duplicated_from","custom_field","dependency","old_text_value","is_pinned","old_dates","old_approval_status","old_number_value","new_multi_enum_values"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.getStory(storyGid, opts, (error, data, response) => {
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
 **storyGid** | **String**| Globally unique identifier for the story. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#39; | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GetStory200Response**](GetStory200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateStory

> GetStory200Response updateStory(storyGid, updateStoryRequest, opts)

Update a story

Updates the story and returns the full record for the updated story. Only comment stories can have their text updated, and only comment stories and attachment stories can be pinned. Only one of &#x60;text&#x60; and &#x60;html_text&#x60; can be specified.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.StoriesApi();
let storyGid = 35678; // String | Globally unique identifier for the story.
let updateStoryRequest = new AsanaPreview.UpdateStoryRequest(); // UpdateStoryRequest | The comment story to update.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["created_at","new_enum_value","created_by","new_number_value","is_edited","previews","old_multi_enum_values","new_name","new_people_value","project","follower","new_resource_subtype","tag","old_resource_subtype","task","is_editable","sticker_name","story","new_section","num_likes","num_hearts","old_name","resource_subtype","html_text","duplicate_of","hearts","source","target","likes","liked","old_date_value","old_enum_value","hearted","old_section","new_date_value","type","new_approval_status","text","old_people_value","assignee","new_dates","new_text_value","duplicated_from","custom_field","dependency","old_text_value","is_pinned","old_dates","old_approval_status","old_number_value","new_multi_enum_values"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.updateStory(storyGid, updateStoryRequest, opts, (error, data, response) => {
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
 **storyGid** | **String**| Globally unique identifier for the story. | 
 **updateStoryRequest** | [**UpdateStoryRequest**](UpdateStoryRequest.md)| The comment story to update. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GetStory200Response**](GetStory200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

