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
import TimeTrackingEntryCompact from './TimeTrackingEntryCompact';

/**
 * The GetTimeTrackingEntriesForTask200Response model module.
 * @module model/GetTimeTrackingEntriesForTask200Response
 * @version 1.0.3
 */
class GetTimeTrackingEntriesForTask200Response {
    /**
     * Constructs a new <code>GetTimeTrackingEntriesForTask200Response</code>.
     * @alias module:model/GetTimeTrackingEntriesForTask200Response
     */
    constructor() { 
        
        GetTimeTrackingEntriesForTask200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTimeTrackingEntriesForTask200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTimeTrackingEntriesForTask200Response} obj Optional instance to populate.
     * @return {module:model/GetTimeTrackingEntriesForTask200Response} The populated <code>GetTimeTrackingEntriesForTask200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTimeTrackingEntriesForTask200Response();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [TimeTrackingEntryCompact]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/TimeTrackingEntryCompact>} data
 */
GetTimeTrackingEntriesForTask200Response.prototype['data'] = undefined;






export default GetTimeTrackingEntriesForTask200Response;
