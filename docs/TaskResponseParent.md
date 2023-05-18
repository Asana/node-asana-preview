# AsanaPreview.TaskResponseParent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] [readonly] 
**resourceType** | **String** | The base type of this resource. | [optional] [readonly] 
**name** | **String** | The name of the task. | [optional] 
**resourceSubtype** | **String** | The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning. The resource_subtype &#x60;milestone&#x60; represent a single moment in time. This means tasks with this subtype cannot have a start_date. | [optional] 



## Enum: ResourceSubtypeEnum


* `default_task` (value: `"default_task"`)

* `milestone` (value: `"milestone"`)

* `section` (value: `"section"`)

* `approval` (value: `"approval"`)




