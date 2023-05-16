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
import PortfolioBaseAllOf from './PortfolioBaseAllOf';
import PortfolioCompact from './PortfolioCompact';

/**
 * The PortfolioBase model module.
 * @module model/PortfolioBase
 * @version 1.0.3
 */
class PortfolioBase {
    /**
     * Constructs a new <code>PortfolioBase</code>.
     * @alias module:model/PortfolioBase
     * @implements module:model/PortfolioCompact
     * @implements module:model/PortfolioBaseAllOf
     */
    constructor() { 
        PortfolioCompact.initialize(this);PortfolioBaseAllOf.initialize(this);
        PortfolioBase.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PortfolioBase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PortfolioBase} obj Optional instance to populate.
     * @return {module:model/PortfolioBase} The populated <code>PortfolioBase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PortfolioBase();
            PortfolioCompact.constructFromObject(data, obj);
            PortfolioBaseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
PortfolioBase.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
PortfolioBase.prototype['resource_type'] = undefined;

/**
 * The name of the portfolio.
 * @member {String} name
 */
PortfolioBase.prototype['name'] = undefined;

/**
 * Color of the portfolio.
 * @member {module:model/PortfolioBase.ColorEnum} color
 */
PortfolioBase.prototype['color'] = undefined;


// Implement PortfolioCompact interface:
/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
PortfolioCompact.prototype['gid'] = undefined;
/**
 * The base type of this resource.
 * @member {String} resource_type
 */
PortfolioCompact.prototype['resource_type'] = undefined;
/**
 * The name of the portfolio.
 * @member {String} name
 */
PortfolioCompact.prototype['name'] = undefined;
// Implement PortfolioBaseAllOf interface:
/**
 * Color of the portfolio.
 * @member {module:model/PortfolioBaseAllOf.ColorEnum} color
 */
PortfolioBaseAllOf.prototype['color'] = undefined;



/**
 * Allowed values for the <code>color</code> property.
 * @enum {String}
 * @readonly
 */
PortfolioBase['ColorEnum'] = {

    /**
     * value: "dark-pink"
     * @const
     */
    "dark-pink": "dark-pink",

    /**
     * value: "dark-green"
     * @const
     */
    "dark-green": "dark-green",

    /**
     * value: "dark-blue"
     * @const
     */
    "dark-blue": "dark-blue",

    /**
     * value: "dark-red"
     * @const
     */
    "dark-red": "dark-red",

    /**
     * value: "dark-teal"
     * @const
     */
    "dark-teal": "dark-teal",

    /**
     * value: "dark-brown"
     * @const
     */
    "dark-brown": "dark-brown",

    /**
     * value: "dark-orange"
     * @const
     */
    "dark-orange": "dark-orange",

    /**
     * value: "dark-purple"
     * @const
     */
    "dark-purple": "dark-purple",

    /**
     * value: "dark-warm-gray"
     * @const
     */
    "dark-warm-gray": "dark-warm-gray",

    /**
     * value: "light-pink"
     * @const
     */
    "light-pink": "light-pink",

    /**
     * value: "light-green"
     * @const
     */
    "light-green": "light-green",

    /**
     * value: "light-blue"
     * @const
     */
    "light-blue": "light-blue",

    /**
     * value: "light-red"
     * @const
     */
    "light-red": "light-red",

    /**
     * value: "light-teal"
     * @const
     */
    "light-teal": "light-teal",

    /**
     * value: "light-brown"
     * @const
     */
    "light-brown": "light-brown",

    /**
     * value: "light-orange"
     * @const
     */
    "light-orange": "light-orange",

    /**
     * value: "light-purple"
     * @const
     */
    "light-purple": "light-purple",

    /**
     * value: "light-warm-gray"
     * @const
     */
    "light-warm-gray": "light-warm-gray"
};



export default PortfolioBase;

