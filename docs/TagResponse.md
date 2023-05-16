# AsanaPreview.TagResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] [readonly] 
**resourceType** | **String** | The base type of this resource. | [optional] [readonly] 
**name** | **String** | Name of the tag. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer. | [optional] 
**color** | **String** | Color of the tag. | [optional] 
**notes** | **String** | Free-form textual information associated with the tag (i.e. its description). | [optional] 
**createdAt** | **Date** | The time at which this resource was created. | [optional] [readonly] 
**followers** | [**[UserCompact]**](UserCompact.md) | Array of users following this tag. | [optional] [readonly] 
**workspace** | [**WorkspaceCompact**](WorkspaceCompact.md) |  | [optional] 
**permalinkUrl** | **String** | A url that points directly to the object within Asana. | [optional] [readonly] 



## Enum: ColorEnum


* `dark-pink` (value: `"dark-pink"`)

* `dark-green` (value: `"dark-green"`)

* `dark-blue` (value: `"dark-blue"`)

* `dark-red` (value: `"dark-red"`)

* `dark-teal` (value: `"dark-teal"`)

* `dark-brown` (value: `"dark-brown"`)

* `dark-orange` (value: `"dark-orange"`)

* `dark-purple` (value: `"dark-purple"`)

* `dark-warm-gray` (value: `"dark-warm-gray"`)

* `light-pink` (value: `"light-pink"`)

* `light-green` (value: `"light-green"`)

* `light-blue` (value: `"light-blue"`)

* `light-red` (value: `"light-red"`)

* `light-teal` (value: `"light-teal"`)

* `light-brown` (value: `"light-brown"`)

* `light-orange` (value: `"light-orange"`)

* `light-purple` (value: `"light-purple"`)

* `light-warm-gray` (value: `"light-warm-gray"`)




