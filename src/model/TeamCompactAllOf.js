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
 * The TeamCompactAllOf model module.
 * @module model/TeamCompactAllOf
 * @version 1.0.3
 */
class TeamCompactAllOf {
    /**
     * Constructs a new <code>TeamCompactAllOf</code>.
     * A *team* is used to group related projects and people together within an organization. Each project in an organization is associated with a team.
     * @alias module:model/TeamCompactAllOf
     */
    constructor() { 
        
        TeamCompactAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TeamCompactAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamCompactAllOf} obj Optional instance to populate.
     * @return {module:model/TeamCompactAllOf} The populated <code>TeamCompactAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeamCompactAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the team.
 * @member {String} name
 */
TeamCompactAllOf.prototype['name'] = undefined;






export default TeamCompactAllOf;

