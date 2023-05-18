# AsanaPreview.TasksApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDependenciesForTask**](TasksApi.md#addDependenciesForTask) | **POST** /tasks/{task_gid}/addDependencies | Set dependencies for a task
[**addDependentsForTask**](TasksApi.md#addDependentsForTask) | **POST** /tasks/{task_gid}/addDependents | Set dependents for a task
[**addFollowersForTask**](TasksApi.md#addFollowersForTask) | **POST** /tasks/{task_gid}/addFollowers | Add followers to a task
[**addProjectForTask**](TasksApi.md#addProjectForTask) | **POST** /tasks/{task_gid}/addProject | Add a project to a task
[**addTagForTask**](TasksApi.md#addTagForTask) | **POST** /tasks/{task_gid}/addTag | Add a tag to a task
[**createSubtaskForTask**](TasksApi.md#createSubtaskForTask) | **POST** /tasks/{task_gid}/subtasks | Create a subtask
[**createTask**](TasksApi.md#createTask) | **POST** /tasks | Create a task
[**deleteTask**](TasksApi.md#deleteTask) | **DELETE** /tasks/{task_gid} | Delete a task
[**duplicateTask**](TasksApi.md#duplicateTask) | **POST** /tasks/{task_gid}/duplicate | Duplicate a task
[**getDependenciesForTask**](TasksApi.md#getDependenciesForTask) | **GET** /tasks/{task_gid}/dependencies | Get dependencies from a task
[**getDependentsForTask**](TasksApi.md#getDependentsForTask) | **GET** /tasks/{task_gid}/dependents | Get dependents from a task
[**getSubtasksForTask**](TasksApi.md#getSubtasksForTask) | **GET** /tasks/{task_gid}/subtasks | Get subtasks from a task
[**getTask**](TasksApi.md#getTask) | **GET** /tasks/{task_gid} | Get a task
[**getTasks**](TasksApi.md#getTasks) | **GET** /tasks | Get multiple tasks
[**getTasksForProject**](TasksApi.md#getTasksForProject) | **GET** /projects/{project_gid}/tasks | Get tasks from a project
[**getTasksForSection**](TasksApi.md#getTasksForSection) | **GET** /sections/{section_gid}/tasks | Get tasks from a section
[**getTasksForTag**](TasksApi.md#getTasksForTag) | **GET** /tags/{tag_gid}/tasks | Get tasks from a tag
[**getTasksForUserTaskList**](TasksApi.md#getTasksForUserTaskList) | **GET** /user_task_lists/{user_task_list_gid}/tasks | Get tasks from a user task list
[**removeDependenciesForTask**](TasksApi.md#removeDependenciesForTask) | **POST** /tasks/{task_gid}/removeDependencies | Unlink dependencies from a task
[**removeDependentsForTask**](TasksApi.md#removeDependentsForTask) | **POST** /tasks/{task_gid}/removeDependents | Unlink dependents from a task
[**removeFollowerForTask**](TasksApi.md#removeFollowerForTask) | **POST** /tasks/{task_gid}/removeFollowers | Remove followers from a task
[**removeProjectForTask**](TasksApi.md#removeProjectForTask) | **POST** /tasks/{task_gid}/removeProject | Remove a project from a task
[**removeTagForTask**](TasksApi.md#removeTagForTask) | **POST** /tasks/{task_gid}/removeTag | Remove a tag from a task
[**searchTasksForWorkspace**](TasksApi.md#searchTasksForWorkspace) | **GET** /workspaces/{workspace_gid}/tasks/search | Search tasks in a workspace
[**setParentForTask**](TasksApi.md#setParentForTask) | **POST** /tasks/{task_gid}/setParent | Set the parent of a task
[**updateTask**](TasksApi.md#updateTask) | **PUT** /tasks/{task_gid} | Update a task



## addDependenciesForTask

> DeleteAttachment200Response addDependenciesForTask(taskGid, addDependenciesForTaskRequest, opts)

Set dependencies for a task

Marks a set of tasks as dependencies of this task, if they are not already dependencies. *A task can have at most 30 dependents and dependencies combined*.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TasksApi();
let taskGid = 321654; // String | The task to operate on.
let addDependenciesForTaskRequest = new AsanaPreview.AddDependenciesForTaskRequest(); // AddDependenciesForTaskRequest | The list of tasks to set as dependencies.
let opts = {
  'optPretty': true // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
};

apiInstance.addDependenciesForTask(taskGid, addDependenciesForTaskRequest, opts, (error, data, response) => {
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
 **addDependenciesForTaskRequest** | [**AddDependenciesForTaskRequest**](AddDependenciesForTaskRequest.md)| The list of tasks to set as dependencies. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 

### Return type

[**DeleteAttachment200Response**](DeleteAttachment200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json; charset=UTF-8


## addDependentsForTask

> DeleteAttachment200Response addDependentsForTask(taskGid, addDependentsForTaskRequest, opts)

Set dependents for a task

Marks a set of tasks as dependents of this task, if they are not already dependents. *A task can have at most 30 dependents and dependencies combined*.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TasksApi();
let taskGid = 321654; // String | The task to operate on.
let addDependentsForTaskRequest = new AsanaPreview.AddDependentsForTaskRequest(); // AddDependentsForTaskRequest | The list of tasks to add as dependents.
let opts = {
  'optPretty': true // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
};

apiInstance.addDependentsForTask(taskGid, addDependentsForTaskRequest, opts, (error, data, response) => {
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
 **addDependentsForTaskRequest** | [**AddDependentsForTaskRequest**](AddDependentsForTaskRequest.md)| The list of tasks to add as dependents. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 

### Return type

[**DeleteAttachment200Response**](DeleteAttachment200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json; charset=UTF-8


## addFollowersForTask

> CreateTask201Response addFollowersForTask(taskGid, addFollowersRequest, opts)

Add followers to a task

Adds followers to a task. Returns an empty data block. Each task can be associated with zero or more followers in the system. Requests to add/remove followers, if successful, will return the complete updated task record, described above.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TasksApi();
let taskGid = 321654; // String | The task to operate on.
let addFollowersRequest = new AsanaPreview.AddFollowersRequest(); // AddFollowersRequest | The followers to add to the task.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["actual_time_minutes","num_subtasks","hearted","projects","created_at","modified_at","tags","memberships","approval_status","liked","parent","assignee","external","dependencies","completed_by","name","num_likes","start_at","custom_fields","hearts","due_on","resource_subtype","dependents","assignee_section","notes","is_rendered_as_separator","likes","start_on","workspace","followers","assignee_status","completed_at","due_at","html_notes","permalink_url","completed","num_hearts"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.addFollowersForTask(taskGid, addFollowersRequest, opts, (error, data, response) => {
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
 **addFollowersRequest** | [**AddFollowersRequest**](AddFollowersRequest.md)| The followers to add to the task. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**CreateTask201Response**](CreateTask201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json; charset=UTF-8


## addProjectForTask

> DeleteAttachment200Response addProjectForTask(taskGid, addProjectForTaskRequest, opts)

Add a project to a task

Adds the task to the specified project, in the optional location specified. If no location arguments are given, the task will be added to the end of the project.  &#x60;addProject&#x60; can also be used to reorder a task within a project or section that already contains it.  At most one of &#x60;insert_before&#x60;, &#x60;insert_after&#x60;, or &#x60;section&#x60; should be specified. Inserting into a section in an non-order-dependent way can be done by specifying section, otherwise, to insert within a section in a particular place, specify &#x60;insert_before&#x60; or &#x60;insert_after&#x60; and a task within the section to anchor the position of this task.  Returns an empty data block.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TasksApi();
let taskGid = 321654; // String | The task to operate on.
let addProjectForTaskRequest = new AsanaPreview.AddProjectForTaskRequest(); // AddProjectForTaskRequest | The project to add the task to.
let opts = {
  'optPretty': true // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
};

apiInstance.addProjectForTask(taskGid, addProjectForTaskRequest, opts, (error, data, response) => {
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
 **addProjectForTaskRequest** | [**AddProjectForTaskRequest**](AddProjectForTaskRequest.md)| The project to add the task to. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 

### Return type

[**DeleteAttachment200Response**](DeleteAttachment200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json; charset=UTF-8


## addTagForTask

> DeleteAttachment200Response addTagForTask(taskGid, addTagForTaskRequest, opts)

Add a tag to a task

Adds a tag to a task. Returns an empty data block.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TasksApi();
let taskGid = 321654; // String | The task to operate on.
let addTagForTaskRequest = new AsanaPreview.AddTagForTaskRequest(); // AddTagForTaskRequest | The tag to add to the task.
let opts = {
  'optPretty': true // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
};

apiInstance.addTagForTask(taskGid, addTagForTaskRequest, opts, (error, data, response) => {
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
 **addTagForTaskRequest** | [**AddTagForTaskRequest**](AddTagForTaskRequest.md)| The tag to add to the task. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 

### Return type

[**DeleteAttachment200Response**](DeleteAttachment200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json; charset=UTF-8


## createSubtaskForTask

> CreateTask201Response createSubtaskForTask(taskGid, createTaskRequest, opts)

Create a subtask

Creates a new subtask and adds it to the parent task. Returns the full record for the newly created subtask.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TasksApi();
let taskGid = 321654; // String | The task to operate on.
let createTaskRequest = new AsanaPreview.CreateTaskRequest(); // CreateTaskRequest | The new subtask to create.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["actual_time_minutes","num_subtasks","hearted","projects","created_at","modified_at","tags","memberships","approval_status","liked","parent","assignee","external","dependencies","completed_by","name","num_likes","start_at","custom_fields","hearts","due_on","resource_subtype","dependents","assignee_section","notes","is_rendered_as_separator","likes","start_on","workspace","followers","assignee_status","completed_at","due_at","html_notes","permalink_url","completed","num_hearts"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.createSubtaskForTask(taskGid, createTaskRequest, opts, (error, data, response) => {
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
 **createTaskRequest** | [**CreateTaskRequest**](CreateTaskRequest.md)| The new subtask to create. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**CreateTask201Response**](CreateTask201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json; charset=UTF-8


## createTask

> CreateTask201Response createTask(createTaskRequest, opts)

Create a task

Creating a new task is as easy as POSTing to the &#x60;/tasks&#x60; endpoint with a data block containing the fields you’d like to set on the task. Any unspecified fields will take on default values.  Every task is required to be created in a specific workspace, and this workspace cannot be changed once set. The workspace need not be set explicitly if you specify &#x60;projects&#x60; or a &#x60;parent&#x60; task instead.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TasksApi();
let createTaskRequest = new AsanaPreview.CreateTaskRequest(); // CreateTaskRequest | The task to create.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["actual_time_minutes","num_subtasks","hearted","projects","created_at","modified_at","tags","memberships","approval_status","liked","parent","assignee","external","dependencies","completed_by","name","num_likes","start_at","custom_fields","hearts","due_on","resource_subtype","dependents","assignee_section","notes","is_rendered_as_separator","likes","start_on","workspace","followers","assignee_status","completed_at","due_at","html_notes","permalink_url","completed","num_hearts"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.createTask(createTaskRequest, opts, (error, data, response) => {
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
 **createTaskRequest** | [**CreateTaskRequest**](CreateTaskRequest.md)| The task to create. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**CreateTask201Response**](CreateTask201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json; charset=UTF-8


## deleteTask

> DeleteAttachment200Response deleteTask(taskGid, opts)

Delete a task

A specific, existing task can be deleted by making a DELETE request on the URL for that task. Deleted tasks go into the “trash” of the user making the delete request. Tasks can be recovered from the trash within a period of 30 days; afterward they are completely removed from the system.  Returns an empty data record.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TasksApi();
let taskGid = 321654; // String | The task to operate on.
let opts = {
  'optPretty': true // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
};

apiInstance.deleteTask(taskGid, opts, (error, data, response) => {
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

### Return type

[**DeleteAttachment200Response**](DeleteAttachment200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=UTF-8


## duplicateTask

> GetJob200Response duplicateTask(taskGid, duplicateTaskRequest, opts)

Duplicate a task

Creates and returns a job that will asynchronously handle the duplication.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TasksApi();
let taskGid = 321654; // String | The task to operate on.
let duplicateTaskRequest = new AsanaPreview.DuplicateTaskRequest(); // DuplicateTaskRequest | Describes the duplicate's name and the fields that will be duplicated.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["status","new_task","new_project","new_project_template","new_task_template","resource_subtype"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.duplicateTask(taskGid, duplicateTaskRequest, opts, (error, data, response) => {
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
 **duplicateTaskRequest** | [**DuplicateTaskRequest**](DuplicateTaskRequest.md)| Describes the duplicate&#39;s name and the fields that will be duplicated. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GetJob200Response**](GetJob200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json; charset=UTF-8


## getDependenciesForTask

> GetTasks200Response getDependenciesForTask(taskGid, opts)

Get dependencies from a task

Returns the compact representations of all of the dependencies of a task.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TasksApi();
let taskGid = 321654; // String | The task to operate on.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9, // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'optFields': ["actual_time_minutes","num_subtasks","hearted","projects","created_at","modified_at","tags","memberships","approval_status","liked","parent","assignee","external","dependencies","completed_by","name","num_likes","start_at","custom_fields","hearts","due_on","resource_subtype","dependents","assignee_section","notes","is_rendered_as_separator","likes","start_on","workspace","followers","assignee_status","completed_at","due_at","html_notes","permalink_url","completed","num_hearts"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.getDependenciesForTask(taskGid, opts, (error, data, response) => {
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

[**GetTasks200Response**](GetTasks200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=UTF-8


## getDependentsForTask

> GetTasks200Response getDependentsForTask(taskGid, opts)

Get dependents from a task

Returns the compact representations of all of the dependents of a task.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TasksApi();
let taskGid = 321654; // String | The task to operate on.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9, // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'optFields': ["actual_time_minutes","num_subtasks","hearted","projects","created_at","modified_at","tags","memberships","approval_status","liked","parent","assignee","external","dependencies","completed_by","name","num_likes","start_at","custom_fields","hearts","due_on","resource_subtype","dependents","assignee_section","notes","is_rendered_as_separator","likes","start_on","workspace","followers","assignee_status","completed_at","due_at","html_notes","permalink_url","completed","num_hearts"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.getDependentsForTask(taskGid, opts, (error, data, response) => {
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

[**GetTasks200Response**](GetTasks200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=UTF-8


## getSubtasksForTask

> GetTasks200Response getSubtasksForTask(taskGid, opts)

Get subtasks from a task

Returns a compact representation of all of the subtasks of a task.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TasksApi();
let taskGid = 321654; // String | The task to operate on.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9, // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'optFields': ["actual_time_minutes","num_subtasks","hearted","projects","created_at","modified_at","tags","memberships","approval_status","liked","parent","assignee","external","dependencies","completed_by","name","num_likes","start_at","custom_fields","hearts","due_on","resource_subtype","dependents","assignee_section","notes","is_rendered_as_separator","likes","start_on","workspace","followers","assignee_status","completed_at","due_at","html_notes","permalink_url","completed","num_hearts"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
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
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#39; | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GetTasks200Response**](GetTasks200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=UTF-8


## getTask

> CreateTask201Response getTask(taskGid, opts)

Get a task

Returns the complete task record for a single task.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TasksApi();
let taskGid = 321654; // String | The task to operate on.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["actual_time_minutes","num_subtasks","hearted","projects","created_at","modified_at","tags","memberships","approval_status","liked","parent","assignee","external","dependencies","completed_by","name","num_likes","start_at","custom_fields","hearts","due_on","resource_subtype","dependents","assignee_section","notes","is_rendered_as_separator","likes","start_on","workspace","followers","assignee_status","completed_at","due_at","html_notes","permalink_url","completed","num_hearts"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
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
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**CreateTask201Response**](CreateTask201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=UTF-8


## getTasks

> GetTasks200Response getTasks(opts)

Get multiple tasks

Returns the compact task records for some filtered set of tasks. Use one or more of the parameters provided to filter the tasks returned. You must specify a &#x60;project&#x60; or &#x60;tag&#x60; if you do not specify &#x60;assignee&#x60; and &#x60;workspace&#x60;.  For more complex task retrieval, use [workspaces/{workspace_gid}/tasks/search](/reference/searchtasksforworkspace).

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TasksApi();
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9, // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'assignee': 14641, // String | The assignee to filter tasks on. If searching for unassigned tasks, assignee.any = null can be specified. *Note: If you specify `assignee`, you must also specify the `workspace` to filter on.*
  'project': 321654, // String | The project to filter tasks on.
  'section': 321654, // String | The section to filter tasks on.
  'workspace': 321654, // String | The workspace to filter tasks on. *Note: If you specify `workspace`, you must also specify the `assignee` to filter on.*
  'completedSince': 2012-02-22T02:06:58.158Z, // Date | Only return tasks that are either incomplete or that have been completed since this time.
  'modifiedSince': 2012-02-22T02:06:58.158Z, // Date | Only return tasks that have been modified since the given time.  *Note: A task is considered “modified” if any of its properties change, or associations between it and other objects are modified (e.g.  a task being added to a project). A task is not considered modified just because another object it is associated with (e.g. a subtask) is modified. Actions that count as modifying the task include assigning, renaming, completing, and adding stories.*
  'optFields': ["actual_time_minutes","num_subtasks","hearted","projects","created_at","modified_at","tags","memberships","approval_status","liked","parent","assignee","external","dependencies","completed_by","name","num_likes","start_at","custom_fields","hearts","due_on","resource_subtype","dependents","assignee_section","notes","is_rendered_as_separator","likes","start_on","workspace","followers","assignee_status","completed_at","due_at","html_notes","permalink_url","completed","num_hearts"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
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
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#39; | [optional] 
 **assignee** | **String**| The assignee to filter tasks on. If searching for unassigned tasks, assignee.any &#x3D; null can be specified. *Note: If you specify &#x60;assignee&#x60;, you must also specify the &#x60;workspace&#x60; to filter on.* | [optional] 
 **project** | **String**| The project to filter tasks on. | [optional] 
 **section** | **String**| The section to filter tasks on. | [optional] 
 **workspace** | **String**| The workspace to filter tasks on. *Note: If you specify &#x60;workspace&#x60;, you must also specify the &#x60;assignee&#x60; to filter on.* | [optional] 
 **completedSince** | **Date**| Only return tasks that are either incomplete or that have been completed since this time. | [optional] 
 **modifiedSince** | **Date**| Only return tasks that have been modified since the given time.  *Note: A task is considered “modified” if any of its properties change, or associations between it and other objects are modified (e.g.  a task being added to a project). A task is not considered modified just because another object it is associated with (e.g. a subtask) is modified. Actions that count as modifying the task include assigning, renaming, completing, and adding stories.* | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GetTasks200Response**](GetTasks200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=UTF-8


## getTasksForProject

> GetTasks200Response getTasksForProject(projectGid, opts)

Get tasks from a project

Returns the compact task records for all tasks within the given project, ordered by their priority within the project. Tasks can exist in more than one project at a time.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TasksApi();
let projectGid = 1331; // String | Globally unique identifier for the project.
let opts = {
  'completedSince': 2012-02-22T02:06:58.158Z, // String | Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or the keyword *now*. 
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9, // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'optFields': ["actual_time_minutes","num_subtasks","hearted","projects","created_at","modified_at","tags","memberships","approval_status","liked","parent","assignee","external","dependencies","completed_by","name","num_likes","start_at","custom_fields","hearts","due_on","resource_subtype","dependents","assignee_section","notes","is_rendered_as_separator","likes","start_on","workspace","followers","assignee_status","completed_at","due_at","html_notes","permalink_url","completed","num_hearts"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
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
 **completedSince** | **String**| Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or the keyword *now*.  | [optional] 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#39; | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GetTasks200Response**](GetTasks200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=UTF-8


## getTasksForSection

> GetTasks200Response getTasksForSection(sectionGid, opts)

Get tasks from a section

*Board view only*: Returns the compact section records for all tasks within the given section.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TasksApi();
let sectionGid = 321654; // String | The globally unique identifier for the section.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9, // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'optFields': ["actual_time_minutes","num_subtasks","hearted","projects","created_at","modified_at","tags","memberships","approval_status","liked","parent","assignee","external","dependencies","completed_by","name","num_likes","start_at","custom_fields","hearts","due_on","resource_subtype","dependents","assignee_section","notes","is_rendered_as_separator","likes","start_on","workspace","followers","assignee_status","completed_at","due_at","html_notes","permalink_url","completed","num_hearts"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.getTasksForSection(sectionGid, opts, (error, data, response) => {
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
 **sectionGid** | **String**| The globally unique identifier for the section. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#39; | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GetTasks200Response**](GetTasks200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=UTF-8


## getTasksForTag

> GetTasks200Response getTasksForTag(tagGid, opts)

Get tasks from a tag

Returns the compact task records for all tasks with the given tag. Tasks can have more than one tag at a time.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TasksApi();
let tagGid = 11235; // String | Globally unique identifier for the tag.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9, // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'optFields': ["actual_time_minutes","num_subtasks","hearted","projects","created_at","modified_at","tags","memberships","approval_status","liked","parent","assignee","external","dependencies","completed_by","name","num_likes","start_at","custom_fields","hearts","due_on","resource_subtype","dependents","assignee_section","notes","is_rendered_as_separator","likes","start_on","workspace","followers","assignee_status","completed_at","due_at","html_notes","permalink_url","completed","num_hearts"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.getTasksForTag(tagGid, opts, (error, data, response) => {
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
 **tagGid** | **String**| Globally unique identifier for the tag. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#39; | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GetTasks200Response**](GetTasks200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=UTF-8


## getTasksForUserTaskList

> GetTasks200Response getTasksForUserTaskList(userTaskListGid, opts)

Get tasks from a user task list

Returns the compact list of tasks in a user’s My Tasks list. *Note: Access control is enforced for this endpoint as with all Asana API endpoints, meaning a user’s private tasks will be filtered out if the API-authenticated user does not have access to them.* *Note: Both complete and incomplete tasks are returned by default unless they are filtered out (for example, setting &#x60;completed_since&#x3D;now&#x60; will return only incomplete tasks, which is the default view for “My Tasks” in Asana.)*

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TasksApi();
let userTaskListGid = 12345; // String | Globally unique identifier for the user task list.
let opts = {
  'completedSince': 2012-02-22T02:06:58.158Z, // String | Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or the keyword *now*. 
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9, // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'optFields': ["actual_time_minutes","num_subtasks","hearted","projects","created_at","modified_at","tags","memberships","approval_status","liked","parent","assignee","external","dependencies","completed_by","name","num_likes","start_at","custom_fields","hearts","due_on","resource_subtype","dependents","assignee_section","notes","is_rendered_as_separator","likes","start_on","workspace","followers","assignee_status","completed_at","due_at","html_notes","permalink_url","completed","num_hearts"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.getTasksForUserTaskList(userTaskListGid, opts, (error, data, response) => {
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
 **userTaskListGid** | **String**| Globally unique identifier for the user task list. | 
 **completedSince** | **String**| Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or the keyword *now*.  | [optional] 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#39; | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GetTasks200Response**](GetTasks200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=UTF-8


## removeDependenciesForTask

> DeleteAttachment200Response removeDependenciesForTask(taskGid, addDependenciesForTaskRequest, opts)

Unlink dependencies from a task

Unlinks a set of dependencies from this task.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TasksApi();
let taskGid = 321654; // String | The task to operate on.
let addDependenciesForTaskRequest = new AsanaPreview.AddDependenciesForTaskRequest(); // AddDependenciesForTaskRequest | The list of tasks to unlink as dependencies.
let opts = {
  'optPretty': true // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
};

apiInstance.removeDependenciesForTask(taskGid, addDependenciesForTaskRequest, opts, (error, data, response) => {
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
 **addDependenciesForTaskRequest** | [**AddDependenciesForTaskRequest**](AddDependenciesForTaskRequest.md)| The list of tasks to unlink as dependencies. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 

### Return type

[**DeleteAttachment200Response**](DeleteAttachment200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json; charset=UTF-8


## removeDependentsForTask

> DeleteAttachment200Response removeDependentsForTask(taskGid, addDependentsForTaskRequest, opts)

Unlink dependents from a task

Unlinks a set of dependents from this task.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TasksApi();
let taskGid = 321654; // String | The task to operate on.
let addDependentsForTaskRequest = new AsanaPreview.AddDependentsForTaskRequest(); // AddDependentsForTaskRequest | The list of tasks to remove as dependents.
let opts = {
  'optPretty': true // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
};

apiInstance.removeDependentsForTask(taskGid, addDependentsForTaskRequest, opts, (error, data, response) => {
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
 **addDependentsForTaskRequest** | [**AddDependentsForTaskRequest**](AddDependentsForTaskRequest.md)| The list of tasks to remove as dependents. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 

### Return type

[**DeleteAttachment200Response**](DeleteAttachment200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json; charset=UTF-8


## removeFollowerForTask

> CreateTask201Response removeFollowerForTask(taskGid, removeFollowerForTaskRequest, opts)

Remove followers from a task

Removes each of the specified followers from the task if they are following. Returns the complete, updated record for the affected task.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TasksApi();
let taskGid = 321654; // String | The task to operate on.
let removeFollowerForTaskRequest = new AsanaPreview.RemoveFollowerForTaskRequest(); // RemoveFollowerForTaskRequest | The followers to remove from the task.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["actual_time_minutes","num_subtasks","hearted","projects","created_at","modified_at","tags","memberships","approval_status","liked","parent","assignee","external","dependencies","completed_by","name","num_likes","start_at","custom_fields","hearts","due_on","resource_subtype","dependents","assignee_section","notes","is_rendered_as_separator","likes","start_on","workspace","followers","assignee_status","completed_at","due_at","html_notes","permalink_url","completed","num_hearts"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.removeFollowerForTask(taskGid, removeFollowerForTaskRequest, opts, (error, data, response) => {
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
 **removeFollowerForTaskRequest** | [**RemoveFollowerForTaskRequest**](RemoveFollowerForTaskRequest.md)| The followers to remove from the task. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**CreateTask201Response**](CreateTask201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json; charset=UTF-8


## removeProjectForTask

> DeleteAttachment200Response removeProjectForTask(taskGid, removeProjectForTaskRequest, opts)

Remove a project from a task

Removes the task from the specified project. The task will still exist in the system, but it will not be in the project anymore.  Returns an empty data block.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TasksApi();
let taskGid = 321654; // String | The task to operate on.
let removeProjectForTaskRequest = new AsanaPreview.RemoveProjectForTaskRequest(); // RemoveProjectForTaskRequest | The project to remove the task from.
let opts = {
  'optPretty': true // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
};

apiInstance.removeProjectForTask(taskGid, removeProjectForTaskRequest, opts, (error, data, response) => {
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
 **removeProjectForTaskRequest** | [**RemoveProjectForTaskRequest**](RemoveProjectForTaskRequest.md)| The project to remove the task from. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 

### Return type

[**DeleteAttachment200Response**](DeleteAttachment200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json; charset=UTF-8


## removeTagForTask

> DeleteAttachment200Response removeTagForTask(taskGid, removeTagForTaskRequest, opts)

Remove a tag from a task

Removes a tag from a task. Returns an empty data block.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TasksApi();
let taskGid = 321654; // String | The task to operate on.
let removeTagForTaskRequest = new AsanaPreview.RemoveTagForTaskRequest(); // RemoveTagForTaskRequest | The tag to remove from the task.
let opts = {
  'optPretty': true // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
};

apiInstance.removeTagForTask(taskGid, removeTagForTaskRequest, opts, (error, data, response) => {
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
 **removeTagForTaskRequest** | [**RemoveTagForTaskRequest**](RemoveTagForTaskRequest.md)| The tag to remove from the task. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 

### Return type

[**DeleteAttachment200Response**](DeleteAttachment200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json; charset=UTF-8


## searchTasksForWorkspace

> GetTasks200Response searchTasksForWorkspace(workspaceGid, opts)

Search tasks in a workspace

To mirror the functionality of the Asana web app&#39;s advanced search feature, the Asana API has a task search endpoint that allows you to build complex filters to find and retrieve the exact data you need. #### Premium access Like the Asana web product&#39;s advance search feature, this search endpoint will only be available to premium Asana users. A user is premium if any of the following is true:  - The workspace in which the search is being performed is a premium workspace - The user is a member of a premium team inside the workspace  Even if a user is only a member of a premium team inside a non-premium workspace, search will allow them to find data anywhere in the workspace, not just inside the premium team. Making a search request using credentials of a non-premium user will result in a &#x60;402 Payment Required&#x60; error. #### Pagination Search results are not stable; repeating the same query multiple times may return the data in a different order, even if the data do not change. Because of this, the traditional [pagination](https://developers.asana.com/docs/#pagination) available elsewhere in the Asana API is not available here. However, you can paginate manually by sorting the search results by their creation time and then modifying each subsequent query to exclude data you have already seen. Page sizes are limited to a maximum of 100 items, and can be specified by the &#x60;limit&#x60; query parameter. #### Eventual consistency Changes in Asana (regardless of whether they’re made though the web product or the API) are forwarded to our search infrastructure to be indexed. This process can take between 10 and 60 seconds to complete under normal operation, and longer during some production incidents. Making a change to a task that would alter its presence in a particular search query will not be reflected immediately. This is also true of the advanced search feature in the web product. #### Rate limits You may receive a &#x60;429 Too Many Requests&#x60; response if you hit any of our [rate limits](https://developers.asana.com/docs/#rate-limits). #### Custom field parameters | Parameter name | Custom field type | Accepted type | |---|---|---| | custom_fields.{gid}.is_set | All | Boolean | | custom_fields.{gid}.value | Text | String | | custom_fields.{gid}.value | Number | Number | | custom_fields.{gid}.value | Enum | Enum option ID | | custom_fields.{gid}.starts_with | Text only | String | | custom_fields.{gid}.ends_with | Text only | String | | custom_fields.{gid}.contains | Text only | String | | custom_fields.{gid}.less_than | Number only | Number | | custom_fields.{gid}.greater_than | Number only | Number |   For example, if the gid of the custom field is 12345, these query parameter to find tasks where it is set would be &#x60;custom_fields.12345.is_set&#x3D;true&#x60;. To match an exact value for an enum custom field, use the gid of the desired enum option and not the name of the enum option: &#x60;custom_fields.12345.value&#x3D;67890&#x60;.  **Not Supported**: searching for multiple exact matches of a custom field, searching for multi-enum custom field  *Note: If you specify &#x60;projects.any&#x60; and &#x60;sections.any&#x60;, you will receive tasks for the project **and** tasks for the section. If you&#39;re looking for only tasks in a section, omit the &#x60;projects.any&#x60; from the request.*

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TasksApi();
let workspaceGid = 12345; // String | Globally unique identifier for the workspace or organization.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'text': Bug, // String | Performs full-text search on both task name and description
  'resourceSubtype': "'milestone'", // String | Filters results by the task's resource_subtype
  'assigneeAny': 12345,23456,34567, // String | Comma-separated list of user identifiers
  'assigneeNot': 12345,23456,34567, // String | Comma-separated list of user identifiers
  'portfoliosAny': 12345,23456,34567, // String | Comma-separated list of portfolio IDs
  'projectsAny': 12345,23456,34567, // String | Comma-separated list of project IDs
  'projectsNot': 12345,23456,34567, // String | Comma-separated list of project IDs
  'projectsAll': 12345,23456,34567, // String | Comma-separated list of project IDs
  'sectionsAny': 12345,23456,34567, // String | Comma-separated list of section or column IDs
  'sectionsNot': 12345,23456,34567, // String | Comma-separated list of section or column IDs
  'sectionsAll': 12345,23456,34567, // String | Comma-separated list of section or column IDs
  'tagsAny': 12345,23456,34567, // String | Comma-separated list of tag IDs
  'tagsNot': 12345,23456,34567, // String | Comma-separated list of tag IDs
  'tagsAll': 12345,23456,34567, // String | Comma-separated list of tag IDs
  'teamsAny': 12345,23456,34567, // String | Comma-separated list of team IDs
  'followersNot': 12345,23456,34567, // String | Comma-separated list of user identifiers
  'createdByAny': 12345,23456,34567, // String | Comma-separated list of user identifiers
  'createdByNot': 12345,23456,34567, // String | Comma-separated list of user identifiers
  'assignedByAny': 12345,23456,34567, // String | Comma-separated list of user identifiers
  'assignedByNot': 12345,23456,34567, // String | Comma-separated list of user identifiers
  'likedByNot': 12345,23456,34567, // String | Comma-separated list of user identifiers
  'commentedOnByNot': 12345,23456,34567, // String | Comma-separated list of user identifiers
  'dueOnBefore': 2019-09-15, // Date | ISO 8601 date string
  'dueOnAfter': 2019-09-15, // Date | ISO 8601 date string
  'dueOn': 2019-09-15, // Date | ISO 8601 date string or `null`
  'dueAtBefore': 2019-04-15T01:01:46.055Z, // Date | ISO 8601 datetime string
  'dueAtAfter': 2019-04-15T01:01:46.055Z, // Date | ISO 8601 datetime string
  'startOnBefore': 2019-09-15, // Date | ISO 8601 date string
  'startOnAfter': 2019-09-15, // Date | ISO 8601 date string
  'startOn': 2019-09-15, // Date | ISO 8601 date string or `null`
  'createdOnBefore': 2019-09-15, // Date | ISO 8601 date string
  'createdOnAfter': 2019-09-15, // Date | ISO 8601 date string
  'createdOn': 2019-09-15, // Date | ISO 8601 date string or `null`
  'createdAtBefore': 2019-04-15T01:01:46.055Z, // Date | ISO 8601 datetime string
  'createdAtAfter': 2019-04-15T01:01:46.055Z, // Date | ISO 8601 datetime string
  'completedOnBefore': 2019-09-15, // Date | ISO 8601 date string
  'completedOnAfter': 2019-09-15, // Date | ISO 8601 date string
  'completedOn': 2019-09-15, // Date | ISO 8601 date string or `null`
  'completedAtBefore': 2019-04-15T01:01:46.055Z, // Date | ISO 8601 datetime string
  'completedAtAfter': 2019-04-15T01:01:46.055Z, // Date | ISO 8601 datetime string
  'modifiedOnBefore': 2019-09-15, // Date | ISO 8601 date string
  'modifiedOnAfter': 2019-09-15, // Date | ISO 8601 date string
  'modifiedOn': 2019-09-15, // Date | ISO 8601 date string or `null`
  'modifiedAtBefore': 2019-04-15T01:01:46.055Z, // Date | ISO 8601 datetime string
  'modifiedAtAfter': 2019-04-15T01:01:46.055Z, // Date | ISO 8601 datetime string
  'isBlocking': false, // Boolean | Filter to incomplete tasks with dependents
  'isBlocked': false, // Boolean | Filter to tasks with incomplete dependencies
  'hasAttachment': false, // Boolean | Filter to tasks with attachments
  'completed': false, // Boolean | Filter to completed tasks
  'isSubtask': false, // Boolean | Filter to subtasks
  'sortBy': likes, // String | One of `due_date`, `created_at`, `completed_at`, `likes`, or `modified_at`, defaults to `modified_at`
  'sortAscending': true, // Boolean | Default `false`
  'optFields': ["actual_time_minutes","num_subtasks","hearted","projects","created_at","modified_at","tags","memberships","approval_status","liked","parent","assignee","external","dependencies","completed_by","name","num_likes","start_at","custom_fields","hearts","due_on","resource_subtype","dependents","assignee_section","notes","is_rendered_as_separator","likes","start_on","workspace","followers","assignee_status","completed_at","due_at","html_notes","permalink_url","completed","num_hearts"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.searchTasksForWorkspace(workspaceGid, opts, (error, data, response) => {
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
 **workspaceGid** | **String**| Globally unique identifier for the workspace or organization. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **text** | **String**| Performs full-text search on both task name and description | [optional] 
 **resourceSubtype** | **String**| Filters results by the task&#39;s resource_subtype | [optional] [default to &#39;milestone&#39;]
 **assigneeAny** | **String**| Comma-separated list of user identifiers | [optional] 
 **assigneeNot** | **String**| Comma-separated list of user identifiers | [optional] 
 **portfoliosAny** | **String**| Comma-separated list of portfolio IDs | [optional] 
 **projectsAny** | **String**| Comma-separated list of project IDs | [optional] 
 **projectsNot** | **String**| Comma-separated list of project IDs | [optional] 
 **projectsAll** | **String**| Comma-separated list of project IDs | [optional] 
 **sectionsAny** | **String**| Comma-separated list of section or column IDs | [optional] 
 **sectionsNot** | **String**| Comma-separated list of section or column IDs | [optional] 
 **sectionsAll** | **String**| Comma-separated list of section or column IDs | [optional] 
 **tagsAny** | **String**| Comma-separated list of tag IDs | [optional] 
 **tagsNot** | **String**| Comma-separated list of tag IDs | [optional] 
 **tagsAll** | **String**| Comma-separated list of tag IDs | [optional] 
 **teamsAny** | **String**| Comma-separated list of team IDs | [optional] 
 **followersNot** | **String**| Comma-separated list of user identifiers | [optional] 
 **createdByAny** | **String**| Comma-separated list of user identifiers | [optional] 
 **createdByNot** | **String**| Comma-separated list of user identifiers | [optional] 
 **assignedByAny** | **String**| Comma-separated list of user identifiers | [optional] 
 **assignedByNot** | **String**| Comma-separated list of user identifiers | [optional] 
 **likedByNot** | **String**| Comma-separated list of user identifiers | [optional] 
 **commentedOnByNot** | **String**| Comma-separated list of user identifiers | [optional] 
 **dueOnBefore** | **Date**| ISO 8601 date string | [optional] 
 **dueOnAfter** | **Date**| ISO 8601 date string | [optional] 
 **dueOn** | **Date**| ISO 8601 date string or &#x60;null&#x60; | [optional] 
 **dueAtBefore** | **Date**| ISO 8601 datetime string | [optional] 
 **dueAtAfter** | **Date**| ISO 8601 datetime string | [optional] 
 **startOnBefore** | **Date**| ISO 8601 date string | [optional] 
 **startOnAfter** | **Date**| ISO 8601 date string | [optional] 
 **startOn** | **Date**| ISO 8601 date string or &#x60;null&#x60; | [optional] 
 **createdOnBefore** | **Date**| ISO 8601 date string | [optional] 
 **createdOnAfter** | **Date**| ISO 8601 date string | [optional] 
 **createdOn** | **Date**| ISO 8601 date string or &#x60;null&#x60; | [optional] 
 **createdAtBefore** | **Date**| ISO 8601 datetime string | [optional] 
 **createdAtAfter** | **Date**| ISO 8601 datetime string | [optional] 
 **completedOnBefore** | **Date**| ISO 8601 date string | [optional] 
 **completedOnAfter** | **Date**| ISO 8601 date string | [optional] 
 **completedOn** | **Date**| ISO 8601 date string or &#x60;null&#x60; | [optional] 
 **completedAtBefore** | **Date**| ISO 8601 datetime string | [optional] 
 **completedAtAfter** | **Date**| ISO 8601 datetime string | [optional] 
 **modifiedOnBefore** | **Date**| ISO 8601 date string | [optional] 
 **modifiedOnAfter** | **Date**| ISO 8601 date string | [optional] 
 **modifiedOn** | **Date**| ISO 8601 date string or &#x60;null&#x60; | [optional] 
 **modifiedAtBefore** | **Date**| ISO 8601 datetime string | [optional] 
 **modifiedAtAfter** | **Date**| ISO 8601 datetime string | [optional] 
 **isBlocking** | **Boolean**| Filter to incomplete tasks with dependents | [optional] 
 **isBlocked** | **Boolean**| Filter to tasks with incomplete dependencies | [optional] 
 **hasAttachment** | **Boolean**| Filter to tasks with attachments | [optional] 
 **completed** | **Boolean**| Filter to completed tasks | [optional] 
 **isSubtask** | **Boolean**| Filter to subtasks | [optional] 
 **sortBy** | **String**| One of &#x60;due_date&#x60;, &#x60;created_at&#x60;, &#x60;completed_at&#x60;, &#x60;likes&#x60;, or &#x60;modified_at&#x60;, defaults to &#x60;modified_at&#x60; | [optional] [default to &#39;modified_at&#39;]
 **sortAscending** | **Boolean**| Default &#x60;false&#x60; | [optional] [default to false]
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GetTasks200Response**](GetTasks200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=UTF-8


## setParentForTask

> CreateTask201Response setParentForTask(taskGid, setParentForTaskRequest, opts)

Set the parent of a task

parent, or no parent task at all. Returns an empty data block. When using &#x60;insert_before&#x60; and &#x60;insert_after&#x60;, at most one of those two options can be specified, and they must already be subtasks of the parent.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TasksApi();
let taskGid = 321654; // String | The task to operate on.
let setParentForTaskRequest = new AsanaPreview.SetParentForTaskRequest(); // SetParentForTaskRequest | The new parent of the subtask.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["actual_time_minutes","num_subtasks","hearted","projects","created_at","modified_at","tags","memberships","approval_status","liked","parent","assignee","external","dependencies","completed_by","name","num_likes","start_at","custom_fields","hearts","due_on","resource_subtype","dependents","assignee_section","notes","is_rendered_as_separator","likes","start_on","workspace","followers","assignee_status","completed_at","due_at","html_notes","permalink_url","completed","num_hearts"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.setParentForTask(taskGid, setParentForTaskRequest, opts, (error, data, response) => {
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
 **setParentForTaskRequest** | [**SetParentForTaskRequest**](SetParentForTaskRequest.md)| The new parent of the subtask. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**CreateTask201Response**](CreateTask201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json; charset=UTF-8


## updateTask

> CreateTask201Response updateTask(taskGid, createTaskRequest, opts)

Update a task

A specific, existing task can be updated by making a PUT request on the URL for that task. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the task.  Returns the complete updated task record.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.TasksApi();
let taskGid = 321654; // String | The task to operate on.
let createTaskRequest = new AsanaPreview.CreateTaskRequest(); // CreateTaskRequest | The task to update.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["actual_time_minutes","num_subtasks","hearted","projects","created_at","modified_at","tags","memberships","approval_status","liked","parent","assignee","external","dependencies","completed_by","name","num_likes","start_at","custom_fields","hearts","due_on","resource_subtype","dependents","assignee_section","notes","is_rendered_as_separator","likes","start_on","workspace","followers","assignee_status","completed_at","due_at","html_notes","permalink_url","completed","num_hearts"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.updateTask(taskGid, createTaskRequest, opts, (error, data, response) => {
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
 **createTaskRequest** | [**CreateTaskRequest**](CreateTaskRequest.md)| The task to update. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**CreateTask201Response**](CreateTask201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json; charset=UTF-8

