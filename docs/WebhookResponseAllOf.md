# AsanaPreview.WebhookResponseAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **Date** | The time at which this resource was created. | [optional] [readonly] 
**lastFailureAt** | **Date** | The timestamp when the webhook last received an error when sending an event to the target. | [optional] [readonly] 
**lastFailureContent** | **String** | The contents of the last error response sent to the webhook when attempting to deliver events to the target. | [optional] [readonly] 
**lastSuccessAt** | **Date** | The timestamp when the webhook last successfully sent an event to the target. | [optional] [readonly] 
**filters** | [**[WebhookFilter]**](WebhookFilter.md) | Whitelist of filters to apply to events from this webhook. If a webhook event passes any of the filters the event will be delivered; otherwise no event will be sent to the receiving server. | [optional] 


