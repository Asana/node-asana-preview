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
import AsanaResource from './AsanaResource';
import TimePeriodCompactAllOf from './TimePeriodCompactAllOf';

/**
 * The TimePeriodCompact model module.
 * @module model/TimePeriodCompact
 * @version 1.0.3
 */
class TimePeriodCompact {
    /**
     * Constructs a new <code>TimePeriodCompact</code>.
     * @alias module:model/TimePeriodCompact
     * @implements module:model/AsanaResource
     * @implements module:model/TimePeriodCompactAllOf
     */
    constructor() { 
        AsanaResource.initialize(this);TimePeriodCompactAllOf.initialize(this);
        TimePeriodCompact.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TimePeriodCompact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimePeriodCompact} obj Optional instance to populate.
     * @return {module:model/TimePeriodCompact} The populated <code>TimePeriodCompact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TimePeriodCompact();
            AsanaResource.constructFromObject(data, obj);
            TimePeriodCompactAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
            if (data.hasOwnProperty('end_on')) {
                obj['end_on'] = ApiClient.convertToType(data['end_on'], 'String');
            }
            if (data.hasOwnProperty('start_on')) {
                obj['start_on'] = ApiClient.convertToType(data['start_on'], 'String');
            }
            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'String');
            }
            if (data.hasOwnProperty('display_name')) {
                obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
TimePeriodCompact.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
TimePeriodCompact.prototype['resource_type'] = undefined;

/**
 * The localized end date of the time period in `YYYY-MM-DD` format.
 * @member {String} end_on
 */
TimePeriodCompact.prototype['end_on'] = undefined;

/**
 * The localized start date of the time period in `YYYY-MM-DD` format.
 * @member {String} start_on
 */
TimePeriodCompact.prototype['start_on'] = undefined;

/**
 * The cadence and index of the time period. The value is one of: `FY`, `H1`, `H2`, `Q1`, `Q2`, `Q3`, or `Q4`.
 * @member {module:model/TimePeriodCompact.PeriodEnum} period
 */
TimePeriodCompact.prototype['period'] = undefined;

/**
 * A string representing the cadence code and the fiscal year.
 * @member {String} display_name
 */
TimePeriodCompact.prototype['display_name'] = undefined;


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
// Implement TimePeriodCompactAllOf interface:
/**
 * The localized end date of the time period in `YYYY-MM-DD` format.
 * @member {String} end_on
 */
TimePeriodCompactAllOf.prototype['end_on'] = undefined;
/**
 * The localized start date of the time period in `YYYY-MM-DD` format.
 * @member {String} start_on
 */
TimePeriodCompactAllOf.prototype['start_on'] = undefined;
/**
 * The cadence and index of the time period. The value is one of: `FY`, `H1`, `H2`, `Q1`, `Q2`, `Q3`, or `Q4`.
 * @member {module:model/TimePeriodCompactAllOf.PeriodEnum} period
 */
TimePeriodCompactAllOf.prototype['period'] = undefined;
/**
 * A string representing the cadence code and the fiscal year.
 * @member {String} display_name
 */
TimePeriodCompactAllOf.prototype['display_name'] = undefined;



/**
 * Allowed values for the <code>period</code> property.
 * @enum {String}
 * @readonly
 */
TimePeriodCompact['PeriodEnum'] = {

    /**
     * value: "FY"
     * @const
     */
    "FY": "FY",

    /**
     * value: "H1"
     * @const
     */
    "H1": "H1",

    /**
     * value: "H2"
     * @const
     */
    "H2": "H2",

    /**
     * value: "Q1"
     * @const
     */
    "Q1": "Q1",

    /**
     * value: "Q2"
     * @const
     */
    "Q2": "Q2",

    /**
     * value: "Q3"
     * @const
     */
    "Q3": "Q3",

    /**
     * value: "Q4"
     * @const
     */
    "Q4": "Q4"
};



export default TimePeriodCompact;

