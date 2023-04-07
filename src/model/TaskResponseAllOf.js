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
import AsanaResource from './AsanaResource';
import CustomFieldResponse from './CustomFieldResponse';
import Like from './Like';
import ProjectCompact from './ProjectCompact';
import SectionCompact from './SectionCompact';
import TagCompact from './TagCompact';
import TaskCompact from './TaskCompact';
import TaskResponseAllOfMemberships from './TaskResponseAllOfMemberships';
import UserCompact from './UserCompact';
import WorkspaceCompact from './WorkspaceCompact';

/**
 * The TaskResponseAllOf model module.
 * @module model/TaskResponseAllOf
 * @version 1.0.2
 */
class TaskResponseAllOf {
    /**
     * Constructs a new <code>TaskResponseAllOf</code>.
     * @alias module:model/TaskResponseAllOf
     */
    constructor() { 
        
        TaskResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaskResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskResponseAllOf} obj Optional instance to populate.
     * @return {module:model/TaskResponseAllOf} The populated <code>TaskResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaskResponseAllOf();

            if (data.hasOwnProperty('actual_time_minutes')) {
                obj['actual_time_minutes'] = ApiClient.convertToType(data['actual_time_minutes'], 'Number');
            }
            if (data.hasOwnProperty('assignee')) {
                obj['assignee'] = ApiClient.convertToType(data['assignee'], UserCompact);
            }
            if (data.hasOwnProperty('assignee_section')) {
                obj['assignee_section'] = ApiClient.convertToType(data['assignee_section'], SectionCompact);
            }
            if (data.hasOwnProperty('completed_at')) {
                obj['completed_at'] = ApiClient.convertToType(data['completed_at'], 'Date');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('completed_by')) {
                obj['completed_by'] = ApiClient.convertToType(data['completed_by'], UserCompact);
            }
            if (data.hasOwnProperty('custom_fields')) {
                obj['custom_fields'] = ApiClient.convertToType(data['custom_fields'], [CustomFieldResponse]);
            }
            if (data.hasOwnProperty('dependencies')) {
                obj['dependencies'] = ApiClient.convertToType(data['dependencies'], [AsanaResource]);
            }
            if (data.hasOwnProperty('dependents')) {
                obj['dependents'] = ApiClient.convertToType(data['dependents'], [AsanaResource]);
            }
            if (data.hasOwnProperty('followers')) {
                obj['followers'] = ApiClient.convertToType(data['followers'], [UserCompact]);
            }
            if (data.hasOwnProperty('hearted')) {
                obj['hearted'] = ApiClient.convertToType(data['hearted'], 'Boolean');
            }
            if (data.hasOwnProperty('hearts')) {
                obj['hearts'] = ApiClient.convertToType(data['hearts'], [Like]);
            }
            if (data.hasOwnProperty('is_rendered_as_separator')) {
                obj['is_rendered_as_separator'] = ApiClient.convertToType(data['is_rendered_as_separator'], 'Boolean');
            }
            if (data.hasOwnProperty('likes')) {
                obj['likes'] = ApiClient.convertToType(data['likes'], [Like]);
            }
            if (data.hasOwnProperty('memberships')) {
                obj['memberships'] = ApiClient.convertToType(data['memberships'], [TaskResponseAllOfMemberships]);
            }
            if (data.hasOwnProperty('modified_at')) {
                obj['modified_at'] = ApiClient.convertToType(data['modified_at'], 'Date');
            }
            if (data.hasOwnProperty('num_hearts')) {
                obj['num_hearts'] = ApiClient.convertToType(data['num_hearts'], 'Number');
            }
            if (data.hasOwnProperty('num_likes')) {
                obj['num_likes'] = ApiClient.convertToType(data['num_likes'], 'Number');
            }
            if (data.hasOwnProperty('num_subtasks')) {
                obj['num_subtasks'] = ApiClient.convertToType(data['num_subtasks'], 'Number');
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = ApiClient.convertToType(data['parent'], TaskCompact);
            }
            if (data.hasOwnProperty('permalink_url')) {
                obj['permalink_url'] = ApiClient.convertToType(data['permalink_url'], 'String');
            }
            if (data.hasOwnProperty('projects')) {
                obj['projects'] = ApiClient.convertToType(data['projects'], [ProjectCompact]);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [TagCompact]);
            }
            if (data.hasOwnProperty('workspace')) {
                obj['workspace'] = ApiClient.convertToType(data['workspace'], WorkspaceCompact);
            }
        }
        return obj;
    }


}

/**
 * This value represents the sum of all the Time Tracking entries in the Actual Time field on a given Task. It is represented as a nullable long value.
 * @member {Number} actual_time_minutes
 */
TaskResponseAllOf.prototype['actual_time_minutes'] = undefined;

/**
 * @member {module:model/UserCompact} assignee
 */
TaskResponseAllOf.prototype['assignee'] = undefined;

/**
 * @member {module:model/SectionCompact} assignee_section
 */
TaskResponseAllOf.prototype['assignee_section'] = undefined;

/**
 * The time at which this task was completed, or null if the task is incomplete.
 * @member {Date} completed_at
 */
TaskResponseAllOf.prototype['completed_at'] = undefined;

/**
 * The time at which this task was created.
 * @member {Date} created_at
 */
TaskResponseAllOf.prototype['created_at'] = undefined;

/**
 * @member {module:model/UserCompact} completed_by
 */
TaskResponseAllOf.prototype['completed_by'] = undefined;

/**
 * Array of custom field values applied to the task. These represent the custom field values recorded on this project for a particular custom field. For example, these custom field values will contain an `enum_value` property for custom fields of type `enum`, a `text_value` property for custom fields of type `text`, and so on. Please note that the `gid` returned on each custom field value *is identical* to the `gid` of the custom field, which allows referencing the custom field metadata through the `/custom_fields/custom_field-gid` endpoint.
 * @member {Array.<module:model/CustomFieldResponse>} custom_fields
 */
TaskResponseAllOf.prototype['custom_fields'] = undefined;

/**
 * [Opt In](/docs/inputoutput-options). Array of resources referencing tasks that this task depends on. The objects contain only the gid of the dependency.
 * @member {Array.<module:model/AsanaResource>} dependencies
 */
TaskResponseAllOf.prototype['dependencies'] = undefined;

/**
 * [Opt In](/docs/inputoutput-options). Array of resources referencing tasks that depend on this task. The objects contain only the ID of the dependent.
 * @member {Array.<module:model/AsanaResource>} dependents
 */
TaskResponseAllOf.prototype['dependents'] = undefined;

/**
 * Array of users following this task.
 * @member {Array.<module:model/UserCompact>} followers
 */
TaskResponseAllOf.prototype['followers'] = undefined;

/**
 * *Deprecated - please use liked instead* True if the task is hearted by the authorized user, false if not.
 * @member {Boolean} hearted
 */
TaskResponseAllOf.prototype['hearted'] = undefined;

/**
 * *Deprecated - please use likes instead* Array of likes for users who have hearted this task.
 * @member {Array.<module:model/Like>} hearts
 */
TaskResponseAllOf.prototype['hearts'] = undefined;

/**
 * [Opt In](/docs/inputoutput-options). In some contexts tasks can be rendered as a visual separator; for instance, subtasks can appear similar to [sections](/reference/sections) without being true `section` objects. If a `task` object is rendered this way in any context it will have the property `is_rendered_as_separator` set to `true`.
 * @member {Boolean} is_rendered_as_separator
 */
TaskResponseAllOf.prototype['is_rendered_as_separator'] = undefined;

/**
 * Array of likes for users who have liked this task.
 * @member {Array.<module:model/Like>} likes
 */
TaskResponseAllOf.prototype['likes'] = undefined;

/**
 * *Create-only*. Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the `addProject` and `removeProject` endpoints. Note that over time, more types of memberships may be added to this property.
 * @member {Array.<module:model/TaskResponseAllOfMemberships>} memberships
 */
TaskResponseAllOf.prototype['memberships'] = undefined;

/**
 * The time at which this task was last modified.  *Note: This does not currently reflect any changes in associations such as projects or comments that may have been added or removed from the task.*
 * @member {Date} modified_at
 */
TaskResponseAllOf.prototype['modified_at'] = undefined;

/**
 * *Deprecated - please use likes instead* The number of users who have hearted this task.
 * @member {Number} num_hearts
 */
TaskResponseAllOf.prototype['num_hearts'] = undefined;

/**
 * The number of users who have liked this task.
 * @member {Number} num_likes
 */
TaskResponseAllOf.prototype['num_likes'] = undefined;

/**
 * [Opt In](/docs/inputoutput-options). The number of subtasks on this task. 
 * @member {Number} num_subtasks
 */
TaskResponseAllOf.prototype['num_subtasks'] = undefined;

/**
 * @member {module:model/TaskCompact} parent
 */
TaskResponseAllOf.prototype['parent'] = undefined;

/**
 * A url that points directly to the object within Asana.
 * @member {String} permalink_url
 */
TaskResponseAllOf.prototype['permalink_url'] = undefined;

/**
 * *Create-only.* Array of projects this task is associated with. At task creation time, this array can be used to add the task to many projects at once. After task creation, these associations can be modified using the addProject and removeProject endpoints.
 * @member {Array.<module:model/ProjectCompact>} projects
 */
TaskResponseAllOf.prototype['projects'] = undefined;

/**
 * Array of tags associated with this task. In order to change tags on an existing task use `addTag` and `removeTag`.
 * @member {Array.<module:model/TagCompact>} tags
 */
TaskResponseAllOf.prototype['tags'] = undefined;

/**
 * @member {module:model/WorkspaceCompact} workspace
 */
TaskResponseAllOf.prototype['workspace'] = undefined;






export default TaskResponseAllOf;

