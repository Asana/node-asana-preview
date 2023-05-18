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
import AuditLogEventActor from './AuditLogEventActor';
import AuditLogEventContext from './AuditLogEventContext';
import AuditLogEventResource from './AuditLogEventResource';

/**
 * The AuditLogEvent model module.
 * @module model/AuditLogEvent
 * @version 1.0.4
 */
class AuditLogEvent {
    /**
     * Constructs a new <code>AuditLogEvent</code>.
     * An object representing a single event within an Asana domain.  Every audit log event is comprised of an &#x60;event_type&#x60;, &#x60;actor&#x60;, &#x60;resource&#x60;, and &#x60;context&#x60;. Some events will include additional metadata about the event under &#x60;details&#x60;. See our [currently supported list of events](/docs/audit-log-events#supported-audit-log-events) for more details.
     * @alias module:model/AuditLogEvent
     */
    constructor() { 
        
        AuditLogEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuditLogEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuditLogEvent} obj Optional instance to populate.
     * @return {module:model/AuditLogEvent} The populated <code>AuditLogEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuditLogEvent();

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('event_type')) {
                obj['event_type'] = ApiClient.convertToType(data['event_type'], 'String');
            }
            if (data.hasOwnProperty('event_category')) {
                obj['event_category'] = ApiClient.convertToType(data['event_category'], 'String');
            }
            if (data.hasOwnProperty('actor')) {
                obj['actor'] = AuditLogEventActor.constructFromObject(data['actor']);
            }
            if (data.hasOwnProperty('resource')) {
                obj['resource'] = AuditLogEventResource.constructFromObject(data['resource']);
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], Object);
            }
            if (data.hasOwnProperty('context')) {
                obj['context'] = AuditLogEventContext.constructFromObject(data['context']);
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the `AuditLogEvent`, as a string.
 * @member {String} gid
 */
AuditLogEvent.prototype['gid'] = undefined;

/**
 * The time the event was created.
 * @member {Date} created_at
 */
AuditLogEvent.prototype['created_at'] = undefined;

/**
 * The type of the event.
 * @member {String} event_type
 */
AuditLogEvent.prototype['event_type'] = undefined;

/**
 * The category that this `event_type` belongs to.
 * @member {String} event_category
 */
AuditLogEvent.prototype['event_category'] = undefined;

/**
 * @member {module:model/AuditLogEventActor} actor
 */
AuditLogEvent.prototype['actor'] = undefined;

/**
 * @member {module:model/AuditLogEventResource} resource
 */
AuditLogEvent.prototype['resource'] = undefined;

/**
 * Event specific details. The schema will vary depending on the `event_type`.
 * @member {Object} details
 */
AuditLogEvent.prototype['details'] = undefined;

/**
 * @member {module:model/AuditLogEventContext} context
 */
AuditLogEvent.prototype['context'] = undefined;






export default AuditLogEvent;

