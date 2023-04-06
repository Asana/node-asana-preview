# AsanaPreview.EventResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | [**EventResponseUser**](EventResponseUser.md) |  | [optional] 
**resource** | [**EventResponseResource**](EventResponseResource.md) |  | [optional] 
**type** | **String** | *Deprecated: Refer to the resource_type of the resource.* The type of the resource that generated the event. | [optional] [readonly] 
**action** | **String** | The type of action taken on the **resource** that triggered the event.  This can be one of &#x60;changed&#x60;, &#x60;added&#x60;, &#x60;removed&#x60;, &#x60;deleted&#x60;, or &#x60;undeleted&#x60; depending on the nature of the event. | [optional] [readonly] 
**parent** | [**EventResponseParent**](EventResponseParent.md) |  | [optional] 
**createdAt** | **Date** | The timestamp when the event occurred. | [optional] [readonly] 
**change** | [**EventResponseChange**](EventResponseChange.md) |  | [optional] 


