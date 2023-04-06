# AsanaPreview.CustomFieldBase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] [readonly] 
**resourceType** | **Object** |  | [optional] 
**name** | **String** | The name of the custom field. | [optional] 
**resourceSubtype** | **String** | The type of the custom field. Must be one of the given values. | [optional] 
**type** | **String** | *Deprecated: new integrations should prefer the resource_subtype field.* The type of the custom field. Must be one of the given values. | [optional] [readonly] 
**enumOptions** | [**[EnumOption]**](EnumOption.md) | *Conditional*. Only relevant for custom fields of type &#x60;enum&#x60;. This array specifies the possible values which an &#x60;enum&#x60; custom field can adopt. To modify the enum options, refer to [working with enum options](/reference/createenumoptionforcustomfield). | [optional] 
**enabled** | **Boolean** | *Conditional*. Determines if the custom field is enabled or not. | [optional] 
**dateValue** | [**CustomFieldCompactAllOfDateValue**](CustomFieldCompactAllOfDateValue.md) |  | [optional] 
**enumValue** | [**EnumOption**](EnumOption.md) |  | [optional] 
**multiEnumValues** | [**[EnumOption]**](EnumOption.md) | *Conditional*. Only relevant for custom fields of type &#x60;multi_enum&#x60;. This object is the chosen values of a &#x60;multi_enum&#x60; custom field. | [optional] 
**numberValue** | **Number** | *Conditional*. This number is the value of a &#x60;number&#x60; custom field. | [optional] 
**textValue** | **String** | *Conditional*. This string is the value of a &#x60;text&#x60; custom field. | [optional] 
**displayValue** | **String** | A string representation for the value of the custom field. Integrations that don&#39;t require the underlying type should use this field to read values. Using this field will future-proof an app against new custom field types. | [optional] [readonly] 
**description** | **String** | [Opt In](/docs/inputoutput-options). The description of the custom field. | [optional] 
**precision** | **Number** | Only relevant for custom fields of type ‘Number’. This field dictates the number of places after the decimal to round to, i.e. 0 is integer values, 1 rounds to the nearest tenth, and so on. Must be between 0 and 6, inclusive. For percentage format, this may be unintuitive, as a value of 0.25 has a precision of 0, while a value of 0.251 has a precision of 1. This is due to 0.25 being displayed as 25%. The identifier format will always have a precision of 0. | [optional] 
**format** | **String** | The format of this custom field. | [optional] 
**currencyCode** | **String** | ISO 4217 currency code to format this custom field. This will be null if the &#x60;format&#x60; is not &#x60;currency&#x60;. | [optional] 
**customLabel** | **String** | This is the string that appears next to the custom field value. This will be null if the &#x60;format&#x60; is not &#x60;custom&#x60;. | [optional] 
**customLabelPosition** | **String** | Only relevant for custom fields with &#x60;custom&#x60; format. This depicts where to place the custom label. This will be null if the &#x60;format&#x60; is not &#x60;custom&#x60;. | [optional] 
**hasNotificationsEnabled** | **Boolean** | *Conditional*. This flag describes whether a follower of a task with this field should receive inbox notifications from changes to this field. | [optional] 



## Enum: ResourceSubtypeEnum


* `text` (value: `"text"`)

* `enum` (value: `"enum"`)

* `multi_enum` (value: `"multi_enum"`)

* `number` (value: `"number"`)

* `date` (value: `"date"`)

* `people` (value: `"people"`)





## Enum: TypeEnum


* `text` (value: `"text"`)

* `enum` (value: `"enum"`)

* `multi_enum` (value: `"multi_enum"`)

* `number` (value: `"number"`)





## Enum: FormatEnum


* `currency` (value: `"currency"`)

* `identifier` (value: `"identifier"`)

* `percentage` (value: `"percentage"`)

* `custom` (value: `"custom"`)

* `none` (value: `"none"`)





## Enum: CustomLabelPositionEnum


* `prefix` (value: `"prefix"`)

* `suffix` (value: `"suffix"`)




