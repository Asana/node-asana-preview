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
 * The ScimUser model module.
 * @module model/ScimUser
 * @version 1.0.4
 */
class ScimUser {
    /**
     * Constructs a new <code>ScimUser</code>.
     * A user&#39;s scim information.
     * @alias module:model/ScimUser
     */
    constructor() { 
        
        ScimUser.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScimUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScimUser} obj Optional instance to populate.
     * @return {module:model/ScimUser} The populated <code>ScimUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScimUser();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Scim Name
 * @member {String} name
 */
ScimUser.prototype['name'] = undefined;






export default ScimUser;

