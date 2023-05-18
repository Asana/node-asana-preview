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

/**
 * The GoalRequest model module.
 * @module model/GoalRequest
 * @version 1.0.4
 */
class GoalRequest {
    /**
     * Constructs a new <code>GoalRequest</code>.
     * A generic Asana Resource, containing a globally unique identifier.
     * @alias module:model/GoalRequest
     */
    constructor() { 
        
        GoalRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GoalRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GoalRequest} obj Optional instance to populate.
     * @return {module:model/GoalRequest} The populated <code>GoalRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GoalRequest();

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('html_notes')) {
                obj['html_notes'] = ApiClient.convertToType(data['html_notes'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('due_on')) {
                obj['due_on'] = ApiClient.convertToType(data['due_on'], 'String');
            }
            if (data.hasOwnProperty('start_on')) {
                obj['start_on'] = ApiClient.convertToType(data['start_on'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('is_workspace_level')) {
                obj['is_workspace_level'] = ApiClient.convertToType(data['is_workspace_level'], 'Boolean');
            }
            if (data.hasOwnProperty('liked')) {
                obj['liked'] = ApiClient.convertToType(data['liked'], 'Boolean');
            }
            if (data.hasOwnProperty('team')) {
                obj['team'] = ApiClient.convertToType(data['team'], 'String');
            }
            if (data.hasOwnProperty('workspace')) {
                obj['workspace'] = ApiClient.convertToType(data['workspace'], 'String');
            }
            if (data.hasOwnProperty('followers')) {
                obj['followers'] = ApiClient.convertToType(data['followers'], ['String']);
            }
            if (data.hasOwnProperty('time_period')) {
                obj['time_period'] = ApiClient.convertToType(data['time_period'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
GoalRequest.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
GoalRequest.prototype['resource_type'] = undefined;

/**
 * The name of the goal.
 * @member {String} name
 */
GoalRequest.prototype['name'] = undefined;

/**
 * The notes of the goal with formatting as HTML.
 * @member {String} html_notes
 */
GoalRequest.prototype['html_notes'] = undefined;

/**
 * Free-form textual information associated with the goal (i.e. its description).
 * @member {String} notes
 */
GoalRequest.prototype['notes'] = undefined;

/**
 * The localized day on which this goal is due. This takes a date with format `YYYY-MM-DD`.
 * @member {String} due_on
 */
GoalRequest.prototype['due_on'] = undefined;

/**
 * The day on which work for this goal begins, or null if the goal has no start date. This takes a date with `YYYY-MM-DD` format, and cannot be set unless there is an accompanying due date.
 * @member {String} start_on
 */
GoalRequest.prototype['start_on'] = undefined;

/**
 * The current status of this goal. When the goal is open, its status can be `green`, `yellow`, and `red` to reflect \"On Track\", \"At Risk\", and \"Off Track\", respectively. When the goal is closed, the value can be `missed`, `achieved`, `partial`, or `dropped`. *Note* you can only write to this property if `metric` is set.
 * @member {String} status
 */
GoalRequest.prototype['status'] = undefined;

/**
 * *Conditional*. This property is only present when the `workspace` provided is an organization. Whether the goal belongs to the `workspace` (and is listed as part of the workspace’s goals) or not. If it isn’t a workspace-level goal, it is a team-level goal, and is associated with the goal’s team.
 * @member {Boolean} is_workspace_level
 */
GoalRequest.prototype['is_workspace_level'] = undefined;

/**
 * True if the goal is liked by the authorized user, false if not.
 * @member {Boolean} liked
 */
GoalRequest.prototype['liked'] = undefined;

/**
 * *Conditional*. This property is only present when the `workspace` provided is an organization.
 * @member {String} team
 */
GoalRequest.prototype['team'] = undefined;

/**
 * The `gid` of a workspace.
 * @member {String} workspace
 */
GoalRequest.prototype['workspace'] = undefined;

/**
 * @member {Array.<String>} followers
 */
GoalRequest.prototype['followers'] = undefined;

/**
 * The `gid` of a time period.
 * @member {String} time_period
 */
GoalRequest.prototype['time_period'] = undefined;

/**
 * The `gid` of a user.
 * @member {String} owner
 */
GoalRequest.prototype['owner'] = undefined;






export default GoalRequest;

