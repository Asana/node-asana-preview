/**
 * Asana
 * This is the interface for interacting with the Asana platform
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AsanaNamedResource from './AsanaNamedResource';

/**
 * The EventResponseResource model module.
 * @module model/EventResponseResource
 * @version 1.0.2
 */
class EventResponseResource {
    /**
     * Constructs a new <code>EventResponseResource</code>.
     * @alias module:model/EventResponseResource
     * @implements module:model/AsanaNamedResource
     */
    constructor() { 
        AsanaNamedResource.initialize(this);
        EventResponseResource.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventResponseResource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventResponseResource} obj Optional instance to populate.
     * @return {module:model/EventResponseResource} The populated <code>EventResponseResource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventResponseResource();
            AsanaNamedResource.constructFromObject(data, obj);

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
EventResponseResource.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
EventResponseResource.prototype['resource_type'] = undefined;

/**
 * The name of the object.
 * @member {String} name
 */
EventResponseResource.prototype['name'] = undefined;


// Implement AsanaNamedResource interface:
/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
AsanaNamedResource.prototype['gid'] = undefined;
/**
 * The base type of this resource.
 * @member {String} resource_type
 */
AsanaNamedResource.prototype['resource_type'] = undefined;
/**
 * The name of the object.
 * @member {String} name
 */
AsanaNamedResource.prototype['name'] = undefined;




export default EventResponseResource;

