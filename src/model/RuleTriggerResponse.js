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
 * The RuleTriggerResponse model module.
 * @module model/RuleTriggerResponse
 * @version 1.0.3
 */
class RuleTriggerResponse {
    /**
     * Constructs a new <code>RuleTriggerResponse</code>.
     * @alias module:model/RuleTriggerResponse
     */
    constructor() { 
        
        RuleTriggerResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RuleTriggerResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RuleTriggerResponse} obj Optional instance to populate.
     * @return {module:model/RuleTriggerResponse} The populated <code>RuleTriggerResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuleTriggerResponse();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Message providing more detail about the result
 * @member {String} message
 */
RuleTriggerResponse.prototype['message'] = undefined;






export default RuleTriggerResponse;

