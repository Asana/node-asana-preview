# AsanaPreview.CustomFieldRequestAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace** | **String** | *Create-Only* The workspace to create a custom field in. | 
**ownedByApp** | **Boolean** | *Allow-listed*. Instructs the API that this Custom Field is app-owned. This parameter is allow-listed to specific apps at this point in time. For apps that are not allow-listed, providing this parameter will result in a &#x60;403 Forbidden&#x60;. | [optional] 
**peopleValue** | **[String]** | *Conditional*. Only relevant for custom fields of type &#x60;people&#x60;. This array of user GIDs reflects the users to be written to a &#x60;people&#x60; custom field. Note that *write* operations will replace existing users (if any) in the custom field with the users specified in this array. | [optional] 


