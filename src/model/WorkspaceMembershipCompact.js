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
import UserCompact from './UserCompact';
import WorkspaceCompact from './WorkspaceCompact';
import WorkspaceMembershipCompactAllOf from './WorkspaceMembershipCompactAllOf';

/**
 * The WorkspaceMembershipCompact model module.
 * @module model/WorkspaceMembershipCompact
 * @version 1.0.3
 */
class WorkspaceMembershipCompact {
    /**
     * Constructs a new <code>WorkspaceMembershipCompact</code>.
     * @alias module:model/WorkspaceMembershipCompact
     * @implements module:model/AsanaResource
     * @implements module:model/WorkspaceMembershipCompactAllOf
     */
    constructor() { 
        AsanaResource.initialize(this);WorkspaceMembershipCompactAllOf.initialize(this);
        WorkspaceMembershipCompact.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkspaceMembershipCompact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkspaceMembershipCompact} obj Optional instance to populate.
     * @return {module:model/WorkspaceMembershipCompact} The populated <code>WorkspaceMembershipCompact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkspaceMembershipCompact();
            AsanaResource.constructFromObject(data, obj);
            WorkspaceMembershipCompactAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
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
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
WorkspaceMembershipCompact.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
WorkspaceMembershipCompact.prototype['resource_type'] = undefined;

/**
 * @member {module:model/UserCompact} user
 */
WorkspaceMembershipCompact.prototype['user'] = undefined;

/**
 * @member {module:model/WorkspaceCompact} workspace
 */
WorkspaceMembershipCompact.prototype['workspace'] = undefined;


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
// Implement WorkspaceMembershipCompactAllOf interface:
/**
 * @member {module:model/UserCompact} user
 */
WorkspaceMembershipCompactAllOf.prototype['user'] = undefined;
/**
 * @member {module:model/WorkspaceCompact} workspace
 */
WorkspaceMembershipCompactAllOf.prototype['workspace'] = undefined;




export default WorkspaceMembershipCompact;
