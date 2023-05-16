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
import AsanaResource from './AsanaResource';
import GoalCompact from './GoalCompact';
import GoalMembershipCompactAllOf from './GoalMembershipCompactAllOf';
import MemberCompact from './MemberCompact';

/**
 * The GoalMembershipCompact model module.
 * @module model/GoalMembershipCompact
 * @version 1.0.3
 */
class GoalMembershipCompact {
    /**
     * Constructs a new <code>GoalMembershipCompact</code>.
     * @alias module:model/GoalMembershipCompact
     * @implements module:model/AsanaResource
     * @implements module:model/GoalMembershipCompactAllOf
     */
    constructor() { 
        AsanaResource.initialize(this);GoalMembershipCompactAllOf.initialize(this);
        GoalMembershipCompact.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GoalMembershipCompact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GoalMembershipCompact} obj Optional instance to populate.
     * @return {module:model/GoalMembershipCompact} The populated <code>GoalMembershipCompact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GoalMembershipCompact();
            AsanaResource.constructFromObject(data, obj);
            GoalMembershipCompactAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
            if (data.hasOwnProperty('member')) {
                obj['member'] = MemberCompact.constructFromObject(data['member']);
            }
            if (data.hasOwnProperty('goal')) {
                obj['goal'] = GoalCompact.constructFromObject(data['goal']);
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
GoalMembershipCompact.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
GoalMembershipCompact.prototype['resource_type'] = undefined;

/**
 * @member {module:model/MemberCompact} member
 */
GoalMembershipCompact.prototype['member'] = undefined;

/**
 * @member {module:model/GoalCompact} goal
 */
GoalMembershipCompact.prototype['goal'] = undefined;

/**
 * Describes if the member is comment only in goal.
 * @member {Boolean} is_commenter
 */
GoalMembershipCompact.prototype['is_commenter'] = undefined;

/**
 * Describes if the member is editor in goal.
 * @member {Boolean} is_editor
 */
GoalMembershipCompact.prototype['is_editor'] = undefined;


// Implement AsanaResource interface:
/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
AsanaResource.prototype['gid'] = undefined;
/**
 * The base type of this resource.
 * @member {String} resource_type
 */
AsanaResource.prototype['resource_type'] = undefined;
// Implement GoalMembershipCompactAllOf interface:
/**
 * @member {module:model/MemberCompact} member
 */
GoalMembershipCompactAllOf.prototype['member'] = undefined;
/**
 * @member {module:model/GoalCompact} goal
 */
GoalMembershipCompactAllOf.prototype['goal'] = undefined;
/**
 * Describes if the member is comment only in goal.
 * @member {Boolean} is_commenter
 */
GoalMembershipCompactAllOf.prototype['is_commenter'] = undefined;
/**
 * Describes if the member is editor in goal.
 * @member {Boolean} is_editor
 */
GoalMembershipCompactAllOf.prototype['is_editor'] = undefined;




export default GoalMembershipCompact;
