# AsanaPreview.ProjectMembershipResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] 
**resource_type** | **String** | Type of the membership. | [optional] 
**user** | [**CustomFieldResponsePeopleValue**](CustomFieldResponsePeopleValue.md) |  | [optional] 
**project** | [**JobBaseNewProject**](JobBaseNewProject.md) |  | [optional] 
**member** | [**ProjectMembershipResponseMember**](ProjectMembershipResponseMember.md) |  | [optional] 
**write_access** | **String** | Whether the member has full access, edit access, or comment-only access to the project. | [optional] 

<a name="WriteAccessEnum"></a>
## Enum: WriteAccessEnum

* `full_write` (value: `"full_write"`)
* `editor` (value: `"editor"`)
* `comment_only` (value: `"comment_only"`)

