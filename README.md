# node-asana-preview

This is a [preview version](https://forum.asana.com/t/try-an-early-preview-of-our-new-node-js-and-python-sdks/394881) of Asana's new node client library. For feedback and feature requests, please leave a comment on [this forum thread](https://forum.asana.com/t/try-an-early-preview-of-our-new-node-js-and-python-sdks/394881) or through [the feedback form on our documentation site](https://form-beta.asana.com/?k=C4sELCq6hAUsoWEY0kJwAA&d=15793206719)

- Package version: 1.0.3

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
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

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
*AsanaPreview.AttachmentsApi* | [**createAttachmentForObject**](docs/AttachmentsApi.md#createAttachmentForObject) | **POST** /attachments | Upload an attachment
*AsanaPreview.AttachmentsApi* | [**deleteAttachment**](docs/AttachmentsApi.md#deleteAttachment) | **DELETE** /attachments/{attachment_gid} | Delete an attachment
*AsanaPreview.AttachmentsApi* | [**getAttachment**](docs/AttachmentsApi.md#getAttachment) | **GET** /attachments/{attachment_gid} | Get an attachment
*AsanaPreview.AttachmentsApi* | [**getAttachmentsForObject**](docs/AttachmentsApi.md#getAttachmentsForObject) | **GET** /attachments | Get attachments from an object
*AsanaPreview.AuditLogAPIApi* | [**getAuditLogEvents**](docs/AuditLogAPIApi.md#getAuditLogEvents) | **GET** /workspaces/{workspace_gid}/audit_log_events | Get audit log events
*AsanaPreview.BatchAPIApi* | [**createBatchRequest**](docs/BatchAPIApi.md#createBatchRequest) | **POST** /batch | Submit parallel requests
*AsanaPreview.CustomFieldSettingsApi* | [**getCustomFieldSettingsForPortfolio**](docs/CustomFieldSettingsApi.md#getCustomFieldSettingsForPortfolio) | **GET** /portfolios/{portfolio_gid}/custom_field_settings | Get a portfolio&#39;s custom fields
*AsanaPreview.CustomFieldSettingsApi* | [**getCustomFieldSettingsForProject**](docs/CustomFieldSettingsApi.md#getCustomFieldSettingsForProject) | **GET** /projects/{project_gid}/custom_field_settings | Get a project&#39;s custom fields
*AsanaPreview.CustomFieldsApi* | [**createCustomField**](docs/CustomFieldsApi.md#createCustomField) | **POST** /custom_fields | Create a custom field
*AsanaPreview.CustomFieldsApi* | [**createEnumOptionForCustomField**](docs/CustomFieldsApi.md#createEnumOptionForCustomField) | **POST** /custom_fields/{custom_field_gid}/enum_options | Create an enum option
*AsanaPreview.CustomFieldsApi* | [**deleteCustomField**](docs/CustomFieldsApi.md#deleteCustomField) | **DELETE** /custom_fields/{custom_field_gid} | Delete a custom field
*AsanaPreview.CustomFieldsApi* | [**getCustomField**](docs/CustomFieldsApi.md#getCustomField) | **GET** /custom_fields/{custom_field_gid} | Get a custom field
*AsanaPreview.CustomFieldsApi* | [**getCustomFieldsForWorkspace**](docs/CustomFieldsApi.md#getCustomFieldsForWorkspace) | **GET** /workspaces/{workspace_gid}/custom_fields | Get a workspace&#39;s custom fields
*AsanaPreview.CustomFieldsApi* | [**insertEnumOptionForCustomField**](docs/CustomFieldsApi.md#insertEnumOptionForCustomField) | **POST** /custom_fields/{custom_field_gid}/enum_options/insert | Reorder a custom field&#39;s enum
*AsanaPreview.CustomFieldsApi* | [**updateCustomField**](docs/CustomFieldsApi.md#updateCustomField) | **PUT** /custom_fields/{custom_field_gid} | Update a custom field
*AsanaPreview.CustomFieldsApi* | [**updateEnumOption**](docs/CustomFieldsApi.md#updateEnumOption) | **PUT** /enum_options/{enum_option_gid} | Update an enum option
*AsanaPreview.EventsApi* | [**getEvents**](docs/EventsApi.md#getEvents) | **GET** /events | Get events on a resource
*AsanaPreview.GoalRelationshipsApi* | [**addSupportingRelationship**](docs/GoalRelationshipsApi.md#addSupportingRelationship) | **POST** /goals/{goal_gid}/addSupportingRelationship | Add a supporting goal relationship
*AsanaPreview.GoalRelationshipsApi* | [**getGoalRelationship**](docs/GoalRelationshipsApi.md#getGoalRelationship) | **GET** /goal_relationships/{goal_relationship_gid} | Get a goal relationship
*AsanaPreview.GoalRelationshipsApi* | [**getGoalRelationships**](docs/GoalRelationshipsApi.md#getGoalRelationships) | **GET** /goal_relationships | Get goal relationships
*AsanaPreview.GoalRelationshipsApi* | [**removeSupportingRelationship**](docs/GoalRelationshipsApi.md#removeSupportingRelationship) | **POST** /goals/{goal_gid}/removeSupportingRelationship | Removes a supporting goal relationship
*AsanaPreview.GoalRelationshipsApi* | [**updateGoalRelationship**](docs/GoalRelationshipsApi.md#updateGoalRelationship) | **PUT** /goal_relationships/{goal_relationship_gid} | Update a goal relationship
*AsanaPreview.GoalsApi* | [**createGoal**](docs/GoalsApi.md#createGoal) | **POST** /goals | Create a goal
*AsanaPreview.GoalsApi* | [**createGoalMetric**](docs/GoalsApi.md#createGoalMetric) | **POST** /goals/{goal_gid}/setMetric | Create a goal metric
*AsanaPreview.GoalsApi* | [**deleteGoal**](docs/GoalsApi.md#deleteGoal) | **DELETE** /goals/{goal_gid} | Delete a goal
*AsanaPreview.GoalsApi* | [**getGoal**](docs/GoalsApi.md#getGoal) | **GET** /goals/{goal_gid} | Get a goal
*AsanaPreview.GoalsApi* | [**getGoals**](docs/GoalsApi.md#getGoals) | **GET** /goals | Get goals
*AsanaPreview.GoalsApi* | [**getParentGoalsForGoal**](docs/GoalsApi.md#getParentGoalsForGoal) | **GET** /goals/{goal_gid}/parentGoals | Get parent goals from a goal
*AsanaPreview.GoalsApi* | [**updateGoal**](docs/GoalsApi.md#updateGoal) | **PUT** /goals/{goal_gid} | Update a goal
*AsanaPreview.GoalsApi* | [**updateGoalMetric**](docs/GoalsApi.md#updateGoalMetric) | **POST** /goals/{goal_gid}/setMetricCurrentValue | Update a goal metric
*AsanaPreview.JobsApi* | [**getJob**](docs/JobsApi.md#getJob) | **GET** /jobs/{job_gid} | Get a job by id
*AsanaPreview.MembershipsApi* | [**createMembership**](docs/MembershipsApi.md#createMembership) | **POST** /memberships | Create a membership
*AsanaPreview.MembershipsApi* | [**deleteMembership**](docs/MembershipsApi.md#deleteMembership) | **DELETE** /memberships/{membership_gid} | Delete a membership
*AsanaPreview.MembershipsApi* | [**getMemberships**](docs/MembershipsApi.md#getMemberships) | **GET** /memberships | Get multiple memberships
*AsanaPreview.MembershipsApi* | [**updateMembership**](docs/MembershipsApi.md#updateMembership) | **PUT** /memberships/{membership_gid} | Update a membership
*AsanaPreview.OrganizationExportsApi* | [**createOrganizationExport**](docs/OrganizationExportsApi.md#createOrganizationExport) | **POST** /organization_exports | Create an organization export request
*AsanaPreview.OrganizationExportsApi* | [**getOrganizationExport**](docs/OrganizationExportsApi.md#getOrganizationExport) | **GET** /organization_exports/{organization_export_gid} | Get details on an org export request
*AsanaPreview.PortfolioMembershipsApi* | [**getPortfolioMembership**](docs/PortfolioMembershipsApi.md#getPortfolioMembership) | **GET** /portfolio_memberships/{portfolio_membership_gid} | Get a portfolio membership
*AsanaPreview.PortfolioMembershipsApi* | [**getPortfolioMemberships**](docs/PortfolioMembershipsApi.md#getPortfolioMemberships) | **GET** /portfolio_memberships | Get multiple portfolio memberships
*AsanaPreview.PortfolioMembershipsApi* | [**getPortfolioMembershipsForPortfolio**](docs/PortfolioMembershipsApi.md#getPortfolioMembershipsForPortfolio) | **GET** /portfolios/{portfolio_gid}/portfolio_memberships | Get memberships from a portfolio
*AsanaPreview.PortfoliosApi* | [**addCustomFieldSettingForPortfolio**](docs/PortfoliosApi.md#addCustomFieldSettingForPortfolio) | **POST** /portfolios/{portfolio_gid}/addCustomFieldSetting | Add a custom field to a portfolio
*AsanaPreview.PortfoliosApi* | [**addItemForPortfolio**](docs/PortfoliosApi.md#addItemForPortfolio) | **POST** /portfolios/{portfolio_gid}/addItem | Add a portfolio item
*AsanaPreview.PortfoliosApi* | [**addMembersForPortfolio**](docs/PortfoliosApi.md#addMembersForPortfolio) | **POST** /portfolios/{portfolio_gid}/addMembers | Add users to a portfolio
*AsanaPreview.PortfoliosApi* | [**createPortfolio**](docs/PortfoliosApi.md#createPortfolio) | **POST** /portfolios | Create a portfolio
*AsanaPreview.PortfoliosApi* | [**deletePortfolio**](docs/PortfoliosApi.md#deletePortfolio) | **DELETE** /portfolios/{portfolio_gid} | Delete a portfolio
*AsanaPreview.PortfoliosApi* | [**getItemsForPortfolio**](docs/PortfoliosApi.md#getItemsForPortfolio) | **GET** /portfolios/{portfolio_gid}/items | Get portfolio items
*AsanaPreview.PortfoliosApi* | [**getPortfolio**](docs/PortfoliosApi.md#getPortfolio) | **GET** /portfolios/{portfolio_gid} | Get a portfolio
*AsanaPreview.PortfoliosApi* | [**getPortfolios**](docs/PortfoliosApi.md#getPortfolios) | **GET** /portfolios | Get multiple portfolios
*AsanaPreview.PortfoliosApi* | [**removeCustomFieldSettingForPortfolio**](docs/PortfoliosApi.md#removeCustomFieldSettingForPortfolio) | **POST** /portfolios/{portfolio_gid}/removeCustomFieldSetting | Remove a custom field from a portfolio
*AsanaPreview.PortfoliosApi* | [**removeItemForPortfolio**](docs/PortfoliosApi.md#removeItemForPortfolio) | **POST** /portfolios/{portfolio_gid}/removeItem | Remove a portfolio item
*AsanaPreview.PortfoliosApi* | [**removeMembersForPortfolio**](docs/PortfoliosApi.md#removeMembersForPortfolio) | **POST** /portfolios/{portfolio_gid}/removeMembers | Remove users from a portfolio
*AsanaPreview.PortfoliosApi* | [**updatePortfolio**](docs/PortfoliosApi.md#updatePortfolio) | **PUT** /portfolios/{portfolio_gid} | Update a portfolio
*AsanaPreview.ProjectBriefsApi* | [**createProjectBrief**](docs/ProjectBriefsApi.md#createProjectBrief) | **POST** /projects/{project_gid}/project_briefs | Create a project brief
*AsanaPreview.ProjectBriefsApi* | [**deleteProjectBrief**](docs/ProjectBriefsApi.md#deleteProjectBrief) | **DELETE** /project_briefs/{project_brief_gid} | Delete a project brief
*AsanaPreview.ProjectBriefsApi* | [**getProjectBrief**](docs/ProjectBriefsApi.md#getProjectBrief) | **GET** /project_briefs/{project_brief_gid} | Get a project brief
*AsanaPreview.ProjectBriefsApi* | [**updateProjectBrief**](docs/ProjectBriefsApi.md#updateProjectBrief) | **PUT** /project_briefs/{project_brief_gid} | Update a project brief
*AsanaPreview.ProjectMembershipsApi* | [**getProjectMembership**](docs/ProjectMembershipsApi.md#getProjectMembership) | **GET** /project_memberships/{project_membership_gid} | Get a project membership
*AsanaPreview.ProjectMembershipsApi* | [**getProjectMembershipsForProject**](docs/ProjectMembershipsApi.md#getProjectMembershipsForProject) | **GET** /projects/{project_gid}/project_memberships | Get memberships from a project
*AsanaPreview.ProjectStatusesApi* | [**createProjectStatusForProject**](docs/ProjectStatusesApi.md#createProjectStatusForProject) | **POST** /projects/{project_gid}/project_statuses | Create a project status
*AsanaPreview.ProjectStatusesApi* | [**deleteProjectStatus**](docs/ProjectStatusesApi.md#deleteProjectStatus) | **DELETE** /project_statuses/{project_status_gid} | Delete a project status
*AsanaPreview.ProjectStatusesApi* | [**getProjectStatus**](docs/ProjectStatusesApi.md#getProjectStatus) | **GET** /project_statuses/{project_status_gid} | Get a project status
*AsanaPreview.ProjectStatusesApi* | [**getProjectStatusesForProject**](docs/ProjectStatusesApi.md#getProjectStatusesForProject) | **GET** /projects/{project_gid}/project_statuses | Get statuses from a project
*AsanaPreview.ProjectTemplatesApi* | [**getProjectTemplate**](docs/ProjectTemplatesApi.md#getProjectTemplate) | **GET** /project_templates/{project_template_gid} | Get a project template
*AsanaPreview.ProjectTemplatesApi* | [**getProjectTemplates**](docs/ProjectTemplatesApi.md#getProjectTemplates) | **GET** /project_templates | Get multiple project templates
*AsanaPreview.ProjectTemplatesApi* | [**getProjectTemplatesForTeam**](docs/ProjectTemplatesApi.md#getProjectTemplatesForTeam) | **GET** /teams/{team_gid}/project_templates | Get a team&#39;s project templates
*AsanaPreview.ProjectTemplatesApi* | [**instantiateProject**](docs/ProjectTemplatesApi.md#instantiateProject) | **POST** /project_templates/{project_template_gid}/instantiateProject | Instantiate a project from a project template
*AsanaPreview.ProjectsApi* | [**addCustomFieldSettingForProject**](docs/ProjectsApi.md#addCustomFieldSettingForProject) | **POST** /projects/{project_gid}/addCustomFieldSetting | Add a custom field to a project
*AsanaPreview.ProjectsApi* | [**addFollowersForProject**](docs/ProjectsApi.md#addFollowersForProject) | **POST** /projects/{project_gid}/addFollowers | Add followers to a project
*AsanaPreview.ProjectsApi* | [**addMembersForProject**](docs/ProjectsApi.md#addMembersForProject) | **POST** /projects/{project_gid}/addMembers | Add users to a project
*AsanaPreview.ProjectsApi* | [**createProject**](docs/ProjectsApi.md#createProject) | **POST** /projects | Create a project
*AsanaPreview.ProjectsApi* | [**createProjectForTeam**](docs/ProjectsApi.md#createProjectForTeam) | **POST** /teams/{team_gid}/projects | Create a project in a team
*AsanaPreview.ProjectsApi* | [**createProjectForWorkspace**](docs/ProjectsApi.md#createProjectForWorkspace) | **POST** /workspaces/{workspace_gid}/projects | Create a project in a workspace
*AsanaPreview.ProjectsApi* | [**deleteProject**](docs/ProjectsApi.md#deleteProject) | **DELETE** /projects/{project_gid} | Delete a project
*AsanaPreview.ProjectsApi* | [**duplicateProject**](docs/ProjectsApi.md#duplicateProject) | **POST** /projects/{project_gid}/duplicate | Duplicate a project
*AsanaPreview.ProjectsApi* | [**getProject**](docs/ProjectsApi.md#getProject) | **GET** /projects/{project_gid} | Get a project
*AsanaPreview.ProjectsApi* | [**getProjects**](docs/ProjectsApi.md#getProjects) | **GET** /projects | Get multiple projects
*AsanaPreview.ProjectsApi* | [**getProjectsForTask**](docs/ProjectsApi.md#getProjectsForTask) | **GET** /tasks/{task_gid}/projects | Get projects a task is in
*AsanaPreview.ProjectsApi* | [**getProjectsForTeam**](docs/ProjectsApi.md#getProjectsForTeam) | **GET** /teams/{team_gid}/projects | Get a team&#39;s projects
*AsanaPreview.ProjectsApi* | [**getProjectsForWorkspace**](docs/ProjectsApi.md#getProjectsForWorkspace) | **GET** /workspaces/{workspace_gid}/projects | Get all projects in a workspace
*AsanaPreview.ProjectsApi* | [**getTaskCountsForProject**](docs/ProjectsApi.md#getTaskCountsForProject) | **GET** /projects/{project_gid}/task_counts | Get task count of a project
*AsanaPreview.ProjectsApi* | [**projectSaveAsTemplate**](docs/ProjectsApi.md#projectSaveAsTemplate) | **POST** /projects/{project_gid}/saveAsTemplate | Create a project template from a project
*AsanaPreview.ProjectsApi* | [**removeCustomFieldSettingForProject**](docs/ProjectsApi.md#removeCustomFieldSettingForProject) | **POST** /projects/{project_gid}/removeCustomFieldSetting | Remove a custom field from a project
*AsanaPreview.ProjectsApi* | [**removeFollowersForProject**](docs/ProjectsApi.md#removeFollowersForProject) | **POST** /projects/{project_gid}/removeFollowers | Remove followers from a project
*AsanaPreview.ProjectsApi* | [**removeMembersForProject**](docs/ProjectsApi.md#removeMembersForProject) | **POST** /projects/{project_gid}/removeMembers | Remove users from a project
*AsanaPreview.ProjectsApi* | [**updateProject**](docs/ProjectsApi.md#updateProject) | **PUT** /projects/{project_gid} | Update a project
*AsanaPreview.RulesApi* | [**triggerRule**](docs/RulesApi.md#triggerRule) | **POST** /rule_triggers/{rule_trigger_gid}/run | Trigger a rule
*AsanaPreview.SectionsApi* | [**addTaskForSection**](docs/SectionsApi.md#addTaskForSection) | **POST** /sections/{section_gid}/addTask | Add task to section
*AsanaPreview.SectionsApi* | [**createSectionForProject**](docs/SectionsApi.md#createSectionForProject) | **POST** /projects/{project_gid}/sections | Create a section in a project
*AsanaPreview.SectionsApi* | [**deleteSection**](docs/SectionsApi.md#deleteSection) | **DELETE** /sections/{section_gid} | Delete a section
*AsanaPreview.SectionsApi* | [**getSection**](docs/SectionsApi.md#getSection) | **GET** /sections/{section_gid} | Get a section
*AsanaPreview.SectionsApi* | [**getSectionsForProject**](docs/SectionsApi.md#getSectionsForProject) | **GET** /projects/{project_gid}/sections | Get sections in a project
*AsanaPreview.SectionsApi* | [**insertSectionForProject**](docs/SectionsApi.md#insertSectionForProject) | **POST** /projects/{project_gid}/sections/insert | Move or Insert sections
*AsanaPreview.SectionsApi* | [**updateSection**](docs/SectionsApi.md#updateSection) | **PUT** /sections/{section_gid} | Update a section
*AsanaPreview.StatusUpdatesApi* | [**createStatusForObject**](docs/StatusUpdatesApi.md#createStatusForObject) | **POST** /status_updates | Create a status update
*AsanaPreview.StatusUpdatesApi* | [**deleteStatus**](docs/StatusUpdatesApi.md#deleteStatus) | **DELETE** /status_updates/{status_gid} | Delete a status update
*AsanaPreview.StatusUpdatesApi* | [**getStatus**](docs/StatusUpdatesApi.md#getStatus) | **GET** /status_updates/{status_gid} | Get a status update
*AsanaPreview.StatusUpdatesApi* | [**getStatusesForObject**](docs/StatusUpdatesApi.md#getStatusesForObject) | **GET** /status_updates | Get status updates from an object
*AsanaPreview.StoriesApi* | [**createStoryForTask**](docs/StoriesApi.md#createStoryForTask) | **POST** /tasks/{task_gid}/stories | Create a story on a task
*AsanaPreview.StoriesApi* | [**deleteStory**](docs/StoriesApi.md#deleteStory) | **DELETE** /stories/{story_gid} | Delete a story
*AsanaPreview.StoriesApi* | [**getStoriesForTask**](docs/StoriesApi.md#getStoriesForTask) | **GET** /tasks/{task_gid}/stories | Get stories from a task
*AsanaPreview.StoriesApi* | [**getStory**](docs/StoriesApi.md#getStory) | **GET** /stories/{story_gid} | Get a story
*AsanaPreview.StoriesApi* | [**updateStory**](docs/StoriesApi.md#updateStory) | **PUT** /stories/{story_gid} | Update a story
*AsanaPreview.TagsApi* | [**createTag**](docs/TagsApi.md#createTag) | **POST** /tags | Create a tag
*AsanaPreview.TagsApi* | [**createTagForWorkspace**](docs/TagsApi.md#createTagForWorkspace) | **POST** /workspaces/{workspace_gid}/tags | Create a tag in a workspace
*AsanaPreview.TagsApi* | [**deleteTag**](docs/TagsApi.md#deleteTag) | **DELETE** /tags/{tag_gid} | Delete a tag
*AsanaPreview.TagsApi* | [**getTag**](docs/TagsApi.md#getTag) | **GET** /tags/{tag_gid} | Get a tag
*AsanaPreview.TagsApi* | [**getTags**](docs/TagsApi.md#getTags) | **GET** /tags | Get multiple tags
*AsanaPreview.TagsApi* | [**getTagsForTask**](docs/TagsApi.md#getTagsForTask) | **GET** /tasks/{task_gid}/tags | Get a task&#39;s tags
*AsanaPreview.TagsApi* | [**getTagsForWorkspace**](docs/TagsApi.md#getTagsForWorkspace) | **GET** /workspaces/{workspace_gid}/tags | Get tags in a workspace
*AsanaPreview.TagsApi* | [**updateTag**](docs/TagsApi.md#updateTag) | **PUT** /tags/{tag_gid} | Update a tag
*AsanaPreview.TasksApi* | [**addDependenciesForTask**](docs/TasksApi.md#addDependenciesForTask) | **POST** /tasks/{task_gid}/addDependencies | Set dependencies for a task
*AsanaPreview.TasksApi* | [**addDependentsForTask**](docs/TasksApi.md#addDependentsForTask) | **POST** /tasks/{task_gid}/addDependents | Set dependents for a task
*AsanaPreview.TasksApi* | [**addProjectForTask**](docs/TasksApi.md#addProjectForTask) | **POST** /tasks/{task_gid}/addProject | Add a project to a task
*AsanaPreview.TasksApi* | [**addTagForTask**](docs/TasksApi.md#addTagForTask) | **POST** /tasks/{task_gid}/addTag | Add a tag to a task
*AsanaPreview.TasksApi* | [**createSubtaskForTask**](docs/TasksApi.md#createSubtaskForTask) | **POST** /tasks/{task_gid}/subtasks | Create a subtask
*AsanaPreview.TasksApi* | [**createTask**](docs/TasksApi.md#createTask) | **POST** /tasks | Create a task
*AsanaPreview.TasksApi* | [**deleteTask**](docs/TasksApi.md#deleteTask) | **DELETE** /tasks/{task_gid} | Delete a task
*AsanaPreview.TasksApi* | [**duplicateTask**](docs/TasksApi.md#duplicateTask) | **POST** /tasks/{task_gid}/duplicate | Duplicate a task
*AsanaPreview.TasksApi* | [**getDependenciesForTask**](docs/TasksApi.md#getDependenciesForTask) | **GET** /tasks/{task_gid}/dependencies | Get dependencies from a task
*AsanaPreview.TasksApi* | [**getDependentsForTask**](docs/TasksApi.md#getDependentsForTask) | **GET** /tasks/{task_gid}/dependents | Get dependents from a task
*AsanaPreview.TasksApi* | [**getSubtasksForTask**](docs/TasksApi.md#getSubtasksForTask) | **GET** /tasks/{task_gid}/subtasks | Get subtasks from a task
*AsanaPreview.TasksApi* | [**getTask**](docs/TasksApi.md#getTask) | **GET** /tasks/{task_gid} | Get a task
*AsanaPreview.TasksApi* | [**getTasks**](docs/TasksApi.md#getTasks) | **GET** /tasks | Get multiple tasks
*AsanaPreview.TasksApi* | [**getTasksForProject**](docs/TasksApi.md#getTasksForProject) | **GET** /projects/{project_gid}/tasks | Get tasks from a project
*AsanaPreview.TasksApi* | [**getTasksForSection**](docs/TasksApi.md#getTasksForSection) | **GET** /sections/{section_gid}/tasks | Get tasks from a section
*AsanaPreview.TasksApi* | [**getTasksForTag**](docs/TasksApi.md#getTasksForTag) | **GET** /tags/{tag_gid}/tasks | Get tasks from a tag
*AsanaPreview.TasksApi* | [**getTasksForUserTaskList**](docs/TasksApi.md#getTasksForUserTaskList) | **GET** /user_task_lists/{user_task_list_gid}/tasks | Get tasks from a user task list
*AsanaPreview.TasksApi* | [**removeDependenciesForTask**](docs/TasksApi.md#removeDependenciesForTask) | **POST** /tasks/{task_gid}/removeDependencies | Unlink dependencies from a task
*AsanaPreview.TasksApi* | [**removeDependentsForTask**](docs/TasksApi.md#removeDependentsForTask) | **POST** /tasks/{task_gid}/removeDependents | Unlink dependents from a task
*AsanaPreview.TasksApi* | [**removeFollowerForTask**](docs/TasksApi.md#removeFollowerForTask) | **POST** /tasks/{task_gid}/removeFollowers | Remove followers from a task
*AsanaPreview.TasksApi* | [**removeProjectForTask**](docs/TasksApi.md#removeProjectForTask) | **POST** /tasks/{task_gid}/removeProject | Remove a project from a task
*AsanaPreview.TasksApi* | [**removeTagForTask**](docs/TasksApi.md#removeTagForTask) | **POST** /tasks/{task_gid}/removeTag | Remove a tag from a task
*AsanaPreview.TasksApi* | [**searchTasksForWorkspace**](docs/TasksApi.md#searchTasksForWorkspace) | **GET** /workspaces/{workspace_gid}/tasks/search | Search tasks in a workspace
*AsanaPreview.TasksApi* | [**setParentForTask**](docs/TasksApi.md#setParentForTask) | **POST** /tasks/{task_gid}/setParent | Set the parent of a task
*AsanaPreview.TasksApi* | [**updateTask**](docs/TasksApi.md#updateTask) | **PUT** /tasks/{task_gid} | Update a task
*AsanaPreview.TeamMembershipsApi* | [**getTeamMembership**](docs/TeamMembershipsApi.md#getTeamMembership) | **GET** /team_memberships/{team_membership_gid} | Get a team membership
*AsanaPreview.TeamMembershipsApi* | [**getTeamMemberships**](docs/TeamMembershipsApi.md#getTeamMemberships) | **GET** /team_memberships | Get team memberships
*AsanaPreview.TeamMembershipsApi* | [**getTeamMembershipsForTeam**](docs/TeamMembershipsApi.md#getTeamMembershipsForTeam) | **GET** /teams/{team_gid}/team_memberships | Get memberships from a team
*AsanaPreview.TeamMembershipsApi* | [**getTeamMembershipsForUser**](docs/TeamMembershipsApi.md#getTeamMembershipsForUser) | **GET** /users/{user_gid}/team_memberships | Get memberships from a user
*AsanaPreview.TeamsApi* | [**addUserForTeam**](docs/TeamsApi.md#addUserForTeam) | **POST** /teams/{team_gid}/addUser | Add a user to a team
*AsanaPreview.TeamsApi* | [**createTeam**](docs/TeamsApi.md#createTeam) | **POST** /teams | Create a team
*AsanaPreview.TeamsApi* | [**getTeam**](docs/TeamsApi.md#getTeam) | **GET** /teams/{team_gid} | Get a team
*AsanaPreview.TeamsApi* | [**getTeamsForUser**](docs/TeamsApi.md#getTeamsForUser) | **GET** /users/{user_gid}/teams | Get teams for a user
*AsanaPreview.TeamsApi* | [**getTeamsForWorkspace**](docs/TeamsApi.md#getTeamsForWorkspace) | **GET** /workspaces/{workspace_gid}/teams | Get teams in a workspace
*AsanaPreview.TeamsApi* | [**removeUserForTeam**](docs/TeamsApi.md#removeUserForTeam) | **POST** /teams/{team_gid}/removeUser | Remove a user from a team
*AsanaPreview.TeamsApi* | [**updateTeam**](docs/TeamsApi.md#updateTeam) | **PUT** /teams | Update a team
*AsanaPreview.TimePeriodsApi* | [**getTimePeriod**](docs/TimePeriodsApi.md#getTimePeriod) | **GET** /time_periods/{time_period_gid} | Get a time period
*AsanaPreview.TimePeriodsApi* | [**getTimePeriods**](docs/TimePeriodsApi.md#getTimePeriods) | **GET** /time_periods | Get time periods
*AsanaPreview.TimeTrackingEntriesApi* | [**createTimeTrackingEntry**](docs/TimeTrackingEntriesApi.md#createTimeTrackingEntry) | **POST** /tasks/{task_gid}/time_tracking_entries | Create a time tracking entry
*AsanaPreview.TimeTrackingEntriesApi* | [**deleteTimeTrackingEntry**](docs/TimeTrackingEntriesApi.md#deleteTimeTrackingEntry) | **DELETE** /time_tracking_entries/{time_tracking_entry_gid} | Delete a time tracking entry
*AsanaPreview.TimeTrackingEntriesApi* | [**getTimeTrackingEntriesForTask**](docs/TimeTrackingEntriesApi.md#getTimeTrackingEntriesForTask) | **GET** /tasks/{task_gid}/time_tracking_entries | Get time tracking entries for a task
*AsanaPreview.TimeTrackingEntriesApi* | [**getTimeTrackingEntry**](docs/TimeTrackingEntriesApi.md#getTimeTrackingEntry) | **GET** /time_tracking_entries/{time_tracking_entry_gid} | Get a time tracking entry
*AsanaPreview.TimeTrackingEntriesApi* | [**updateTimeTrackingEntry**](docs/TimeTrackingEntriesApi.md#updateTimeTrackingEntry) | **PUT** /time_tracking_entries/{time_tracking_entry_gid} | Update a time tracking entry
*AsanaPreview.TypeaheadApi* | [**typeaheadForWorkspace**](docs/TypeaheadApi.md#typeaheadForWorkspace) | **GET** /workspaces/{workspace_gid}/typeahead | Get objects via typeahead
*AsanaPreview.UserTaskListsApi* | [**getUserTaskList**](docs/UserTaskListsApi.md#getUserTaskList) | **GET** /user_task_lists/{user_task_list_gid} | Get a user task list
*AsanaPreview.UserTaskListsApi* | [**getUserTaskListForUser**](docs/UserTaskListsApi.md#getUserTaskListForUser) | **GET** /users/{user_gid}/user_task_list | Get a user&#39;s task list
*AsanaPreview.UsersApi* | [**getFavoritesForUser**](docs/UsersApi.md#getFavoritesForUser) | **GET** /users/{user_gid}/favorites | Get a user&#39;s favorites
*AsanaPreview.UsersApi* | [**getUser**](docs/UsersApi.md#getUser) | **GET** /users/{user_gid} | Get a user
*AsanaPreview.UsersApi* | [**getUsers**](docs/UsersApi.md#getUsers) | **GET** /users | Get multiple users
*AsanaPreview.UsersApi* | [**getUsersForTeam**](docs/UsersApi.md#getUsersForTeam) | **GET** /teams/{team_gid}/users | Get users in a team
*AsanaPreview.UsersApi* | [**getUsersForWorkspace**](docs/UsersApi.md#getUsersForWorkspace) | **GET** /workspaces/{workspace_gid}/users | Get users in a workspace or organization
*AsanaPreview.WebhooksApi* | [**createWebhook**](docs/WebhooksApi.md#createWebhook) | **POST** /webhooks | Establish a webhook
*AsanaPreview.WebhooksApi* | [**deleteWebhook**](docs/WebhooksApi.md#deleteWebhook) | **DELETE** /webhooks/{webhook_gid} | Delete a webhook
*AsanaPreview.WebhooksApi* | [**getWebhook**](docs/WebhooksApi.md#getWebhook) | **GET** /webhooks/{webhook_gid} | Get a webhook
*AsanaPreview.WebhooksApi* | [**getWebhooks**](docs/WebhooksApi.md#getWebhooks) | **GET** /webhooks | Get multiple webhooks
*AsanaPreview.WebhooksApi* | [**updateWebhook**](docs/WebhooksApi.md#updateWebhook) | **PUT** /webhooks/{webhook_gid} | Update a webhook
*AsanaPreview.WorkspaceMembershipsApi* | [**getWorkspaceMembership**](docs/WorkspaceMembershipsApi.md#getWorkspaceMembership) | **GET** /workspace_memberships/{workspace_membership_gid} | Get a workspace membership
*AsanaPreview.WorkspaceMembershipsApi* | [**getWorkspaceMembershipsForUser**](docs/WorkspaceMembershipsApi.md#getWorkspaceMembershipsForUser) | **GET** /users/{user_gid}/workspace_memberships | Get workspace memberships for a user
*AsanaPreview.WorkspaceMembershipsApi* | [**getWorkspaceMembershipsForWorkspace**](docs/WorkspaceMembershipsApi.md#getWorkspaceMembershipsForWorkspace) | **GET** /workspaces/{workspace_gid}/workspace_memberships | Get the workspace memberships for a workspace
*AsanaPreview.WorkspacesApi* | [**addUserForWorkspace**](docs/WorkspacesApi.md#addUserForWorkspace) | **POST** /workspaces/{workspace_gid}/addUser | Add a user to a workspace or organization
*AsanaPreview.WorkspacesApi* | [**getWorkspace**](docs/WorkspacesApi.md#getWorkspace) | **GET** /workspaces/{workspace_gid} | Get a workspace
*AsanaPreview.WorkspacesApi* | [**getWorkspaces**](docs/WorkspacesApi.md#getWorkspaces) | **GET** /workspaces | Get multiple workspaces
*AsanaPreview.WorkspacesApi* | [**removeUserForWorkspace**](docs/WorkspacesApi.md#removeUserForWorkspace) | **POST** /workspaces/{workspace_gid}/removeUser | Remove a user from a workspace or organization
*AsanaPreview.WorkspacesApi* | [**updateWorkspace**](docs/WorkspacesApi.md#updateWorkspace) | **PUT** /workspaces/{workspace_gid} | Update a workspace

