# AsanaPreview.GoalResponseAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**likes** | [**[Like]**](Like.md) | Array of likes for users who have liked this goal. | [optional] [readonly] 
**numLikes** | **Number** | The number of users who have liked this goal. | [optional] [readonly] 
**team** | [**TeamCompact**](TeamCompact.md) | *Conditional*. This property is only present when the &#x60;workspace&#x60; provided is an organization. | [optional] 
**workspace** | [**WorkspaceCompact**](WorkspaceCompact.md) |  | [optional] 
**followers** | [**[UserCompact]**](UserCompact.md) | Array of users who are members of this goal. | [optional] 
**timePeriod** | [**TimePeriodCompact**](TimePeriodCompact.md) |  | [optional] 
**metric** | [**GoalMetricBase**](GoalMetricBase.md) |  | [optional] 
**owner** | [**UserCompact**](UserCompact.md) |  | [optional] 
**currentStatusUpdate** | [**StatusUpdateCompact**](StatusUpdateCompact.md) | The latest &#x60;status_update&#x60; posted to this goal. | [optional] 


