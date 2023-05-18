/**
 * Asana
 * This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CreateProjectFromAsanaTemplateRequestAllOf from './CreateProjectFromAsanaTemplateRequestAllOf';
import GoalResponseLikesInner from './GoalResponseLikesInner';
import StoryResponseAssignee from './StoryResponseAssignee';
import TaskBaseExternal from './TaskBaseExternal';
import TaskBaseMembershipsInner from './TaskBaseMembershipsInner';

/**
 * The TaskRequest model module.
 * @module model/TaskRequest
 * @version 1.0.4
 */
class TaskRequest {
    /**
     * Constructs a new <code>TaskRequest</code>.
     * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. The *task* is the basic object around which many operations in Asana are centered.
     * @alias module:model/TaskRequest
     */
    constructor() { 
        
        TaskRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaskRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskRequest} obj Optional instance to populate.
     * @return {module:model/TaskRequest} The populated <code>TaskRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaskRequest();

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('resource_subtype')) {
                obj['resource_subtype'] = ApiClient.convertToType(data['resource_subtype'], 'String');
            }
            if (data.hasOwnProperty('approval_status')) {
                obj['approval_status'] = ApiClient.convertToType(data['approval_status'], 'String');
            }
            if (data.hasOwnProperty('assignee_status')) {
                obj['assignee_status'] = ApiClient.convertToType(data['assignee_status'], 'String');
            }
            if (data.hasOwnProperty('completed')) {
                obj['completed'] = ApiClient.convertToType(data['completed'], 'Boolean');
            }
            if (data.hasOwnProperty('completed_at')) {
                obj['completed_at'] = ApiClient.convertToType(data['completed_at'], 'Date');
            }
            if (data.hasOwnProperty('completed_by')) {
                obj['completed_by'] = StoryResponseAssignee.constructFromObject(data['completed_by']);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('dependencies')) {
                obj['dependencies'] = ApiClient.convertToType(data['dependencies'], [CreateProjectFromAsanaTemplateRequestAllOf]);
            }
            if (data.hasOwnProperty('dependents')) {
                obj['dependents'] = ApiClient.convertToType(data['dependents'], [CreateProjectFromAsanaTemplateRequestAllOf]);
            }
            if (data.hasOwnProperty('due_at')) {
                obj['due_at'] = ApiClient.convertToType(data['due_at'], 'Date');
            }
            if (data.hasOwnProperty('due_on')) {
                obj['due_on'] = ApiClient.convertToType(data['due_on'], 'Date');
            }
            if (data.hasOwnProperty('external')) {
                obj['external'] = TaskBaseExternal.constructFromObject(data['external']);
            }
            if (data.hasOwnProperty('html_notes')) {
                obj['html_notes'] = ApiClient.convertToType(data['html_notes'], 'String');
            }
            if (data.hasOwnProperty('hearted')) {
                obj['hearted'] = ApiClient.convertToType(data['hearted'], 'Boolean');
            }
            if (data.hasOwnProperty('hearts')) {
                obj['hearts'] = ApiClient.convertToType(data['hearts'], [GoalResponseLikesInner]);
            }
            if (data.hasOwnProperty('is_rendered_as_separator')) {
                obj['is_rendered_as_separator'] = ApiClient.convertToType(data['is_rendered_as_separator'], 'Boolean');
            }
            if (data.hasOwnProperty('liked')) {
                obj['liked'] = ApiClient.convertToType(data['liked'], 'Boolean');
            }
            if (data.hasOwnProperty('likes')) {
                obj['likes'] = ApiClient.convertToType(data['likes'], [GoalResponseLikesInner]);
            }
            if (data.hasOwnProperty('memberships')) {
                obj['memberships'] = ApiClient.convertToType(data['memberships'], [TaskBaseMembershipsInner]);
            }
            if (data.hasOwnProperty('modified_at')) {
                obj['modified_at'] = ApiClient.convertToType(data['modified_at'], 'Date');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
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
            if (data.hasOwnProperty('start_at')) {
                obj['start_at'] = ApiClient.convertToType(data['start_at'], 'Date');
            }
            if (data.hasOwnProperty('start_on')) {
                obj['start_on'] = ApiClient.convertToType(data['start_on'], 'Date');
            }
            if (data.hasOwnProperty('actual_time_minutes')) {
                obj['actual_time_minutes'] = ApiClient.convertToType(data['actual_time_minutes'], 'Number');
            }
            if (data.hasOwnProperty('assignee')) {
                obj['assignee'] = ApiClient.convertToType(data['assignee'], 'String');
            }
            if (data.hasOwnProperty('assignee_section')) {
                obj['assignee_section'] = ApiClient.convertToType(data['assignee_section'], 'String');
            }
            if (data.hasOwnProperty('custom_fields')) {
                obj['custom_fields'] = ApiClient.convertToType(data['custom_fields'], {'String': 'String'});
            }
            if (data.hasOwnProperty('followers')) {
                obj['followers'] = ApiClient.convertToType(data['followers'], ['String']);
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = ApiClient.convertToType(data['parent'], 'String');
            }
            if (data.hasOwnProperty('projects')) {
                obj['projects'] = ApiClient.convertToType(data['projects'], ['String']);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('workspace')) {
                obj['workspace'] = ApiClient.convertToType(data['workspace'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
TaskRequest.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
TaskRequest.prototype['resource_type'] = undefined;

/**
 * Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
 * @member {String} name
 */
TaskRequest.prototype['name'] = undefined;

/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning. The resource_subtype `milestone` represent a single moment in time. This means tasks with this subtype cannot have a start_date.
 * @member {module:model/TaskRequest.ResourceSubtypeEnum} resource_subtype
 */
TaskRequest.prototype['resource_subtype'] = undefined;

/**
 * *Conditional* Reflects the approval status of this task. This field is kept in sync with `completed`, meaning `pending` translates to false while `approved`, `rejected`, and `changes_requested` translate to true. If you set completed to true, this field will be set to `approved`.
 * @member {module:model/TaskRequest.ApprovalStatusEnum} approval_status
 */
TaskRequest.prototype['approval_status'] = undefined;

/**
 * *Deprecated* Scheduling status of this task for the user it is assigned to. This field can only be set if the assignee is non-null. Setting this field to \"inbox\" or \"upcoming\" inserts it at the top of the section, while the other options will insert at the bottom.
 * @member {module:model/TaskRequest.AssigneeStatusEnum} assignee_status
 */
TaskRequest.prototype['assignee_status'] = undefined;

/**
 * True if the task is currently marked complete, false if not.
 * @member {Boolean} completed
 */
TaskRequest.prototype['completed'] = undefined;

/**
 * The time at which this task was completed, or null if the task is incomplete.
 * @member {Date} completed_at
 */
TaskRequest.prototype['completed_at'] = undefined;

/**
 * @member {module:model/StoryResponseAssignee} completed_by
 */
TaskRequest.prototype['completed_by'] = undefined;

/**
 * The time at which this resource was created.
 * @member {Date} created_at
 */
TaskRequest.prototype['created_at'] = undefined;

/**
 * [Opt In](/docs/inputoutput-options). Array of resources referencing tasks that this task depends on. The objects contain only the gid of the dependency.
 * @member {Array.<module:model/CreateProjectFromAsanaTemplateRequestAllOf>} dependencies
 */
TaskRequest.prototype['dependencies'] = undefined;

/**
 * [Opt In](/docs/inputoutput-options). Array of resources referencing tasks that depend on this task. The objects contain only the ID of the dependent.
 * @member {Array.<module:model/CreateProjectFromAsanaTemplateRequestAllOf>} dependents
 */
TaskRequest.prototype['dependents'] = undefined;

/**
 * The UTC date and time on which this task is due, or null if the task has no due time. This takes an ISO 8601 date string in UTC and should not be used together with `due_on`.
 * @member {Date} due_at
 */
TaskRequest.prototype['due_at'] = undefined;

/**
 * The localized date on which this task is due, or null if the task has no due date. This takes a date with `YYYY-MM-DD` format and should not be used together with `due_at`.
 * @member {Date} due_on
 */
TaskRequest.prototype['due_on'] = undefined;

/**
 * @member {module:model/TaskBaseExternal} external
 */
TaskRequest.prototype['external'] = undefined;

/**
 * [Opt In](/docs/inputoutput-options). The notes of the text with formatting as HTML.
 * @member {String} html_notes
 */
TaskRequest.prototype['html_notes'] = undefined;

/**
 * *Deprecated - please use liked instead* True if the task is hearted by the authorized user, false if not.
 * @member {Boolean} hearted
 */
TaskRequest.prototype['hearted'] = undefined;

/**
 * *Deprecated - please use likes instead* Array of likes for users who have hearted this task.
 * @member {Array.<module:model/GoalResponseLikesInner>} hearts
 */
TaskRequest.prototype['hearts'] = undefined;

/**
 * [Opt In](/docs/inputoutput-options). In some contexts tasks can be rendered as a visual separator; for instance, subtasks can appear similar to [sections](/reference/sections) without being true `section` objects. If a `task` object is rendered this way in any context it will have the property `is_rendered_as_separator` set to `true`.
 * @member {Boolean} is_rendered_as_separator
 */
TaskRequest.prototype['is_rendered_as_separator'] = undefined;

/**
 * True if the task is liked by the authorized user, false if not.
 * @member {Boolean} liked
 */
TaskRequest.prototype['liked'] = undefined;

/**
 * Array of likes for users who have liked this task.
 * @member {Array.<module:model/GoalResponseLikesInner>} likes
 */
TaskRequest.prototype['likes'] = undefined;

/**
 * *Create-only*. Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the `addProject` and `removeProject` endpoints. Note that over time, more types of memberships may be added to this property.
 * @member {Array.<module:model/TaskBaseMembershipsInner>} memberships
 */
TaskRequest.prototype['memberships'] = undefined;

/**
 * The time at which this task was last modified.  The following conditions will change `modified_at`:  - story is created on a task - story is trashed on a task - attachment is trashed on a task - task is assigned or unassigned - custom field value is changed - the task itself is trashed - Or if any of the following fields are updated:   - completed   - name   - due_date   - description   - attachments   - items   - schedule_status  The following conditions will _not_ change `modified_at`:  - moving to a new container (project, portfolio, etc) - comments being added to the task (but the stories they generate   _will_ affect `modified_at`)
 * @member {Date} modified_at
 */
TaskRequest.prototype['modified_at'] = undefined;

/**
 * Free-form textual information associated with the task (i.e. its description).
 * @member {String} notes
 */
TaskRequest.prototype['notes'] = undefined;

/**
 * *Deprecated - please use likes instead* The number of users who have hearted this task.
 * @member {Number} num_hearts
 */
TaskRequest.prototype['num_hearts'] = undefined;

/**
 * The number of users who have liked this task.
 * @member {Number} num_likes
 */
TaskRequest.prototype['num_likes'] = undefined;

/**
 * [Opt In](/docs/inputoutput-options). The number of subtasks on this task. 
 * @member {Number} num_subtasks
 */
TaskRequest.prototype['num_subtasks'] = undefined;

/**
 * Date and time on which work begins for the task, or null if the task has no start time. This takes an ISO 8601 date string in UTC and should not be used together with `start_on`. *Note: `due_at` must be present in the request when setting or unsetting the `start_at` parameter.*
 * @member {Date} start_at
 */
TaskRequest.prototype['start_at'] = undefined;

/**
 * The day on which work begins for the task , or null if the task has no start date. This takes a date with `YYYY-MM-DD` format and should not be used together with `start_at`. *Note: `due_on` or `due_at` must be present in the request when setting or unsetting the `start_on` parameter.*
 * @member {Date} start_on
 */
TaskRequest.prototype['start_on'] = undefined;

/**
 * This value represents the sum of all the Time Tracking entries in the Actual Time field on a given Task. It is represented as a nullable long value.
 * @member {Number} actual_time_minutes
 */
TaskRequest.prototype['actual_time_minutes'] = undefined;

/**
 * Gid of a user.
 * @member {String} assignee
 */
TaskRequest.prototype['assignee'] = undefined;

/**
 * The *assignee section* is a subdivision of a project that groups tasks together in the assignee's \"My Tasks\" list. It can either be a header above a list of tasks in a list view or a column in a board view of \"My Tasks.\" The `assignee_section` property will be returned in the response only if the request was sent by the user who is the assignee of the task. Note that you can only write to `assignee_section` with the gid of an existing section visible in the user's \"My Tasks\" list.
 * @member {String} assignee_section
 */
TaskRequest.prototype['assignee_section'] = undefined;

/**
 * An object where each key is a Custom Field GID and each value is an enum GID, string, number, object, or array.
 * @member {Object.<String, String>} custom_fields
 */
TaskRequest.prototype['custom_fields'] = undefined;

/**
 * *Create-Only* An array of strings identifying users. These can either be the string \"me\", an email, or the gid of a user. In order to change followers on an existing task use `addFollowers` and `removeFollowers`.
 * @member {Array.<String>} followers
 */
TaskRequest.prototype['followers'] = undefined;

/**
 * Gid of a task.
 * @member {String} parent
 */
TaskRequest.prototype['parent'] = undefined;

/**
 * *Create-Only* Array of project gids. In order to change projects on an existing task use `addProject` and `removeProject`.
 * @member {Array.<String>} projects
 */
TaskRequest.prototype['projects'] = undefined;

/**
 * *Create-Only* Array of tag gids. In order to change tags on an existing task use `addTag` and `removeTag`.
 * @member {Array.<String>} tags
 */
TaskRequest.prototype['tags'] = undefined;

/**
 * Gid of a workspace.
 * @member {String} workspace
 */
TaskRequest.prototype['workspace'] = undefined;





/**
 * Allowed values for the <code>resource_subtype</code> property.
 * @enum {String}
 * @readonly
 */
TaskRequest['ResourceSubtypeEnum'] = {

    /**
     * value: "default_task"
     * @const
     */
    "default_task": "default_task",

    /**
     * value: "milestone"
     * @const
     */
    "milestone": "milestone",

    /**
     * value: "section"
     * @const
     */
    "section": "section",

    /**
     * value: "approval"
     * @const
     */
    "approval": "approval"
};


/**
 * Allowed values for the <code>approval_status</code> property.
 * @enum {String}
 * @readonly
 */
TaskRequest['ApprovalStatusEnum'] = {

    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",

    /**
     * value: "approved"
     * @const
     */
    "approved": "approved",

    /**
     * value: "rejected"
     * @const
     */
    "rejected": "rejected",

    /**
     * value: "changes_requested"
     * @const
     */
    "changes_requested": "changes_requested"
};


/**
 * Allowed values for the <code>assignee_status</code> property.
 * @enum {String}
 * @readonly
 */
TaskRequest['AssigneeStatusEnum'] = {

    /**
     * value: "today"
     * @const
     */
    "today": "today",

    /**
     * value: "upcoming"
     * @const
     */
    "upcoming": "upcoming",

    /**
     * value: "later"
     * @const
     */
    "later": "later",

    /**
     * value: "new"
     * @const
     */
    "new": "new",

    /**
     * value: "inbox"
     * @const
     */
    "inbox": "inbox"
};



export default TaskRequest;

