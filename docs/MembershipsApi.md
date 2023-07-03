# AsanaPreview.MembershipsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMembership**](MembershipsApi.md#createMembership) | **POST** /memberships | Create a membership
[**deleteMembership**](MembershipsApi.md#deleteMembership) | **DELETE** /memberships/{membership_gid} | Delete a membership
[**getMemberships**](MembershipsApi.md#getMemberships) | **GET** /memberships | Get multiple memberships
[**updateMembership**](MembershipsApi.md#updateMembership) | **PUT** /memberships/{membership_gid} | Update a membership

<a name="createMembership"></a>
# **createMembership**
> MembershipResponseData createMembership(opts)

Create a membership

Creates a new membership in a &#x60;goal&#x60;. &#x60;Teams&#x60; or &#x60;users&#x60; can be a member of &#x60;goals&#x60;.  Returns the full record of the newly created membership.

### Example
```javascript
import {AsanaPreview} from 'asana-preview';
let defaultClient = AsanaPreview.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new AsanaPreview.MembershipsApi();
let opts = { 
  'body': new AsanaPreview.MembershipsBody() // MembershipsBody | The updated fields for the membership.
};
apiInstance.createMembership(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MembershipsBody**](MembershipsBody.md)| The updated fields for the membership. | [optional] 

### Return type

[**MembershipResponseData**](MembershipResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="deleteMembership"></a>
# **deleteMembership**
> EmptyResponseData deleteMembership(membership_gid)

Delete a membership

A specific, existing membership can be deleted by making a &#x60;DELETE&#x60; request on the URL for that membership.  Returns an empty data record.

### Example
```javascript
import {AsanaPreview} from 'asana-preview';
let defaultClient = AsanaPreview.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new AsanaPreview.MembershipsApi();
let membership_gid = "12345"; // String | Globally unique identifier for the membership.

apiInstance.deleteMembership(membership_gid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **membership_gid** | **String**| Globally unique identifier for the membership. | 

### Return type

[**EmptyResponseData**](EmptyResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getMemberships"></a>
# **getMemberships**
> MembershipResponseArray getMemberships(opts)

Get multiple memberships

Returns compact &#x60;goal_membership&#x60; records. The possible types for &#x60;parent&#x60; in this request are &#x60;goal&#x60;. An additional member (user GID or team GID) can be passed in to filter to a specific membership.

### Example
```javascript
import {AsanaPreview} from 'asana-preview';
let defaultClient = AsanaPreview.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new AsanaPreview.MembershipsApi();
let opts = { 
  'parent': "159874", // String | Globally unique identifier for `goal`.
  'member': "1061493", // String | Globally unique identifier for `team` or `user`.
  'limit': 50, // Number | Pagination limit for the request.
  'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9" // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
};
apiInstance.getMemberships(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **String**| Globally unique identifier for &#x60;goal&#x60;. | [optional] 
 **member** | **String**| Globally unique identifier for &#x60;team&#x60; or &#x60;user&#x60;. | [optional] 
 **limit** | **Number**| Pagination limit for the request. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 

### Return type

[**MembershipResponseArray**](MembershipResponseArray.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="updateMembership"></a>
# **updateMembership**
> MembershipResponseData updateMembership(membership_gid, opts)

Update a membership

An existing membership can be updated by making a &#x60;PUT&#x60; request on the URL for that goal. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged. Memberships on &#x60;project&#x60;, &#x60;portfolio&#x60;, &#x60;team&#x60;, and &#x60;goals&#x60; can be updated.

### Example
```javascript
import {AsanaPreview} from 'asana-preview';
let defaultClient = AsanaPreview.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new AsanaPreview.MembershipsApi();
let membership_gid = "12345"; // String | Globally unique identifier for the membership.
let opts = { 
  'body': new AsanaPreview.MembershipsMembershipGidBody() // MembershipsMembershipGidBody | The updated fields for the membership.
};
apiInstance.updateMembership(membership_gid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **membership_gid** | **String**| Globally unique identifier for the membership. | 
 **body** | [**MembershipsMembershipGidBody**](MembershipsMembershipGidBody.md)| The updated fields for the membership. | [optional] 

### Return type

[**MembershipResponseData**](MembershipResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

