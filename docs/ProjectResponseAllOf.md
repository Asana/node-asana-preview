# AsanaPreview.ProjectResponseAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customFields** | [**[CustomFieldCompact]**](CustomFieldCompact.md) | Array of Custom Fields. | [optional] [readonly] 
**completed** | **Boolean** | True if the project is currently marked complete, false if not. | [optional] [readonly] 
**completedAt** | **Date** | The time at which this project was completed, or null if the project is not completed. | [optional] [readonly] 
**completedBy** | [**UserCompact**](UserCompact.md) |  | [optional] 
**followers** | [**[UserCompact]**](UserCompact.md) | Array of users following this project. Followers are a subset of members who have opted in to receive \&quot;tasks added\&quot; notifications for a project. | [optional] [readonly] 
**owner** | [**UserCompact**](UserCompact.md) | The current owner of the project, may be null. | [optional] 
**team** | [**TeamCompact**](TeamCompact.md) |  | [optional] 
**icon** | **String** | The icon for a project. | [optional] 
**permalinkUrl** | **String** | A url that points directly to the object within Asana. | [optional] [readonly] 
**projectBrief** | [**ProjectBriefCompact**](ProjectBriefCompact.md) |  | [optional] 
**createdFromTemplate** | [**ProjectTemplateCompact**](ProjectTemplateCompact.md) |  | [optional] 



## Enum: IconEnum


* `list` (value: `"list"`)

* `board` (value: `"board"`)

* `timeline` (value: `"timeline"`)

* `calendar` (value: `"calendar"`)

* `rocket` (value: `"rocket"`)

* `people` (value: `"people"`)

* `graph` (value: `"graph"`)

* `star` (value: `"star"`)

* `bug` (value: `"bug"`)

* `light_bulb` (value: `"light_bulb"`)

* `globe` (value: `"globe"`)

* `gear` (value: `"gear"`)

* `notebook` (value: `"notebook"`)

* `computer` (value: `"computer"`)

* `check` (value: `"check"`)

* `target` (value: `"target"`)

* `html` (value: `"html"`)

* `megaphone` (value: `"megaphone"`)

* `chat_bubbles` (value: `"chat_bubbles"`)

* `briefcase` (value: `"briefcase"`)

* `page_layout` (value: `"page_layout"`)

* `mountain_flag` (value: `"mountain_flag"`)

* `puzzle` (value: `"puzzle"`)

* `presentation` (value: `"presentation"`)

* `line_and_symbols` (value: `"line_and_symbols"`)

* `speed_dial` (value: `"speed_dial"`)

* `ribbon` (value: `"ribbon"`)

* `shoe` (value: `"shoe"`)

* `shopping_basket` (value: `"shopping_basket"`)

* `map` (value: `"map"`)

* `ticket` (value: `"ticket"`)

* `coins` (value: `"coins"`)




