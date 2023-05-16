# AsanaPreview.StoryResponseAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdBy** | [**UserCompact**](UserCompact.md) |  | [optional] 
**type** | **String** |  | [optional] [readonly] 
**isEditable** | **Boolean** | *Conditional*. Whether the text of the story can be edited after creation. | [optional] [readonly] 
**isEdited** | **Boolean** | *Conditional*. Whether the text of the story has been edited after creation. | [optional] [readonly] 
**hearted** | **Boolean** | *Deprecated - please use likes instead* *Conditional*. True if the story is hearted by the authorized user, false if not. | [optional] [readonly] 
**hearts** | [**[Like]**](Like.md) | *Deprecated - please use likes instead*  *Conditional*. Array of likes for users who have hearted this story. | [optional] [readonly] 
**numHearts** | **Number** | *Deprecated - please use likes instead*  *Conditional*. The number of users who have hearted this story. | [optional] [readonly] 
**liked** | **Boolean** | *Conditional*. True if the story is liked by the authorized user, false if not. | [optional] [readonly] 
**likes** | [**[Like]**](Like.md) | *Conditional*. Array of likes for users who have liked this story. | [optional] [readonly] 
**numLikes** | **Number** | *Conditional*. The number of users who have liked this story. | [optional] [readonly] 
**previews** | [**[Preview]**](Preview.md) | *Conditional*. A collection of previews to be displayed in the story.  *Note: This property only exists for comment stories.* | [optional] [readonly] 
**oldName** | **String** | *Conditional*&#39; | [optional] 
**newName** | **String** | *Conditional* | [optional] [readonly] 
**oldDates** | [**StoryResponseDates**](StoryResponseDates.md) |  | [optional] 
**newDates** | [**StoryResponseDates**](StoryResponseDates.md) |  | [optional] 
**oldResourceSubtype** | **String** | *Conditional* | [optional] [readonly] 
**newResourceSubtype** | **String** | *Conditional* | [optional] [readonly] 
**story** | [**StoryCompact**](StoryCompact.md) |  | [optional] 
**assignee** | [**UserCompact**](UserCompact.md) |  | [optional] 
**follower** | [**UserCompact**](UserCompact.md) |  | [optional] 
**oldSection** | [**SectionCompact**](SectionCompact.md) |  | [optional] 
**newSection** | [**SectionCompact**](SectionCompact.md) |  | [optional] 
**task** | [**TaskCompact**](TaskCompact.md) |  | [optional] 
**project** | [**ProjectCompact**](ProjectCompact.md) |  | [optional] 
**tag** | [**TagCompact**](TagCompact.md) |  | [optional] 
**customField** | [**CustomFieldCompact**](CustomFieldCompact.md) |  | [optional] 
**oldTextValue** | **String** | *Conditional* | [optional] [readonly] 
**newTextValue** | **String** | *Conditional* | [optional] [readonly] 
**oldNumberValue** | **Number** | *Conditional* | [optional] [readonly] 
**newNumberValue** | **Number** | *Conditional* | [optional] [readonly] 
**oldEnumValue** | [**EnumOption**](EnumOption.md) |  | [optional] 
**newEnumValue** | [**EnumOption**](EnumOption.md) |  | [optional] 
**oldDateValue** | [**StoryResponseDates**](StoryResponseDates.md) |  | [optional] [readonly] 
**newDateValue** | [**StoryResponseDates**](StoryResponseDates.md) |  | [optional] [readonly] 
**oldPeopleValue** | [**[UserCompact]**](UserCompact.md) | *Conditional*. The old value of a people custom field story. | [optional] [readonly] 
**newPeopleValue** | [**[UserCompact]**](UserCompact.md) | *Conditional*. The new value of a people custom field story. | [optional] [readonly] 
**oldMultiEnumValues** | [**[EnumOption]**](EnumOption.md) | *Conditional*. The old value of a multi-enum custom field story. | [optional] [readonly] 
**newMultiEnumValues** | [**[EnumOption]**](EnumOption.md) | *Conditional*. The new value of a multi-enum custom field story. | [optional] [readonly] 
**newApprovalStatus** | **String** | *Conditional*. The new value of approval status. | [optional] [readonly] 
**oldApprovalStatus** | **String** | *Conditional*. The old value of approval status. | [optional] [readonly] 
**duplicateOf** | [**TaskCompact**](TaskCompact.md) |  | [optional] 
**duplicatedFrom** | [**TaskCompact**](TaskCompact.md) |  | [optional] 
**dependency** | [**TaskCompact**](TaskCompact.md) |  | [optional] 
**source** | **String** | The component of the Asana product the user used to trigger the story. | [optional] [readonly] 
**target** | [**TaskCompact**](TaskCompact.md) |  | [optional] 



## Enum: TypeEnum


* `comment` (value: `"comment"`)

* `system` (value: `"system"`)





## Enum: SourceEnum


* `web` (value: `"web"`)

* `email` (value: `"email"`)

* `mobile` (value: `"mobile"`)

* `api` (value: `"api"`)

* `unknown` (value: `"unknown"`)




