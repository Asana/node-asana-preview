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
import UserResponse from './UserResponse';

/**
 * The GetUser200Response model module.
 * @module model/GetUser200Response
 * @version 1.0.3
 */
class GetUser200Response {
    /**
     * Constructs a new <code>GetUser200Response</code>.
     * @alias module:model/GetUser200Response
     */
    constructor() { 
        
        GetUser200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetUser200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetUser200Response} obj Optional instance to populate.
     * @return {module:model/GetUser200Response} The populated <code>GetUser200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetUser200Response();

            if (data.hasOwnProperty('data')) {
                obj['data'] = UserResponse.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/UserResponse} data
 */
GetUser200Response.prototype['data'] = undefined;






export default GetUser200Response;

