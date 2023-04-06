# AsanaPreview.CustomFieldResponse

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
**createdBy** | [**UserCompact**](UserCompact.md) |  | [optional] [readonly] 
**peopleValue** | [**[UserCompact]**](UserCompact.md) | *Conditional*. Only relevant for custom fields of type &#x60;people&#x60;. This array of [compact user](/reference/users) objects reflects the values of a &#x60;people&#x60; custom field. | [optional] [readonly] 
**isGlobalToWorkspace** | **Boolean** | This flag describes whether this custom field is available to every container in the workspace. Before project-specific custom fields, this field was always true. | [optional] [readonly] 
**asanaCreatedField** | **String** | *Conditional*. A unique identifier to associate this field with the template source of truth. | [optional] [readonly] 



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





## Enum: AsanaCreatedFieldEnum


* `a_v_requirements` (value: `"a_v_requirements"`)

* `account_name` (value: `"account_name"`)

* `actionable` (value: `"actionable"`)

* `align_shipping_link` (value: `"align_shipping_link"`)

* `align_status` (value: `"align_status"`)

* `allotted_time` (value: `"allotted_time"`)

* `appointment` (value: `"appointment"`)

* `approval_stage` (value: `"approval_stage"`)

* `approved` (value: `"approved"`)

* `article_series` (value: `"article_series"`)

* `board_committee` (value: `"board_committee"`)

* `browser` (value: `"browser"`)

* `campaign_audience` (value: `"campaign_audience"`)

* `campaign_project_status` (value: `"campaign_project_status"`)

* `campaign_regions` (value: `"campaign_regions"`)

* `channel_primary` (value: `"channel_primary"`)

* `client_topic_type` (value: `"client_topic_type"`)

* `complete_by` (value: `"complete_by"`)

* `contact` (value: `"contact"`)

* `contact_email_address` (value: `"contact_email_address"`)

* `content_channels` (value: `"content_channels"`)

* `content_channels_needed` (value: `"content_channels_needed"`)

* `content_stage` (value: `"content_stage"`)

* `content_type` (value: `"content_type"`)

* `contract` (value: `"contract"`)

* `contract_status` (value: `"contract_status"`)

* `cost` (value: `"cost"`)

* `creation_stage` (value: `"creation_stage"`)

* `creative_channel` (value: `"creative_channel"`)

* `creative_needed` (value: `"creative_needed"`)

* `creative_needs` (value: `"creative_needs"`)

* `data_sensitivity` (value: `"data_sensitivity"`)

* `deal_size` (value: `"deal_size"`)

* `delivery_appt` (value: `"delivery_appt"`)

* `delivery_appt_date` (value: `"delivery_appt_date"`)

* `department` (value: `"department"`)

* `department_responsible` (value: `"department_responsible"`)

* `design_request_needed` (value: `"design_request_needed"`)

* `design_request_type` (value: `"design_request_type"`)

* `discussion_category` (value: `"discussion_category"`)

* `do_this_task` (value: `"do_this_task"`)

* `editorial_content_status` (value: `"editorial_content_status"`)

* `editorial_content_tag` (value: `"editorial_content_tag"`)

* `editorial_content_type` (value: `"editorial_content_type"`)

* `effort` (value: `"effort"`)

* `effort_level` (value: `"effort_level"`)

* `est_completion_date` (value: `"est_completion_date"`)

* `estimated_time` (value: `"estimated_time"`)

* `estimated_value` (value: `"estimated_value"`)

* `expected_cost` (value: `"expected_cost"`)

* `external_steps_needed` (value: `"external_steps_needed"`)

* `favorite_idea` (value: `"favorite_idea"`)

* `feedback_type` (value: `"feedback_type"`)

* `financial` (value: `"financial"`)

* `funding_amount` (value: `"funding_amount"`)

* `grant_application_process` (value: `"grant_application_process"`)

* `hiring_candidate_status` (value: `"hiring_candidate_status"`)

* `idea_status` (value: `"idea_status"`)

* `ids_link` (value: `"ids_link"`)

* `ids_patient_link` (value: `"ids_patient_link"`)

* `implementation_stage` (value: `"implementation_stage"`)

* `insurance` (value: `"insurance"`)

* `interview_area` (value: `"interview_area"`)

* `interview_question_score` (value: `"interview_question_score"`)

* `itero_scan_link` (value: `"itero_scan_link"`)

* `job_s_applied_to` (value: `"job_s_applied_to"`)

* `lab` (value: `"lab"`)

* `launch_status` (value: `"launch_status"`)

* `lead_status` (value: `"lead_status"`)

* `localization_language` (value: `"localization_language"`)

* `localization_market_team` (value: `"localization_market_team"`)

* `localization_status` (value: `"localization_status"`)

* `meeting_minutes` (value: `"meeting_minutes"`)

* `meeting_needed` (value: `"meeting_needed"`)

* `minutes` (value: `"minutes"`)

* `mrr` (value: `"mrr"`)

* `must_localize` (value: `"must_localize"`)

* `name_of_foundation` (value: `"name_of_foundation"`)

* `need_to_follow_up` (value: `"need_to_follow_up"`)

* `next_appointment` (value: `"next_appointment"`)

* `next_steps_sales` (value: `"next_steps_sales"`)

* `num_people` (value: `"num_people"`)

* `number_of_user_reports` (value: `"number_of_user_reports"`)

* `office_location` (value: `"office_location"`)

* `onboarding_activity` (value: `"onboarding_activity"`)

* `owner` (value: `"owner"`)

* `participants_needed` (value: `"participants_needed"`)

* `patient_date_of_birth` (value: `"patient_date_of_birth"`)

* `patient_email` (value: `"patient_email"`)

* `patient_phone` (value: `"patient_phone"`)

* `patient_status` (value: `"patient_status"`)

* `phone_number` (value: `"phone_number"`)

* `planning_category` (value: `"planning_category"`)

* `point_of_contact` (value: `"point_of_contact"`)

* `position` (value: `"position"`)

* `post_format` (value: `"post_format"`)

* `prescription` (value: `"prescription"`)

* `priority` (value: `"priority"`)

* `priority_level` (value: `"priority_level"`)

* `product` (value: `"product"`)

* `product_stage` (value: `"product_stage"`)

* `progress` (value: `"progress"`)

* `project_size` (value: `"project_size"`)

* `project_status` (value: `"project_status"`)

* `proposed_budget` (value: `"proposed_budget"`)

* `publish_status` (value: `"publish_status"`)

* `reason_for_scan` (value: `"reason_for_scan"`)

* `referral` (value: `"referral"`)

* `request_type` (value: `"request_type"`)

* `research_status` (value: `"research_status"`)

* `responsible_department` (value: `"responsible_department"`)

* `responsible_team` (value: `"responsible_team"`)

* `risk_assessment_status` (value: `"risk_assessment_status"`)

* `room_name` (value: `"room_name"`)

* `sales_counterpart` (value: `"sales_counterpart"`)

* `sentiment` (value: `"sentiment"`)

* `shipping_link` (value: `"shipping_link"`)

* `social_channels` (value: `"social_channels"`)

* `stage` (value: `"stage"`)

* `status` (value: `"status"`)

* `status_design` (value: `"status_design"`)

* `status_of_initiative` (value: `"status_of_initiative"`)

* `system_setup` (value: `"system_setup"`)

* `task_progress` (value: `"task_progress"`)

* `team` (value: `"team"`)

* `team_marketing` (value: `"team_marketing"`)

* `team_responsible` (value: `"team_responsible"`)

* `time_it_takes_to_complete_tasks` (value: `"time_it_takes_to_complete_tasks"`)

* `timeframe` (value: `"timeframe"`)

* `treatment_type` (value: `"treatment_type"`)

* `type_work_requests_it` (value: `"type_work_requests_it"`)

* `use_agency` (value: `"use_agency"`)

* `user_name` (value: `"user_name"`)

* `vendor_category` (value: `"vendor_category"`)

* `vendor_type` (value: `"vendor_type"`)

* `word_count` (value: `"word_count"`)




