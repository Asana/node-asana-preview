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
import UserCompact from './UserCompact';

/**
 * The Like model module.
 * @module model/Like
 * @version 1.0.0
 */
class Like {
    /**
     * Constructs a new <code>Like</code>.
     * An object to represent a user&#39;s like.
     * @alias module:model/Like
     */
    constructor() { 
        
        Like.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Like</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Like} obj Optional instance to populate.
     * @return {module:model/Like} The populated <code>Like</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Like();

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = UserCompact.constructFromObject(data['user']);
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the object, as a string.
 * @member {String} gid
 */
Like.prototype['gid'] = undefined;

/**
 * @member {module:model/UserCompact} user
 */
Like.prototype['user'] = undefined;






export default Like;
