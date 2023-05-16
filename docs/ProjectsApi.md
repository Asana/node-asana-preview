# AsanaPreview.ProjectsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCustomFieldSettingForProject**](ProjectsApi.md#addCustomFieldSettingForProject) | **POST** /projects/{project_gid}/addCustomFieldSetting | Add a custom field to a project
[**addFollowersForProject**](ProjectsApi.md#addFollowersForProject) | **POST** /projects/{project_gid}/addFollowers | Add followers to a project
[**addMembersForProject**](ProjectsApi.md#addMembersForProject) | **POST** /projects/{project_gid}/addMembers | Add users to a project
[**createProject**](ProjectsApi.md#createProject) | **POST** /projects | Create a project
[**createProjectForTeam**](ProjectsApi.md#createProjectForTeam) | **POST** /teams/{team_gid}/projects | Create a project in a team
[**createProjectForWorkspace**](ProjectsApi.md#createProjectForWorkspace) | **POST** /workspaces/{workspace_gid}/projects | Create a project in a workspace
[**deleteProject**](ProjectsApi.md#deleteProject) | **DELETE** /projects/{project_gid} | Delete a project
[**duplicateProject**](ProjectsApi.md#duplicateProject) | **POST** /projects/{project_gid}/duplicate | Duplicate a project
[**getProject**](ProjectsApi.md#getProject) | **GET** /projects/{project_gid} | Get a project
[**getProjects**](ProjectsApi.md#getProjects) | **GET** /projects | Get multiple projects
[**getProjectsForTask**](ProjectsApi.md#getProjectsForTask) | **GET** /tasks/{task_gid}/projects | Get projects a task is in
[**getProjectsForTeam**](ProjectsApi.md#getProjectsForTeam) | **GET** /teams/{team_gid}/projects | Get a team&#39;s projects
[**getProjectsForWorkspace**](ProjectsApi.md#getProjectsForWorkspace) | **GET** /workspaces/{workspace_gid}/projects | Get all projects in a workspace
[**getTaskCountsForProject**](ProjectsApi.md#getTaskCountsForProject) | **GET** /projects/{project_gid}/task_counts | Get task count of a project
[**projectSaveAsTemplate**](ProjectsApi.md#projectSaveAsTemplate) | **POST** /projects/{project_gid}/saveAsTemplate | Create a project template from a project
[**removeCustomFieldSettingForProject**](ProjectsApi.md#removeCustomFieldSettingForProject) | **POST** /projects/{project_gid}/removeCustomFieldSetting | Remove a custom field from a project
[**removeFollowersForProject**](ProjectsApi.md#removeFollowersForProject) | **POST** /projects/{project_gid}/removeFollowers | Remove followers from a project
[**removeMembersForProject**](ProjectsApi.md#removeMembersForProject) | **POST** /projects/{project_gid}/removeMembers | Remove users from a project
[**updateProject**](ProjectsApi.md#updateProject) | **PUT** /projects/{project_gid} | Update a project



## addCustomFieldSettingForProject

> AddCustomFieldSettingForPortfolio200Response addCustomFieldSettingForProject(projectGid, addCustomFieldSettingForPortfolioRequest, opts)

Add a custom field to a project

Custom fields are associated with projects by way of custom field settings.  This method creates a setting for the project.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.ProjectsApi();
let projectGid = 1331; // String | Globally unique identifier for the project.
let addCustomFieldSettingForPortfolioRequest = new AsanaPreview.AddCustomFieldSettingForPortfolioRequest(); // AddCustomFieldSettingForPortfolioRequest | Information about the custom field setting.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["is_important","custom_field","project","parent"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.addCustomFieldSettingForProject(projectGid, addCustomFieldSettingForPortfolioRequest, opts, (error, data, response) => {
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
 **addCustomFieldSettingForPortfolioRequest** | [**AddCustomFieldSettingForPortfolioRequest**](AddCustomFieldSettingForPortfolioRequest.md)| Information about the custom field setting. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**AddCustomFieldSettingForPortfolio200Response**](AddCustomFieldSettingForPortfolio200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addFollowersForProject

> CreateProject201Response addFollowersForProject(projectGid, addFollowersForProjectRequest, opts)

Add followers to a project

Adds the specified list of users as followers to the project. Followers are a subset of members who have opted in to receive \&quot;tasks added\&quot; notifications for a project. Therefore, if the users are not already members of the project, they will also become members as a result of this operation. Returns the updated project record.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.ProjectsApi();
let projectGid = 1331; // String | Globally unique identifier for the project.
let addFollowersForProjectRequest = new AsanaPreview.AddFollowersForProjectRequest(); // AddFollowersForProjectRequest | Information about the followers being added.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["created_at","color","archived","icon","public","default_view","members","project_brief","custom_fields","html_notes","privacy_setting","due_on","name","permalink_url","owner","modified_at","current_status","completed_at","completed_by","current_status_update","workspace","due_date","completed","custom_field_settings","notes","followers","start_on","team","created_from_template"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.addFollowersForProject(projectGid, addFollowersForProjectRequest, opts, (error, data, response) => {
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
 **addFollowersForProjectRequest** | [**AddFollowersForProjectRequest**](AddFollowersForProjectRequest.md)| Information about the followers being added. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**CreateProject201Response**](CreateProject201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addMembersForProject

> CreateProject201Response addMembersForProject(projectGid, addMembersForPortfolioRequest, opts)

Add users to a project

Adds the specified list of users as members of the project. Note that a user being added as a member may also be added as a *follower* as a result of this operation. This is because the user&#39;s default notification settings (i.e., in the \&quot;Notifcations\&quot; tab of \&quot;My Profile Settings\&quot;) will override this endpoint&#39;s default behavior of setting \&quot;Tasks added\&quot; notifications to &#x60;false&#x60;. Returns the updated project record.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.ProjectsApi();
let projectGid = 1331; // String | Globally unique identifier for the project.
let addMembersForPortfolioRequest = new AsanaPreview.AddMembersForPortfolioRequest(); // AddMembersForPortfolioRequest | Information about the members being added.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["created_at","color","archived","icon","public","default_view","members","project_brief","custom_fields","html_notes","privacy_setting","due_on","name","permalink_url","owner","modified_at","current_status","completed_at","completed_by","current_status_update","workspace","due_date","completed","custom_field_settings","notes","followers","start_on","team","created_from_template"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.addMembersForProject(projectGid, addMembersForPortfolioRequest, opts, (error, data, response) => {
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
 **addMembersForPortfolioRequest** | [**AddMembersForPortfolioRequest**](AddMembersForPortfolioRequest.md)| Information about the members being added. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**CreateProject201Response**](CreateProject201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createProject

> CreateProject201Response createProject(createProjectRequest, opts)

Create a project

Create a new project in a workspace or team.  Every project is required to be created in a specific workspace or organization, and this cannot be changed once set. Note that you can use the &#x60;workspace&#x60; parameter regardless of whether or not it is an organization.  If the workspace for your project is an organization, you must also supply a &#x60;team&#x60; to share the project with.  Returns the full record of the newly created project.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.ProjectsApi();
let createProjectRequest = new AsanaPreview.CreateProjectRequest(); // CreateProjectRequest | The project to create.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["created_at","color","archived","icon","public","default_view","members","project_brief","custom_fields","html_notes","privacy_setting","due_on","name","permalink_url","owner","modified_at","current_status","completed_at","completed_by","current_status_update","workspace","due_date","completed","custom_field_settings","notes","followers","start_on","team","created_from_template"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.createProject(createProjectRequest, opts, (error, data, response) => {
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
 **createProjectRequest** | [**CreateProjectRequest**](CreateProjectRequest.md)| The project to create. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**CreateProject201Response**](CreateProject201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createProjectForTeam

> CreateProject201Response createProjectForTeam(teamGid, createProjectRequest, opts)

Create a project in a team

Creates a project shared with the given team.  Returns the full record of the newly created project.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.ProjectsApi();
let teamGid = 159874; // String | Globally unique identifier for the team.
let createProjectRequest = new AsanaPreview.CreateProjectRequest(); // CreateProjectRequest | The new project to create.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["created_at","color","archived","icon","public","default_view","members","project_brief","custom_fields","html_notes","privacy_setting","due_on","name","permalink_url","owner","modified_at","current_status","completed_at","completed_by","current_status_update","workspace","due_date","completed","custom_field_settings","notes","followers","start_on","team","created_from_template"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.createProjectForTeam(teamGid, createProjectRequest, opts, (error, data, response) => {
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
 **teamGid** | **String**| Globally unique identifier for the team. | 
 **createProjectRequest** | [**CreateProjectRequest**](CreateProjectRequest.md)| The new project to create. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**CreateProject201Response**](CreateProject201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createProjectForWorkspace

> CreateProject201Response createProjectForWorkspace(workspaceGid, createProjectRequest, opts)

Create a project in a workspace

Creates a project in the workspace.  If the workspace for your project is an organization, you must also supply a team to share the project with.  Returns the full record of the newly created project.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.ProjectsApi();
let workspaceGid = 12345; // String | Globally unique identifier for the workspace or organization.
let createProjectRequest = new AsanaPreview.CreateProjectRequest(); // CreateProjectRequest | The new project to create.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["created_at","color","archived","icon","public","default_view","members","project_brief","custom_fields","html_notes","privacy_setting","due_on","name","permalink_url","owner","modified_at","current_status","completed_at","completed_by","current_status_update","workspace","due_date","completed","custom_field_settings","notes","followers","start_on","team","created_from_template"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.createProjectForWorkspace(workspaceGid, createProjectRequest, opts, (error, data, response) => {
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
 **createProjectRequest** | [**CreateProjectRequest**](CreateProjectRequest.md)| The new project to create. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**CreateProject201Response**](CreateProject201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteProject

> DeleteAttachment200Response deleteProject(projectGid, opts)

Delete a project

A specific, existing project can be deleted by making a DELETE request on the URL for that project.  Returns an empty data record.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.ProjectsApi();
let projectGid = 1331; // String | Globally unique identifier for the project.
let opts = {
  'optPretty': true // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
};

apiInstance.deleteProject(projectGid, opts, (error, data, response) => {
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
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 

### Return type

[**DeleteAttachment200Response**](DeleteAttachment200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## duplicateProject

> GetJob200Response duplicateProject(projectGid, opts)

Duplicate a project

Creates and returns a job that will asynchronously handle the duplication.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.ProjectsApi();
let projectGid = 1331; // String | Globally unique identifier for the project.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["status","resource_subtype","new_project_template","new_task","new_task_template","new_project"], // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
  'duplicateProjectRequest': new AsanaPreview.DuplicateProjectRequest() // DuplicateProjectRequest | Describes the duplicate's name and the elements that will be duplicated.
};

apiInstance.duplicateProject(projectGid, opts, (error, data, response) => {
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
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 
 **duplicateProjectRequest** | [**DuplicateProjectRequest**](DuplicateProjectRequest.md)| Describes the duplicate&#39;s name and the elements that will be duplicated. | [optional] 

### Return type

[**GetJob200Response**](GetJob200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getProject

> CreateProject201Response getProject(projectGid, opts)

Get a project

Returns the complete project record for a single project.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.ProjectsApi();
let projectGid = 1331; // String | Globally unique identifier for the project.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["created_at","color","archived","icon","public","default_view","members","project_brief","custom_fields","html_notes","privacy_setting","due_on","name","permalink_url","owner","modified_at","current_status","completed_at","completed_by","current_status_update","workspace","due_date","completed","custom_field_settings","notes","followers","start_on","team","created_from_template"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.getProject(projectGid, opts, (error, data, response) => {
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
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**CreateProject201Response**](CreateProject201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjects

> GetItemsForPortfolio200Response getProjects(opts)

Get multiple projects

Returns the compact project records for some filtered set of projects. Use one or more of the parameters provided to filter the projects returned. *Note: This endpoint may timeout for large domains. Try filtering by team!*

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.ProjectsApi();
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9, // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'workspace': 1331, // String | The workspace or organization to filter projects on.
  'team': 14916, // String | The team to filter projects on.
  'archived': false, // Boolean | Only return projects whose `archived` field takes on the value of this parameter.
  'optFields': ["created_at","color","archived","icon","public","default_view","members","project_brief","custom_fields","html_notes","privacy_setting","name","due_on","permalink_url","owner","modified_at","current_status","completed_at","completed_by","current_status_update","workspace","due_date","completed","custom_field_settings","notes","followers","start_on","team","created_from_template"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.getProjects(opts, (error, data, response) => {
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
 **workspace** | **String**| The workspace or organization to filter projects on. | [optional] 
 **team** | **String**| The team to filter projects on. | [optional] 
 **archived** | **Boolean**| Only return projects whose &#x60;archived&#x60; field takes on the value of this parameter. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GetItemsForPortfolio200Response**](GetItemsForPortfolio200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectsForTask

> GetItemsForPortfolio200Response getProjectsForTask(taskGid, opts)

Get projects a task is in

Returns a compact representation of all of the projects the task is in.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.ProjectsApi();
let taskGid = 321654; // String | The task to operate on.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9, // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'optFields': ["created_at","color","archived","icon","public","default_view","members","project_brief","custom_fields","html_notes","privacy_setting","name","due_on","permalink_url","owner","modified_at","current_status","completed_at","completed_by","current_status_update","workspace","due_date","completed","custom_field_settings","notes","followers","start_on","team","created_from_template"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.getProjectsForTask(taskGid, opts, (error, data, response) => {
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

[**GetItemsForPortfolio200Response**](GetItemsForPortfolio200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectsForTeam

> GetItemsForPortfolio200Response getProjectsForTeam(teamGid, opts)

Get a team&#39;s projects

Returns the compact project records for all projects in the team.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.ProjectsApi();
let teamGid = 159874; // String | Globally unique identifier for the team.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9, // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'archived': false, // Boolean | Only return projects whose `archived` field takes on the value of this parameter.
  'optFields': ["created_at","color","archived","icon","public","default_view","members","project_brief","custom_fields","html_notes","privacy_setting","name","due_on","permalink_url","owner","modified_at","current_status","completed_at","completed_by","current_status_update","workspace","due_date","completed","custom_field_settings","notes","followers","start_on","team","created_from_template"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.getProjectsForTeam(teamGid, opts, (error, data, response) => {
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
 **teamGid** | **String**| Globally unique identifier for the team. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#39; | [optional] 
 **archived** | **Boolean**| Only return projects whose &#x60;archived&#x60; field takes on the value of this parameter. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GetItemsForPortfolio200Response**](GetItemsForPortfolio200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectsForWorkspace

> GetItemsForPortfolio200Response getProjectsForWorkspace(workspaceGid, opts)

Get all projects in a workspace

Returns the compact project records for all projects in the workspace. *Note: This endpoint may timeout for large domains. Prefer the &#x60;/teams/{team_gid}/projects&#x60; endpoint.*

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.ProjectsApi();
let workspaceGid = 12345; // String | Globally unique identifier for the workspace or organization.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9, // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'archived': false, // Boolean | Only return projects whose `archived` field takes on the value of this parameter.
  'optFields': ["created_at","color","archived","icon","public","default_view","members","project_brief","custom_fields","html_notes","privacy_setting","name","due_on","permalink_url","owner","modified_at","current_status","completed_at","completed_by","current_status_update","workspace","due_date","completed","custom_field_settings","notes","followers","start_on","team","created_from_template"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.getProjectsForWorkspace(workspaceGid, opts, (error, data, response) => {
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
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#39; | [optional] 
 **archived** | **Boolean**| Only return projects whose &#x60;archived&#x60; field takes on the value of this parameter. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GetItemsForPortfolio200Response**](GetItemsForPortfolio200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTaskCountsForProject

> GetTaskCountsForProject200Response getTaskCountsForProject(projectGid, opts)

Get task count of a project

Get an object that holds task count fields. **All fields are excluded by default**. You must [opt in](/docs/inputoutput-options) using &#x60;opt_fields&#x60; to get any information from this endpoint.  This endpoint has an additional [rate limit](/docs/rate-limits) and each field counts especially high against our [cost limits](/docs/rate-limits#cost-limits).  Milestones are just tasks, so they are included in the &#x60;num_tasks&#x60;, &#x60;num_incomplete_tasks&#x60;, and &#x60;num_completed_tasks&#x60; counts.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.ProjectsApi();
let projectGid = 1331; // String | Globally unique identifier for the project.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9, // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'optFields': ["num_incomplete_tasks","num_completed_milestones","num_tasks","num_milestones","num_incomplete_milestones","num_completed_tasks"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.getTaskCountsForProject(projectGid, opts, (error, data, response) => {
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
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#39; | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GetTaskCountsForProject200Response**](GetTaskCountsForProject200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectSaveAsTemplate

> GetJob200Response projectSaveAsTemplate(projectGid, projectSaveAsTemplateRequest, opts)

Create a project template from a project

Creates and returns a job that will asynchronously handle the project template creation. Note that while the resulting project template can be accessed with the API, it won&#39;t be visible in the Asana UI until Project Templates 2.0 is launched in the app. See more in [this forum post](https://forum.asana.com/t/a-new-api-for-project-templates/156432).

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.ProjectsApi();
let projectGid = 1331; // String | Globally unique identifier for the project.
let projectSaveAsTemplateRequest = new AsanaPreview.ProjectSaveAsTemplateRequest(); // ProjectSaveAsTemplateRequest | Describes the inputs used for creating a project template, such as the resulting project template's name, which team it should be created in.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["status","resource_subtype","new_project_template","new_task","new_task_template","new_project"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.projectSaveAsTemplate(projectGid, projectSaveAsTemplateRequest, opts, (error, data, response) => {
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
 **projectSaveAsTemplateRequest** | [**ProjectSaveAsTemplateRequest**](ProjectSaveAsTemplateRequest.md)| Describes the inputs used for creating a project template, such as the resulting project template&#39;s name, which team it should be created in. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GetJob200Response**](GetJob200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## removeCustomFieldSettingForProject

> DeleteAttachment200Response removeCustomFieldSettingForProject(projectGid, removeCustomFieldSettingForPortfolioRequest, opts)

Remove a custom field from a project

Removes a custom field setting from a project.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.ProjectsApi();
let projectGid = 1331; // String | Globally unique identifier for the project.
let removeCustomFieldSettingForPortfolioRequest = new AsanaPreview.RemoveCustomFieldSettingForPortfolioRequest(); // RemoveCustomFieldSettingForPortfolioRequest | Information about the custom field setting being removed.
let opts = {
  'optPretty': true // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
};

apiInstance.removeCustomFieldSettingForProject(projectGid, removeCustomFieldSettingForPortfolioRequest, opts, (error, data, response) => {
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
 **removeCustomFieldSettingForPortfolioRequest** | [**RemoveCustomFieldSettingForPortfolioRequest**](RemoveCustomFieldSettingForPortfolioRequest.md)| Information about the custom field setting being removed. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 

### Return type

[**DeleteAttachment200Response**](DeleteAttachment200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## removeFollowersForProject

> CreateProject201Response removeFollowersForProject(projectGid, removeFollowersForProjectRequest, opts)

Remove followers from a project

Removes the specified list of users from following the project, this will not affect project membership status. Returns the updated project record.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.ProjectsApi();
let projectGid = 1331; // String | Globally unique identifier for the project.
let removeFollowersForProjectRequest = new AsanaPreview.RemoveFollowersForProjectRequest(); // RemoveFollowersForProjectRequest | Information about the followers being removed.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["created_at","color","archived","icon","public","default_view","members","project_brief","custom_fields","html_notes","privacy_setting","due_on","name","permalink_url","owner","modified_at","current_status","completed_at","completed_by","current_status_update","workspace","due_date","completed","custom_field_settings","notes","followers","start_on","team","created_from_template"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.removeFollowersForProject(projectGid, removeFollowersForProjectRequest, opts, (error, data, response) => {
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
 **removeFollowersForProjectRequest** | [**RemoveFollowersForProjectRequest**](RemoveFollowersForProjectRequest.md)| Information about the followers being removed. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**CreateProject201Response**](CreateProject201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## removeMembersForProject

> CreateProject201Response removeMembersForProject(projectGid, removeMembersForPortfolioRequest, opts)

Remove users from a project

Removes the specified list of users from members of the project. Returns the updated project record.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.ProjectsApi();
let projectGid = 1331; // String | Globally unique identifier for the project.
let removeMembersForPortfolioRequest = new AsanaPreview.RemoveMembersForPortfolioRequest(); // RemoveMembersForPortfolioRequest | Information about the members being removed.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["created_at","color","archived","icon","public","default_view","members","project_brief","custom_fields","html_notes","privacy_setting","due_on","name","permalink_url","owner","modified_at","current_status","completed_at","completed_by","current_status_update","workspace","due_date","completed","custom_field_settings","notes","followers","start_on","team","created_from_template"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.removeMembersForProject(projectGid, removeMembersForPortfolioRequest, opts, (error, data, response) => {
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
 **removeMembersForPortfolioRequest** | [**RemoveMembersForPortfolioRequest**](RemoveMembersForPortfolioRequest.md)| Information about the members being removed. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**CreateProject201Response**](CreateProject201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProject

> CreateProject201Response updateProject(projectGid, createProjectRequest, opts)

Update a project

A specific, existing project can be updated by making a PUT request on the URL for that project. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the task.  Returns the complete updated project record.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.ProjectsApi();
let projectGid = 1331; // String | Globally unique identifier for the project.
let createProjectRequest = new AsanaPreview.CreateProjectRequest(); // CreateProjectRequest | The updated fields for the project.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["created_at","color","archived","icon","public","default_view","members","project_brief","custom_fields","html_notes","privacy_setting","due_on","name","permalink_url","owner","modified_at","current_status","completed_at","completed_by","current_status_update","workspace","due_date","completed","custom_field_settings","notes","followers","start_on","team","created_from_template"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.updateProject(projectGid, createProjectRequest, opts, (error, data, response) => {
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
 **createProjectRequest** | [**CreateProjectRequest**](CreateProjectRequest.md)| The updated fields for the project. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**CreateProject201Response**](CreateProject201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

