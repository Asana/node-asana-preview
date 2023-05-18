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
 * The StoryRequest model module.
 * @module model/StoryRequest
 * @version 1.0.4
 */
class StoryRequest {
    /**
     * Constructs a new <code>StoryRequest</code>.
     * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A story represents an activity associated with an object in the Asana system.
     * @alias module:model/StoryRequest
     */
    constructor() { 
        
        StoryRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StoryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StoryRequest} obj Optional instance to populate.
     * @return {module:model/StoryRequest} The populated <code>StoryRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StoryRequest();

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
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
            if (data.hasOwnProperty('is_pinned')) {
                obj['is_pinned'] = ApiClient.convertToType(data['is_pinned'], 'Boolean');
            }
            if (data.hasOwnProperty('sticker_name')) {
                obj['sticker_name'] = ApiClient.convertToType(data['sticker_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
StoryRequest.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
StoryRequest.prototype['resource_type'] = undefined;

/**
 * The time at which this resource was created.
 * @member {Date} created_at
 */
StoryRequest.prototype['created_at'] = undefined;

/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
 * @member {String} resource_subtype
 */
StoryRequest.prototype['resource_subtype'] = undefined;

/**
 * The plain text of the comment to add. Cannot be used with html_text.
 * @member {String} text
 */
StoryRequest.prototype['text'] = undefined;

/**
 * [Opt In](/docs/inputoutput-options). HTML formatted text for a comment. This will not include the name of the creator.
 * @member {String} html_text
 */
StoryRequest.prototype['html_text'] = undefined;

/**
 * *Conditional*. Whether the story should be pinned on the resource.
 * @member {Boolean} is_pinned
 */
StoryRequest.prototype['is_pinned'] = undefined;

/**
 * The name of the sticker in this story. `null` if there is no sticker.
 * @member {module:model/StoryRequest.StickerNameEnum} sticker_name
 */
StoryRequest.prototype['sticker_name'] = undefined;





/**
 * Allowed values for the <code>sticker_name</code> property.
 * @enum {String}
 * @readonly
 */
StoryRequest['StickerNameEnum'] = {

    /**
     * value: "green_checkmark"
     * @const
     */
    "green_checkmark": "green_checkmark",

    /**
     * value: "people_dancing"
     * @const
     */
    "people_dancing": "people_dancing",

    /**
     * value: "dancing_unicorn"
     * @const
     */
    "dancing_unicorn": "dancing_unicorn",

    /**
     * value: "heart"
     * @const
     */
    "heart": "heart",

    /**
     * value: "party_popper"
     * @const
     */
    "party_popper": "party_popper",

    /**
     * value: "people_waving_flags"
     * @const
     */
    "people_waving_flags": "people_waving_flags",

    /**
     * value: "splashing_narwhal"
     * @const
     */
    "splashing_narwhal": "splashing_narwhal",

    /**
     * value: "trophy"
     * @const
     */
    "trophy": "trophy",

    /**
     * value: "yeti_riding_unicorn"
     * @const
     */
    "yeti_riding_unicorn": "yeti_riding_unicorn",

    /**
     * value: "celebrating_people"
     * @const
     */
    "celebrating_people": "celebrating_people",

    /**
     * value: "determined_climbers"
     * @const
     */
    "determined_climbers": "determined_climbers",

    /**
     * value: "phoenix_spreading_love"
     * @const
     */
    "phoenix_spreading_love": "phoenix_spreading_love"
};



export default StoryRequest;
