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
import Like from './Like';
import ProjectCompact from './ProjectCompact';
import UserCompact from './UserCompact';

/**
 * The StatusUpdateResponseAllOf model module.
 * @module model/StatusUpdateResponseAllOf
 * @version 1.0.3
 */
class StatusUpdateResponseAllOf {
    /**
     * Constructs a new <code>StatusUpdateResponseAllOf</code>.
     * @alias module:model/StatusUpdateResponseAllOf
     */
    constructor() { 
        
        StatusUpdateResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StatusUpdateResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StatusUpdateResponseAllOf} obj Optional instance to populate.
     * @return {module:model/StatusUpdateResponseAllOf} The populated <code>StatusUpdateResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StatusUpdateResponseAllOf();

            if (data.hasOwnProperty('author')) {
                obj['author'] = UserCompact.constructFromObject(data['author']);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('created_by')) {
                obj['created_by'] = UserCompact.constructFromObject(data['created_by']);
            }
            if (data.hasOwnProperty('hearted')) {
                obj['hearted'] = ApiClient.convertToType(data['hearted'], 'Boolean');
            }
            if (data.hasOwnProperty('hearts')) {
                obj['hearts'] = ApiClient.convertToType(data['hearts'], [Like]);
            }
            if (data.hasOwnProperty('liked')) {
                obj['liked'] = ApiClient.convertToType(data['liked'], 'Boolean');
            }
            if (data.hasOwnProperty('likes')) {
                obj['likes'] = ApiClient.convertToType(data['likes'], [Like]);
            }
            if (data.hasOwnProperty('modified_at')) {
                obj['modified_at'] = ApiClient.convertToType(data['modified_at'], 'Date');
            }
            if (data.hasOwnProperty('num_hearts')) {
                obj['num_hearts'] = ApiClient.convertToType(data['num_hearts'], 'Number');
            }
            if (data.hasOwnProperty('num_likes')) {
                obj['num_likes'] = ApiClient.convertToType(data['num_likes'], 'Number');
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = ApiClient.convertToType(data['parent'], ProjectCompact);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/UserCompact} author
 */
StatusUpdateResponseAllOf.prototype['author'] = undefined;

/**
 * The time at which this resource was created.
 * @member {Date} created_at
 */
StatusUpdateResponseAllOf.prototype['created_at'] = undefined;

/**
 * @member {module:model/UserCompact} created_by
 */
StatusUpdateResponseAllOf.prototype['created_by'] = undefined;

/**
 * *Deprecated - please use liked instead* True if the status is hearted by the authorized user, false if not.
 * @member {Boolean} hearted
 */
StatusUpdateResponseAllOf.prototype['hearted'] = undefined;

/**
 * *Deprecated - please use likes instead* Array of likes for users who have hearted this status.
 * @member {Array.<module:model/Like>} hearts
 */
StatusUpdateResponseAllOf.prototype['hearts'] = undefined;

/**
 * True if the status is liked by the authorized user, false if not.
 * @member {Boolean} liked
 */
StatusUpdateResponseAllOf.prototype['liked'] = undefined;

/**
 * Array of likes for users who have liked this status.
 * @member {Array.<module:model/Like>} likes
 */
StatusUpdateResponseAllOf.prototype['likes'] = undefined;

/**
 * The time at which this project status was last modified. *Note: This does not currently reflect any changes in associations such as comments that may have been added or removed from the status.*
 * @member {Date} modified_at
 */
StatusUpdateResponseAllOf.prototype['modified_at'] = undefined;

/**
 * *Deprecated - please use likes instead* The number of users who have hearted this status.
 * @member {Number} num_hearts
 */
StatusUpdateResponseAllOf.prototype['num_hearts'] = undefined;

/**
 * The number of users who have liked this status.
 * @member {Number} num_likes
 */
StatusUpdateResponseAllOf.prototype['num_likes'] = undefined;

/**
 * @member {module:model/ProjectCompact} parent
 */
StatusUpdateResponseAllOf.prototype['parent'] = undefined;






export default StatusUpdateResponseAllOf;

