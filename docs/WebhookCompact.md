# AsanaPreview.WebhookCompact

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] [readonly] 
**resourceType** | **String** | The base type of this resource. | [optional] [readonly] 
**active** | **Boolean** | If true, the webhook will send events - if false it is considered inactive and will not generate events. | [optional] [readonly] 
**resource** | [**MessageParentAllOf**](MessageParentAllOf.md) |  | [optional] 
**target** | **String** | The URL to receive the HTTP POST. | [optional] [readonly] 


