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
import {CustomFieldResponseCreatedBy} from './CustomFieldResponseCreatedBy';
import {CustomFieldResponsePeopleValue} from './CustomFieldResponsePeopleValue';
import {GoalResponseLikes} from './GoalResponseLikes';
import {JobBaseNewProject} from './JobBaseNewProject';
import {TaskBaseCompletedBy} from './TaskBaseCompletedBy';
import {TaskBaseDependencies} from './TaskBaseDependencies';
import {TaskBaseExternal} from './TaskBaseExternal';
import {TaskBaseMemberships} from './TaskBaseMemberships';
import {TaskResponseCustomFields} from './TaskResponseCustomFields';
import {TaskResponseParent} from './TaskResponseParent';
import {TaskResponseTags} from './TaskResponseTags';
import {TaskResponseWorkspace} from './TaskResponseWorkspace';

/**
 * The TaskResponse model module.
 * @module model/TaskResponse
 * @version 1.0.5
 */
export class TaskResponse {
  /**
   * Constructs a new <code>TaskResponse</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. The *task* is the basic object around which many operations in Asana are centered.
   * @alias module:model/TaskResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TaskResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskResponse} obj Optional instance to populate.
   * @return {module:model/TaskResponse} The populated <code>TaskResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TaskResponse();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('resource_subtype'))
        obj.resource_subtype = ApiClient.convertToType(data['resource_subtype'], 'String');
      if (data.hasOwnProperty('approval_status'))
        obj.approval_status = ApiClient.convertToType(data['approval_status'], 'String');
      if (data.hasOwnProperty('assignee_status'))
        obj.assignee_status = ApiClient.convertToType(data['assignee_status'], 'String');
      if (data.hasOwnProperty('completed'))
        obj.completed = ApiClient.convertToType(data['completed'], 'Boolean');
      if (data.hasOwnProperty('completed_at'))
        obj.completed_at = ApiClient.convertToType(data['completed_at'], 'Date');
      if (data.hasOwnProperty('completed_by'))
        obj.completed_by = TaskBaseCompletedBy.constructFromObject(data['completed_by']);
      if (data.hasOwnProperty('created_at'))
        obj.created_at = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('dependencies'))
        obj.dependencies = ApiClient.convertToType(data['dependencies'], [TaskBaseDependencies]);
      if (data.hasOwnProperty('dependents'))
        obj.dependents = ApiClient.convertToType(data['dependents'], [TaskBaseDependencies]);
      if (data.hasOwnProperty('due_at'))
        obj.due_at = ApiClient.convertToType(data['due_at'], 'Date');
      if (data.hasOwnProperty('due_on'))
        obj.due_on = ApiClient.convertToType(data['due_on'], 'Date');
      if (data.hasOwnProperty('external'))
        obj.external = TaskBaseExternal.constructFromObject(data['external']);
      if (data.hasOwnProperty('html_notes'))
        obj.html_notes = ApiClient.convertToType(data['html_notes'], 'String');
      if (data.hasOwnProperty('hearted'))
        obj.hearted = ApiClient.convertToType(data['hearted'], 'Boolean');
      if (data.hasOwnProperty('hearts'))
        obj.hearts = ApiClient.convertToType(data['hearts'], [GoalResponseLikes]);
      if (data.hasOwnProperty('is_rendered_as_separator'))
        obj.is_rendered_as_separator = ApiClient.convertToType(data['is_rendered_as_separator'], 'Boolean');
      if (data.hasOwnProperty('liked'))
        obj.liked = ApiClient.convertToType(data['liked'], 'Boolean');
      if (data.hasOwnProperty('likes'))
        obj.likes = ApiClient.convertToType(data['likes'], [GoalResponseLikes]);
      if (data.hasOwnProperty('memberships'))
        obj.memberships = ApiClient.convertToType(data['memberships'], [TaskBaseMemberships]);
      if (data.hasOwnProperty('modified_at'))
        obj.modified_at = ApiClient.convertToType(data['modified_at'], 'Date');
      if (data.hasOwnProperty('notes'))
        obj.notes = ApiClient.convertToType(data['notes'], 'String');
      if (data.hasOwnProperty('num_hearts'))
        obj.num_hearts = ApiClient.convertToType(data['num_hearts'], 'Number');
      if (data.hasOwnProperty('num_likes'))
        obj.num_likes = ApiClient.convertToType(data['num_likes'], 'Number');
      if (data.hasOwnProperty('num_subtasks'))
        obj.num_subtasks = ApiClient.convertToType(data['num_subtasks'], 'Number');
      if (data.hasOwnProperty('start_at'))
        obj.start_at = ApiClient.convertToType(data['start_at'], 'Date');
      if (data.hasOwnProperty('start_on'))
        obj.start_on = ApiClient.convertToType(data['start_on'], 'Date');
      if (data.hasOwnProperty('actual_time_minutes'))
        obj.actual_time_minutes = ApiClient.convertToType(data['actual_time_minutes'], 'Number');
      if (data.hasOwnProperty('assignee'))
        obj.assignee = CustomFieldResponseCreatedBy.constructFromObject(data['assignee']);
      if (data.hasOwnProperty('assignee_section'))
        obj.assignee_section = ApiClient.convertToType(data['assignee_section'], Object);
      if (data.hasOwnProperty('custom_fields'))
        obj.custom_fields = ApiClient.convertToType(data['custom_fields'], [TaskResponseCustomFields]);
      if (data.hasOwnProperty('followers'))
        obj.followers = ApiClient.convertToType(data['followers'], [CustomFieldResponsePeopleValue]);
      if (data.hasOwnProperty('parent'))
        obj.parent = TaskResponseParent.constructFromObject(data['parent']);
      if (data.hasOwnProperty('projects'))
        obj.projects = ApiClient.convertToType(data['projects'], [JobBaseNewProject]);
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], [TaskResponseTags]);
      if (data.hasOwnProperty('workspace'))
        obj.workspace = TaskResponseWorkspace.constructFromObject(data['workspace']);
      if (data.hasOwnProperty('permalink_url'))
        obj.permalink_url = ApiClient.convertToType(data['permalink_url'], 'String');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
TaskResponse.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
TaskResponse.prototype.resource_type = undefined;

/**
 * Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
 * @member {String} name
 */
TaskResponse.prototype.name = undefined;

/**
 * Allowed values for the <code>resource_subtype</code> property.
 * @enum {String}
 * @readonly
 */
TaskResponse.ResourceSubtypeEnum = {
  /**
   * value: "default_task"
   * @const
   */
  default_task: "default_task",

  /**
   * value: "milestone"
   * @const
   */
  milestone: "milestone",

  /**
   * value: "section"
   * @const
   */
  section: "section",

  /**
   * value: "approval"
   * @const
   */
  approval: "approval"
};
/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning. The resource_subtype `milestone` represent a single moment in time. This means tasks with this subtype cannot have a start_date.
 * @member {module:model/TaskResponse.ResourceSubtypeEnum} resource_subtype
 */
TaskResponse.prototype.resource_subtype = undefined;

/**
 * Allowed values for the <code>approval_status</code> property.
 * @enum {String}
 * @readonly
 */
TaskResponse.ApprovalStatusEnum = {
  /**
   * value: "pending"
   * @const
   */
  pending: "pending",

  /**
   * value: "approved"
   * @const
   */
  approved: "approved",

  /**
   * value: "rejected"
   * @const
   */
  rejected: "rejected",

  /**
   * value: "changes_requested"
   * @const
   */
  changes_requested: "changes_requested"
};
/**
 * *Conditional* Reflects the approval status of this task. This field is kept in sync with `completed`, meaning `pending` translates to false while `approved`, `rejected`, and `changes_requested` translate to true. If you set completed to true, this field will be set to `approved`.
 * @member {module:model/TaskResponse.ApprovalStatusEnum} approval_status
 */
TaskResponse.prototype.approval_status = undefined;

/**
 * Allowed values for the <code>assignee_status</code> property.
 * @enum {String}
 * @readonly
 */
TaskResponse.AssigneeStatusEnum = {
  /**
   * value: "today"
   * @const
   */
  today: "today",

  /**
   * value: "upcoming"
   * @const
   */
  upcoming: "upcoming",

  /**
   * value: "later"
   * @const
   */
  later: "later",

  /**
   * value: "new"
   * @const
   */
  _new: "new",

  /**
   * value: "inbox"
   * @const
   */
  inbox: "inbox"
};
/**
 * *Deprecated* Scheduling status of this task for the user it is assigned to. This field can only be set if the assignee is non-null. Setting this field to \"inbox\" or \"upcoming\" inserts it at the top of the section, while the other options will insert at the bottom.
 * @member {module:model/TaskResponse.AssigneeStatusEnum} assignee_status
 */
TaskResponse.prototype.assignee_status = undefined;

/**
 * True if the task is currently marked complete, false if not.
 * @member {Boolean} completed
 */
TaskResponse.prototype.completed = undefined;

/**
 * The time at which this task was completed, or null if the task is incomplete.
 * @member {Date} completed_at
 */
TaskResponse.prototype.completed_at = undefined;

/**
 * @member {module:model/TaskBaseCompletedBy} completed_by
 */
TaskResponse.prototype.completed_by = undefined;

/**
 * The time at which this resource was created.
 * @member {Date} created_at
 */
TaskResponse.prototype.created_at = undefined;

/**
 * [Opt In](/docs/inputoutput-options). Array of resources referencing tasks that this task depends on. The objects contain only the gid of the dependency.
 * @member {Array.<module:model/TaskBaseDependencies>} dependencies
 */
TaskResponse.prototype.dependencies = undefined;

/**
 * [Opt In](/docs/inputoutput-options). Array of resources referencing tasks that depend on this task. The objects contain only the ID of the dependent.
 * @member {Array.<module:model/TaskBaseDependencies>} dependents
 */
TaskResponse.prototype.dependents = undefined;

/**
 * The UTC date and time on which this task is due, or null if the task has no due time. This takes an ISO 8601 date string in UTC and should not be used together with `due_on`.
 * @member {Date} due_at
 */
TaskResponse.prototype.due_at = undefined;

/**
 * The localized date on which this task is due, or null if the task has no due date. This takes a date with `YYYY-MM-DD` format and should not be used together with `due_at`.
 * @member {Date} due_on
 */
TaskResponse.prototype.due_on = undefined;

/**
 * @member {module:model/TaskBaseExternal} external
 */
TaskResponse.prototype.external = undefined;

/**
 * [Opt In](/docs/inputoutput-options). The notes of the text with formatting as HTML.
 * @member {String} html_notes
 */
TaskResponse.prototype.html_notes = undefined;

/**
 * *Deprecated - please use liked instead* True if the task is hearted by the authorized user, false if not.
 * @member {Boolean} hearted
 */
TaskResponse.prototype.hearted = undefined;

/**
 * *Deprecated - please use likes instead* Array of likes for users who have hearted this task.
 * @member {Array.<module:model/GoalResponseLikes>} hearts
 */
TaskResponse.prototype.hearts = undefined;

/**
 * [Opt In](/docs/inputoutput-options). In some contexts tasks can be rendered as a visual separator; for instance, subtasks can appear similar to [sections](/reference/sections) without being true `section` objects. If a `task` object is rendered this way in any context it will have the property `is_rendered_as_separator` set to `true`.
 * @member {Boolean} is_rendered_as_separator
 */
TaskResponse.prototype.is_rendered_as_separator = undefined;

/**
 * True if the task is liked by the authorized user, false if not.
 * @member {Boolean} liked
 */
TaskResponse.prototype.liked = undefined;

/**
 * Array of likes for users who have liked this task.
 * @member {Array.<module:model/GoalResponseLikes>} likes
 */
TaskResponse.prototype.likes = undefined;

/**
 * *Create-only*. Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the `addProject` and `removeProject` endpoints. Note that over time, more types of memberships may be added to this property.
 * @member {Array.<module:model/TaskBaseMemberships>} memberships
 */
TaskResponse.prototype.memberships = undefined;

/**
 * The time at which this task was last modified.  The following conditions will change `modified_at`:  - story is created on a task - story is trashed on a task - attachment is trashed on a task - task is assigned or unassigned - custom field value is changed - the task itself is trashed - Or if any of the following fields are updated:   - completed   - name   - due_date   - description   - attachments   - items   - schedule_status  The following conditions will _not_ change `modified_at`:  - moving to a new container (project, portfolio, etc) - comments being added to the task (but the stories they generate   _will_ affect `modified_at`)
 * @member {Date} modified_at
 */
TaskResponse.prototype.modified_at = undefined;

/**
 * Free-form textual information associated with the task (i.e. its description).
 * @member {String} notes
 */
TaskResponse.prototype.notes = undefined;

/**
 * *Deprecated - please use likes instead* The number of users who have hearted this task.
 * @member {Number} num_hearts
 */
TaskResponse.prototype.num_hearts = undefined;

/**
 * The number of users who have liked this task.
 * @member {Number} num_likes
 */
TaskResponse.prototype.num_likes = undefined;

/**
 * [Opt In](/docs/inputoutput-options). The number of subtasks on this task. 
 * @member {Number} num_subtasks
 */
TaskResponse.prototype.num_subtasks = undefined;

/**
 * Date and time on which work begins for the task, or null if the task has no start time. This takes an ISO 8601 date string in UTC and should not be used together with `start_on`. *Note: `due_at` must be present in the request when setting or unsetting the `start_at` parameter.*
 * @member {Date} start_at
 */
TaskResponse.prototype.start_at = undefined;

/**
 * The day on which work begins for the task , or null if the task has no start date. This takes a date with `YYYY-MM-DD` format and should not be used together with `start_at`. *Note: `due_on` or `due_at` must be present in the request when setting or unsetting the `start_on` parameter.*
 * @member {Date} start_on
 */
TaskResponse.prototype.start_on = undefined;

/**
 * This value represents the sum of all the Time Tracking entries in the Actual Time field on a given Task. It is represented as a nullable long value.
 * @member {Number} actual_time_minutes
 */
TaskResponse.prototype.actual_time_minutes = undefined;

/**
 * @member {module:model/CustomFieldResponseCreatedBy} assignee
 */
TaskResponse.prototype.assignee = undefined;

/**
 * @member {Object} assignee_section
 */
TaskResponse.prototype.assignee_section = undefined;

/**
 * Array of custom field values applied to the task. These represent the custom field values recorded on this project for a particular custom field. For example, these custom field values will contain an `enum_value` property for custom fields of type `enum`, a `text_value` property for custom fields of type `text`, and so on. Please note that the `gid` returned on each custom field value *is identical* to the `gid` of the custom field, which allows referencing the custom field metadata through the `/custom_fields/custom_field-gid` endpoint.
 * @member {Array.<module:model/TaskResponseCustomFields>} custom_fields
 */
TaskResponse.prototype.custom_fields = undefined;

/**
 * Array of users following this task.
 * @member {Array.<module:model/CustomFieldResponsePeopleValue>} followers
 */
TaskResponse.prototype.followers = undefined;

/**
 * @member {module:model/TaskResponseParent} parent
 */
TaskResponse.prototype.parent = undefined;

/**
 * *Create-only.* Array of projects this task is associated with. At task creation time, this array can be used to add the task to many projects at once. After task creation, these associations can be modified using the addProject and removeProject endpoints.
 * @member {Array.<module:model/JobBaseNewProject>} projects
 */
TaskResponse.prototype.projects = undefined;

/**
 * Array of tags associated with this task. In order to change tags on an existing task use `addTag` and `removeTag`.
 * @member {Array.<module:model/TaskResponseTags>} tags
 */
TaskResponse.prototype.tags = undefined;

/**
 * @member {module:model/TaskResponseWorkspace} workspace
 */
TaskResponse.prototype.workspace = undefined;

/**
 * A url that points directly to the object within Asana.
 * @member {String} permalink_url
 */
TaskResponse.prototype.permalink_url = undefined;

