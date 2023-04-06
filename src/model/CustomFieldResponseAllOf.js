/**
 * Asana
 * This is the interface for interacting with the Asana platform
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import UserCompact from './UserCompact';

/**
 * The CustomFieldResponseAllOf model module.
 * @module model/CustomFieldResponseAllOf
 * @version 1.0.0
 */
class CustomFieldResponseAllOf {
    /**
     * Constructs a new <code>CustomFieldResponseAllOf</code>.
     * @alias module:model/CustomFieldResponseAllOf
     */
    constructor() { 
        
        CustomFieldResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomFieldResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomFieldResponseAllOf} obj Optional instance to populate.
     * @return {module:model/CustomFieldResponseAllOf} The populated <code>CustomFieldResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomFieldResponseAllOf();

            if (data.hasOwnProperty('created_by')) {
                obj['created_by'] = ApiClient.convertToType(data['created_by'], UserCompact);
            }
            if (data.hasOwnProperty('people_value')) {
                obj['people_value'] = ApiClient.convertToType(data['people_value'], [UserCompact]);
            }
            if (data.hasOwnProperty('is_global_to_workspace')) {
                obj['is_global_to_workspace'] = ApiClient.convertToType(data['is_global_to_workspace'], 'Boolean');
            }
            if (data.hasOwnProperty('asana_created_field')) {
                obj['asana_created_field'] = ApiClient.convertToType(data['asana_created_field'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/UserCompact} created_by
 */
CustomFieldResponseAllOf.prototype['created_by'] = undefined;

/**
 * *Conditional*. Only relevant for custom fields of type `people`. This array of [compact user](/reference/users) objects reflects the values of a `people` custom field.
 * @member {Array.<module:model/UserCompact>} people_value
 */
CustomFieldResponseAllOf.prototype['people_value'] = undefined;

/**
 * This flag describes whether this custom field is available to every container in the workspace. Before project-specific custom fields, this field was always true.
 * @member {Boolean} is_global_to_workspace
 */
CustomFieldResponseAllOf.prototype['is_global_to_workspace'] = undefined;

/**
 * *Conditional*. A unique identifier to associate this field with the template source of truth.
 * @member {module:model/CustomFieldResponseAllOf.AsanaCreatedFieldEnum} asana_created_field
 */
CustomFieldResponseAllOf.prototype['asana_created_field'] = undefined;





/**
 * Allowed values for the <code>asana_created_field</code> property.
 * @enum {String}
 * @readonly
 */
CustomFieldResponseAllOf['AsanaCreatedFieldEnum'] = {

    /**
     * value: "a_v_requirements"
     * @const
     */
    "a_v_requirements": "a_v_requirements",

    /**
     * value: "account_name"
     * @const
     */
    "account_name": "account_name",

    /**
     * value: "actionable"
     * @const
     */
    "actionable": "actionable",

    /**
     * value: "align_shipping_link"
     * @const
     */
    "align_shipping_link": "align_shipping_link",

    /**
     * value: "align_status"
     * @const
     */
    "align_status": "align_status",

    /**
     * value: "allotted_time"
     * @const
     */
    "allotted_time": "allotted_time",

    /**
     * value: "appointment"
     * @const
     */
    "appointment": "appointment",

    /**
     * value: "approval_stage"
     * @const
     */
    "approval_stage": "approval_stage",

    /**
     * value: "approved"
     * @const
     */
    "approved": "approved",

    /**
     * value: "article_series"
     * @const
     */
    "article_series": "article_series",

    /**
     * value: "board_committee"
     * @const
     */
    "board_committee": "board_committee",

    /**
     * value: "browser"
     * @const
     */
    "browser": "browser",

    /**
     * value: "campaign_audience"
     * @const
     */
    "campaign_audience": "campaign_audience",

    /**
     * value: "campaign_project_status"
     * @const
     */
    "campaign_project_status": "campaign_project_status",

    /**
     * value: "campaign_regions"
     * @const
     */
    "campaign_regions": "campaign_regions",

    /**
     * value: "channel_primary"
     * @const
     */
    "channel_primary": "channel_primary",

    /**
     * value: "client_topic_type"
     * @const
     */
    "client_topic_type": "client_topic_type",

    /**
     * value: "complete_by"
     * @const
     */
    "complete_by": "complete_by",

    /**
     * value: "contact"
     * @const
     */
    "contact": "contact",

    /**
     * value: "contact_email_address"
     * @const
     */
    "contact_email_address": "contact_email_address",

    /**
     * value: "content_channels"
     * @const
     */
    "content_channels": "content_channels",

    /**
     * value: "content_channels_needed"
     * @const
     */
    "content_channels_needed": "content_channels_needed",

    /**
     * value: "content_stage"
     * @const
     */
    "content_stage": "content_stage",

    /**
     * value: "content_type"
     * @const
     */
    "content_type": "content_type",

    /**
     * value: "contract"
     * @const
     */
    "contract": "contract",

    /**
     * value: "contract_status"
     * @const
     */
    "contract_status": "contract_status",

    /**
     * value: "cost"
     * @const
     */
    "cost": "cost",

    /**
     * value: "creation_stage"
     * @const
     */
    "creation_stage": "creation_stage",

    /**
     * value: "creative_channel"
     * @const
     */
    "creative_channel": "creative_channel",

    /**
     * value: "creative_needed"
     * @const
     */
    "creative_needed": "creative_needed",

    /**
     * value: "creative_needs"
     * @const
     */
    "creative_needs": "creative_needs",

    /**
     * value: "data_sensitivity"
     * @const
     */
    "data_sensitivity": "data_sensitivity",

    /**
     * value: "deal_size"
     * @const
     */
    "deal_size": "deal_size",

    /**
     * value: "delivery_appt"
     * @const
     */
    "delivery_appt": "delivery_appt",

    /**
     * value: "delivery_appt_date"
     * @const
     */
    "delivery_appt_date": "delivery_appt_date",

    /**
     * value: "department"
     * @const
     */
    "department": "department",

    /**
     * value: "department_responsible"
     * @const
     */
    "department_responsible": "department_responsible",

    /**
     * value: "design_request_needed"
     * @const
     */
    "design_request_needed": "design_request_needed",

    /**
     * value: "design_request_type"
     * @const
     */
    "design_request_type": "design_request_type",

    /**
     * value: "discussion_category"
     * @const
     */
    "discussion_category": "discussion_category",

    /**
     * value: "do_this_task"
     * @const
     */
    "do_this_task": "do_this_task",

    /**
     * value: "editorial_content_status"
     * @const
     */
    "editorial_content_status": "editorial_content_status",

    /**
     * value: "editorial_content_tag"
     * @const
     */
    "editorial_content_tag": "editorial_content_tag",

    /**
     * value: "editorial_content_type"
     * @const
     */
    "editorial_content_type": "editorial_content_type",

    /**
     * value: "effort"
     * @const
     */
    "effort": "effort",

    /**
     * value: "effort_level"
     * @const
     */
    "effort_level": "effort_level",

    /**
     * value: "est_completion_date"
     * @const
     */
    "est_completion_date": "est_completion_date",

    /**
     * value: "estimated_time"
     * @const
     */
    "estimated_time": "estimated_time",

    /**
     * value: "estimated_value"
     * @const
     */
    "estimated_value": "estimated_value",

    /**
     * value: "expected_cost"
     * @const
     */
    "expected_cost": "expected_cost",

    /**
     * value: "external_steps_needed"
     * @const
     */
    "external_steps_needed": "external_steps_needed",

    /**
     * value: "favorite_idea"
     * @const
     */
    "favorite_idea": "favorite_idea",

    /**
     * value: "feedback_type"
     * @const
     */
    "feedback_type": "feedback_type",

    /**
     * value: "financial"
     * @const
     */
    "financial": "financial",

    /**
     * value: "funding_amount"
     * @const
     */
    "funding_amount": "funding_amount",

    /**
     * value: "grant_application_process"
     * @const
     */
    "grant_application_process": "grant_application_process",

    /**
     * value: "hiring_candidate_status"
     * @const
     */
    "hiring_candidate_status": "hiring_candidate_status",

    /**
     * value: "idea_status"
     * @const
     */
    "idea_status": "idea_status",

    /**
     * value: "ids_link"
     * @const
     */
    "ids_link": "ids_link",

    /**
     * value: "ids_patient_link"
     * @const
     */
    "ids_patient_link": "ids_patient_link",

    /**
     * value: "implementation_stage"
     * @const
     */
    "implementation_stage": "implementation_stage",

    /**
     * value: "insurance"
     * @const
     */
    "insurance": "insurance",

    /**
     * value: "interview_area"
     * @const
     */
    "interview_area": "interview_area",

    /**
     * value: "interview_question_score"
     * @const
     */
    "interview_question_score": "interview_question_score",

    /**
     * value: "itero_scan_link"
     * @const
     */
    "itero_scan_link": "itero_scan_link",

    /**
     * value: "job_s_applied_to"
     * @const
     */
    "job_s_applied_to": "job_s_applied_to",

    /**
     * value: "lab"
     * @const
     */
    "lab": "lab",

    /**
     * value: "launch_status"
     * @const
     */
    "launch_status": "launch_status",

    /**
     * value: "lead_status"
     * @const
     */
    "lead_status": "lead_status",

    /**
     * value: "localization_language"
     * @const
     */
    "localization_language": "localization_language",

    /**
     * value: "localization_market_team"
     * @const
     */
    "localization_market_team": "localization_market_team",

    /**
     * value: "localization_status"
     * @const
     */
    "localization_status": "localization_status",

    /**
     * value: "meeting_minutes"
     * @const
     */
    "meeting_minutes": "meeting_minutes",

    /**
     * value: "meeting_needed"
     * @const
     */
    "meeting_needed": "meeting_needed",

    /**
     * value: "minutes"
     * @const
     */
    "minutes": "minutes",

    /**
     * value: "mrr"
     * @const
     */
    "mrr": "mrr",

    /**
     * value: "must_localize"
     * @const
     */
    "must_localize": "must_localize",

    /**
     * value: "name_of_foundation"
     * @const
     */
    "name_of_foundation": "name_of_foundation",

    /**
     * value: "need_to_follow_up"
     * @const
     */
    "need_to_follow_up": "need_to_follow_up",

    /**
     * value: "next_appointment"
     * @const
     */
    "next_appointment": "next_appointment",

    /**
     * value: "next_steps_sales"
     * @const
     */
    "next_steps_sales": "next_steps_sales",

    /**
     * value: "num_people"
     * @const
     */
    "num_people": "num_people",

    /**
     * value: "number_of_user_reports"
     * @const
     */
    "number_of_user_reports": "number_of_user_reports",

    /**
     * value: "office_location"
     * @const
     */
    "office_location": "office_location",

    /**
     * value: "onboarding_activity"
     * @const
     */
    "onboarding_activity": "onboarding_activity",

    /**
     * value: "owner"
     * @const
     */
    "owner": "owner",

    /**
     * value: "participants_needed"
     * @const
     */
    "participants_needed": "participants_needed",

    /**
     * value: "patient_date_of_birth"
     * @const
     */
    "patient_date_of_birth": "patient_date_of_birth",

    /**
     * value: "patient_email"
     * @const
     */
    "patient_email": "patient_email",

    /**
     * value: "patient_phone"
     * @const
     */
    "patient_phone": "patient_phone",

    /**
     * value: "patient_status"
     * @const
     */
    "patient_status": "patient_status",

    /**
     * value: "phone_number"
     * @const
     */
    "phone_number": "phone_number",

    /**
     * value: "planning_category"
     * @const
     */
    "planning_category": "planning_category",

    /**
     * value: "point_of_contact"
     * @const
     */
    "point_of_contact": "point_of_contact",

    /**
     * value: "position"
     * @const
     */
    "position": "position",

    /**
     * value: "post_format"
     * @const
     */
    "post_format": "post_format",

    /**
     * value: "prescription"
     * @const
     */
    "prescription": "prescription",

    /**
     * value: "priority"
     * @const
     */
    "priority": "priority",

    /**
     * value: "priority_level"
     * @const
     */
    "priority_level": "priority_level",

    /**
     * value: "product"
     * @const
     */
    "product": "product",

    /**
     * value: "product_stage"
     * @const
     */
    "product_stage": "product_stage",

    /**
     * value: "progress"
     * @const
     */
    "progress": "progress",

    /**
     * value: "project_size"
     * @const
     */
    "project_size": "project_size",

    /**
     * value: "project_status"
     * @const
     */
    "project_status": "project_status",

    /**
     * value: "proposed_budget"
     * @const
     */
    "proposed_budget": "proposed_budget",

    /**
     * value: "publish_status"
     * @const
     */
    "publish_status": "publish_status",

    /**
     * value: "reason_for_scan"
     * @const
     */
    "reason_for_scan": "reason_for_scan",

    /**
     * value: "referral"
     * @const
     */
    "referral": "referral",

    /**
     * value: "request_type"
     * @const
     */
    "request_type": "request_type",

    /**
     * value: "research_status"
     * @const
     */
    "research_status": "research_status",

    /**
     * value: "responsible_department"
     * @const
     */
    "responsible_department": "responsible_department",

    /**
     * value: "responsible_team"
     * @const
     */
    "responsible_team": "responsible_team",

    /**
     * value: "risk_assessment_status"
     * @const
     */
    "risk_assessment_status": "risk_assessment_status",

    /**
     * value: "room_name"
     * @const
     */
    "room_name": "room_name",

    /**
     * value: "sales_counterpart"
     * @const
     */
    "sales_counterpart": "sales_counterpart",

    /**
     * value: "sentiment"
     * @const
     */
    "sentiment": "sentiment",

    /**
     * value: "shipping_link"
     * @const
     */
    "shipping_link": "shipping_link",

    /**
     * value: "social_channels"
     * @const
     */
    "social_channels": "social_channels",

    /**
     * value: "stage"
     * @const
     */
    "stage": "stage",

    /**
     * value: "status"
     * @const
     */
    "status": "status",

    /**
     * value: "status_design"
     * @const
     */
    "status_design": "status_design",

    /**
     * value: "status_of_initiative"
     * @const
     */
    "status_of_initiative": "status_of_initiative",

    /**
     * value: "system_setup"
     * @const
     */
    "system_setup": "system_setup",

    /**
     * value: "task_progress"
     * @const
     */
    "task_progress": "task_progress",

    /**
     * value: "team"
     * @const
     */
    "team": "team",

    /**
     * value: "team_marketing"
     * @const
     */
    "team_marketing": "team_marketing",

    /**
     * value: "team_responsible"
     * @const
     */
    "team_responsible": "team_responsible",

    /**
     * value: "time_it_takes_to_complete_tasks"
     * @const
     */
    "time_it_takes_to_complete_tasks": "time_it_takes_to_complete_tasks",

    /**
     * value: "timeframe"
     * @const
     */
    "timeframe": "timeframe",

    /**
     * value: "treatment_type"
     * @const
     */
    "treatment_type": "treatment_type",

    /**
     * value: "type_work_requests_it"
     * @const
     */
    "type_work_requests_it": "type_work_requests_it",

    /**
     * value: "use_agency"
     * @const
     */
    "use_agency": "use_agency",

    /**
     * value: "user_name"
     * @const
     */
    "user_name": "user_name",

    /**
     * value: "vendor_category"
     * @const
     */
    "vendor_category": "vendor_category",

    /**
     * value: "vendor_type"
     * @const
     */
    "vendor_type": "vendor_type",

    /**
     * value: "word_count"
     * @const
     */
    "word_count": "word_count"
};



export default CustomFieldResponseAllOf;

