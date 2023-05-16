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
import GoalMetricBase from './GoalMetricBase';
import Like from './Like';
import StatusUpdateCompact from './StatusUpdateCompact';
import TeamCompact from './TeamCompact';
import TimePeriodCompact from './TimePeriodCompact';
import UserCompact from './UserCompact';
import WorkspaceCompact from './WorkspaceCompact';

/**
 * The GoalResponseAllOf model module.
 * @module model/GoalResponseAllOf
 * @version 1.0.3
 */
class GoalResponseAllOf {
    /**
     * Constructs a new <code>GoalResponseAllOf</code>.
     * @alias module:model/GoalResponseAllOf
     */
    constructor() { 
        
        GoalResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GoalResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GoalResponseAllOf} obj Optional instance to populate.
     * @return {module:model/GoalResponseAllOf} The populated <code>GoalResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GoalResponseAllOf();

            if (data.hasOwnProperty('likes')) {
                obj['likes'] = ApiClient.convertToType(data['likes'], [Like]);
            }
            if (data.hasOwnProperty('num_likes')) {
                obj['num_likes'] = ApiClient.convertToType(data['num_likes'], 'Number');
            }
            if (data.hasOwnProperty('team')) {
                obj['team'] = ApiClient.convertToType(data['team'], TeamCompact);
            }
            if (data.hasOwnProperty('workspace')) {
                obj['workspace'] = ApiClient.convertToType(data['workspace'], WorkspaceCompact);
            }
            if (data.hasOwnProperty('followers')) {
                obj['followers'] = ApiClient.convertToType(data['followers'], [UserCompact]);
            }
            if (data.hasOwnProperty('time_period')) {
                obj['time_period'] = ApiClient.convertToType(data['time_period'], TimePeriodCompact);
            }
            if (data.hasOwnProperty('metric')) {
                obj['metric'] = ApiClient.convertToType(data['metric'], GoalMetricBase);
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], UserCompact);
            }
            if (data.hasOwnProperty('current_status_update')) {
                obj['current_status_update'] = ApiClient.convertToType(data['current_status_update'], StatusUpdateCompact);
            }
        }
        return obj;
    }


}

/**
 * Array of likes for users who have liked this goal.
 * @member {Array.<module:model/Like>} likes
 */
GoalResponseAllOf.prototype['likes'] = undefined;

/**
 * The number of users who have liked this goal.
 * @member {Number} num_likes
 */
GoalResponseAllOf.prototype['num_likes'] = undefined;

/**
 * *Conditional*. This property is only present when the `workspace` provided is an organization.
 * @member {module:model/TeamCompact} team
 */
GoalResponseAllOf.prototype['team'] = undefined;

/**
 * @member {module:model/WorkspaceCompact} workspace
 */
GoalResponseAllOf.prototype['workspace'] = undefined;

/**
 * Array of users who are members of this goal.
 * @member {Array.<module:model/UserCompact>} followers
 */
GoalResponseAllOf.prototype['followers'] = undefined;

/**
 * @member {module:model/TimePeriodCompact} time_period
 */
GoalResponseAllOf.prototype['time_period'] = undefined;

/**
 * @member {module:model/GoalMetricBase} metric
 */
GoalResponseAllOf.prototype['metric'] = undefined;

/**
 * @member {module:model/UserCompact} owner
 */
GoalResponseAllOf.prototype['owner'] = undefined;

/**
 * The latest `status_update` posted to this goal.
 * @member {module:model/StatusUpdateCompact} current_status_update
 */
GoalResponseAllOf.prototype['current_status_update'] = undefined;






export default GoalResponseAllOf;

