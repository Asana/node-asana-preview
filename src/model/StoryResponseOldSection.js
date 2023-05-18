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
 * The StoryResponseOldSection model module.
 * @module model/StoryResponseOldSection
 * @version 1.0.4
 */
class StoryResponseOldSection {
    /**
     * Constructs a new <code>StoryResponseOldSection</code>.
     * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *section* is a subdivision of a project that groups tasks together. It can either be a header above a list of tasks in a list view or a column in a board view of a project.
     * @alias module:model/StoryResponseOldSection
     */
    constructor() { 
        
        StoryResponseOldSection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StoryResponseOldSection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StoryResponseOldSection} obj Optional instance to populate.
     * @return {module:model/StoryResponseOldSection} The populated <code>StoryResponseOldSection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StoryResponseOldSection();

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
StoryResponseOldSection.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
StoryResponseOldSection.prototype['resource_type'] = undefined;

/**
 * The name of the section (i.e. the text displayed as the section header).
 * @member {String} name
 */
StoryResponseOldSection.prototype['name'] = undefined;






export default StoryResponseOldSection;

