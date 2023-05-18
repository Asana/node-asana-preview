# AsanaPreview.OrganizationExportResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] [readonly] 
**resourceType** | **String** | The base type of this resource. | [optional] [readonly] 
**createdAt** | **Date** | The time at which this resource was created. | [optional] [readonly] 
**downloadUrl** | **String** | Download this URL to retreive the full export of the organization in JSON format. It will be compressed in a gzip (.gz) container.  *Note: May be null if the export is still in progress or failed.  If present, this URL may only be valid for 1 hour from the time of retrieval. You should avoid persisting this URL somewhere and rather refresh on demand to ensure you do not keep stale URLs.* | [optional] [readonly] 
**state** | **String** | The current state of the export. | [optional] [readonly] 
**organization** | [**GoalResponseWorkspace**](GoalResponseWorkspace.md) |  | [optional] 



## Enum: StateEnum


* `pending` (value: `"pending"`)

* `started` (value: `"started"`)

* `finished` (value: `"finished"`)

* `error` (value: `"error"`)




