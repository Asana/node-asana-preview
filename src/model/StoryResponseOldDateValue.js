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
import StoryResponseOldDates from './StoryResponseOldDates';

/**
 * The StoryResponseOldDateValue model module.
 * @module model/StoryResponseOldDateValue
 * @version 1.0.4
 */
class StoryResponseOldDateValue {
    /**
     * Constructs a new <code>StoryResponseOldDateValue</code>.
     * @alias module:model/StoryResponseOldDateValue
     * @implements module:model/StoryResponseOldDates
     */
    constructor() { 
        StoryResponseOldDates.initialize(this);
        StoryResponseOldDateValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StoryResponseOldDateValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StoryResponseOldDateValue} obj Optional instance to populate.
     * @return {module:model/StoryResponseOldDateValue} The populated <code>StoryResponseOldDateValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StoryResponseOldDateValue();
            StoryResponseOldDates.constructFromObject(data, obj);

            if (data.hasOwnProperty('start_on')) {
                obj['start_on'] = ApiClient.convertToType(data['start_on'], 'Date');
            }
            if (data.hasOwnProperty('due_at')) {
                obj['due_at'] = ApiClient.convertToType(data['due_at'], 'Date');
            }
            if (data.hasOwnProperty('due_on')) {
                obj['due_on'] = ApiClient.convertToType(data['due_on'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * The day on which work for this goal begins, or null if the goal has no start date. This takes a date with `YYYY-MM-DD` format, and cannot be set unless there is an accompanying due date.
 * @member {Date} start_on
 */
StoryResponseOldDateValue.prototype['start_on'] = undefined;

/**
 * The UTC date and time on which this task is due, or null if the task has no due time. This takes an ISO 8601 date string in UTC and should not be used together with `due_on`.
 * @member {Date} due_at
 */
StoryResponseOldDateValue.prototype['due_at'] = undefined;

/**
 * The localized day on which this goal is due. This takes a date with format `YYYY-MM-DD`.
 * @member {Date} due_on
 */
StoryResponseOldDateValue.prototype['due_on'] = undefined;


// Implement StoryResponseOldDates interface:
/**
 * The day on which work for this goal begins, or null if the goal has no start date. This takes a date with `YYYY-MM-DD` format, and cannot be set unless there is an accompanying due date.
 * @member {Date} start_on
 */
StoryResponseOldDates.prototype['start_on'] = undefined;
/**
 * The UTC date and time on which this task is due, or null if the task has no due time. This takes an ISO 8601 date string in UTC and should not be used together with `due_on`.
 * @member {Date} due_at
 */
StoryResponseOldDates.prototype['due_at'] = undefined;
/**
 * The localized day on which this goal is due. This takes a date with format `YYYY-MM-DD`.
 * @member {Date} due_on
 */
StoryResponseOldDates.prototype['due_on'] = undefined;




export default StoryResponseOldDateValue;
