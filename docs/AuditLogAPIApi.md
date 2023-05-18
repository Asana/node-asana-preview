# AsanaPreview.AuditLogAPIApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAuditLogEvents**](AuditLogAPIApi.md#getAuditLogEvents) | **GET** /workspaces/{workspace_gid}/audit_log_events | Get audit log events



## getAuditLogEvents

> GetAuditLogEvents200Response getAuditLogEvents(workspaceGid, opts)

Get audit log events

Retrieve the audit log events that have been captured in your domain.  This endpoint will return a list of [AuditLogEvent](/reference/audit-log-api) objects, sorted by creation time in ascending order. Note that the Audit Log API captures events from October 8th, 2021 and later. Queries for events before this date will not return results.  There are a number of query parameters (below) that can be used to filter the set of [AuditLogEvent](/reference/audit-log-api) objects that are returned in the response. Any combination of query parameters is valid. When no filters are provided, all of the events that have been captured in your domain will match.  The list of events will always be [paginated](/docs/pagination). The default limit is 1000 events. The next set of events can be retrieved using the &#x60;offset&#x60; from the previous response. If there are no events that match the provided filters in your domain, the endpoint will return &#x60;null&#x60; for the &#x60;next_page&#x60; field. Querying again with the same filters may return new events if they were captured after the last request. Once a response includes a &#x60;next_page&#x60; with an &#x60;offset&#x60;, subsequent requests can be made with the latest &#x60;offset&#x60; to poll for new events that match the provided filters.  *Note: If the filters you provided match events in your domain and &#x60;next_page&#x60; is present in the response, we will continue to send &#x60;next_page&#x60; on subsequent requests even when there are no more events that match the filters. This was put in place so that you can implement an audit log stream that will return future events that match these filters. If you are not interested in future events that match the filters you have defined, you can rely on checking empty &#x60;data&#x60; response for the end of current events that match your filters.*  When no &#x60;offset&#x60; is provided, the response will begin with the oldest events that match the provided filters. It is important to note that [AuditLogEvent](/reference/audit-log-api) objects will be permanently deleted from our systems after 90 days. If you wish to keep a permanent record of these events, we recommend using a SIEM tool to ingest and store these logs.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.AuditLogAPIApi();
let workspaceGid = 12345; // String | Globally unique identifier for the workspace or organization.
let opts = {
  'startAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter to events created after this time (inclusive).
  'endAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter to events created before this time (exclusive).
  'eventType': "eventType_example", // String | Filter to events of this type. Refer to the [supported audit log events](/docs/audit-log-events#supported-audit-log-events) for a full list of values.
  'actorType': "actorType_example", // String | Filter to events with an actor of this type. This only needs to be included if querying for actor types without an ID. If `actor_gid` is included, this should be excluded.
  'actorGid': "actorGid_example", // String | Filter to events triggered by the actor with this ID.
  'resourceGid': "resourceGid_example", // String | Filter to events with this resource ID.
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9, // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'optFields': ["context","resource","event_type","created_at","event_category","actor","details"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.getAuditLogEvents(workspaceGid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' +  JSON.stringify(data, 0, 2));
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspaceGid** | **String**| Globally unique identifier for the workspace or organization. | 
 **startAt** | **Date**| Filter to events created after this time (inclusive). | [optional] 
 **endAt** | **Date**| Filter to events created before this time (exclusive). | [optional] 
 **eventType** | **String**| Filter to events of this type. Refer to the [supported audit log events](/docs/audit-log-events#supported-audit-log-events) for a full list of values. | [optional] 
 **actorType** | **String**| Filter to events with an actor of this type. This only needs to be included if querying for actor types without an ID. If &#x60;actor_gid&#x60; is included, this should be excluded. | [optional] 
 **actorGid** | **String**| Filter to events triggered by the actor with this ID. | [optional] 
 **resourceGid** | **String**| Filter to events with this resource ID. | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#39; | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GetAuditLogEvents200Response**](GetAuditLogEvents200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=UTF-8

