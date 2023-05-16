# AsanaPreview.ProjectRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] [readonly] 
**resourceType** | **String** | The base type of this resource. | [optional] [readonly] 
**name** | **String** | Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer. | [optional] 
**archived** | **Boolean** | True if the project is archived, false if not. Archived projects do not show in the UI by default and may be treated differently for queries. | [optional] 
**color** | **String** | Color of the project. | [optional] 
**createdAt** | **Date** | The time at which this resource was created. | [optional] [readonly] 
**currentStatus** | [**ProjectStatusResponse**](ProjectStatusResponse.md) | *Deprecated: new integrations should prefer the &#x60;current_status_update&#x60; resource.* | [optional] 
**currentStatusUpdate** | [**StatusUpdateCompact**](StatusUpdateCompact.md) | The latest &#x60;status_update&#x60; posted to this project. | [optional] 
**customFieldSettings** | [**[CustomFieldSettingResponse]**](CustomFieldSettingResponse.md) | Array of Custom Field Settings (in compact form). | [optional] [readonly] 
**defaultView** | **String** | The default view (list, board, calendar, or timeline) of a project. | [optional] 
**dueDate** | **Date** | *Deprecated: new integrations should prefer the &#x60;due_on&#x60; field.* | [optional] 
**dueOn** | **Date** | The day on which this project is due. This takes a date with format YYYY-MM-DD. | [optional] 
**htmlNotes** | **String** | [Opt In](/docs/inputoutput-options). The notes of the project with formatting as HTML. | [optional] 
**members** | [**[UserCompact]**](UserCompact.md) | Array of users who are members of this project. | [optional] [readonly] 
**modifiedAt** | **Date** | The time at which this project was last modified. *Note: This does not currently reflect any changes in associations such as tasks or comments that may have been added or removed from the project.* | [optional] [readonly] 
**notes** | **String** | Free-form textual information associated with the project (ie., its description). | [optional] 
**_public** | **Boolean** | True if the project is public to its team. | [optional] 
**startOn** | **Date** | The day on which work for this project begins, or null if the project has no start date. This takes a date with &#x60;YYYY-MM-DD&#x60; format. *Note: &#x60;due_on&#x60; or &#x60;due_at&#x60; must be present in the request when setting or unsetting the &#x60;start_on&#x60; parameter. Additionally, &#x60;start_on&#x60; and &#x60;due_on&#x60; cannot be the same date.* | [optional] 
**workspace** | [**WorkspaceCompact**](WorkspaceCompact.md) |  | [optional] 
**customFields** | **{String: String}** | An object where each key is a Custom Field GID and each value is an enum GID, string, number, or object. | [optional] 
**followers** | **String** | *Create-only*. Comma separated string of users. Followers are a subset of members who have opted in to receive \&quot;tasks added\&quot; notifications for a project. | [optional] 
**owner** | **String** | The current owner of the project, may be null. | [optional] 
**team** | **String** | The team that this project is shared with. | [optional] 



## Enum: ColorEnum


* `dark-pink` (value: `"dark-pink"`)

* `dark-green` (value: `"dark-green"`)

* `dark-blue` (value: `"dark-blue"`)

* `dark-red` (value: `"dark-red"`)

* `dark-teal` (value: `"dark-teal"`)

* `dark-brown` (value: `"dark-brown"`)

* `dark-orange` (value: `"dark-orange"`)

* `dark-purple` (value: `"dark-purple"`)

* `dark-warm-gray` (value: `"dark-warm-gray"`)

* `light-pink` (value: `"light-pink"`)

* `light-green` (value: `"light-green"`)

* `light-blue` (value: `"light-blue"`)

* `light-red` (value: `"light-red"`)

* `light-teal` (value: `"light-teal"`)

* `light-brown` (value: `"light-brown"`)

* `light-orange` (value: `"light-orange"`)

* `light-purple` (value: `"light-purple"`)

* `light-warm-gray` (value: `"light-warm-gray"`)





## Enum: DefaultViewEnum


* `list` (value: `"list"`)

* `board` (value: `"board"`)

* `calendar` (value: `"calendar"`)

* `timeline` (value: `"timeline"`)




