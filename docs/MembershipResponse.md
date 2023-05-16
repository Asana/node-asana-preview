# AsanaPreview.MembershipResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] [readonly] 
**resourceType** | **String** | The base type of this resource. | [optional] [readonly] 
**user** | [**UserCompact**](UserCompact.md) |  | [optional] 
**project** | [**ProjectCompact**](ProjectCompact.md) |  | [optional] 
**member** | [**MemberCompact**](MemberCompact.md) |  | [optional] 
**writeAccess** | **String** | Whether the member has full access, edit access, or comment-only access to the project. | [optional] [readonly] 
**portfolio** | [**PortfolioCompact**](PortfolioCompact.md) |  | [optional] 
**team** | [**TeamCompact**](TeamCompact.md) |  | [optional] 
**isGuest** | **Boolean** | Reflects if this user is a guest of the workspace. | [optional] [readonly] 
**isLimitedAccess** | **Boolean** | Describes if the user has limited access to the team. | [optional] 
**isAdmin** | **Boolean** | Reflects if this user is an admin of the workspace. | [optional] [readonly] 
**goal** | [**GoalCompact**](GoalCompact.md) |  | [optional] 
**isCommenter** | **Boolean** | Describes if the member is comment only in goal. | [optional] 
**isEditor** | **Boolean** | Describes if the member is editor in goal. | [optional] 
**workspace** | [**WorkspaceCompact**](WorkspaceCompact.md) |  | [optional] 
**userTaskList** | [**UserTaskListCompact**](UserTaskListCompact.md) |  | [optional] 
**isActive** | **Boolean** | Reflects if this user still a member of the workspace. | [optional] [readonly] 
**vacationDates** | [**WorkspaceMembershipResponseAllOfVacationDates**](WorkspaceMembershipResponseAllOfVacationDates.md) |  | [optional] 
**createdAt** | **Date** | The time at which this resource was created. | [optional] [readonly] 



## Enum: WriteAccessEnum


* `full_write` (value: `"full_write"`)

* `editor` (value: `"editor"`)

* `comment_only` (value: `"comment_only"`)




