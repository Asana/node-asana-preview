# AsanaPreview.ProjectDuplicateRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the new project. | 
**team** | **String** | Sets the team of the new project. If team is not defined, the new project will be in the same team as the the original project. | [optional] 
**include** | **String** | The elements that will be duplicated to the new project. Tasks are always included. | [optional] 
**schedule_dates** | [**ProjectDuplicateRequestScheduleDates**](ProjectDuplicateRequestScheduleDates.md) |  | [optional] 

<a name="IncludeEnum"></a>
## Enum: IncludeEnum

* `members` (value: `"members"`)
* `notes` (value: `"notes"`)
* `forms` (value: `"forms"`)
* `task_notes` (value: `"task_notes"`)
* `task_assignee` (value: `"task_assignee"`)
* `task_subtasks` (value: `"task_subtasks"`)
* `task_attachments` (value: `"task_attachments"`)
* `task_dates` (value: `"task_dates"`)
* `task_dependencies` (value: `"task_dependencies"`)
* `task_followers` (value: `"task_followers"`)
* `task_tags` (value: `"task_tags"`)
* `task_projects` (value: `"task_projects"`)

