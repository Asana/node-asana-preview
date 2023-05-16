# AsanaPreview.GoalResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] [readonly] 
**resourceType** | **String** | The base type of this resource. | [optional] [readonly] 
**name** | **String** | The name of the goal. | [optional] 
**htmlNotes** | **String** | The notes of the goal with formatting as HTML. | [optional] 
**notes** | **String** | Free-form textual information associated with the goal (i.e. its description). | [optional] 
**dueOn** | **String** | The localized day on which this goal is due. This takes a date with format &#x60;YYYY-MM-DD&#x60;. | [optional] 
**startOn** | **String** | The day on which work for this goal begins, or null if the goal has no start date. This takes a date with &#x60;YYYY-MM-DD&#x60; format, and cannot be set unless there is an accompanying due date. | [optional] 
**status** | **String** | The current status of this goal. When the goal is open, its status can be &#x60;green&#x60;, &#x60;yellow&#x60;, and &#x60;red&#x60; to reflect \&quot;On Track\&quot;, \&quot;At Risk\&quot;, and \&quot;Off Track\&quot;, respectively. When the goal is closed, the value can be &#x60;missed&#x60;, &#x60;achieved&#x60;, &#x60;partial&#x60;, or &#x60;dropped&#x60;. *Note* you can only write to this property if &#x60;metric&#x60; is set. | [optional] 
**isWorkspaceLevel** | **Boolean** | *Conditional*. This property is only present when the &#x60;workspace&#x60; provided is an organization. Whether the goal belongs to the &#x60;workspace&#x60; (and is listed as part of the workspace’s goals) or not. If it isn’t a workspace-level goal, it is a team-level goal, and is associated with the goal’s team. | [optional] 
**liked** | **Boolean** | True if the goal is liked by the authorized user, false if not. | [optional] 
**likes** | [**[Like]**](Like.md) | Array of likes for users who have liked this goal. | [optional] [readonly] 
**numLikes** | **Number** | The number of users who have liked this goal. | [optional] [readonly] 
**team** | [**TeamCompact**](TeamCompact.md) | *Conditional*. This property is only present when the &#x60;workspace&#x60; provided is an organization. | [optional] 
**workspace** | [**WorkspaceCompact**](WorkspaceCompact.md) |  | [optional] 
**followers** | [**[UserCompact]**](UserCompact.md) | Array of users who are members of this goal. | [optional] 
**timePeriod** | [**TimePeriodCompact**](TimePeriodCompact.md) |  | [optional] 
**metric** | [**GoalMetricBase**](GoalMetricBase.md) |  | [optional] 
**owner** | [**UserCompact**](UserCompact.md) |  | [optional] 
**currentStatusUpdate** | [**StatusUpdateCompact**](StatusUpdateCompact.md) | The latest &#x60;status_update&#x60; posted to this goal. | [optional] 


