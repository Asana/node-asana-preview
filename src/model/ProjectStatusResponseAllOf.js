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
 * The ProjectStatusResponseAllOf model module.
 * @module model/ProjectStatusResponseAllOf
 * @version 1.0.3
 */
class ProjectStatusResponseAllOf {
    /**
     * Constructs a new <code>ProjectStatusResponseAllOf</code>.
     * @alias module:model/ProjectStatusResponseAllOf
     */
    constructor() { 
        
        ProjectStatusResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProjectStatusResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectStatusResponseAllOf} obj Optional instance to populate.
     * @return {module:model/ProjectStatusResponseAllOf} The populated <code>ProjectStatusResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectStatusResponseAllOf();

            if (data.hasOwnProperty('author')) {
                obj['author'] = UserCompact.constructFromObject(data['author']);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('created_by')) {
                obj['created_by'] = UserCompact.constructFromObject(data['created_by']);
            }
            if (data.hasOwnProperty('modified_at')) {
                obj['modified_at'] = ApiClient.convertToType(data['modified_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/UserCompact} author
 */
ProjectStatusResponseAllOf.prototype['author'] = undefined;

/**
 * The time at which this resource was created.
 * @member {Date} created_at
 */
ProjectStatusResponseAllOf.prototype['created_at'] = undefined;

/**
 * @member {module:model/UserCompact} created_by
 */
ProjectStatusResponseAllOf.prototype['created_by'] = undefined;

/**
 * The time at which this project status was last modified. *Note: This does not currently reflect any changes in associations such as comments that may have been added or removed from the project status.*
 * @member {Date} modified_at
 */
ProjectStatusResponseAllOf.prototype['modified_at'] = undefined;






export default ProjectStatusResponseAllOf;

