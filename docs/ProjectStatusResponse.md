# AsanaPreview.ProjectStatusResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] 
**resource_type** | **String** | The base type of this resource. | [optional] 
**title** | **String** | The title of the project status update. | [optional] 
**text** | **String** | The text content of the status update. | 
**html_text** | **String** | [Opt In](/docs/inputoutput-options). The text content of the status update with formatting as HTML. | [optional] 
**color** | **String** | The color associated with the status update. | 
**author** | [**CustomFieldResponsePeopleValue**](CustomFieldResponsePeopleValue.md) |  | [optional] 
**created_at** | **Date** | The time at which this resource was created. | [optional] 
**created_by** | [**CustomFieldResponsePeopleValue**](CustomFieldResponsePeopleValue.md) |  | [optional] 
**modified_at** | **Date** | The time at which this project status was last modified. *Note: This does not currently reflect any changes in associations such as comments that may have been added or removed from the project status.* | [optional] 

<a name="ColorEnum"></a>
## Enum: ColorEnum

* `green` (value: `"green"`)
* `yellow` (value: `"yellow"`)
* `red` (value: `"red"`)
* `blue` (value: `"blue"`)

