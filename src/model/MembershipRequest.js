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
 * The MembershipRequest model module.
 * @module model/MembershipRequest
 * @version 1.0.3
 */
class MembershipRequest {
    /**
     * Constructs a new <code>MembershipRequest</code>.
     * @alias module:model/MembershipRequest
     */
    constructor() { 
        
        MembershipRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MembershipRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MembershipRequest} obj Optional instance to populate.
     * @return {module:model/MembershipRequest} The populated <code>MembershipRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MembershipRequest();

            if (data.hasOwnProperty('is_active')) {
                obj['is_active'] = ApiClient.convertToType(data['is_active'], 'Boolean');
            }
            if (data.hasOwnProperty('is_guest')) {
                obj['is_guest'] = ApiClient.convertToType(data['is_guest'], 'Boolean');
            }
            if (data.hasOwnProperty('is_admin')) {
                obj['is_admin'] = ApiClient.convertToType(data['is_admin'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * *Optional*. Denotes if a member is active. Applies to all memberships
 * @member {Boolean} is_active
 */
MembershipRequest.prototype['is_active'] = undefined;

/**
 * *Optional*. Denotes if a member is a guest. Applies to only `team` memberships.
 * @member {Boolean} is_guest
 */
MembershipRequest.prototype['is_guest'] = undefined;

/**
 * *Optional*. Denotes if a member is an admin. Applies to only `team` memberships.
 * @member {Boolean} is_admin
 */
MembershipRequest.prototype['is_admin'] = undefined;






export default MembershipRequest;

