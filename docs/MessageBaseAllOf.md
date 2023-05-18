# AsanaPreview.MessageBaseAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resourceSubtype** | **String** | The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning. | [optional] [readonly] 
**createdAt** | **Date** | The time at which this resource was created. | [optional] [readonly] 
**modifiedAt** | **Object** | The time at which this message was last modified. | [optional] 
**title** | **String** | The title of the message. | [optional] 
**text** | **String** | The text content of the message. | [optional] 
**numLikes** | **Number** | The number of users who have liked this message. | [optional] [readonly] 
**likes** | [**[GoalResponseLikesInner]**](GoalResponseLikesInner.md) | Array of likes for users who have liked this message. | [optional] [readonly] 
**followers** | [**[CustomFieldResponsePeopleValueInner]**](CustomFieldResponsePeopleValueInner.md) | Array of users this message was sent to. | [optional] [readonly] 
**parents** | **[Object]** | The parents of this message. This is an array of the containers the message was sent to. | [optional] [readonly] 


