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
 * The GetEvents403ResponseAllOfErrorsInner model module.
 * @module model/GetEvents403ResponseAllOfErrorsInner
 * @version 1.0.2
 */
class GetEvents403ResponseAllOfErrorsInner {
    /**
     * Constructs a new <code>GetEvents403ResponseAllOfErrorsInner</code>.
     * @alias module:model/GetEvents403ResponseAllOfErrorsInner
     */
    constructor() { 
        
        GetEvents403ResponseAllOfErrorsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetEvents403ResponseAllOfErrorsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetEvents403ResponseAllOfErrorsInner} obj Optional instance to populate.
     * @return {module:model/GetEvents403ResponseAllOfErrorsInner} The populated <code>GetEvents403ResponseAllOfErrorsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetEvents403ResponseAllOfErrorsInner();

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
GetEvents403ResponseAllOfErrorsInner.prototype['message'] = undefined;






export default GetEvents403ResponseAllOfErrorsInner;

