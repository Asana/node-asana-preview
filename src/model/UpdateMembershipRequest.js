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
import MembershipRequest from './MembershipRequest';

/**
 * The UpdateMembershipRequest model module.
 * @module model/UpdateMembershipRequest
 * @version 1.0.3
 */
class UpdateMembershipRequest {
    /**
     * Constructs a new <code>UpdateMembershipRequest</code>.
     * @alias module:model/UpdateMembershipRequest
     */
    constructor() { 
        
        UpdateMembershipRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateMembershipRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateMembershipRequest} obj Optional instance to populate.
     * @return {module:model/UpdateMembershipRequest} The populated <code>UpdateMembershipRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateMembershipRequest();

            if (data.hasOwnProperty('data')) {
                obj['data'] = MembershipRequest.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MembershipRequest} data
 */
UpdateMembershipRequest.prototype['data'] = undefined;






export default UpdateMembershipRequest;

