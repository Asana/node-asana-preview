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
import TaskAddTagRequest from './TaskAddTagRequest';

/**
 * The AddTagForTaskRequest model module.
 * @module model/AddTagForTaskRequest
 * @version 1.0.3
 */
class AddTagForTaskRequest {
    /**
     * Constructs a new <code>AddTagForTaskRequest</code>.
     * @alias module:model/AddTagForTaskRequest
     */
    constructor() { 
        
        AddTagForTaskRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddTagForTaskRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddTagForTaskRequest} obj Optional instance to populate.
     * @return {module:model/AddTagForTaskRequest} The populated <code>AddTagForTaskRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddTagForTaskRequest();

            if (data.hasOwnProperty('data')) {
                obj['data'] = TaskAddTagRequest.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TaskAddTagRequest} data
 */
AddTagForTaskRequest.prototype['data'] = undefined;






export default AddTagForTaskRequest;

