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
import NextPage from './NextPage';
import TaskCompact from './TaskCompact';

/**
 * The GetTasksForProject200Response model module.
 * @module model/GetTasksForProject200Response
 * @version 1.0.0
 */
class GetTasksForProject200Response {
    /**
     * Constructs a new <code>GetTasksForProject200Response</code>.
     * @alias module:model/GetTasksForProject200Response
     */
    constructor() { 
        
        GetTasksForProject200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTasksForProject200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTasksForProject200Response} obj Optional instance to populate.
     * @return {module:model/GetTasksForProject200Response} The populated <code>GetTasksForProject200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTasksForProject200Response();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [TaskCompact]);
            }
            if (data.hasOwnProperty('next_page')) {
                obj['next_page'] = NextPage.constructFromObject(data['next_page']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/TaskCompact>} data
 */
GetTasksForProject200Response.prototype['data'] = undefined;

/**
 * @member {module:model/NextPage} next_page
 */
GetTasksForProject200Response.prototype['next_page'] = undefined;






export default GetTasksForProject200Response;
