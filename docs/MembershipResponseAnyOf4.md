# AsanaPreview.MembershipResponseAnyOf4

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] [readonly] 
**resourceType** | **String** | The base type of this resource. | [optional] [readonly] 
**user** | [**CustomFieldResponsePeopleValueInner**](CustomFieldResponsePeopleValueInner.md) |  | [optional] 
**workspace** | [**GoalResponseWorkspace**](GoalResponseWorkspace.md) |  | [optional] 
**userTaskList** | [**MembershipResponseAnyOf4UserTaskList**](MembershipResponseAnyOf4UserTaskList.md) |  | [optional] 
**isActive** | **Boolean** | Reflects if this user still a member of the workspace. | [optional] [readonly] 
**isAdmin** | **Boolean** | Reflects if this user is an admin of the workspace. | [optional] [readonly] 
**isGuest** | **Boolean** | Reflects if this user is a guest of the workspace. | [optional] [readonly] 
**vacationDates** | [**WorkspaceMembershipResponseVacationDates**](WorkspaceMembershipResponseVacationDates.md) |  | [optional] 
**createdAt** | **Date** | The time at which this resource was created. | [optional] [readonly] 


