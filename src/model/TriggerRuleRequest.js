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
import RuleTriggerRequest from './RuleTriggerRequest';

/**
 * The TriggerRuleRequest model module.
 * @module model/TriggerRuleRequest
 * @version 1.0.3
 */
class TriggerRuleRequest {
    /**
     * Constructs a new <code>TriggerRuleRequest</code>.
     * @alias module:model/TriggerRuleRequest
     */
    constructor() { 
        
        TriggerRuleRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TriggerRuleRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TriggerRuleRequest} obj Optional instance to populate.
     * @return {module:model/TriggerRuleRequest} The populated <code>TriggerRuleRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TriggerRuleRequest();

            if (data.hasOwnProperty('data')) {
                obj['data'] = RuleTriggerRequest.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/RuleTriggerRequest} data
 */
TriggerRuleRequest.prototype['data'] = undefined;






export default TriggerRuleRequest;

