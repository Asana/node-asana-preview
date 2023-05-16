# AsanaPreview.PortfoliosApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCustomFieldSettingForPortfolio**](PortfoliosApi.md#addCustomFieldSettingForPortfolio) | **POST** /portfolios/{portfolio_gid}/addCustomFieldSetting | Add a custom field to a portfolio
[**addItemForPortfolio**](PortfoliosApi.md#addItemForPortfolio) | **POST** /portfolios/{portfolio_gid}/addItem | Add a portfolio item
[**addMembersForPortfolio**](PortfoliosApi.md#addMembersForPortfolio) | **POST** /portfolios/{portfolio_gid}/addMembers | Add users to a portfolio
[**createPortfolio**](PortfoliosApi.md#createPortfolio) | **POST** /portfolios | Create a portfolio
[**deletePortfolio**](PortfoliosApi.md#deletePortfolio) | **DELETE** /portfolios/{portfolio_gid} | Delete a portfolio
[**getItemsForPortfolio**](PortfoliosApi.md#getItemsForPortfolio) | **GET** /portfolios/{portfolio_gid}/items | Get portfolio items
[**getPortfolio**](PortfoliosApi.md#getPortfolio) | **GET** /portfolios/{portfolio_gid} | Get a portfolio
[**getPortfolios**](PortfoliosApi.md#getPortfolios) | **GET** /portfolios | Get multiple portfolios
[**removeCustomFieldSettingForPortfolio**](PortfoliosApi.md#removeCustomFieldSettingForPortfolio) | **POST** /portfolios/{portfolio_gid}/removeCustomFieldSetting | Remove a custom field from a portfolio
[**removeItemForPortfolio**](PortfoliosApi.md#removeItemForPortfolio) | **POST** /portfolios/{portfolio_gid}/removeItem | Remove a portfolio item
[**removeMembersForPortfolio**](PortfoliosApi.md#removeMembersForPortfolio) | **POST** /portfolios/{portfolio_gid}/removeMembers | Remove users from a portfolio
[**updatePortfolio**](PortfoliosApi.md#updatePortfolio) | **PUT** /portfolios/{portfolio_gid} | Update a portfolio



## addCustomFieldSettingForPortfolio

> AddCustomFieldSettingForPortfolio200Response addCustomFieldSettingForPortfolio(portfolioGid, addCustomFieldSettingForPortfolioRequest, opts)

Add a custom field to a portfolio

Custom fields are associated with portfolios by way of custom field settings.  This method creates a setting for the portfolio.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.PortfoliosApi();
let portfolioGid = 12345; // String | Globally unique identifier for the portfolio.
let addCustomFieldSettingForPortfolioRequest = new AsanaPreview.AddCustomFieldSettingForPortfolioRequest(); // AddCustomFieldSettingForPortfolioRequest | Information about the custom field setting.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["is_important","custom_field","project","parent"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.addCustomFieldSettingForPortfolio(portfolioGid, addCustomFieldSettingForPortfolioRequest, opts, (error, data, response) => {
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
 **portfolioGid** | **String**| Globally unique identifier for the portfolio. | 
 **addCustomFieldSettingForPortfolioRequest** | [**AddCustomFieldSettingForPortfolioRequest**](AddCustomFieldSettingForPortfolioRequest.md)| Information about the custom field setting. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**AddCustomFieldSettingForPortfolio200Response**](AddCustomFieldSettingForPortfolio200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addItemForPortfolio

> DeleteAttachment200Response addItemForPortfolio(portfolioGid, addItemForPortfolioRequest, opts)

Add a portfolio item

Add an item to a portfolio. Returns an empty data block.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.PortfoliosApi();
let portfolioGid = 12345; // String | Globally unique identifier for the portfolio.
let addItemForPortfolioRequest = new AsanaPreview.AddItemForPortfolioRequest(); // AddItemForPortfolioRequest | Information about the item being inserted.
let opts = {
  'optPretty': true // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
};

apiInstance.addItemForPortfolio(portfolioGid, addItemForPortfolioRequest, opts, (error, data, response) => {
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
 **portfolioGid** | **String**| Globally unique identifier for the portfolio. | 
 **addItemForPortfolioRequest** | [**AddItemForPortfolioRequest**](AddItemForPortfolioRequest.md)| Information about the item being inserted. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 

### Return type

[**DeleteAttachment200Response**](DeleteAttachment200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addMembersForPortfolio

> CreatePortfolio201Response addMembersForPortfolio(portfolioGid, addMembersForPortfolioRequest, opts)

Add users to a portfolio

Adds the specified list of users as members of the portfolio. Returns the updated portfolio record.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.PortfoliosApi();
let portfolioGid = 12345; // String | Globally unique identifier for the portfolio.
let addMembersForPortfolioRequest = new AsanaPreview.AddMembersForPortfolioRequest(); // AddMembersForPortfolioRequest | Information about the members being added.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["created_at","custom_fields","created_by","color","project_templates","custom_field_settings","start_on","due_on","current_status_update","name","public","permalink_url","workspace","owner","members"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.addMembersForPortfolio(portfolioGid, addMembersForPortfolioRequest, opts, (error, data, response) => {
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
 **portfolioGid** | **String**| Globally unique identifier for the portfolio. | 
 **addMembersForPortfolioRequest** | [**AddMembersForPortfolioRequest**](AddMembersForPortfolioRequest.md)| Information about the members being added. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**CreatePortfolio201Response**](CreatePortfolio201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPortfolio

> CreatePortfolio201Response createPortfolio(createPortfolioRequest, opts)

Create a portfolio

Creates a new portfolio in the given workspace with the supplied name.  Note that portfolios created in the Asana UI may have some state (like the “Priority” custom field) which is automatically added to the portfolio when it is created. Portfolios created via our API will *not* be created with the same initial state to allow integrations to create their own starting state on a portfolio.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.PortfoliosApi();
let createPortfolioRequest = new AsanaPreview.CreatePortfolioRequest(); // CreatePortfolioRequest | The portfolio to create.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["created_at","custom_fields","created_by","color","project_templates","custom_field_settings","start_on","due_on","current_status_update","name","public","permalink_url","workspace","owner","members"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.createPortfolio(createPortfolioRequest, opts, (error, data, response) => {
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
 **createPortfolioRequest** | [**CreatePortfolioRequest**](CreatePortfolioRequest.md)| The portfolio to create. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**CreatePortfolio201Response**](CreatePortfolio201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletePortfolio

> DeleteAttachment200Response deletePortfolio(portfolioGid, opts)

Delete a portfolio

An existing portfolio can be deleted by making a DELETE request on the URL for that portfolio.  Returns an empty data record.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.PortfoliosApi();
let portfolioGid = 12345; // String | Globally unique identifier for the portfolio.
let opts = {
  'optPretty': true // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
};

apiInstance.deletePortfolio(portfolioGid, opts, (error, data, response) => {
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
 **portfolioGid** | **String**| Globally unique identifier for the portfolio. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 

### Return type

[**DeleteAttachment200Response**](DeleteAttachment200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getItemsForPortfolio

> GetItemsForPortfolio200Response getItemsForPortfolio(portfolioGid, opts)

Get portfolio items

Get a list of the items in compact form in a portfolio.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.PortfoliosApi();
let portfolioGid = 12345; // String | Globally unique identifier for the portfolio.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9, // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'optFields': ["created_at","color","archived","icon","public","default_view","members","project_brief","custom_fields","html_notes","privacy_setting","name","due_on","permalink_url","owner","modified_at","current_status","completed_at","completed_by","current_status_update","workspace","due_date","completed","custom_field_settings","notes","followers","start_on","team","created_from_template"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.getItemsForPortfolio(portfolioGid, opts, (error, data, response) => {
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
 **portfolioGid** | **String**| Globally unique identifier for the portfolio. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#39; | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GetItemsForPortfolio200Response**](GetItemsForPortfolio200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPortfolio

> CreatePortfolio201Response getPortfolio(portfolioGid, opts)

Get a portfolio

Returns the complete portfolio record for a single portfolio.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.PortfoliosApi();
let portfolioGid = 12345; // String | Globally unique identifier for the portfolio.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["created_at","custom_fields","created_by","color","project_templates","custom_field_settings","start_on","due_on","current_status_update","name","public","permalink_url","workspace","owner","members"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.getPortfolio(portfolioGid, opts, (error, data, response) => {
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
 **portfolioGid** | **String**| Globally unique identifier for the portfolio. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**CreatePortfolio201Response**](CreatePortfolio201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPortfolios

> GetPortfolios200Response getPortfolios(workspace, opts)

Get multiple portfolios

Returns a list of the portfolios in compact representation that are owned by the current API user.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.PortfoliosApi();
let workspace = 1331; // String | The workspace or organization to filter portfolios on.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9, // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'owner': 14916, // String | The user who owns the portfolio. Currently, API users can  only get a list of portfolios that they themselves own, unless the request is made from a Service Account. In the case of a Service Account, if this parameter is specified, then all portfolios owned by this parameter are returned. Otherwise, all portfolios across the workspace are returned.
  'optFields': ["created_at","custom_fields","created_by","color","project_templates","custom_field_settings","start_on","name","current_status_update","due_on","public","permalink_url","workspace","owner","members"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.getPortfolios(workspace, opts, (error, data, response) => {
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
 **workspace** | **String**| The workspace or organization to filter portfolios on. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#39; | [optional] 
 **owner** | **String**| The user who owns the portfolio. Currently, API users can  only get a list of portfolios that they themselves own, unless the request is made from a Service Account. In the case of a Service Account, if this parameter is specified, then all portfolios owned by this parameter are returned. Otherwise, all portfolios across the workspace are returned. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GetPortfolios200Response**](GetPortfolios200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeCustomFieldSettingForPortfolio

> DeleteAttachment200Response removeCustomFieldSettingForPortfolio(portfolioGid, removeCustomFieldSettingForPortfolioRequest, opts)

Remove a custom field from a portfolio

Removes a custom field setting from a portfolio.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.PortfoliosApi();
let portfolioGid = 12345; // String | Globally unique identifier for the portfolio.
let removeCustomFieldSettingForPortfolioRequest = new AsanaPreview.RemoveCustomFieldSettingForPortfolioRequest(); // RemoveCustomFieldSettingForPortfolioRequest | Information about the custom field setting being removed.
let opts = {
  'optPretty': true // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
};

apiInstance.removeCustomFieldSettingForPortfolio(portfolioGid, removeCustomFieldSettingForPortfolioRequest, opts, (error, data, response) => {
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
 **portfolioGid** | **String**| Globally unique identifier for the portfolio. | 
 **removeCustomFieldSettingForPortfolioRequest** | [**RemoveCustomFieldSettingForPortfolioRequest**](RemoveCustomFieldSettingForPortfolioRequest.md)| Information about the custom field setting being removed. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 

### Return type

[**DeleteAttachment200Response**](DeleteAttachment200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## removeItemForPortfolio

> DeleteAttachment200Response removeItemForPortfolio(portfolioGid, removeItemForPortfolioRequest, opts)

Remove a portfolio item

Remove an item from a portfolio. Returns an empty data block.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.PortfoliosApi();
let portfolioGid = 12345; // String | Globally unique identifier for the portfolio.
let removeItemForPortfolioRequest = new AsanaPreview.RemoveItemForPortfolioRequest(); // RemoveItemForPortfolioRequest | Information about the item being removed.
let opts = {
  'optPretty': true // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
};

apiInstance.removeItemForPortfolio(portfolioGid, removeItemForPortfolioRequest, opts, (error, data, response) => {
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
 **portfolioGid** | **String**| Globally unique identifier for the portfolio. | 
 **removeItemForPortfolioRequest** | [**RemoveItemForPortfolioRequest**](RemoveItemForPortfolioRequest.md)| Information about the item being removed. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 

### Return type

[**DeleteAttachment200Response**](DeleteAttachment200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## removeMembersForPortfolio

> CreatePortfolio201Response removeMembersForPortfolio(portfolioGid, removeMembersForPortfolioRequest, opts)

Remove users from a portfolio

Removes the specified list of users from members of the portfolio. Returns the updated portfolio record.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.PortfoliosApi();
let portfolioGid = 12345; // String | Globally unique identifier for the portfolio.
let removeMembersForPortfolioRequest = new AsanaPreview.RemoveMembersForPortfolioRequest(); // RemoveMembersForPortfolioRequest | Information about the members being removed.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["created_at","custom_fields","created_by","color","project_templates","custom_field_settings","start_on","due_on","current_status_update","name","public","permalink_url","workspace","owner","members"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.removeMembersForPortfolio(portfolioGid, removeMembersForPortfolioRequest, opts, (error, data, response) => {
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
 **portfolioGid** | **String**| Globally unique identifier for the portfolio. | 
 **removeMembersForPortfolioRequest** | [**RemoveMembersForPortfolioRequest**](RemoveMembersForPortfolioRequest.md)| Information about the members being removed. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**CreatePortfolio201Response**](CreatePortfolio201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePortfolio

> CreatePortfolio201Response updatePortfolio(portfolioGid, createPortfolioRequest, opts)

Update a portfolio

An existing portfolio can be updated by making a PUT request on the URL for that portfolio. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated portfolio record.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.PortfoliosApi();
let portfolioGid = 12345; // String | Globally unique identifier for the portfolio.
let createPortfolioRequest = new AsanaPreview.CreatePortfolioRequest(); // CreatePortfolioRequest | The updated fields for the portfolio.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["created_at","custom_fields","created_by","color","project_templates","custom_field_settings","start_on","due_on","current_status_update","name","public","permalink_url","workspace","owner","members"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.updatePortfolio(portfolioGid, createPortfolioRequest, opts, (error, data, response) => {
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
 **portfolioGid** | **String**| Globally unique identifier for the portfolio. | 
 **createPortfolioRequest** | [**CreatePortfolioRequest**](CreatePortfolioRequest.md)| The updated fields for the portfolio. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**CreatePortfolio201Response**](CreatePortfolio201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

