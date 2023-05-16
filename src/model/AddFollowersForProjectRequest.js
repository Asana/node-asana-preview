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
import AddFollowersRequest from './AddFollowersRequest';

/**
 * The AddFollowersForProjectRequest model module.
 * @module model/AddFollowersForProjectRequest
 * @version 1.0.3
 */
class AddFollowersForProjectRequest {
    /**
     * Constructs a new <code>AddFollowersForProjectRequest</code>.
     * @alias module:model/AddFollowersForProjectRequest
     */
    constructor() { 
        
        AddFollowersForProjectRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddFollowersForProjectRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddFollowersForProjectRequest} obj Optional instance to populate.
     * @return {module:model/AddFollowersForProjectRequest} The populated <code>AddFollowersForProjectRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddFollowersForProjectRequest();

            if (data.hasOwnProperty('data')) {
                obj['data'] = AddFollowersRequest.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/AddFollowersRequest} data
 */
AddFollowersForProjectRequest.prototype['data'] = undefined;






export default AddFollowersForProjectRequest;

