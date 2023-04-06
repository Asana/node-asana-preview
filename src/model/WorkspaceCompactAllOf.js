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
 * The WorkspaceCompactAllOf model module.
 * @module model/WorkspaceCompactAllOf
 * @version 1.0.1
 */
class WorkspaceCompactAllOf {
    /**
     * Constructs a new <code>WorkspaceCompactAllOf</code>.
     * A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
     * @alias module:model/WorkspaceCompactAllOf
     */
    constructor() { 
        
        WorkspaceCompactAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkspaceCompactAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkspaceCompactAllOf} obj Optional instance to populate.
     * @return {module:model/WorkspaceCompactAllOf} The populated <code>WorkspaceCompactAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkspaceCompactAllOf();

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
WorkspaceCompactAllOf.prototype['resource_type'] = undefined;

/**
 * The name of the workspace.
 * @member {String} name
 */
WorkspaceCompactAllOf.prototype['name'] = undefined;






export default WorkspaceCompactAllOf;

