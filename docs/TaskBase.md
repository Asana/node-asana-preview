# AsanaPreview.TaskBase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] [readonly] 
**resourceType** | **Object** |  | [optional] 
**name** | **String** | Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer. | [optional] 
**resourceSubtype** | **String** | The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.  The resource_subtype &#x60;milestone&#x60; represent a single moment in time. This means tasks with this subtype cannot have a start_date. | [optional] 
**approvalStatus** | **String** | *Conditional* Reflects the approval status of this task. This field is kept in sync with &#x60;completed&#x60;, meaning &#x60;pending&#x60; translates to false while &#x60;approved&#x60;, &#x60;rejected&#x60;, and &#x60;changes_requested&#x60; translate to true. If you set completed to true, this field will be set to &#x60;approved&#x60;. | [optional] 
**assigneeStatus** | **String** | *Deprecated* Scheduling status of this task for the user it is assigned to. This field can only be set if the assignee is non-null. Setting this field to \&quot;inbox\&quot; or \&quot;upcoming\&quot; inserts it at the top of the section, while the other options will insert at the bottom. | [optional] 
**completed** | **Boolean** | True if the task is currently marked complete, false if not. | [optional] 
**dueAt** | **Date** | The UTC date and time on which this task is due, or null if the task has no due time. This takes an ISO 8601 date string in UTC and should not be used together with &#x60;due_on&#x60;. | [optional] 
**dueOn** | **Date** | The localized date on which this task is due, or null if the task has no due date. This takes a date with &#x60;YYYY-MM-DD&#x60; format and should not be used together with &#x60;due_at&#x60;. | [optional] 
**external** | [**TaskBaseAllOfExternal**](TaskBaseAllOfExternal.md) |  | [optional] 
**htmlNotes** | **String** | [Opt In](/docs/inputoutput-options). The notes of the text with formatting as HTML. | [optional] 
**liked** | **Boolean** | True if the task is liked by the authorized user, false if not. | [optional] 
**notes** | **String** | Free-form textual information associated with the task (i.e. its description). | [optional] 
**startAt** | **Date** | Date and time on which work begins for the task, or null if the task has no start time. This takes an ISO 8601 date string in UTC and should not be used together with &#x60;start_on&#x60;. *Note: &#x60;due_at&#x60; must be present in the request when setting or unsetting the &#x60;start_at&#x60; parameter.* | [optional] 
**startOn** | **Date** | The day on which work begins for the task , or null if the task has no start date. This takes a date with &#x60;YYYY-MM-DD&#x60; format and should not be used together with &#x60;start_at&#x60;. *Note: &#x60;due_on&#x60; or &#x60;due_at&#x60; must be present in the request when setting or unsetting the &#x60;start_on&#x60; parameter.* | [optional] 



## Enum: ResourceSubtypeEnum


* `default_task` (value: `"default_task"`)

* `milestone` (value: `"milestone"`)

* `section` (value: `"section"`)

* `approval` (value: `"approval"`)





## Enum: ApprovalStatusEnum


* `pending` (value: `"pending"`)

* `approved` (value: `"approved"`)

* `rejected` (value: `"rejected"`)

* `changes_requested` (value: `"changes_requested"`)





## Enum: AssigneeStatusEnum


* `today` (value: `"today"`)

* `upcoming` (value: `"upcoming"`)

* `later` (value: `"later"`)

* `new` (value: `"new"`)

* `inbox` (value: `"inbox"`)




