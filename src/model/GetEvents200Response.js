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
import EventResponse from './EventResponse';

/**
 * The GetEvents200Response model module.
 * @module model/GetEvents200Response
 * @version 1.0.0
 */
class GetEvents200Response {
    /**
     * Constructs a new <code>GetEvents200Response</code>.
     * The full record for all events that have occurred since the sync token was created.
     * @alias module:model/GetEvents200Response
     */
    constructor() { 
        
        GetEvents200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetEvents200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetEvents200Response} obj Optional instance to populate.
     * @return {module:model/GetEvents200Response} The populated <code>GetEvents200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetEvents200Response();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [EventResponse]);
            }
            if (data.hasOwnProperty('sync')) {
                obj['sync'] = ApiClient.convertToType(data['sync'], 'String');
            }
            if (data.hasOwnProperty('has_more')) {
                obj['has_more'] = ApiClient.convertToType(data['has_more'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/EventResponse>} data
 */
GetEvents200Response.prototype['data'] = undefined;

/**
 * A sync token to be used with the next call to the /events endpoint.
 * @member {String} sync
 */
GetEvents200Response.prototype['sync'] = undefined;

/**
 * Indicates whether there are more events to pull.
 * @member {Boolean} has_more
 */
GetEvents200Response.prototype['has_more'] = undefined;






export default GetEvents200Response;

