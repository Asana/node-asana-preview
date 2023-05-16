# AsanaPreview.MembershipsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMembership**](MembershipsApi.md#createMembership) | **POST** /memberships | Create a membership
[**deleteMembership**](MembershipsApi.md#deleteMembership) | **DELETE** /memberships/{membership_gid} | Delete a membership
[**getMemberships**](MembershipsApi.md#getMemberships) | **GET** /memberships | Get multiple memberships
[**updateMembership**](MembershipsApi.md#updateMembership) | **PUT** /memberships/{membership_gid} | Update a membership



## createMembership

> CreateMembership200Response createMembership(opts)

Create a membership

Creates a new membership in a &#x60;team&#x60;, &#x60;project&#x60;, &#x60;goal&#x60;, or &#x60;portfolio&#x60;. &#x60;Teams&#x60; or &#x60;users&#x60; can be a member of &#x60;goals&#x60;. &#x60;Project&#x60;, &#x60;team&#x60;, and &#x60;portfolios&#x60; have users as members.  Returns the full record of the newly created membership.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.MembershipsApi();
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'createMembershipRequest': new AsanaPreview.CreateMembershipRequest() // CreateMembershipRequest | The updated fields for the membership.
};

apiInstance.createMembership(opts, (error, data, response) => {
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
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **createMembershipRequest** | [**CreateMembershipRequest**](CreateMembershipRequest.md)| The updated fields for the membership. | [optional] 

### Return type

[**CreateMembership200Response**](CreateMembership200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteMembership

> DeleteAttachment200Response deleteMembership(membershipGid, opts)

Delete a membership

A specific, existing membership can be deleted by making a &#x60;DELETE&#x60; request on the URL for that membership.  Returns an empty data record.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.MembershipsApi();
let membershipGid = 12345; // String | Globally unique identifier for the membership.
let opts = {
  'optPretty': true // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
};

apiInstance.deleteMembership(membershipGid, opts, (error, data, response) => {
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
 **membershipGid** | **String**| Globally unique identifier for the membership. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 

### Return type

[**DeleteAttachment200Response**](DeleteAttachment200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMemberships

> GetMemberships200Response getMemberships(opts)

Get multiple memberships

Returns compact &#x60;goal_membership&#x60;, &#x60;team_membership&#x60;, &#x60;project_membership&#x60;, &#x60;portfolio_membership&#x60;, or &#x60;workspace_membership&#x60; records. The possible types for &#x60;parent&#x60; in this request are &#x60;project&#x60;, &#x60;portfolio&#x60;, &#x60;team&#x60;, &#x60;goal&#x60;, and &#x60;workspace&#x60;. An additional member (user GID or team GID) can be passed in to filter to a specific membership. If a &#x60;parent&#x60; param is not provided, a &#x60;member&#x60;, &#x60;resource_subtype&#x60;, and &#x60;workspace&#x60; param must be provided.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.MembershipsApi();
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'parent': 159874, // String | Globally unique identifier for `project`, `portfolio`,   `team`, `goal`, and `workspace`.
  'member': 1061493, // String | Globally unique identifier for `team` or `user`.
  'resourceSubtype': team_membership, // String | The resource_subtype to filter on. Must be provided with `member` and `workspace` if `parent` is not provided. Valid values include `team_membership`, `workspace_membership`, `portfolio_membership`
  'workspace': 75642, // String | The workspace to filter on. Must be provided with `member` and `resource_subtype` if `parent` is not provided.
  'limit': 50, // Number | Pagination limit for the request.
  'offset': eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9 // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
};

apiInstance.getMemberships(opts, (error, data, response) => {
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
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **parent** | **String**| Globally unique identifier for &#x60;project&#x60;, &#x60;portfolio&#x60;,   &#x60;team&#x60;, &#x60;goal&#x60;, and &#x60;workspace&#x60;. | [optional] 
 **member** | **String**| Globally unique identifier for &#x60;team&#x60; or &#x60;user&#x60;. | [optional] 
 **resourceSubtype** | **String**| The resource_subtype to filter on. Must be provided with &#x60;member&#x60; and &#x60;workspace&#x60; if &#x60;parent&#x60; is not provided. Valid values include &#x60;team_membership&#x60;, &#x60;workspace_membership&#x60;, &#x60;portfolio_membership&#x60; | [optional] 
 **workspace** | **String**| The workspace to filter on. Must be provided with &#x60;member&#x60; and &#x60;resource_subtype&#x60; if &#x60;parent&#x60; is not provided. | [optional] 
 **limit** | **Number**| Pagination limit for the request. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#39; | [optional] 

### Return type

[**GetMemberships200Response**](GetMemberships200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateMembership

> CreateMembership200Response updateMembership(membershipGid, opts)

Update a membership

An existing membership can be updated by making a &#x60;PUT&#x60; request on the URL for that goal. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged. Memberships on &#x60;project&#x60;, &#x60;portfolio&#x60;, &#x60;team&#x60;, and &#x60;goals&#x60; can be updated.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.MembershipsApi();
let membershipGid = 12345; // String | Globally unique identifier for the membership.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'updateMembershipRequest': new AsanaPreview.UpdateMembershipRequest() // UpdateMembershipRequest | The updated fields for the membership.
};

apiInstance.updateMembership(membershipGid, opts, (error, data, response) => {
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
 **membershipGid** | **String**| Globally unique identifier for the membership. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **updateMembershipRequest** | [**UpdateMembershipRequest**](UpdateMembershipRequest.md)| The updated fields for the membership. | [optional] 

### Return type

[**CreateMembership200Response**](CreateMembership200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

