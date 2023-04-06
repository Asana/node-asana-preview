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
import GetEvents412ResponseAllOf from './GetEvents412ResponseAllOf';
import GetEvents412ResponseAllOfErrorsInner from './GetEvents412ResponseAllOfErrorsInner';

/**
 * The GetEvents412Response model module.
 * @module model/GetEvents412Response
 * @version 1.0.1
 */
class GetEvents412Response {
    /**
     * Constructs a new <code>GetEvents412Response</code>.
     * @alias module:model/GetEvents412Response
     * @implements module:model/ErrorResponse
     * @implements module:model/GetEvents412ResponseAllOf
     */
    constructor() { 
        ErrorResponse.initialize(this);GetEvents412ResponseAllOf.initialize(this);
        GetEvents412Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetEvents412Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetEvents412Response} obj Optional instance to populate.
     * @return {module:model/GetEvents412Response} The populated <code>GetEvents412Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetEvents412Response();
            ErrorResponse.constructFromObject(data, obj);
            GetEvents412ResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [GetEvents412ResponseAllOfErrorsInner]);
            }
            if (data.hasOwnProperty('sync')) {
                obj['sync'] = ApiClient.convertToType(data['sync'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/GetEvents412ResponseAllOfErrorsInner>} errors
 */
GetEvents412Response.prototype['errors'] = undefined;

/**
 * A new sync token. Use this with the next call to the /events endpoint.
 * @member {String} sync
 */
GetEvents412Response.prototype['sync'] = undefined;


// Implement ErrorResponse interface:
/**
 * @member {Array.<module:model/ErrorResponseErrorsInner>} errors
 */
ErrorResponse.prototype['errors'] = undefined;
// Implement GetEvents412ResponseAllOf interface:
/**
 * @member {Array.<module:model/GetEvents412ResponseAllOfErrorsInner>} errors
 */
GetEvents412ResponseAllOf.prototype['errors'] = undefined;
/**
 * A new sync token. Use this with the next call to the /events endpoint.
 * @member {String} sync
 */
GetEvents412ResponseAllOf.prototype['sync'] = undefined;




export default GetEvents412Response;

