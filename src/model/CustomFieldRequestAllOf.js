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
 * The CustomFieldRequestAllOf model module.
 * @module model/CustomFieldRequestAllOf
 * @version 1.0.3
 */
class CustomFieldRequestAllOf {
    /**
     * Constructs a new <code>CustomFieldRequestAllOf</code>.
     * @alias module:model/CustomFieldRequestAllOf
     * @param workspace {String} *Create-Only* The workspace to create a custom field in.
     */
    constructor(workspace) { 
        
        CustomFieldRequestAllOf.initialize(this, workspace);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, workspace) { 
        obj['workspace'] = workspace;
    }

    /**
     * Constructs a <code>CustomFieldRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomFieldRequestAllOf} obj Optional instance to populate.
     * @return {module:model/CustomFieldRequestAllOf} The populated <code>CustomFieldRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomFieldRequestAllOf();

            if (data.hasOwnProperty('workspace')) {
                obj['workspace'] = ApiClient.convertToType(data['workspace'], 'String');
            }
            if (data.hasOwnProperty('owned_by_app')) {
                obj['owned_by_app'] = ApiClient.convertToType(data['owned_by_app'], 'Boolean');
            }
            if (data.hasOwnProperty('people_value')) {
                obj['people_value'] = ApiClient.convertToType(data['people_value'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * *Create-Only* The workspace to create a custom field in.
 * @member {String} workspace
 */
CustomFieldRequestAllOf.prototype['workspace'] = undefined;

/**
 * *Allow-listed*. Instructs the API that this Custom Field is app-owned. This parameter is allow-listed to specific apps at this point in time. For apps that are not allow-listed, providing this parameter will result in a `403 Forbidden`.
 * @member {Boolean} owned_by_app
 */
CustomFieldRequestAllOf.prototype['owned_by_app'] = undefined;

/**
 * *Conditional*. Only relevant for custom fields of type `people`. This array of user GIDs reflects the users to be written to a `people` custom field. Note that *write* operations will replace existing users (if any) in the custom field with the users specified in this array.
 * @member {Array.<String>} people_value
 */
CustomFieldRequestAllOf.prototype['people_value'] = undefined;






export default CustomFieldRequestAllOf;
