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
import AsanaResource from './AsanaResource';
import ProjectTemplateCompactAllOf from './ProjectTemplateCompactAllOf';

/**
 * The ProjectTemplateCompact model module.
 * @module model/ProjectTemplateCompact
 * @version 1.0.1
 */
class ProjectTemplateCompact {
    /**
     * Constructs a new <code>ProjectTemplateCompact</code>.
     * @alias module:model/ProjectTemplateCompact
     * @implements module:model/AsanaResource
     * @implements module:model/ProjectTemplateCompactAllOf
     */
    constructor() { 
        AsanaResource.initialize(this);ProjectTemplateCompactAllOf.initialize(this);
        ProjectTemplateCompact.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProjectTemplateCompact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectTemplateCompact} obj Optional instance to populate.
     * @return {module:model/ProjectTemplateCompact} The populated <code>ProjectTemplateCompact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectTemplateCompact();
            AsanaResource.constructFromObject(data, obj);
            ProjectTemplateCompactAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], Object);
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
ProjectTemplateCompact.prototype['gid'] = undefined;

/**
 * @member {Object} resource_type
 */
ProjectTemplateCompact.prototype['resource_type'] = undefined;

/**
 * Name of the project template.
 * @member {String} name
 */
ProjectTemplateCompact.prototype['name'] = undefined;


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
// Implement ProjectTemplateCompactAllOf interface:
/**
 * @member {Object} resource_type
 */
ProjectTemplateCompactAllOf.prototype['resource_type'] = undefined;
/**
 * Name of the project template.
 * @member {String} name
 */
ProjectTemplateCompactAllOf.prototype['name'] = undefined;




export default ProjectTemplateCompact;

