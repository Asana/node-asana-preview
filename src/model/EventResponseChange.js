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
 * The EventResponseChange model module.
 * @module model/EventResponseChange
 * @version 1.0.3
 */
class EventResponseChange {
    /**
     * Constructs a new <code>EventResponseChange</code>.
     * Information about the type of change that has occurred. This field is only present when the value of the property &#x60;action&#x60;, describing the action taken on the **resource**, is &#x60;changed&#x60;.
     * @alias module:model/EventResponseChange
     */
    constructor() { 
        
        EventResponseChange.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventResponseChange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventResponseChange} obj Optional instance to populate.
     * @return {module:model/EventResponseChange} The populated <code>EventResponseChange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventResponseChange();

            if (data.hasOwnProperty('field')) {
                obj['field'] = ApiClient.convertToType(data['field'], 'String');
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('new_value')) {
                obj['new_value'] = ApiClient.convertToType(data['new_value'], Object);
            }
            if (data.hasOwnProperty('added_value')) {
                obj['added_value'] = ApiClient.convertToType(data['added_value'], Object);
            }
            if (data.hasOwnProperty('removed_value')) {
                obj['removed_value'] = ApiClient.convertToType(data['removed_value'], Object);
            }
        }
        return obj;
    }


}

/**
 * The name of the field that has changed in the resource.
 * @member {String} field
 */
EventResponseChange.prototype['field'] = undefined;

/**
 * The type of action taken on the **field** which has been changed.  This can be one of `changed`, `added`, or `removed` depending on the nature of the change.
 * @member {String} action
 */
EventResponseChange.prototype['action'] = undefined;

/**
 * *Conditional.* This property is only present when the **field's** `action` is `changed` _and_ the `new_value` is an Asana resource. This will be only the `gid` and `resource_type` of the resource when the events come from webhooks; this will be the compact representation (and can have fields expanded with [opt_fields](/docs/inputoutput-options)) when using the [get events](/reference/getevents) endpoint.
 * @member {Object} new_value
 */
EventResponseChange.prototype['new_value'] = undefined;

/**
 * *Conditional.* This property is only present when the **field's** `action` is `added` _and_ the `added_value` is an Asana resource. This will be only the `gid` and `resource_type` of the resource when the events come from webhooks; this will be the compact representation (and can have fields expanded with [opt_fields](/docs/inputoutput-options)) when using the [get events](/reference/getevents) endpoint.
 * @member {Object} added_value
 */
EventResponseChange.prototype['added_value'] = undefined;

/**
 * *Conditional.* This property is only present when the **field's** `action` is `removed` _and_ the `removed_value` is an Asana resource. This will be only the `gid` and `resource_type` of the resource when the events come from webhooks; this will be the compact representation (and can have fields expanded with [opt_fields](/docs/inputoutput-options)) when using the [get events](/reference/getevents) endpoint.
 * @member {Object} removed_value
 */
EventResponseChange.prototype['removed_value'] = undefined;






export default EventResponseChange;

