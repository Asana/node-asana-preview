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
import CreateProjectFromAsanaTemplateRequestAllOf from './CreateProjectFromAsanaTemplateRequestAllOf';
import JobBaseNewTaskTemplateAllOf from './JobBaseNewTaskTemplateAllOf';

/**
 * The JobBaseNewTaskTemplate model module.
 * @module model/JobBaseNewTaskTemplate
 * @version 1.0.4
 */
class JobBaseNewTaskTemplate {
    /**
     * Constructs a new <code>JobBaseNewTaskTemplate</code>.
     * @alias module:model/JobBaseNewTaskTemplate
     * @implements module:model/CreateProjectFromAsanaTemplateRequestAllOf
     * @implements module:model/JobBaseNewTaskTemplateAllOf
     */
    constructor() { 
        CreateProjectFromAsanaTemplateRequestAllOf.initialize(this);JobBaseNewTaskTemplateAllOf.initialize(this);
        JobBaseNewTaskTemplate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JobBaseNewTaskTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobBaseNewTaskTemplate} obj Optional instance to populate.
     * @return {module:model/JobBaseNewTaskTemplate} The populated <code>JobBaseNewTaskTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobBaseNewTaskTemplate();
            CreateProjectFromAsanaTemplateRequestAllOf.constructFromObject(data, obj);
            JobBaseNewTaskTemplateAllOf.constructFromObject(data, obj);

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
JobBaseNewTaskTemplate.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
JobBaseNewTaskTemplate.prototype['resource_type'] = undefined;

/**
 * Name of the task template.
 * @member {String} name
 */
JobBaseNewTaskTemplate.prototype['name'] = undefined;


// Implement CreateProjectFromAsanaTemplateRequestAllOf interface:
/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
CreateProjectFromAsanaTemplateRequestAllOf.prototype['gid'] = undefined;
/**
 * The base type of this resource.
 * @member {String} resource_type
 */
CreateProjectFromAsanaTemplateRequestAllOf.prototype['resource_type'] = undefined;
// Implement JobBaseNewTaskTemplateAllOf interface:
/**
 * Name of the task template.
 * @member {String} name
 */
JobBaseNewTaskTemplateAllOf.prototype['name'] = undefined;




export default JobBaseNewTaskTemplate;

