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
import ErrorResponse from './ErrorResponse';
import GetEvents401ResponseAllOf from './GetEvents401ResponseAllOf';
import GetEvents401ResponseAllOfErrorsInner from './GetEvents401ResponseAllOfErrorsInner';

/**
 * The GetEvents401Response model module.
 * @module model/GetEvents401Response
 * @version 1.0.0
 */
class GetEvents401Response {
    /**
     * Constructs a new <code>GetEvents401Response</code>.
     * @alias module:model/GetEvents401Response
     * @implements module:model/ErrorResponse
     * @implements module:model/GetEvents401ResponseAllOf
     */
    constructor() { 
        ErrorResponse.initialize(this);GetEvents401ResponseAllOf.initialize(this);
        GetEvents401Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetEvents401Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetEvents401Response} obj Optional instance to populate.
     * @return {module:model/GetEvents401Response} The populated <code>GetEvents401Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetEvents401Response();
            ErrorResponse.constructFromObject(data, obj);
            GetEvents401ResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [GetEvents401ResponseAllOfErrorsInner]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/GetEvents401ResponseAllOfErrorsInner>} errors
 */
GetEvents401Response.prototype['errors'] = undefined;


// Implement ErrorResponse interface:
/**
 * @member {Array.<module:model/ErrorResponseErrorsInner>} errors
 */
ErrorResponse.prototype['errors'] = undefined;
// Implement GetEvents401ResponseAllOf interface:
/**
 * @member {Array.<module:model/GetEvents401ResponseAllOfErrorsInner>} errors
 */
GetEvents401ResponseAllOf.prototype['errors'] = undefined;




export default GetEvents401Response;

