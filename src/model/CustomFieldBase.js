/*
 * Asana
 * This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.46
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {CustomFieldBaseDateValue} from './CustomFieldBaseDateValue';
import {CustomFieldBaseEnumOptions} from './CustomFieldBaseEnumOptions';
import {CustomFieldBaseEnumValue} from './CustomFieldBaseEnumValue';

/**
 * The CustomFieldBase model module.
 * @module model/CustomFieldBase
 * @version 1.0.5
 */
export class CustomFieldBase {
  /**
   * Constructs a new <code>CustomFieldBase</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. Custom Fields store the metadata that is used in order to add user-specified information to tasks in Asana. Be sure to reference the [custom fields](/reference/custom-fields) developer documentation for more information about how custom fields relate to various resources in Asana.  Users in Asana can [lock custom fields](https://asana.com/guide/help/premium/custom-fields#gl-lock-fields), which will make them read-only when accessed by other users. Attempting to edit a locked custom field will return HTTP error code &#x60;403 Forbidden&#x60;.
   * @alias module:model/CustomFieldBase
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CustomFieldBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomFieldBase} obj Optional instance to populate.
   * @return {module:model/CustomFieldBase} The populated <code>CustomFieldBase</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CustomFieldBase();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('resource_subtype'))
        obj.resource_subtype = ApiClient.convertToType(data['resource_subtype'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('enum_options'))
        obj.enum_options = ApiClient.convertToType(data['enum_options'], [CustomFieldBaseEnumOptions]);
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('is_formula_field'))
        obj.is_formula_field = ApiClient.convertToType(data['is_formula_field'], 'Boolean');
      if (data.hasOwnProperty('date_value'))
        obj.date_value = CustomFieldBaseDateValue.constructFromObject(data['date_value']);
      if (data.hasOwnProperty('enum_value'))
        obj.enum_value = CustomFieldBaseEnumValue.constructFromObject(data['enum_value']);
      if (data.hasOwnProperty('multi_enum_values'))
        obj.multi_enum_values = ApiClient.convertToType(data['multi_enum_values'], [CustomFieldBaseEnumOptions]);
      if (data.hasOwnProperty('number_value'))
        obj.number_value = ApiClient.convertToType(data['number_value'], 'Number');
      if (data.hasOwnProperty('text_value'))
        obj.text_value = ApiClient.convertToType(data['text_value'], 'String');
      if (data.hasOwnProperty('display_value'))
        obj.display_value = ApiClient.convertToType(data['display_value'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('precision'))
        obj.precision = ApiClient.convertToType(data['precision'], 'Number');
      if (data.hasOwnProperty('format'))
        obj.format = ApiClient.convertToType(data['format'], 'String');
      if (data.hasOwnProperty('currency_code'))
        obj.currency_code = ApiClient.convertToType(data['currency_code'], 'String');
      if (data.hasOwnProperty('custom_label'))
        obj.custom_label = ApiClient.convertToType(data['custom_label'], 'String');
      if (data.hasOwnProperty('custom_label_position'))
        obj.custom_label_position = ApiClient.convertToType(data['custom_label_position'], 'String');
      if (data.hasOwnProperty('is_global_to_workspace'))
        obj.is_global_to_workspace = ApiClient.convertToType(data['is_global_to_workspace'], 'Boolean');
      if (data.hasOwnProperty('has_notifications_enabled'))
        obj.has_notifications_enabled = ApiClient.convertToType(data['has_notifications_enabled'], 'Boolean');
      if (data.hasOwnProperty('asana_created_field'))
        obj.asana_created_field = ApiClient.convertToType(data['asana_created_field'], 'String');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
CustomFieldBase.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
CustomFieldBase.prototype.resource_type = undefined;

/**
 * The name of the custom field.
 * @member {String} name
 */
CustomFieldBase.prototype.name = undefined;

/**
 * Allowed values for the <code>resource_subtype</code> property.
 * @enum {String}
 * @readonly
 */
CustomFieldBase.ResourceSubtypeEnum = {
  /**
   * value: "text"
   * @const
   */
  text: "text",

  /**
   * value: "enum"
   * @const
   */
  _enum: "enum",

  /**
   * value: "multi_enum"
   * @const
   */
  multi_enum: "multi_enum",

  /**
   * value: "number"
   * @const
   */
  _number: "number",

  /**
   * value: "date"
   * @const
   */
  _date: "date",

  /**
   * value: "people"
   * @const
   */
  people: "people"
};
/**
 * The type of the custom field. Must be one of the given values. 
 * @member {module:model/CustomFieldBase.ResourceSubtypeEnum} resource_subtype
 */
CustomFieldBase.prototype.resource_subtype = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CustomFieldBase.TypeEnum = {
  /**
   * value: "text"
   * @const
   */
  text: "text",

  /**
   * value: "enum"
   * @const
   */
  _enum: "enum",

  /**
   * value: "multi_enum"
   * @const
   */
  multi_enum: "multi_enum",

  /**
   * value: "number"
   * @const
   */
  _number: "number",

  /**
   * value: "date"
   * @const
   */
  _date: "date",

  /**
   * value: "people"
   * @const
   */
  people: "people"
};
/**
 * *Deprecated: new integrations should prefer the resource_subtype field.* The type of the custom field. Must be one of the given values. 
 * @member {module:model/CustomFieldBase.TypeEnum} type
 */
CustomFieldBase.prototype.type = undefined;

/**
 * *Conditional*. Only relevant for custom fields of type `enum`. This array specifies the possible values which an `enum` custom field can adopt. To modify the enum options, refer to [working with enum options](/reference/createenumoptionforcustomfield).
 * @member {Array.<module:model/CustomFieldBaseEnumOptions>} enum_options
 */
CustomFieldBase.prototype.enum_options = undefined;

/**
 * *Conditional*. Determines if the custom field is enabled or not.
 * @member {Boolean} enabled
 */
CustomFieldBase.prototype.enabled = undefined;

/**
 * *Conditional*. This flag describes whether a custom field is a formula custom field.
 * @member {Boolean} is_formula_field
 */
CustomFieldBase.prototype.is_formula_field = undefined;

/**
 * @member {module:model/CustomFieldBaseDateValue} date_value
 */
CustomFieldBase.prototype.date_value = undefined;

/**
 * @member {module:model/CustomFieldBaseEnumValue} enum_value
 */
CustomFieldBase.prototype.enum_value = undefined;

/**
 * *Conditional*. Only relevant for custom fields of type `multi_enum`. This object is the chosen values of a `multi_enum` custom field.
 * @member {Array.<module:model/CustomFieldBaseEnumOptions>} multi_enum_values
 */
CustomFieldBase.prototype.multi_enum_values = undefined;

/**
 * *Conditional*. This number is the value of a `number` custom field.
 * @member {Number} number_value
 */
CustomFieldBase.prototype.number_value = undefined;

/**
 * *Conditional*. This string is the value of a `text` custom field.
 * @member {String} text_value
 */
CustomFieldBase.prototype.text_value = undefined;

/**
 * A string representation for the value of the custom field. Integrations that don't require the underlying type should use this field to read values. Using this field will future-proof an app against new custom field types.
 * @member {String} display_value
 */
CustomFieldBase.prototype.display_value = undefined;

/**
 * [Opt In](/docs/inputoutput-options). The description of the custom field.
 * @member {String} description
 */
CustomFieldBase.prototype.description = undefined;

/**
 * Only relevant for custom fields of type ‘Number’. This field dictates the number of places after the decimal to round to, i.e. 0 is integer values, 1 rounds to the nearest tenth, and so on. Must be between 0 and 6, inclusive. For percentage format, this may be unintuitive, as a value of 0.25 has a precision of 0, while a value of 0.251 has a precision of 1. This is due to 0.25 being displayed as 25%. The identifier format will always have a precision of 0.
 * @member {Number} precision
 */
CustomFieldBase.prototype.precision = undefined;

/**
 * Allowed values for the <code>format</code> property.
 * @enum {String}
 * @readonly
 */
CustomFieldBase.FormatEnum = {
  /**
   * value: "currency"
   * @const
   */
  currency: "currency",

  /**
   * value: "identifier"
   * @const
   */
  identifier: "identifier",

  /**
   * value: "percentage"
   * @const
   */
  percentage: "percentage",

  /**
   * value: "custom"
   * @const
   */
  custom: "custom",

  /**
   * value: "duration"
   * @const
   */
  duration: "duration",

  /**
   * value: "none"
   * @const
   */
  none: "none"
};
/**
 * The format of this custom field.
 * @member {module:model/CustomFieldBase.FormatEnum} format
 */
CustomFieldBase.prototype.format = undefined;

/**
 * ISO 4217 currency code to format this custom field. This will be null if the `format` is not `currency`.
 * @member {String} currency_code
 */
CustomFieldBase.prototype.currency_code = undefined;

/**
 * This is the string that appears next to the custom field value. This will be null if the `format` is not `custom`.
 * @member {String} custom_label
 */
CustomFieldBase.prototype.custom_label = undefined;

/**
 * Allowed values for the <code>custom_label_position</code> property.
 * @enum {String}
 * @readonly
 */
CustomFieldBase.CustomLabelPositionEnum = {
  /**
   * value: "prefix"
   * @const
   */
  prefix: "prefix",

  /**
   * value: "suffix"
   * @const
   */
  suffix: "suffix",

  /**
   * value: "null"
   * @const
   */
  _null: "null"
};
/**
 * Only relevant for custom fields with `custom` format. This depicts where to place the custom label. This will be null if the `format` is not `custom`.
 * @member {module:model/CustomFieldBase.CustomLabelPositionEnum} custom_label_position
 */
CustomFieldBase.prototype.custom_label_position = undefined;

/**
 * This flag describes whether this custom field is available to every container in the workspace. Before project-specific custom fields, this field was always true.
 * @member {Boolean} is_global_to_workspace
 */
CustomFieldBase.prototype.is_global_to_workspace = undefined;

/**
 * *Conditional*. This flag describes whether a follower of a task with this field should receive inbox notifications from changes to this field.
 * @member {Boolean} has_notifications_enabled
 */
CustomFieldBase.prototype.has_notifications_enabled = undefined;

/**
 * Allowed values for the <code>asana_created_field</code> property.
 * @enum {String}
 * @readonly
 */
CustomFieldBase.AsanaCreatedFieldEnum = {
  /**
   * value: "a_v_requirements"
   * @const
   */
  a_v_requirements: "a_v_requirements",

  /**
   * value: "account_name"
   * @const
   */
  account_name: "account_name",

  /**
   * value: "actionable"
   * @const
   */
  actionable: "actionable",

  /**
   * value: "align_shipping_link"
   * @const
   */
  align_shipping_link: "align_shipping_link",

  /**
   * value: "align_status"
   * @const
   */
  align_status: "align_status",

  /**
   * value: "allotted_time"
   * @const
   */
  allotted_time: "allotted_time",

  /**
   * value: "appointment"
   * @const
   */
  appointment: "appointment",

  /**
   * value: "approval_stage"
   * @const
   */
  approval_stage: "approval_stage",

  /**
   * value: "approved"
   * @const
   */
  approved: "approved",

  /**
   * value: "article_series"
   * @const
   */
  article_series: "article_series",

  /**
   * value: "board_committee"
   * @const
   */
  board_committee: "board_committee",

  /**
   * value: "browser"
   * @const
   */
  browser: "browser",

  /**
   * value: "campaign_audience"
   * @const
   */
  campaign_audience: "campaign_audience",

  /**
   * value: "campaign_project_status"
   * @const
   */
  campaign_project_status: "campaign_project_status",

  /**
   * value: "campaign_regions"
   * @const
   */
  campaign_regions: "campaign_regions",

  /**
   * value: "channel_primary"
   * @const
   */
  channel_primary: "channel_primary",

  /**
   * value: "client_topic_type"
   * @const
   */
  client_topic_type: "client_topic_type",

  /**
   * value: "complete_by"
   * @const
   */
  complete_by: "complete_by",

  /**
   * value: "contact"
   * @const
   */
  contact: "contact",

  /**
   * value: "contact_email_address"
   * @const
   */
  contact_email_address: "contact_email_address",

  /**
   * value: "content_channels"
   * @const
   */
  content_channels: "content_channels",

  /**
   * value: "content_channels_needed"
   * @const
   */
  content_channels_needed: "content_channels_needed",

  /**
   * value: "content_stage"
   * @const
   */
  content_stage: "content_stage",

  /**
   * value: "content_type"
   * @const
   */
  content_type: "content_type",

  /**
   * value: "contract"
   * @const
   */
  contract: "contract",

  /**
   * value: "contract_status"
   * @const
   */
  contract_status: "contract_status",

  /**
   * value: "cost"
   * @const
   */
  cost: "cost",

  /**
   * value: "creation_stage"
   * @const
   */
  creation_stage: "creation_stage",

  /**
   * value: "creative_channel"
   * @const
   */
  creative_channel: "creative_channel",

  /**
   * value: "creative_needed"
   * @const
   */
  creative_needed: "creative_needed",

  /**
   * value: "creative_needs"
   * @const
   */
  creative_needs: "creative_needs",

  /**
   * value: "data_sensitivity"
   * @const
   */
  data_sensitivity: "data_sensitivity",

  /**
   * value: "deal_size"
   * @const
   */
  deal_size: "deal_size",

  /**
   * value: "delivery_appt"
   * @const
   */
  delivery_appt: "delivery_appt",

  /**
   * value: "delivery_appt_date"
   * @const
   */
  delivery_appt_date: "delivery_appt_date",

  /**
   * value: "department"
   * @const
   */
  department: "department",

  /**
   * value: "department_responsible"
   * @const
   */
  department_responsible: "department_responsible",

  /**
   * value: "design_request_needed"
   * @const
   */
  design_request_needed: "design_request_needed",

  /**
   * value: "design_request_type"
   * @const
   */
  design_request_type: "design_request_type",

  /**
   * value: "discussion_category"
   * @const
   */
  discussion_category: "discussion_category",

  /**
   * value: "do_this_task"
   * @const
   */
  do_this_task: "do_this_task",

  /**
   * value: "editorial_content_status"
   * @const
   */
  editorial_content_status: "editorial_content_status",

  /**
   * value: "editorial_content_tag"
   * @const
   */
  editorial_content_tag: "editorial_content_tag",

  /**
   * value: "editorial_content_type"
   * @const
   */
  editorial_content_type: "editorial_content_type",

  /**
   * value: "effort"
   * @const
   */
  effort: "effort",

  /**
   * value: "effort_level"
   * @const
   */
  effort_level: "effort_level",

  /**
   * value: "est_completion_date"
   * @const
   */
  est_completion_date: "est_completion_date",

  /**
   * value: "estimated_time"
   * @const
   */
  estimated_time: "estimated_time",

  /**
   * value: "estimated_value"
   * @const
   */
  estimated_value: "estimated_value",

  /**
   * value: "expected_cost"
   * @const
   */
  expected_cost: "expected_cost",

  /**
   * value: "external_steps_needed"
   * @const
   */
  external_steps_needed: "external_steps_needed",

  /**
   * value: "favorite_idea"
   * @const
   */
  favorite_idea: "favorite_idea",

  /**
   * value: "feedback_type"
   * @const
   */
  feedback_type: "feedback_type",

  /**
   * value: "financial"
   * @const
   */
  financial: "financial",

  /**
   * value: "funding_amount"
   * @const
   */
  funding_amount: "funding_amount",

  /**
   * value: "grant_application_process"
   * @const
   */
  grant_application_process: "grant_application_process",

  /**
   * value: "hiring_candidate_status"
   * @const
   */
  hiring_candidate_status: "hiring_candidate_status",

  /**
   * value: "idea_status"
   * @const
   */
  idea_status: "idea_status",

  /**
   * value: "ids_link"
   * @const
   */
  ids_link: "ids_link",

  /**
   * value: "ids_patient_link"
   * @const
   */
  ids_patient_link: "ids_patient_link",

  /**
   * value: "implementation_stage"
   * @const
   */
  implementation_stage: "implementation_stage",

  /**
   * value: "insurance"
   * @const
   */
  insurance: "insurance",

  /**
   * value: "interview_area"
   * @const
   */
  interview_area: "interview_area",

  /**
   * value: "interview_question_score"
   * @const
   */
  interview_question_score: "interview_question_score",

  /**
   * value: "itero_scan_link"
   * @const
   */
  itero_scan_link: "itero_scan_link",

  /**
   * value: "job_s_applied_to"
   * @const
   */
  job_s_applied_to: "job_s_applied_to",

  /**
   * value: "lab"
   * @const
   */
  lab: "lab",

  /**
   * value: "launch_status"
   * @const
   */
  launch_status: "launch_status",

  /**
   * value: "lead_status"
   * @const
   */
  lead_status: "lead_status",

  /**
   * value: "localization_language"
   * @const
   */
  localization_language: "localization_language",

  /**
   * value: "localization_market_team"
   * @const
   */
  localization_market_team: "localization_market_team",

  /**
   * value: "localization_status"
   * @const
   */
  localization_status: "localization_status",

  /**
   * value: "meeting_minutes"
   * @const
   */
  meeting_minutes: "meeting_minutes",

  /**
   * value: "meeting_needed"
   * @const
   */
  meeting_needed: "meeting_needed",

  /**
   * value: "minutes"
   * @const
   */
  minutes: "minutes",

  /**
   * value: "mrr"
   * @const
   */
  mrr: "mrr",

  /**
   * value: "must_localize"
   * @const
   */
  must_localize: "must_localize",

  /**
   * value: "name_of_foundation"
   * @const
   */
  name_of_foundation: "name_of_foundation",

  /**
   * value: "need_to_follow_up"
   * @const
   */
  need_to_follow_up: "need_to_follow_up",

  /**
   * value: "next_appointment"
   * @const
   */
  next_appointment: "next_appointment",

  /**
   * value: "next_steps_sales"
   * @const
   */
  next_steps_sales: "next_steps_sales",

  /**
   * value: "num_people"
   * @const
   */
  num_people: "num_people",

  /**
   * value: "number_of_user_reports"
   * @const
   */
  number_of_user_reports: "number_of_user_reports",

  /**
   * value: "office_location"
   * @const
   */
  office_location: "office_location",

  /**
   * value: "onboarding_activity"
   * @const
   */
  onboarding_activity: "onboarding_activity",

  /**
   * value: "owner"
   * @const
   */
  owner: "owner",

  /**
   * value: "participants_needed"
   * @const
   */
  participants_needed: "participants_needed",

  /**
   * value: "patient_date_of_birth"
   * @const
   */
  patient_date_of_birth: "patient_date_of_birth",

  /**
   * value: "patient_email"
   * @const
   */
  patient_email: "patient_email",

  /**
   * value: "patient_phone"
   * @const
   */
  patient_phone: "patient_phone",

  /**
   * value: "patient_status"
   * @const
   */
  patient_status: "patient_status",

  /**
   * value: "phone_number"
   * @const
   */
  phone_number: "phone_number",

  /**
   * value: "planning_category"
   * @const
   */
  planning_category: "planning_category",

  /**
   * value: "point_of_contact"
   * @const
   */
  point_of_contact: "point_of_contact",

  /**
   * value: "position"
   * @const
   */
  position: "position",

  /**
   * value: "post_format"
   * @const
   */
  post_format: "post_format",

  /**
   * value: "prescription"
   * @const
   */
  prescription: "prescription",

  /**
   * value: "priority"
   * @const
   */
  priority: "priority",

  /**
   * value: "priority_level"
   * @const
   */
  priority_level: "priority_level",

  /**
   * value: "product"
   * @const
   */
  product: "product",

  /**
   * value: "product_stage"
   * @const
   */
  product_stage: "product_stage",

  /**
   * value: "progress"
   * @const
   */
  progress: "progress",

  /**
   * value: "project_size"
   * @const
   */
  project_size: "project_size",

  /**
   * value: "project_status"
   * @const
   */
  project_status: "project_status",

  /**
   * value: "proposed_budget"
   * @const
   */
  proposed_budget: "proposed_budget",

  /**
   * value: "publish_status"
   * @const
   */
  publish_status: "publish_status",

  /**
   * value: "reason_for_scan"
   * @const
   */
  reason_for_scan: "reason_for_scan",

  /**
   * value: "referral"
   * @const
   */
  referral: "referral",

  /**
   * value: "request_type"
   * @const
   */
  request_type: "request_type",

  /**
   * value: "research_status"
   * @const
   */
  research_status: "research_status",

  /**
   * value: "responsible_department"
   * @const
   */
  responsible_department: "responsible_department",

  /**
   * value: "responsible_team"
   * @const
   */
  responsible_team: "responsible_team",

  /**
   * value: "risk_assessment_status"
   * @const
   */
  risk_assessment_status: "risk_assessment_status",

  /**
   * value: "room_name"
   * @const
   */
  room_name: "room_name",

  /**
   * value: "sales_counterpart"
   * @const
   */
  sales_counterpart: "sales_counterpart",

  /**
   * value: "sentiment"
   * @const
   */
  sentiment: "sentiment",

  /**
   * value: "shipping_link"
   * @const
   */
  shipping_link: "shipping_link",

  /**
   * value: "social_channels"
   * @const
   */
  social_channels: "social_channels",

  /**
   * value: "stage"
   * @const
   */
  stage: "stage",

  /**
   * value: "status"
   * @const
   */
  status: "status",

  /**
   * value: "status_design"
   * @const
   */
  status_design: "status_design",

  /**
   * value: "status_of_initiative"
   * @const
   */
  status_of_initiative: "status_of_initiative",

  /**
   * value: "system_setup"
   * @const
   */
  system_setup: "system_setup",

  /**
   * value: "task_progress"
   * @const
   */
  task_progress: "task_progress",

  /**
   * value: "team"
   * @const
   */
  team: "team",

  /**
   * value: "team_marketing"
   * @const
   */
  team_marketing: "team_marketing",

  /**
   * value: "team_responsible"
   * @const
   */
  team_responsible: "team_responsible",

  /**
   * value: "time_it_takes_to_complete_tasks"
   * @const
   */
  time_it_takes_to_complete_tasks: "time_it_takes_to_complete_tasks",

  /**
   * value: "timeframe"
   * @const
   */
  timeframe: "timeframe",

  /**
   * value: "treatment_type"
   * @const
   */
  treatment_type: "treatment_type",

  /**
   * value: "type_work_requests_it"
   * @const
   */
  type_work_requests_it: "type_work_requests_it",

  /**
   * value: "use_agency"
   * @const
   */
  use_agency: "use_agency",

  /**
   * value: "user_name"
   * @const
   */
  user_name: "user_name",

  /**
   * value: "vendor_category"
   * @const
   */
  vendor_category: "vendor_category",

  /**
   * value: "vendor_type"
   * @const
   */
  vendor_type: "vendor_type",

  /**
   * value: "word_count"
   * @const
   */
  word_count: "word_count",

  /**
   * value: "null"
   * @const
   */
  _null: "null"
};
/**
 * *Conditional*. A unique identifier to associate this field with the template source of truth.
 * @member {module:model/CustomFieldBase.AsanaCreatedFieldEnum} asana_created_field
 */
CustomFieldBase.prototype.asana_created_field = undefined;

