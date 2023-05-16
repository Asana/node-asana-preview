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
 * The PortfolioRequestAllOf model module.
 * @module model/PortfolioRequestAllOf
 * @version 1.0.3
 */
class PortfolioRequestAllOf {
    /**
     * Constructs a new <code>PortfolioRequestAllOf</code>.
     * @alias module:model/PortfolioRequestAllOf
     */
    constructor() { 
        
        PortfolioRequestAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PortfolioRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PortfolioRequestAllOf} obj Optional instance to populate.
     * @return {module:model/PortfolioRequestAllOf} The populated <code>PortfolioRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PortfolioRequestAllOf();

            if (data.hasOwnProperty('members')) {
                obj['members'] = ApiClient.convertToType(data['members'], ['String']);
            }
            if (data.hasOwnProperty('workspace')) {
                obj['workspace'] = ApiClient.convertToType(data['workspace'], 'String');
            }
            if (data.hasOwnProperty('public')) {
                obj['public'] = ApiClient.convertToType(data['public'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * An array of strings identifying users. These can either be the string \"me\", an email, or the gid of a user.
 * @member {Array.<String>} members
 */
PortfolioRequestAllOf.prototype['members'] = undefined;

/**
 * Gid of an object.
 * @member {String} workspace
 */
PortfolioRequestAllOf.prototype['workspace'] = undefined;

/**
 * True if the portfolio is public to its workspace members.
 * @member {Boolean} public
 */
PortfolioRequestAllOf.prototype['public'] = undefined;






export default PortfolioRequestAllOf;

