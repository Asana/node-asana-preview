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
import UserCompact from './UserCompact';
import WorkspaceCompact from './WorkspaceCompact';

/**
 * The WorkspaceMembershipCompactAllOf model module.
 * @module model/WorkspaceMembershipCompactAllOf
 * @version 1.0.3
 */
class WorkspaceMembershipCompactAllOf {
    /**
     * Constructs a new <code>WorkspaceMembershipCompactAllOf</code>.
     * This object determines if a user is a member of a workspace.
     * @alias module:model/WorkspaceMembershipCompactAllOf
     */
    constructor() { 
        
        WorkspaceMembershipCompactAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkspaceMembershipCompactAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkspaceMembershipCompactAllOf} obj Optional instance to populate.
     * @return {module:model/WorkspaceMembershipCompactAllOf} The populated <code>WorkspaceMembershipCompactAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkspaceMembershipCompactAllOf();

            if (data.hasOwnProperty('user')) {
                obj['user'] = UserCompact.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('workspace')) {
                obj['workspace'] = WorkspaceCompact.constructFromObject(data['workspace']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/UserCompact} user
 */
WorkspaceMembershipCompactAllOf.prototype['user'] = undefined;

/**
 * @member {module:model/WorkspaceCompact} workspace
 */
WorkspaceMembershipCompactAllOf.prototype['workspace'] = undefined;






export default WorkspaceMembershipCompactAllOf;

