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
import AsanaResource from './AsanaResource';
import EnumOptionAllOf from './EnumOptionAllOf';

/**
 * The EnumOption model module.
 * @module model/EnumOption
 * @version 1.0.1
 */
class EnumOption {
    /**
     * Constructs a new <code>EnumOption</code>.
     * @alias module:model/EnumOption
     * @implements module:model/AsanaResource
     * @implements module:model/EnumOptionAllOf
     */
    constructor() { 
        AsanaResource.initialize(this);EnumOptionAllOf.initialize(this);
        EnumOption.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnumOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnumOption} obj Optional instance to populate.
     * @return {module:model/EnumOption} The populated <code>EnumOption</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnumOption();
            AsanaResource.constructFromObject(data, obj);
            EnumOptionAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], Object);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
EnumOption.prototype['gid'] = undefined;

/**
 * @member {Object} resource_type
 */
EnumOption.prototype['resource_type'] = undefined;

/**
 * The name of the enum option.
 * @member {String} name
 */
EnumOption.prototype['name'] = undefined;

/**
 * Whether or not the enum option is a selectable value for the custom field.
 * @member {Boolean} enabled
 */
EnumOption.prototype['enabled'] = undefined;

/**
 * The color of the enum option. Defaults to ‘none’.
 * @member {String} color
 */
EnumOption.prototype['color'] = undefined;


// Implement AsanaResource interface:
/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
AsanaResource.prototype['gid'] = undefined;
/**
 * The base type of this resource.
 * @member {String} resource_type
 */
AsanaResource.prototype['resource_type'] = undefined;
// Implement EnumOptionAllOf interface:
/**
 * @member {Object} resource_type
 */
EnumOptionAllOf.prototype['resource_type'] = undefined;
/**
 * The name of the enum option.
 * @member {String} name
 */
EnumOptionAllOf.prototype['name'] = undefined;
/**
 * Whether or not the enum option is a selectable value for the custom field.
 * @member {Boolean} enabled
 */
EnumOptionAllOf.prototype['enabled'] = undefined;
/**
 * The color of the enum option. Defaults to ‘none’.
 * @member {String} color
 */
EnumOptionAllOf.prototype['color'] = undefined;




export default EnumOption;

