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
 * The TaskCompact model module.
 * @module model/TaskCompact
 * @version 1.0.4
 */
class TaskCompact {
    /**
     * Constructs a new <code>TaskCompact</code>.
     * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. The *task* is the basic object around which many operations in Asana are centered.
     * @alias module:model/TaskCompact
     */
    constructor() { 
        
        TaskCompact.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaskCompact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskCompact} obj Optional instance to populate.
     * @return {module:model/TaskCompact} The populated <code>TaskCompact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaskCompact();

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('resource_subtype')) {
                obj['resource_subtype'] = ApiClient.convertToType(data['resource_subtype'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
TaskCompact.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
TaskCompact.prototype['resource_type'] = undefined;

/**
 * The name of the task.
 * @member {String} name
 */
TaskCompact.prototype['name'] = undefined;

/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning. The resource_subtype `milestone` represent a single moment in time. This means tasks with this subtype cannot have a start_date.
 * @member {module:model/TaskCompact.ResourceSubtypeEnum} resource_subtype
 */
TaskCompact.prototype['resource_subtype'] = undefined;





/**
 * Allowed values for the <code>resource_subtype</code> property.
 * @enum {String}
 * @readonly
 */
TaskCompact['ResourceSubtypeEnum'] = {

    /**
     * value: "default_task"
     * @const
     */
    "default_task": "default_task",

    /**
     * value: "milestone"
     * @const
     */
    "milestone": "milestone",

    /**
     * value: "section"
     * @const
     */
    "section": "section",

    /**
     * value: "approval"
     * @const
     */
    "approval": "approval"
};



export default TaskCompact;

