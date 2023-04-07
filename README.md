# node-asana-preview

This is the interface for interacting with the Asana platform

- Package version: 1.0.2

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

```shell
npm install asana-preview --save
```

Finally, you need to build the module:

```shell
npm run build
```

#### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your asana-preview from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personal_access_token
let personal_access_token = defaultClient.authentications['personal_access_token'];
personal_access_token.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.UsersApi();
let userGid = "me"; // String | A string identifying a user. This can either be the string \"me\", an email, or the gid of a user.
let opts = {
  'optFields': ["email","name","workspaces"], // [String] | Defines fields to return.  Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.  The gid of included objects will always be returned, regardless of the field options.
  'optPretty': true // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
};

apiInstance.getUser(userGid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' +  JSON.stringify(data, 0, 2));
  }
});
```

## Documentation for API Endpoints

All URIs are relative to *https://app.asana.com/api/1.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AsanaPreview.EventsApi* | [**getEvents**](docs/EventsApi.md#getEvents) | **GET** /events | Get events on a resource
*AsanaPreview.ProjectsApi* | [**getProject**](docs/ProjectsApi.md#getProject) | **GET** /projects/{project_gid} | Get a project
*AsanaPreview.ProjectsApi* | [**getProjects**](docs/ProjectsApi.md#getProjects) | **GET** /projects | Get multiple projects
*AsanaPreview.SectionsApi* | [**getSectionsForProject**](docs/SectionsApi.md#getSectionsForProject) | **GET** /projects/{project_gid}/sections | Get sections in a project
*AsanaPreview.StoriesApi* | [**getStoriesForTask**](docs/StoriesApi.md#getStoriesForTask) | **GET** /tasks/{task_gid}/stories | Get stories from a task
*AsanaPreview.TasksApi* | [**getSubtasksForTask**](docs/TasksApi.md#getSubtasksForTask) | **GET** /tasks/{task_gid}/subtasks | Get subtasks from a task
*AsanaPreview.TasksApi* | [**getTask**](docs/TasksApi.md#getTask) | **GET** /tasks/{task_gid} | Get a task
*AsanaPreview.TasksApi* | [**getTasks**](docs/TasksApi.md#getTasks) | **GET** /tasks | Get multiple tasks
*AsanaPreview.TasksApi* | [**getTasksForProject**](docs/TasksApi.md#getTasksForProject) | **GET** /projects/{project_gid}/tasks | Get tasks from a project
*AsanaPreview.UsersApi* | [**getUser**](docs/UsersApi.md#getUser) | **GET** /users/{user_gid} | Get a user

