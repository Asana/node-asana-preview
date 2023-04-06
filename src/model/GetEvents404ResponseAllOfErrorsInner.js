/**
 * Asana
 * This is the interface for interacting with the Asana platform
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GetEvents404ResponseAllOfErrorsInner model module.
 * @module model/GetEvents404ResponseAllOfErrorsInner
 * @version 1.0.0
 */
class GetEvents404ResponseAllOfErrorsInner {
    /**
     * Constructs a new <code>GetEvents404ResponseAllOfErrorsInner</code>.
     * @alias module:model/GetEvents404ResponseAllOfErrorsInner
     */
    constructor() { 
        
        GetEvents404ResponseAllOfErrorsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetEvents404ResponseAllOfErrorsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetEvents404ResponseAllOfErrorsInner} obj Optional instance to populate.
     * @return {module:model/GetEvents404ResponseAllOfErrorsInner} The populated <code>GetEvents404ResponseAllOfErrorsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetEvents404ResponseAllOfErrorsInner();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Object} message
 */
GetEvents404ResponseAllOfErrorsInner.prototype['message'] = undefined;






export default GetEvents404ResponseAllOfErrorsInner;

