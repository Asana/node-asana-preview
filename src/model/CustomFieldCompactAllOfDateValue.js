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
 * The CustomFieldCompactAllOfDateValue model module.
 * @module model/CustomFieldCompactAllOfDateValue
 * @version 1.0.0
 */
class CustomFieldCompactAllOfDateValue {
    /**
     * Constructs a new <code>CustomFieldCompactAllOfDateValue</code>.
     * *Conditional*. Only relevant for custom fields of type &#x60;date&#x60;. This object reflects the chosen date (and optionally, time) value of a &#x60;date&#x60; custom field. If no date is selected, the value of &#x60;date_value&#x60; will be &#x60;null&#x60;.
     * @alias module:model/CustomFieldCompactAllOfDateValue
     */
    constructor() { 
        
        CustomFieldCompactAllOfDateValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomFieldCompactAllOfDateValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomFieldCompactAllOfDateValue} obj Optional instance to populate.
     * @return {module:model/CustomFieldCompactAllOfDateValue} The populated <code>CustomFieldCompactAllOfDateValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomFieldCompactAllOfDateValue();

            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('date_time')) {
                obj['date_time'] = ApiClient.convertToType(data['date_time'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A string representing the date in YYYY-MM-DD format.
 * @member {String} date
 */
CustomFieldCompactAllOfDateValue.prototype['date'] = undefined;

/**
 * A string representing the date in ISO 8601 format. If no time value is selected, the value of `date-time` will be `null`.
 * @member {String} date_time
 */
CustomFieldCompactAllOfDateValue.prototype['date_time'] = undefined;






export default CustomFieldCompactAllOfDateValue;

