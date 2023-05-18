# AsanaPreview.StoryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] [readonly] 
**resourceType** | **String** | The base type of this resource. | [optional] [readonly] 
**createdAt** | **Date** | The time at which this resource was created. | [optional] [readonly] 
**resourceSubtype** | **String** | The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning. | [optional] [readonly] 
**text** | **String** | The plain text of the comment to add. Cannot be used with html_text. | [optional] 
**htmlText** | **String** | [Opt In](/docs/inputoutput-options). HTML formatted text for a comment. This will not include the name of the creator. | [optional] 
**isPinned** | **Boolean** | *Conditional*. Whether the story should be pinned on the resource. | [optional] 
**stickerName** | **String** | The name of the sticker in this story. &#x60;null&#x60; if there is no sticker. | [optional] 
**createdBy** | [**CustomFieldResponsePeopleValueInner**](CustomFieldResponsePeopleValueInner.md) |  | [optional] 
**type** | **String** |  | [optional] [readonly] 
**isEditable** | **Boolean** | *Conditional*. Whether the text of the story can be edited after creation. | [optional] [readonly] 
**isEdited** | **Boolean** | *Conditional*. Whether the text of the story has been edited after creation. | [optional] [readonly] 
**hearted** | **Boolean** | *Deprecated - please use likes instead* *Conditional*. True if the story is hearted by the authorized user, false if not. | [optional] [readonly] 
**hearts** | [**[GoalResponseLikesInner]**](GoalResponseLikesInner.md) | *Deprecated - please use likes instead*  *Conditional*. Array of likes for users who have hearted this story. | [optional] [readonly] 
**numHearts** | **Number** | *Deprecated - please use likes instead*  *Conditional*. The number of users who have hearted this story. | [optional] [readonly] 
**liked** | **Boolean** | *Conditional*. True if the story is liked by the authorized user, false if not. | [optional] [readonly] 
**likes** | [**[GoalResponseLikesInner]**](GoalResponseLikesInner.md) | *Conditional*. Array of likes for users who have liked this story. | [optional] [readonly] 
**numLikes** | **Number** | *Conditional*. The number of users who have liked this story. | [optional] [readonly] 
**previews** | [**[StoryResponsePreviewsInner]**](StoryResponsePreviewsInner.md) | *Conditional*. A collection of previews to be displayed in the story.  *Note: This property only exists for comment stories.* | [optional] [readonly] 
**oldName** | **String** | *Conditional*&#39; | [optional] 
**newName** | **String** | *Conditional* | [optional] [readonly] 
**oldDates** | [**StoryResponseOldDates**](StoryResponseOldDates.md) |  | [optional] 
**newDates** | [**StoryResponseOldDates**](StoryResponseOldDates.md) |  | [optional] 
**oldResourceSubtype** | **String** | *Conditional* | [optional] [readonly] 
**newResourceSubtype** | **String** | *Conditional* | [optional] [readonly] 
**story** | [**StoryResponseStory**](StoryResponseStory.md) |  | [optional] 
**assignee** | [**StoryResponseAssignee**](StoryResponseAssignee.md) |  | [optional] 
**follower** | [**StoryResponseAssignee**](StoryResponseAssignee.md) |  | [optional] 
**oldSection** | [**StoryResponseOldSection**](StoryResponseOldSection.md) |  | [optional] 
**newSection** | [**StoryResponseOldSection**](StoryResponseOldSection.md) |  | [optional] 
**task** | [**StoryResponseTask**](StoryResponseTask.md) |  | [optional] 
**project** | [**StoryResponseProject**](StoryResponseProject.md) |  | [optional] 
**tag** | [**StoryResponseTag**](StoryResponseTag.md) |  | [optional] 
**customField** | [**StoryResponseCustomField**](StoryResponseCustomField.md) |  | [optional] 
**oldTextValue** | **String** | *Conditional* | [optional] [readonly] 
**newTextValue** | **String** | *Conditional* | [optional] [readonly] 
**oldNumberValue** | **Number** | *Conditional* | [optional] [readonly] 
**newNumberValue** | **Number** | *Conditional* | [optional] [readonly] 
**oldEnumValue** | [**StoryResponseOldEnumValue**](StoryResponseOldEnumValue.md) |  | [optional] 
**newEnumValue** | [**StoryResponseOldEnumValue**](StoryResponseOldEnumValue.md) |  | [optional] 
**oldDateValue** | [**StoryResponseOldDateValue**](StoryResponseOldDateValue.md) |  | [optional] 
**newDateValue** | [**StoryResponseNewDateValue**](StoryResponseNewDateValue.md) |  | [optional] 
**oldPeopleValue** | [**[CustomFieldResponsePeopleValueInner]**](CustomFieldResponsePeopleValueInner.md) | *Conditional*. The old value of a people custom field story. | [optional] [readonly] 
**newPeopleValue** | [**[CustomFieldResponsePeopleValueInner]**](CustomFieldResponsePeopleValueInner.md) | *Conditional*. The new value of a people custom field story. | [optional] [readonly] 
**oldMultiEnumValues** | [**[CustomFieldBaseEnumOptionsInner]**](CustomFieldBaseEnumOptionsInner.md) | *Conditional*. The old value of a multi-enum custom field story. | [optional] [readonly] 
**newMultiEnumValues** | [**[CustomFieldBaseEnumOptionsInner]**](CustomFieldBaseEnumOptionsInner.md) | *Conditional*. The new value of a multi-enum custom field story. | [optional] [readonly] 
**newApprovalStatus** | **String** | *Conditional*. The new value of approval status. | [optional] [readonly] 
**oldApprovalStatus** | **String** | *Conditional*. The old value of approval status. | [optional] [readonly] 
**duplicateOf** | [**StoryResponseTask**](StoryResponseTask.md) |  | [optional] 
**duplicatedFrom** | [**StoryResponseTask**](StoryResponseTask.md) |  | [optional] 
**dependency** | [**StoryResponseTask**](StoryResponseTask.md) |  | [optional] 
**source** | **String** | The component of the Asana product the user used to trigger the story. | [optional] [readonly] 
**target** | [**StoryResponseTarget**](StoryResponseTarget.md) |  | [optional] 



## Enum: StickerNameEnum


* `green_checkmark` (value: `"green_checkmark"`)

* `people_dancing` (value: `"people_dancing"`)

* `dancing_unicorn` (value: `"dancing_unicorn"`)

* `heart` (value: `"heart"`)

* `party_popper` (value: `"party_popper"`)

* `people_waving_flags` (value: `"people_waving_flags"`)

* `splashing_narwhal` (value: `"splashing_narwhal"`)

* `trophy` (value: `"trophy"`)

* `yeti_riding_unicorn` (value: `"yeti_riding_unicorn"`)

* `celebrating_people` (value: `"celebrating_people"`)

* `determined_climbers` (value: `"determined_climbers"`)

* `phoenix_spreading_love` (value: `"phoenix_spreading_love"`)





## Enum: TypeEnum


* `comment` (value: `"comment"`)

* `system` (value: `"system"`)





## Enum: SourceEnum


* `web` (value: `"web"`)

* `email` (value: `"email"`)

* `mobile` (value: `"mobile"`)

* `api` (value: `"api"`)

* `unknown` (value: `"unknown"`)




