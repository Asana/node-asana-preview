# AsanaPreview.EnumOptionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] [readonly] 
**resourceType** | **String** | The base type of this resource. | [optional] [readonly] 
**name** | **String** | The name of the enum option. | [optional] 
**enabled** | **Boolean** | Whether or not the enum option is a selectable value for the custom field. | [optional] 
**color** | **String** | The color of the enum option. Defaults to ‘none’. | [optional] 
**insertBefore** | **String** | An existing enum option within this custom field before which the new enum option should be inserted. Cannot be provided together with after_enum_option. | [optional] 
**insertAfter** | **String** | An existing enum option within this custom field after which the new enum option should be inserted. Cannot be provided together with before_enum_option. | [optional] 


