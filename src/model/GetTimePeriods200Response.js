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
import TimePeriodCompact from './TimePeriodCompact';

/**
 * The GetTimePeriods200Response model module.
 * @module model/GetTimePeriods200Response
 * @version 1.0.3
 */
class GetTimePeriods200Response {
    /**
     * Constructs a new <code>GetTimePeriods200Response</code>.
     * @alias module:model/GetTimePeriods200Response
     */
    constructor() { 
        
        GetTimePeriods200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTimePeriods200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTimePeriods200Response} obj Optional instance to populate.
     * @return {module:model/GetTimePeriods200Response} The populated <code>GetTimePeriods200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTimePeriods200Response();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [TimePeriodCompact]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/TimePeriodCompact>} data
 */
GetTimePeriods200Response.prototype['data'] = undefined;






export default GetTimePeriods200Response;

