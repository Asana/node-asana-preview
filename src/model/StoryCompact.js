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
import AsanaResource from './AsanaResource';
import StoryCompactAllOf from './StoryCompactAllOf';
import UserCompact from './UserCompact';

/**
 * The StoryCompact model module.
 * @module model/StoryCompact
 * @version 1.0.3
 */
class StoryCompact {
    /**
     * Constructs a new <code>StoryCompact</code>.
     * @alias module:model/StoryCompact
     * @implements module:model/AsanaResource
     * @implements module:model/StoryCompactAllOf
     */
    constructor() { 
        AsanaResource.initialize(this);StoryCompactAllOf.initialize(this);
        StoryCompact.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StoryCompact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StoryCompact} obj Optional instance to populate.
     * @return {module:model/StoryCompact} The populated <code>StoryCompact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StoryCompact();
            AsanaResource.constructFromObject(data, obj);
            StoryCompactAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('created_by')) {
                obj['created_by'] = UserCompact.constructFromObject(data['created_by']);
            }
            if (data.hasOwnProperty('resource_subtype')) {
                obj['resource_subtype'] = ApiClient.convertToType(data['resource_subtype'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
StoryCompact.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
StoryCompact.prototype['resource_type'] = undefined;

/**
 * The time at which this resource was created.
 * @member {Date} created_at
 */
StoryCompact.prototype['created_at'] = undefined;

/**
 * @member {module:model/UserCompact} created_by
 */
StoryCompact.prototype['created_by'] = undefined;

/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
 * @member {String} resource_subtype
 */
StoryCompact.prototype['resource_subtype'] = undefined;

/**
 * *Create-only*. Human-readable text for the story or comment. This will not include the name of the creator. *Note: This is not guaranteed to be stable for a given type of story. For example, text for a reassignment may not always say “assigned to …” as the text for a story can both be edited and change based on the language settings of the user making the request.* Use the `resource_subtype` property to discover the action that created the story.
 * @member {String} text
 */
StoryCompact.prototype['text'] = undefined;


// Implement AsanaResource interface:
/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
AsanaResource.prototype['gid'] = undefined;
/**
 * The base type of this resource.
 * @member {String} resource_type
 */
AsanaResource.prototype['resource_type'] = undefined;
// Implement StoryCompactAllOf interface:
/**
 * The time at which this resource was created.
 * @member {Date} created_at
 */
StoryCompactAllOf.prototype['created_at'] = undefined;
/**
 * @member {module:model/UserCompact} created_by
 */
StoryCompactAllOf.prototype['created_by'] = undefined;
/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
 * @member {String} resource_subtype
 */
StoryCompactAllOf.prototype['resource_subtype'] = undefined;
/**
 * *Create-only*. Human-readable text for the story or comment. This will not include the name of the creator. *Note: This is not guaranteed to be stable for a given type of story. For example, text for a reassignment may not always say “assigned to …” as the text for a story can both be edited and change based on the language settings of the user making the request.* Use the `resource_subtype` property to discover the action that created the story.
 * @member {String} text
 */
StoryCompactAllOf.prototype['text'] = undefined;




export default StoryCompact;

