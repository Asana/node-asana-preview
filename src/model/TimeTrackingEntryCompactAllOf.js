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
import UserCompact from './UserCompact';

/**
 * The TimeTrackingEntryCompactAllOf model module.
 * @module model/TimeTrackingEntryCompactAllOf
 * @version 1.0.3
 */
class TimeTrackingEntryCompactAllOf {
    /**
     * Constructs a new <code>TimeTrackingEntryCompactAllOf</code>.
     * @alias module:model/TimeTrackingEntryCompactAllOf
     */
    constructor() { 
        
        TimeTrackingEntryCompactAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TimeTrackingEntryCompactAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeTrackingEntryCompactAllOf} obj Optional instance to populate.
     * @return {module:model/TimeTrackingEntryCompactAllOf} The populated <code>TimeTrackingEntryCompactAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TimeTrackingEntryCompactAllOf();

            if (data.hasOwnProperty('duration_minutes')) {
                obj['duration_minutes'] = ApiClient.convertToType(data['duration_minutes'], 'Number');
            }
            if (data.hasOwnProperty('entered_on')) {
                obj['entered_on'] = ApiClient.convertToType(data['entered_on'], 'Date');
            }
            if (data.hasOwnProperty('created_by')) {
                obj['created_by'] = UserCompact.constructFromObject(data['created_by']);
            }
        }
        return obj;
    }


}

/**
 * Time in minutes tracked by the entry.
 * @member {Number} duration_minutes
 */
TimeTrackingEntryCompactAllOf.prototype['duration_minutes'] = undefined;

/**
 * The day that this entry is logged on.
 * @member {Date} entered_on
 */
TimeTrackingEntryCompactAllOf.prototype['entered_on'] = undefined;

/**
 * @member {module:model/UserCompact} created_by
 */
TimeTrackingEntryCompactAllOf.prototype['created_by'] = undefined;






export default TimeTrackingEntryCompactAllOf;

