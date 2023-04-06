# AsanaPreview.CustomFieldResponseAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdBy** | [**UserCompact**](UserCompact.md) |  | [optional] [readonly] 
**peopleValue** | [**[UserCompact]**](UserCompact.md) | *Conditional*. Only relevant for custom fields of type &#x60;people&#x60;. This array of [compact user](/reference/users) objects reflects the values of a &#x60;people&#x60; custom field. | [optional] [readonly] 
**isGlobalToWorkspace** | **Boolean** | This flag describes whether this custom field is available to every container in the workspace. Before project-specific custom fields, this field was always true. | [optional] [readonly] 
**asanaCreatedField** | **String** | *Conditional*. A unique identifier to associate this field with the template source of truth. | [optional] [readonly] 



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




