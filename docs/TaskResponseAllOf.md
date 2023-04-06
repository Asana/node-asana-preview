# AsanaPreview.TaskResponseAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actualTimeMinutes** | **Number** | This value represents the sum of all the Time Tracking entries in the Actual Time field on a given Task. It is represented as a nullable long value. | [optional] [readonly] 
**assignee** | [**UserCompact**](UserCompact.md) |  | [optional] 
**assigneeSection** | [**SectionCompact**](SectionCompact.md) |  | [optional] [readonly] 
**completedAt** | **Date** | The time at which this task was completed, or null if the task is incomplete. | [optional] [readonly] 
**createdAt** | **Date** | The time at which this task was created. | [optional] [readonly] 
**completedBy** | [**UserCompact**](UserCompact.md) |  | [optional] [readonly] 
**customFields** | [**[CustomFieldResponse]**](CustomFieldResponse.md) | Array of custom field values applied to the task. These represent the custom field values recorded on this project for a particular custom field. For example, these custom field values will contain an &#x60;enum_value&#x60; property for custom fields of type &#x60;enum&#x60;, a &#x60;text_value&#x60; property for custom fields of type &#x60;text&#x60;, and so on. Please note that the &#x60;gid&#x60; returned on each custom field value *is identical* to the &#x60;gid&#x60; of the custom field, which allows referencing the custom field metadata through the &#x60;/custom_fields/custom_field-gid&#x60; endpoint. | [optional] [readonly] 
**dependencies** | [**[AsanaResource]**](AsanaResource.md) | [Opt In](/docs/inputoutput-options). Array of resources referencing tasks that this task depends on. The objects contain only the gid of the dependency. | [optional] [readonly] 
**dependents** | [**[AsanaResource]**](AsanaResource.md) | [Opt In](/docs/inputoutput-options). Array of resources referencing tasks that depend on this task. The objects contain only the ID of the dependent. | [optional] [readonly] 
**followers** | [**[UserCompact]**](UserCompact.md) | Array of users following this task. | [optional] [readonly] 
**hearted** | **Boolean** | *Deprecated - please use liked instead* True if the task is hearted by the authorized user, false if not. | [optional] [readonly] 
**hearts** | [**[Like]**](Like.md) | *Deprecated - please use likes instead* Array of likes for users who have hearted this task. | [optional] [readonly] 
**isRenderedAsSeparator** | **Boolean** | [Opt In](/docs/inputoutput-options). In some contexts tasks can be rendered as a visual separator; for instance, subtasks can appear similar to [sections](/reference/sections) without being true &#x60;section&#x60; objects. If a &#x60;task&#x60; object is rendered this way in any context it will have the property &#x60;is_rendered_as_separator&#x60; set to &#x60;true&#x60;. | [optional] [readonly] 
**likes** | [**[Like]**](Like.md) | Array of likes for users who have liked this task. | [optional] [readonly] 
**memberships** | [**[TaskResponseAllOfMemberships]**](TaskResponseAllOfMemberships.md) | *Create-only*. Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the &#x60;addProject&#x60; and &#x60;removeProject&#x60; endpoints. Note that over time, more types of memberships may be added to this property. | [optional] [readonly] 
**modifiedAt** | **Date** | The time at which this task was last modified.  *Note: This does not currently reflect any changes in associations such as projects or comments that may have been added or removed from the task.* | [optional] [readonly] 
**numHearts** | **Number** | *Deprecated - please use likes instead* The number of users who have hearted this task. | [optional] [readonly] 
**numLikes** | **Number** | The number of users who have liked this task. | [optional] [readonly] 
**numSubtasks** | **Number** | [Opt In](/docs/inputoutput-options). The number of subtasks on this task.  | [optional] [readonly] 
**parent** | [**TaskCompact**](TaskCompact.md) |  | [optional] 
**permalinkUrl** | **String** | A url that points directly to the object within Asana. | [optional] [readonly] 
**projects** | [**[ProjectCompact]**](ProjectCompact.md) | *Create-only.* Array of projects this task is associated with. At task creation time, this array can be used to add the task to many projects at once. After task creation, these associations can be modified using the addProject and removeProject endpoints. | [optional] [readonly] 
**tags** | [**[TagCompact]**](TagCompact.md) | Array of tags associated with this task. In order to change tags on an existing task use &#x60;addTag&#x60; and &#x60;removeTag&#x60;. | [optional] [readonly] 
**workspace** | [**WorkspaceCompact**](WorkspaceCompact.md) |  | [optional] 


