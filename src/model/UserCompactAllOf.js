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
 * The UserCompactAllOf model module.
 * @module model/UserCompactAllOf
 * @version 1.0.1
 */
class UserCompactAllOf {
    /**
     * Constructs a new <code>UserCompactAllOf</code>.
     * A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
     * @alias module:model/UserCompactAllOf
     */
    constructor() { 
        
        UserCompactAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserCompactAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserCompactAllOf} obj Optional instance to populate.
     * @return {module:model/UserCompactAllOf} The populated <code>UserCompactAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserCompactAllOf();

            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], Object);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Object} resource_type
 */
UserCompactAllOf.prototype['resource_type'] = undefined;

/**
 * *Read-only except when same user as requester*. The user’s name.
 * @member {String} name
 */
UserCompactAllOf.prototype['name'] = undefined;






export default UserCompactAllOf;

