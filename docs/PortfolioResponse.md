# AsanaPreview.PortfolioResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] [readonly] 
**resourceType** | **String** | The base type of this resource. | [optional] [readonly] 
**name** | **String** | The name of the portfolio. | [optional] 
**color** | **String** | Color of the portfolio. | [optional] 
**createdAt** | **Date** | The time at which this resource was created. | [optional] [readonly] 
**createdBy** | [**CustomFieldResponsePeopleValueInner**](CustomFieldResponsePeopleValueInner.md) |  | [optional] 
**customFieldSettings** | [**[PortfolioResponseCustomFieldSettingsInner]**](PortfolioResponseCustomFieldSettingsInner.md) | Array of custom field settings applied to the portfolio. | [optional] 
**currentStatusUpdate** | [**PortfolioResponseCurrentStatusUpdate**](PortfolioResponseCurrentStatusUpdate.md) |  | [optional] 
**dueOn** | **Date** | The localized day on which this portfolio is due. This takes a date with format YYYY-MM-DD. | [optional] 
**customFields** | [**[PortfolioResponseCustomFieldsInner]**](PortfolioResponseCustomFieldsInner.md) | Array of Custom Fields. | [optional] 
**members** | [**[CustomFieldResponsePeopleValueInner]**](CustomFieldResponsePeopleValueInner.md) |  | [optional] [readonly] 
**owner** | [**CustomFieldResponsePeopleValueInner**](CustomFieldResponsePeopleValueInner.md) |  | [optional] 
**startOn** | **Date** | The day on which work for this portfolio begins, or null if the portfolio has no start date. This takes a date with &#x60;YYYY-MM-DD&#x60; format. *Note: &#x60;due_on&#x60; must be present in the request when setting or unsetting the &#x60;start_on&#x60; parameter. Additionally, &#x60;start_on&#x60; and &#x60;due_on&#x60; cannot be the same date.* | [optional] 
**workspace** | [**PortfolioResponseWorkspace**](PortfolioResponseWorkspace.md) |  | [optional] 
**permalinkUrl** | **String** | A url that points directly to the object within Asana. | [optional] [readonly] 
**_public** | **Boolean** | True if the portfolio is public to its workspace members. | [optional] 
**projectTemplates** | [**[JobBaseNewProjectTemplate]**](JobBaseNewProjectTemplate.md) | Array of project templates that are in the portfolio | [optional] [readonly] 



## Enum: ColorEnum


* `dark-pink` (value: `"dark-pink"`)

* `dark-green` (value: `"dark-green"`)

* `dark-blue` (value: `"dark-blue"`)

* `dark-red` (value: `"dark-red"`)

* `dark-teal` (value: `"dark-teal"`)

* `dark-brown` (value: `"dark-brown"`)

* `dark-orange` (value: `"dark-orange"`)

* `dark-purple` (value: `"dark-purple"`)

* `dark-warm-gray` (value: `"dark-warm-gray"`)

* `light-pink` (value: `"light-pink"`)

* `light-green` (value: `"light-green"`)

* `light-blue` (value: `"light-blue"`)

* `light-red` (value: `"light-red"`)

* `light-teal` (value: `"light-teal"`)

* `light-brown` (value: `"light-brown"`)

* `light-orange` (value: `"light-orange"`)

* `light-purple` (value: `"light-purple"`)

* `light-warm-gray` (value: `"light-warm-gray"`)




