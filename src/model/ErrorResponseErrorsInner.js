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

/**
 * The ErrorResponseErrorsInner model module.
 * @module model/ErrorResponseErrorsInner
 * @version 1.0.2
 */
class ErrorResponseErrorsInner {
    /**
     * Constructs a new <code>ErrorResponseErrorsInner</code>.
     * @alias module:model/ErrorResponseErrorsInner
     */
    constructor() { 
        
        ErrorResponseErrorsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ErrorResponseErrorsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorResponseErrorsInner} obj Optional instance to populate.
     * @return {module:model/ErrorResponseErrorsInner} The populated <code>ErrorResponseErrorsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorResponseErrorsInner();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('help')) {
                obj['help'] = ApiClient.convertToType(data['help'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Message providing more detail about the error that occurred, if available.
 * @member {String} message
 */
ErrorResponseErrorsInner.prototype['message'] = undefined;

/**
 * Additional information directing developers to resources on how to address and fix the problem, if available.
 * @member {String} help
 */
ErrorResponseErrorsInner.prototype['help'] = undefined;






export default ErrorResponseErrorsInner;

