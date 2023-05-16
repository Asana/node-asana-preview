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

/**
 * The EnumOptionRequestAllOf model module.
 * @module model/EnumOptionRequestAllOf
 * @version 1.0.3
 */
class EnumOptionRequestAllOf {
    /**
     * Constructs a new <code>EnumOptionRequestAllOf</code>.
     * @alias module:model/EnumOptionRequestAllOf
     */
    constructor() { 
        
        EnumOptionRequestAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnumOptionRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnumOptionRequestAllOf} obj Optional instance to populate.
     * @return {module:model/EnumOptionRequestAllOf} The populated <code>EnumOptionRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnumOptionRequestAllOf();

            if (data.hasOwnProperty('insert_before')) {
                obj['insert_before'] = ApiClient.convertToType(data['insert_before'], 'String');
            }
            if (data.hasOwnProperty('insert_after')) {
                obj['insert_after'] = ApiClient.convertToType(data['insert_after'], 'String');
            }
        }
        return obj;
    }


}

/**
 * An existing enum option within this custom field before which the new enum option should be inserted. Cannot be provided together with after_enum_option.
 * @member {String} insert_before
 */
EnumOptionRequestAllOf.prototype['insert_before'] = undefined;

/**
 * An existing enum option within this custom field after which the new enum option should be inserted. Cannot be provided together with before_enum_option.
 * @member {String} insert_after
 */
EnumOptionRequestAllOf.prototype['insert_after'] = undefined;






export default EnumOptionRequestAllOf;

