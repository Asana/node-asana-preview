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
 * The TaskTemplateCompact model module.
 * @module model/TaskTemplateCompact
 * @version 1.0.4
 */
class TaskTemplateCompact {
    /**
     * Constructs a new <code>TaskTemplateCompact</code>.
     * @alias module:model/TaskTemplateCompact
     * @implements module:model/CreateProjectFromAsanaTemplateRequestAllOf
     * @implements module:model/JobBaseNewTaskTemplateAllOf
     */
    constructor() { 
        CreateProjectFromAsanaTemplateRequestAllOf.initialize(this);JobBaseNewTaskTemplateAllOf.initialize(this);
        TaskTemplateCompact.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaskTemplateCompact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskTemplateCompact} obj Optional instance to populate.
     * @return {module:model/TaskTemplateCompact} The populated <code>TaskTemplateCompact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaskTemplateCompact();
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
TaskTemplateCompact.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
TaskTemplateCompact.prototype['resource_type'] = undefined;

/**
 * Name of the task template.
 * @member {String} name
 */
TaskTemplateCompact.prototype['name'] = undefined;


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




export default TaskTemplateCompact;
