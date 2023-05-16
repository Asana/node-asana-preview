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
import StatusUpdateBase from './StatusUpdateBase';
import StatusUpdateRequestAllOf from './StatusUpdateRequestAllOf';

/**
 * The StatusUpdateRequest model module.
 * @module model/StatusUpdateRequest
 * @version 1.0.3
 */
class StatusUpdateRequest {
    /**
     * Constructs a new <code>StatusUpdateRequest</code>.
     * @alias module:model/StatusUpdateRequest
     * @implements module:model/StatusUpdateBase
     * @implements module:model/StatusUpdateRequestAllOf
     * @param text {String} The text content of the status update.
     * @param statusType {module:model/StatusUpdateRequest.StatusTypeEnum} The type associated with the status update. This represents the current state of the object this object is on.
     * @param parent {String} 
     */
    constructor(text, statusType, parent) { 
        StatusUpdateBase.initialize(this, text, statusType);StatusUpdateRequestAllOf.initialize(this, parent);
        StatusUpdateRequest.initialize(this, text, statusType, parent);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, text, statusType, parent) { 
        obj['text'] = text;
        obj['status_type'] = statusType;
        obj['parent'] = parent;
    }

    /**
     * Constructs a <code>StatusUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StatusUpdateRequest} obj Optional instance to populate.
     * @return {module:model/StatusUpdateRequest} The populated <code>StatusUpdateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StatusUpdateRequest();
            StatusUpdateBase.constructFromObject(data, obj);
            StatusUpdateRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('resource_subtype')) {
                obj['resource_subtype'] = ApiClient.convertToType(data['resource_subtype'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('html_text')) {
                obj['html_text'] = ApiClient.convertToType(data['html_text'], 'String');
            }
            if (data.hasOwnProperty('status_type')) {
                obj['status_type'] = ApiClient.convertToType(data['status_type'], 'String');
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = ApiClient.convertToType(data['parent'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
StatusUpdateRequest.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
StatusUpdateRequest.prototype['resource_type'] = undefined;

/**
 * The title of the status update.
 * @member {String} title
 */
StatusUpdateRequest.prototype['title'] = undefined;

/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning. The `resource_subtype`s for `status` objects represent the type of their parent.
 * @member {module:model/StatusUpdateRequest.ResourceSubtypeEnum} resource_subtype
 */
StatusUpdateRequest.prototype['resource_subtype'] = undefined;

/**
 * The text content of the status update.
 * @member {String} text
 */
StatusUpdateRequest.prototype['text'] = undefined;

/**
 * [Opt In](/docs/inputoutput-options). The text content of the status update with formatting as HTML.
 * @member {String} html_text
 */
StatusUpdateRequest.prototype['html_text'] = undefined;

/**
 * The type associated with the status update. This represents the current state of the object this object is on.
 * @member {module:model/StatusUpdateRequest.StatusTypeEnum} status_type
 */
StatusUpdateRequest.prototype['status_type'] = undefined;

/**
 * @member {String} parent
 */
StatusUpdateRequest.prototype['parent'] = undefined;


// Implement StatusUpdateBase interface:
/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
StatusUpdateBase.prototype['gid'] = undefined;
/**
 * The base type of this resource.
 * @member {String} resource_type
 */
StatusUpdateBase.prototype['resource_type'] = undefined;
/**
 * The title of the status update.
 * @member {String} title
 */
StatusUpdateBase.prototype['title'] = undefined;
/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning. The `resource_subtype`s for `status` objects represent the type of their parent.
 * @member {module:model/StatusUpdateBase.ResourceSubtypeEnum} resource_subtype
 */
StatusUpdateBase.prototype['resource_subtype'] = undefined;
/**
 * The text content of the status update.
 * @member {String} text
 */
StatusUpdateBase.prototype['text'] = undefined;
/**
 * [Opt In](/docs/inputoutput-options). The text content of the status update with formatting as HTML.
 * @member {String} html_text
 */
StatusUpdateBase.prototype['html_text'] = undefined;
/**
 * The type associated with the status update. This represents the current state of the object this object is on.
 * @member {module:model/StatusUpdateBase.StatusTypeEnum} status_type
 */
StatusUpdateBase.prototype['status_type'] = undefined;
// Implement StatusUpdateRequestAllOf interface:
/**
 * @member {String} parent
 */
StatusUpdateRequestAllOf.prototype['parent'] = undefined;



/**
 * Allowed values for the <code>resource_subtype</code> property.
 * @enum {String}
 * @readonly
 */
StatusUpdateRequest['ResourceSubtypeEnum'] = {

    /**
     * value: "project_status_update"
     * @const
     */
    "project_status_update": "project_status_update",

    /**
     * value: "portfolio_status_update"
     * @const
     */
    "portfolio_status_update": "portfolio_status_update",

    /**
     * value: "goal_status_update"
     * @const
     */
    "goal_status_update": "goal_status_update"
};


/**
 * Allowed values for the <code>status_type</code> property.
 * @enum {String}
 * @readonly
 */
StatusUpdateRequest['StatusTypeEnum'] = {

    /**
     * value: "on_track"
     * @const
     */
    "on_track": "on_track",

    /**
     * value: "at_risk"
     * @const
     */
    "at_risk": "at_risk",

    /**
     * value: "off_track"
     * @const
     */
    "off_track": "off_track",

    /**
     * value: "on_hold"
     * @const
     */
    "on_hold": "on_hold",

    /**
     * value: "complete"
     * @const
     */
    "complete": "complete",

    /**
     * value: "achieved"
     * @const
     */
    "achieved": "achieved",

    /**
     * value: "partial"
     * @const
     */
    "partial": "partial",

    /**
     * value: "missed"
     * @const
     */
    "missed": "missed",

    /**
     * value: "dropped"
     * @const
     */
    "dropped": "dropped"
};



export default StatusUpdateRequest;

