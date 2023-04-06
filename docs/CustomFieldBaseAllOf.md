# AsanaPreview.CustomFieldBaseAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | [Opt In](/docs/inputoutput-options). The description of the custom field. | [optional] 
**precision** | **Number** | Only relevant for custom fields of type ‘Number’. This field dictates the number of places after the decimal to round to, i.e. 0 is integer values, 1 rounds to the nearest tenth, and so on. Must be between 0 and 6, inclusive. For percentage format, this may be unintuitive, as a value of 0.25 has a precision of 0, while a value of 0.251 has a precision of 1. This is due to 0.25 being displayed as 25%. The identifier format will always have a precision of 0. | [optional] 
**format** | **String** | The format of this custom field. | [optional] 
**currencyCode** | **String** | ISO 4217 currency code to format this custom field. This will be null if the &#x60;format&#x60; is not &#x60;currency&#x60;. | [optional] 
**customLabel** | **String** | This is the string that appears next to the custom field value. This will be null if the &#x60;format&#x60; is not &#x60;custom&#x60;. | [optional] 
**customLabelPosition** | **String** | Only relevant for custom fields with &#x60;custom&#x60; format. This depicts where to place the custom label. This will be null if the &#x60;format&#x60; is not &#x60;custom&#x60;. | [optional] 
**hasNotificationsEnabled** | **Boolean** | *Conditional*. This flag describes whether a follower of a task with this field should receive inbox notifications from changes to this field. | [optional] 



## Enum: FormatEnum


* `currency` (value: `"currency"`)

* `identifier` (value: `"identifier"`)

* `percentage` (value: `"percentage"`)

* `custom` (value: `"custom"`)

* `none` (value: `"none"`)





## Enum: CustomLabelPositionEnum


* `prefix` (value: `"prefix"`)

* `suffix` (value: `"suffix"`)




