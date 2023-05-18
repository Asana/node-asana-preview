# AsanaPreview.ProjectTemplateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] [readonly] 
**resourceType** | **String** | The base type of this resource. | [optional] [readonly] 
**name** | **String** | Name of the project template. | [optional] 
**description** | **String** | Free-form textual information associated with the project template | [optional] 
**htmlDescription** | **String** | The description of the project template with formatting as HTML. | [optional] 
**_public** | **Boolean** | True if the project template is public to its team. | [optional] 
**owner** | [**ProjectTemplateBaseOwner**](ProjectTemplateBaseOwner.md) |  | [optional] 
**team** | [**GoalResponseTeamAllOf**](GoalResponseTeamAllOf.md) |  | [optional] 
**requestedDates** | [**[ProjectTemplateBaseRequestedDatesInner]**](ProjectTemplateBaseRequestedDatesInner.md) | Array of date variables in this project template. Calendar dates must be provided for these variables when instantiating a project. | [optional] [readonly] 
**color** | **String** | Color of the project template. | [optional] 
**requestedRoles** | [**[ProjectTemplateBaseRequestedRolesInner]**](ProjectTemplateBaseRequestedRolesInner.md) | Array of template roles in this project template. User Ids can be provided for these variables when instantiating a project to assign template tasks to the user. | [optional] 



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




