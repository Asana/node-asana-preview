# AsanaPreview.CustomFieldsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCustomField**](CustomFieldsApi.md#createCustomField) | **POST** /custom_fields | Create a custom field
[**createEnumOptionForCustomField**](CustomFieldsApi.md#createEnumOptionForCustomField) | **POST** /custom_fields/{custom_field_gid}/enum_options | Create an enum option
[**deleteCustomField**](CustomFieldsApi.md#deleteCustomField) | **DELETE** /custom_fields/{custom_field_gid} | Delete a custom field
[**getCustomField**](CustomFieldsApi.md#getCustomField) | **GET** /custom_fields/{custom_field_gid} | Get a custom field
[**getCustomFieldsForWorkspace**](CustomFieldsApi.md#getCustomFieldsForWorkspace) | **GET** /workspaces/{workspace_gid}/custom_fields | Get a workspace&#39;s custom fields
[**insertEnumOptionForCustomField**](CustomFieldsApi.md#insertEnumOptionForCustomField) | **POST** /custom_fields/{custom_field_gid}/enum_options/insert | Reorder a custom field&#39;s enum
[**updateCustomField**](CustomFieldsApi.md#updateCustomField) | **PUT** /custom_fields/{custom_field_gid} | Update a custom field
[**updateEnumOption**](CustomFieldsApi.md#updateEnumOption) | **PUT** /enum_options/{enum_option_gid} | Update an enum option



## createCustomField

> CreateCustomField201Response createCustomField(opts)

Create a custom field

Creates a new custom field in a workspace. Every custom field is required to be created in a specific workspace, and this workspace cannot be changed once set.  A custom field’s name must be unique within a workspace and not conflict with names of existing task properties such as &#x60;Due Date&#x60; or &#x60;Assignee&#x60;. A custom field’s type must be one of &#x60;text&#x60;, &#x60;enum&#x60;, &#x60;multi_enum&#x60;, &#x60;number&#x60;, &#x60;date&#x60;, or &#x60;people&#x60;.  Returns the full record of the newly created custom field.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.CustomFieldsApi();
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9, // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'optFields': ["currency_code","created_by","is_global_to_workspace","enum_options","text_value","display_value","is_value_read_only","is_formula_field","name","multi_enum_values","custom_label","resource_subtype","has_notifications_enabled","precision","enum_value","custom_label_position","type","people_value","number_value","format","date_value","enabled","asana_created_field","description"], // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
  'createCustomFieldRequest': new AsanaPreview.CreateCustomFieldRequest() // CreateCustomFieldRequest | The custom field object to create.
};

apiInstance.createCustomField(opts, (error, data, response) => {
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
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#39; | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 
 **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| The custom field object to create. | [optional] 

### Return type

[**CreateCustomField201Response**](CreateCustomField201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createEnumOptionForCustomField

> CreateEnumOptionForCustomField201Response createEnumOptionForCustomField(customFieldGid, opts)

Create an enum option

Creates an enum option and adds it to this custom field’s list of enum options. A custom field can have at most 500 enum options (including disabled options). By default new enum options are inserted at the end of a custom field’s list. Locked custom fields can only have enum options added by the user who locked the field. Returns the full record of the newly created enum option.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.CustomFieldsApi();
let customFieldGid = 12345; // String | Globally unique identifier for the custom field.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9, // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'optFields': ["color","enabled","name"], // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
  'createEnumOptionForCustomFieldRequest': new AsanaPreview.CreateEnumOptionForCustomFieldRequest() // CreateEnumOptionForCustomFieldRequest | The enum option object to create.
};

apiInstance.createEnumOptionForCustomField(customFieldGid, opts, (error, data, response) => {
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
 **customFieldGid** | **String**| Globally unique identifier for the custom field. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#39; | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 
 **createEnumOptionForCustomFieldRequest** | [**CreateEnumOptionForCustomFieldRequest**](CreateEnumOptionForCustomFieldRequest.md)| The enum option object to create. | [optional] 

### Return type

[**CreateEnumOptionForCustomField201Response**](CreateEnumOptionForCustomField201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCustomField

> DeleteAttachment200Response deleteCustomField(customFieldGid, opts)

Delete a custom field

A specific, existing custom field can be deleted by making a DELETE request on the URL for that custom field. Locked custom fields can only be deleted by the user who locked the field. Returns an empty data record.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.CustomFieldsApi();
let customFieldGid = 12345; // String | Globally unique identifier for the custom field.
let opts = {
  'optPretty': true // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
};

apiInstance.deleteCustomField(customFieldGid, opts, (error, data, response) => {
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
 **customFieldGid** | **String**| Globally unique identifier for the custom field. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 

### Return type

[**DeleteAttachment200Response**](DeleteAttachment200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomField

> CreateCustomField201Response getCustomField(customFieldGid, opts)

Get a custom field

Get the complete definition of a custom field’s metadata.  Since custom fields can be defined for one of a number of types, and these types have different data and behaviors, there are fields that are relevant to a particular type. For instance, as noted above, enum_options is only relevant for the enum type and defines the set of choices that the enum could represent. The examples below show some of these type-specific custom field definitions.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.CustomFieldsApi();
let customFieldGid = 12345; // String | Globally unique identifier for the custom field.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["currency_code","created_by","is_global_to_workspace","enum_options","text_value","display_value","is_value_read_only","is_formula_field","name","multi_enum_values","custom_label","resource_subtype","has_notifications_enabled","precision","enum_value","custom_label_position","type","people_value","number_value","format","date_value","enabled","asana_created_field","description"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.getCustomField(customFieldGid, opts, (error, data, response) => {
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
 **customFieldGid** | **String**| Globally unique identifier for the custom field. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**CreateCustomField201Response**](CreateCustomField201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomFieldsForWorkspace

> GetCustomFieldsForWorkspace200Response getCustomFieldsForWorkspace(workspaceGid, opts)

Get a workspace&#39;s custom fields

Returns a list of the compact representation of all of the custom fields in a workspace.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.CustomFieldsApi();
let workspaceGid = 12345; // String | Globally unique identifier for the workspace or organization.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9, // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'optFields': ["currency_code","created_by","is_global_to_workspace","enum_options","text_value","display_value","is_value_read_only","is_formula_field","name","multi_enum_values","custom_label","resource_subtype","has_notifications_enabled","precision","enum_value","custom_label_position","type","people_value","number_value","format","date_value","enabled","asana_created_field","description"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

apiInstance.getCustomFieldsForWorkspace(workspaceGid, opts, (error, data, response) => {
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
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#39; | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GetCustomFieldsForWorkspace200Response**](GetCustomFieldsForWorkspace200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## insertEnumOptionForCustomField

> CreateEnumOptionForCustomField201Response insertEnumOptionForCustomField(customFieldGid, opts)

Reorder a custom field&#39;s enum

Moves a particular enum option to be either before or after another specified enum option in the custom field. Locked custom fields can only be reordered by the user who locked the field.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.CustomFieldsApi();
let customFieldGid = 12345; // String | Globally unique identifier for the custom field.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["color","enabled","name"], // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
  'insertEnumOptionForCustomFieldRequest': new AsanaPreview.InsertEnumOptionForCustomFieldRequest() // InsertEnumOptionForCustomFieldRequest | The enum option object to create.
};

apiInstance.insertEnumOptionForCustomField(customFieldGid, opts, (error, data, response) => {
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
 **customFieldGid** | **String**| Globally unique identifier for the custom field. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 
 **insertEnumOptionForCustomFieldRequest** | [**InsertEnumOptionForCustomFieldRequest**](InsertEnumOptionForCustomFieldRequest.md)| The enum option object to create. | [optional] 

### Return type

[**CreateEnumOptionForCustomField201Response**](CreateEnumOptionForCustomField201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCustomField

> CreateCustomField201Response updateCustomField(customFieldGid, opts)

Update a custom field

A specific, existing custom field can be updated by making a PUT request on the URL for that custom field. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the custom field. A custom field’s &#x60;type&#x60; cannot be updated. An enum custom field’s &#x60;enum_options&#x60; cannot be updated with this endpoint. Instead see “Work With Enum Options” for information on how to update &#x60;enum_options&#x60;. Locked custom fields can only be updated by the user who locked the field. Returns the complete updated custom field record.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.CustomFieldsApi();
let customFieldGid = 12345; // String | Globally unique identifier for the custom field.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["currency_code","created_by","is_global_to_workspace","enum_options","text_value","display_value","is_value_read_only","is_formula_field","name","multi_enum_values","custom_label","resource_subtype","has_notifications_enabled","precision","enum_value","custom_label_position","type","people_value","number_value","format","date_value","enabled","asana_created_field","description"], // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
  'createCustomFieldRequest': new AsanaPreview.CreateCustomFieldRequest() // CreateCustomFieldRequest | The custom field object with all updated properties.
};

apiInstance.updateCustomField(customFieldGid, opts, (error, data, response) => {
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
 **customFieldGid** | **String**| Globally unique identifier for the custom field. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 
 **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| The custom field object with all updated properties. | [optional] 

### Return type

[**CreateCustomField201Response**](CreateCustomField201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateEnumOption

> CreateEnumOptionForCustomField201Response updateEnumOption(enumOptionGid, opts)

Update an enum option

Updates an existing enum option. Enum custom fields require at least one enabled enum option. Locked custom fields can only be updated by the user who locked the field. Returns the full record of the updated enum option.

### Example

```javascript
const AsanaPreview = require('asana-preview');

let defaultClient = AsanaPreview.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "PERSONAL_ACCESS_TOKEN"

let apiInstance = new AsanaPreview.CustomFieldsApi();
let enumOptionGid = 124578; // String | Globally unique identifier for the enum option.
let opts = {
  'optPretty': true, // Boolean | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
  'optFields': ["color","enabled","name"], // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
  'createEnumOptionForCustomFieldRequest': new AsanaPreview.CreateEnumOptionForCustomFieldRequest() // CreateEnumOptionForCustomFieldRequest | The enum option object to update
};

apiInstance.updateEnumOption(enumOptionGid, opts, (error, data, response) => {
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
 **enumOptionGid** | **String**| Globally unique identifier for the enum option. | 
 **optPretty** | **Boolean**| Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. | [optional] 
 **optFields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 
 **createEnumOptionForCustomFieldRequest** | [**CreateEnumOptionForCustomFieldRequest**](CreateEnumOptionForCustomFieldRequest.md)| The enum option object to update | [optional] 

### Return type

[**CreateEnumOptionForCustomField201Response**](CreateEnumOptionForCustomField201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

