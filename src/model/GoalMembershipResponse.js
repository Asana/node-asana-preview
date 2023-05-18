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
import GoalMembershipBaseGoal from './GoalMembershipBaseGoal';
import ProjectMembershipResponseMember from './ProjectMembershipResponseMember';

/**
 * The GoalMembershipResponse model module.
 * @module model/GoalMembershipResponse
 * @version 1.0.4
 */
class GoalMembershipResponse {
    /**
     * Constructs a new <code>GoalMembershipResponse</code>.
     * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. This object represents a user&#39;s connection to a goal.
     * @alias module:model/GoalMembershipResponse
     */
    constructor() { 
        
        GoalMembershipResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GoalMembershipResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GoalMembershipResponse} obj Optional instance to populate.
     * @return {module:model/GoalMembershipResponse} The populated <code>GoalMembershipResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GoalMembershipResponse();

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
            if (data.hasOwnProperty('member')) {
                obj['member'] = ProjectMembershipResponseMember.constructFromObject(data['member']);
            }
            if (data.hasOwnProperty('goal')) {
                obj['goal'] = GoalMembershipBaseGoal.constructFromObject(data['goal']);
            }
            if (data.hasOwnProperty('is_commenter')) {
                obj['is_commenter'] = ApiClient.convertToType(data['is_commenter'], 'Boolean');
            }
            if (data.hasOwnProperty('is_editor')) {
                obj['is_editor'] = ApiClient.convertToType(data['is_editor'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
GoalMembershipResponse.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
GoalMembershipResponse.prototype['resource_type'] = undefined;

/**
 * @member {module:model/ProjectMembershipResponseMember} member
 */
GoalMembershipResponse.prototype['member'] = undefined;

/**
 * @member {module:model/GoalMembershipBaseGoal} goal
 */
GoalMembershipResponse.prototype['goal'] = undefined;

/**
 * Describes if the member is comment only in goal.
 * @member {Boolean} is_commenter
 */
GoalMembershipResponse.prototype['is_commenter'] = undefined;

/**
 * Describes if the member is editor in goal.
 * @member {Boolean} is_editor
 */
GoalMembershipResponse.prototype['is_editor'] = undefined;






export default GoalMembershipResponse;

