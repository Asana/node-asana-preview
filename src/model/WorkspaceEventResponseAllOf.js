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
 * The WorkspaceEventResponseAllOf model module.
 * @module model/WorkspaceEventResponseAllOf
 * @version 1.0.4
 */
class WorkspaceEventResponseAllOf {
    /**
     * Constructs a new <code>WorkspaceEventResponseAllOf</code>.
     * @alias module:model/WorkspaceEventResponseAllOf
     */
    constructor() { 
        
        WorkspaceEventResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkspaceEventResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkspaceEventResponseAllOf} obj Optional instance to populate.
     * @return {module:model/WorkspaceEventResponseAllOf} The populated <code>WorkspaceEventResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkspaceEventResponseAllOf();

            if (data.hasOwnProperty('email_domains')) {
                obj['email_domains'] = ApiClient.convertToType(data['email_domains'], ['String']);
            }
            if (data.hasOwnProperty('is_organization')) {
                obj['is_organization'] = ApiClient.convertToType(data['is_organization'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The email domains that are associated with this workspace.
 * @member {Array.<String>} email_domains
 */
WorkspaceEventResponseAllOf.prototype['email_domains'] = undefined;

/**
 * Whether the workspace is an *organization*.
 * @member {Boolean} is_organization
 */
WorkspaceEventResponseAllOf.prototype['is_organization'] = undefined;






export default WorkspaceEventResponseAllOf;

