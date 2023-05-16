# AsanaPreview.WebhookResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] [readonly] 
**resourceType** | **String** | The base type of this resource. | [optional] [readonly] 
**active** | **Boolean** | If true, the webhook will send events - if false it is considered inactive and will not generate events. | [optional] [readonly] 
**resource** | [**AsanaNamedResource**](AsanaNamedResource.md) |  | [optional] 
**target** | **String** | The URL to receive the HTTP POST. | [optional] [readonly] 
**createdAt** | **Date** | The time at which this resource was created. | [optional] [readonly] 
**lastFailureAt** | **Date** | The timestamp when the webhook last received an error when sending an event to the target. | [optional] [readonly] 
**lastFailureContent** | **String** | The contents of the last error response sent to the webhook when attempting to deliver events to the target. | [optional] [readonly] 
**lastSuccessAt** | **Date** | The timestamp when the webhook last successfully sent an event to the target. | [optional] [readonly] 
**filters** | [**[WebhookFilter]**](WebhookFilter.md) | Whitelist of filters to apply to events from this webhook. If a webhook event passes any of the filters the event will be delivered; otherwise no event will be sent to the receiving server. | [optional] 


