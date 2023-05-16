# AsanaPreview.ProjectMembershipResponseAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project** | [**ProjectCompact**](ProjectCompact.md) |  | [optional] 
**member** | [**MemberCompact**](MemberCompact.md) |  | [optional] 
**resourceType** | **String** | Type of the membership. | [optional] 
**writeAccess** | **String** | Whether the member has full access, edit access, or comment-only access to the project. | [optional] [readonly] 



## Enum: WriteAccessEnum


* `full_write` (value: `"full_write"`)

* `editor` (value: `"editor"`)

* `comment_only` (value: `"comment_only"`)




