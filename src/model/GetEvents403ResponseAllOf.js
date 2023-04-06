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
import GetEvents403ResponseAllOfErrorsInner from './GetEvents403ResponseAllOfErrorsInner';

/**
 * The GetEvents403ResponseAllOf model module.
 * @module model/GetEvents403ResponseAllOf
 * @version 1.0.1
 */
class GetEvents403ResponseAllOf {
    /**
     * Constructs a new <code>GetEvents403ResponseAllOf</code>.
     * @alias module:model/GetEvents403ResponseAllOf
     */
    constructor() { 
        
        GetEvents403ResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetEvents403ResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetEvents403ResponseAllOf} obj Optional instance to populate.
     * @return {module:model/GetEvents403ResponseAllOf} The populated <code>GetEvents403ResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetEvents403ResponseAllOf();

            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [GetEvents403ResponseAllOfErrorsInner]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/GetEvents403ResponseAllOfErrorsInner>} errors
 */
GetEvents403ResponseAllOf.prototype['errors'] = undefined;






export default GetEvents403ResponseAllOf;

