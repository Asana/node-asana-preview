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
import GoalResponseCurrentStatusUpdateAllOf from './GoalResponseCurrentStatusUpdateAllOf';

/**
 * The PortfolioResponseCurrentStatusUpdate model module.
 * @module model/PortfolioResponseCurrentStatusUpdate
 * @version 1.0.4
 */
class PortfolioResponseCurrentStatusUpdate {
    /**
     * Constructs a new <code>PortfolioResponseCurrentStatusUpdate</code>.
     * The latest &#x60;status_update&#x60; posted to this portfolio.
     * @alias module:model/PortfolioResponseCurrentStatusUpdate
     * @implements module:model/GoalResponseCurrentStatusUpdateAllOf
     */
    constructor() { 
        GoalResponseCurrentStatusUpdateAllOf.initialize(this);
        PortfolioResponseCurrentStatusUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PortfolioResponseCurrentStatusUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PortfolioResponseCurrentStatusUpdate} obj Optional instance to populate.
     * @return {module:model/PortfolioResponseCurrentStatusUpdate} The populated <code>PortfolioResponseCurrentStatusUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PortfolioResponseCurrentStatusUpdate();
            GoalResponseCurrentStatusUpdateAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
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
PortfolioResponseCurrentStatusUpdate.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
PortfolioResponseCurrentStatusUpdate.prototype['resource_type'] = undefined;

/**
 * The title of the status update.
 * @member {String} title
 */
PortfolioResponseCurrentStatusUpdate.prototype['title'] = undefined;

/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning. The `resource_subtype`s for `status` objects represent the type of their parent.
 * @member {module:model/PortfolioResponseCurrentStatusUpdate.ResourceSubtypeEnum} resource_subtype
 */
PortfolioResponseCurrentStatusUpdate.prototype['resource_subtype'] = undefined;


// Implement GoalResponseCurrentStatusUpdateAllOf interface:
/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
GoalResponseCurrentStatusUpdateAllOf.prototype['gid'] = undefined;
/**
 * The base type of this resource.
 * @member {String} resource_type
 */
GoalResponseCurrentStatusUpdateAllOf.prototype['resource_type'] = undefined;
/**
 * The title of the status update.
 * @member {String} title
 */
GoalResponseCurrentStatusUpdateAllOf.prototype['title'] = undefined;
/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning. The `resource_subtype`s for `status` objects represent the type of their parent.
 * @member {module:model/GoalResponseCurrentStatusUpdateAllOf.ResourceSubtypeEnum} resource_subtype
 */
GoalResponseCurrentStatusUpdateAllOf.prototype['resource_subtype'] = undefined;



/**
 * Allowed values for the <code>resource_subtype</code> property.
 * @enum {String}
 * @readonly
 */
PortfolioResponseCurrentStatusUpdate['ResourceSubtypeEnum'] = {

    /**
     * value: "project_status_update"
     * @const
     */
    "project_status_update": "project_status_update",

    /**
     * value: "portfolio_status_update"
     * @const
     */
    "portfolio_status_update": "portfolio_status_update",

    /**
     * value: "goal_status_update"
     * @const
     */
    "goal_status_update": "goal_status_update"
};



export default PortfolioResponseCurrentStatusUpdate;
