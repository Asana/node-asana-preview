# AsanaPreview.TasksApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSubtasksForTask**](TasksApi.md#getSubtasksForTask) | **GET** /tasks/{task_gid}/subtasks | Get subtasks from a task
[**getTask**](TasksApi.md#getTask) | **GET** /tasks/{task_gid} | Get a task
[**getTasks**](TasksApi.md#getTasks) | **GET** /tasks | Get multiple tasks
[**getTasksForProject**](TasksApi.md#getTasksForProject) | **GET** /projects/{project_gid}/tasks | Get tasks from a project



## getSubtasksForTask

> GetTasksForProject200Response getSubtasksForTask(taskGid, opts)

Get subtasks from a task

Returns a compact representation of all of the subtasks of a task.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personal_access_token
let personal_access_token = defaultClient.authentications['personal_access_token'];
personal_access_token.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TasksApi();
let taskGid = 321654; // String | The task to operate on.
let opts = {
  'optFields': ["gid","resource_type"], // [String] | Defines fields to return.  Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.  The gid of included objects will always be returned, regardless of the field options.
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'limit': 50, // Number | The number of objects to return per page. The value must be between 1 and 100.
  'offset': eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9 // String | Offset token.  An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.  'Note: You can only pass in an offset that was returned to you via a previously paginated request.
};

apiInstance.getSubtasksForTask(taskGid, opts, (error, data, response) => {
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
 **optFields** | [**[String]**](String.md)| Defines fields to return.  Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.  The gid of included objects will always be returned, regardless of the field options. | [optional] 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **limit** | **Number**| The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token.  An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.  &#39;Note: You can only pass in an offset that was returned to you via a previously paginated request. | [optional] 

### Return type

[**GetTasksForProject200Response**](GetTasksForProject200Response.md)

### Authorization

[personal_access_token](../README.md#personal_access_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTask

> GetTask200Response getTask(taskGid, opts)

Get a task

Returns the complete task record for a single task.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personal_access_token
let personal_access_token = defaultClient.authentications['personal_access_token'];
personal_access_token.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TasksApi();
let taskGid = 321654; // String | The task to operate on.
let opts = {
  'optFields': ["gid","resource_type"], // [String] | Defines fields to return.  Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.  The gid of included objects will always be returned, regardless of the field options.
  'optPretty': true // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
};

apiInstance.getTask(taskGid, opts, (error, data, response) => {
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
 **optFields** | [**[String]**](String.md)| Defines fields to return.  Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.  The gid of included objects will always be returned, regardless of the field options. | [optional] 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 

### Return type

[**GetTask200Response**](GetTask200Response.md)

### Authorization

[personal_access_token](../README.md#personal_access_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTasks

> GetTasksForProject200Response getTasks(opts)

Get multiple tasks

Returns the compact task records for some filtered set of tasks. Use one or more of the parameters provided to filter the tasks returned. You must specify a &#x60;project&#x60; or &#x60;tag&#x60; if you do not specify &#x60;assignee&#x60; and &#x60;workspace&#x60;.  For more complex task retrieval, use [workspaces/{workspace_gid}/tasks/search](/reference/searchtasksforworkspace).

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personal_access_token
let personal_access_token = defaultClient.authentications['personal_access_token'];
personal_access_token.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TasksApi();
let opts = {
  'optFields': ["gid","resource_type"], // [String] | Defines fields to return.  Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.  The gid of included objects will always be returned, regardless of the field options.
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'limit': 50, // Number | The number of objects to return per page. The value must be between 1 and 100.
  'offset': eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9, // String | Offset token.  An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.  'Note: You can only pass in an offset that was returned to you via a previously paginated request.
  'assignee': 14641, // String | The assignee to filter tasks on. If searching for unassigned tasks, assignee.any = null can be specified.  *Note: If you specify `assignee`, you must also specify the `workspace` to filter on.*
  'project': 321654, // String | The project to filter tasks on.
  'section': 321654, // String | The section to filter tasks on.
  'workspace': 321654, // String | The workspace to filter tasks on.  *Note: If you specify `workspace`, you must also specify the `assignee` to filter on.*
  'completedSince': 2012-02-22T02:06:58.158Z, // Date | Only return tasks that are either incomplete or that have been completed since this time.
  'modifiedSince': 2012-02-22T02:06:58.158Z // Date | Only return tasks that have been modified since the given time.  *Note: A task is considered “modified” if any of its properties change, or associations between it and other objects are modified (e.g.  a task being added to a project). A task is not considered modified just because another object it is associated with (e.g. a subtask) is modified. Actions that count as modifying the task include assigning, renaming, completing, and adding stories.*
};

apiInstance.getTasks(opts, (error, data, response) => {
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
 **optFields** | [**[String]**](String.md)| Defines fields to return.  Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.  The gid of included objects will always be returned, regardless of the field options. | [optional] 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **limit** | **Number**| The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token.  An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.  &#39;Note: You can only pass in an offset that was returned to you via a previously paginated request. | [optional] 
 **assignee** | **String**| The assignee to filter tasks on. If searching for unassigned tasks, assignee.any &#x3D; null can be specified.  *Note: If you specify &#x60;assignee&#x60;, you must also specify the &#x60;workspace&#x60; to filter on.* | [optional] 
 **project** | **String**| The project to filter tasks on. | [optional] 
 **section** | **String**| The section to filter tasks on. | [optional] 
 **workspace** | **String**| The workspace to filter tasks on.  *Note: If you specify &#x60;workspace&#x60;, you must also specify the &#x60;assignee&#x60; to filter on.* | [optional] 
 **completedSince** | **Date**| Only return tasks that are either incomplete or that have been completed since this time. | [optional] 
 **modifiedSince** | **Date**| Only return tasks that have been modified since the given time.  *Note: A task is considered “modified” if any of its properties change, or associations between it and other objects are modified (e.g.  a task being added to a project). A task is not considered modified just because another object it is associated with (e.g. a subtask) is modified. Actions that count as modifying the task include assigning, renaming, completing, and adding stories.* | [optional] 

### Return type

[**GetTasksForProject200Response**](GetTasksForProject200Response.md)

### Authorization

[personal_access_token](../README.md#personal_access_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTasksForProject

> GetTasksForProject200Response getTasksForProject(projectGid, opts)

Get tasks from a project

Returns the compact task records for all tasks within the given project, ordered by their priority within the project. Tasks can exist in more than one project at a time.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personal_access_token
let personal_access_token = defaultClient.authentications['personal_access_token'];
personal_access_token.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TasksApi();
let projectGid = 1331; // String | Globally unique identifier for the project.
let opts = {
  'completedSince': 2012-02-22T02:06:58.158Z, // String | Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or the keyword *now*.
  'optFields': ["gid","resource_type"], // [String] | Defines fields to return.  Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.  The gid of included objects will always be returned, regardless of the field options.
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'limit': 50, // Number | The number of objects to return per page. The value must be between 1 and 100.
  'offset': eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9 // String | Offset token.  An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.  'Note: You can only pass in an offset that was returned to you via a previously paginated request.
};

apiInstance.getTasksForProject(projectGid, opts, (error, data, response) => {
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
 **completedSince** | **String**| Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or the keyword *now*. | [optional] 
 **optFields** | [**[String]**](String.md)| Defines fields to return.  Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.  The gid of included objects will always be returned, regardless of the field options. | [optional] 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **limit** | **Number**| The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token.  An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.  &#39;Note: You can only pass in an offset that was returned to you via a previously paginated request. | [optional] 

### Return type

[**GetTasksForProject200Response**](GetTasksForProject200Response.md)

### Authorization

[personal_access_token](../README.md#personal_access_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

