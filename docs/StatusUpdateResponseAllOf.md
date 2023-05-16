# AsanaPreview.StatusUpdateResponseAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | [**UserCompact**](UserCompact.md) |  | [optional] 
**createdAt** | **Date** | The time at which this resource was created. | [optional] [readonly] 
**createdBy** | [**UserCompact**](UserCompact.md) |  | [optional] 
**hearted** | **Boolean** | *Deprecated - please use liked instead* True if the status is hearted by the authorized user, false if not. | [optional] [readonly] 
**hearts** | [**[Like]**](Like.md) | *Deprecated - please use likes instead* Array of likes for users who have hearted this status. | [optional] [readonly] 
**liked** | **Boolean** | True if the status is liked by the authorized user, false if not. | [optional] 
**likes** | [**[Like]**](Like.md) | Array of likes for users who have liked this status. | [optional] [readonly] 
**modifiedAt** | **Date** | The time at which this project status was last modified. *Note: This does not currently reflect any changes in associations such as comments that may have been added or removed from the status.* | [optional] [readonly] 
**numHearts** | **Number** | *Deprecated - please use likes instead* The number of users who have hearted this status. | [optional] [readonly] 
**numLikes** | **Number** | The number of users who have liked this status. | [optional] [readonly] 
**parent** | [**ProjectCompact**](ProjectCompact.md) |  | [optional] 


