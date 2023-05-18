# AsanaPreview.CreateProjectFromAsanaTemplateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] [readonly] 
**resourceType** | **String** | The base type of this resource. | [optional] [readonly] 
**team** | **String** | *Create-only*. The team that this project is shared with. This field only exists for projects in organizations. | [optional] 
**workspace** | [**CreateProjectFromAsanaTemplateRequestAllOf1Workspace**](CreateProjectFromAsanaTemplateRequestAllOf1Workspace.md) |  | [optional] 
**projectTemplate** | **String** | The string ID of the Asana-created template to create the project from. | [optional] 


