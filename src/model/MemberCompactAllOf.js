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
 * The MemberCompactAllOf model module.
 * @module model/MemberCompactAllOf
 * @version 1.0.3
 */
class MemberCompactAllOf {
    /**
     * Constructs a new <code>MemberCompactAllOf</code>.
     * A *member* object represents either a team or user.
     * @alias module:model/MemberCompactAllOf
     */
    constructor() { 
        
        MemberCompactAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MemberCompactAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MemberCompactAllOf} obj Optional instance to populate.
     * @return {module:model/MemberCompactAllOf} The populated <code>MemberCompactAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MemberCompactAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the member
 * @member {String} name
 */
MemberCompactAllOf.prototype['name'] = undefined;

/**
 * The type of the member (team or user)
 * @member {String} resource_type
 */
MemberCompactAllOf.prototype['resource_type'] = undefined;






export default MemberCompactAllOf;
