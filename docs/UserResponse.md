# AsanaPreview.UserResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] [readonly] 
**resourceType** | **String** | The base type of this resource. | [optional] [readonly] 
**name** | **String** | *Read-only except when same user as requester*. The user’s name. | [optional] 
**email** | **String** | The user&#39;s email address. | [optional] [readonly] 
**photo** | [**UserBaseResponsePhoto**](UserBaseResponsePhoto.md) |  | [optional] 
**workspaces** | [**[GoalResponseWorkspace]**](GoalResponseWorkspace.md) | Workspaces and organizations this user may access. Note\\: The API will only return workspaces and organizations that also contain the authenticated user. | [optional] [readonly] 


