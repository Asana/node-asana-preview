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
 * The PortfolioCompactAllOf model module.
 * @module model/PortfolioCompactAllOf
 * @version 1.0.3
 */
class PortfolioCompactAllOf {
    /**
     * Constructs a new <code>PortfolioCompactAllOf</code>.
     * A *portfolio* gives a high-level overview of the status of multiple initiatives in Asana. Portfolios provide a dashboard overview of the state of multiple projects, including a progress report and the most recent [project status](/reference/project-statuses) update. Portfolios have some restrictions on size. Each portfolio has a max of 500 items and, like projects, a max of 20 custom fields.
     * @alias module:model/PortfolioCompactAllOf
     */
    constructor() { 
        
        PortfolioCompactAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PortfolioCompactAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PortfolioCompactAllOf} obj Optional instance to populate.
     * @return {module:model/PortfolioCompactAllOf} The populated <code>PortfolioCompactAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PortfolioCompactAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the portfolio.
 * @member {String} name
 */
PortfolioCompactAllOf.prototype['name'] = undefined;






export default PortfolioCompactAllOf;

