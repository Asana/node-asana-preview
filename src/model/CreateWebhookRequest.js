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
import WebhookRequest from './WebhookRequest';

/**
 * The CreateWebhookRequest model module.
 * @module model/CreateWebhookRequest
 * @version 1.0.4
 */
class CreateWebhookRequest {
    /**
     * Constructs a new <code>CreateWebhookRequest</code>.
     * @alias module:model/CreateWebhookRequest
     */
    constructor() { 
        
        CreateWebhookRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateWebhookRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateWebhookRequest} obj Optional instance to populate.
     * @return {module:model/CreateWebhookRequest} The populated <code>CreateWebhookRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateWebhookRequest();

            if (data.hasOwnProperty('data')) {
                obj['data'] = WebhookRequest.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/WebhookRequest} data
 */
CreateWebhookRequest.prototype['data'] = undefined;






export default CreateWebhookRequest;

