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
 * The AsanaNamedResourceAllOf model module.
 * @module model/AsanaNamedResourceAllOf
 * @version 1.0.1
 */
class AsanaNamedResourceAllOf {
    /**
     * Constructs a new <code>AsanaNamedResourceAllOf</code>.
     * @alias module:model/AsanaNamedResourceAllOf
     */
    constructor() { 
        
        AsanaNamedResourceAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AsanaNamedResourceAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AsanaNamedResourceAllOf} obj Optional instance to populate.
     * @return {module:model/AsanaNamedResourceAllOf} The populated <code>AsanaNamedResourceAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AsanaNamedResourceAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the object.
 * @member {String} name
 */
AsanaNamedResourceAllOf.prototype['name'] = undefined;






export default AsanaNamedResourceAllOf;

