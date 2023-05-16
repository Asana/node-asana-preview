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
 * The TaskCompactAllOf model module.
 * @module model/TaskCompactAllOf
 * @version 1.0.3
 */
class TaskCompactAllOf {
    /**
     * Constructs a new <code>TaskCompactAllOf</code>.
     * The *task* is the basic object around which many operations in Asana are centered.
     * @alias module:model/TaskCompactAllOf
     */
    constructor() { 
        
        TaskCompactAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaskCompactAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskCompactAllOf} obj Optional instance to populate.
     * @return {module:model/TaskCompactAllOf} The populated <code>TaskCompactAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaskCompactAllOf();

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
 * The name of the task.
 * @member {String} name
 */
TaskCompactAllOf.prototype['name'] = undefined;

/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning. The resource_subtype `milestone` represent a single moment in time. This means tasks with this subtype cannot have a start_date.
 * @member {module:model/TaskCompactAllOf.ResourceSubtypeEnum} resource_subtype
 */
TaskCompactAllOf.prototype['resource_subtype'] = undefined;





/**
 * Allowed values for the <code>resource_subtype</code> property.
 * @enum {String}
 * @readonly
 */
TaskCompactAllOf['ResourceSubtypeEnum'] = {

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



export default TaskCompactAllOf;

