# AsanaPreview.ProjectMembershipResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] [readonly] 
**resourceType** | **String** | Type of the membership. | [optional] 
**user** | [**UserCompact**](UserCompact.md) |  | [optional] 
**project** | [**ProjectCompact**](ProjectCompact.md) |  | [optional] 
**member** | [**MemberCompact**](MemberCompact.md) |  | [optional] 
**writeAccess** | **String** | Whether the member has full access, edit access, or comment-only access to the project. | [optional] [readonly] 



## Enum: WriteAccessEnum


* `full_write` (value: `"full_write"`)

* `editor` (value: `"editor"`)

* `comment_only` (value: `"comment_only"`)



