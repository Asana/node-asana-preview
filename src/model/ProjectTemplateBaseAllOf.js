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
import DateVariableCompact from './DateVariableCompact';
import TeamCompact from './TeamCompact';
import TemplateRole from './TemplateRole';
import UserCompact from './UserCompact';

/**
 * The ProjectTemplateBaseAllOf model module.
 * @module model/ProjectTemplateBaseAllOf
 * @version 1.0.3
 */
class ProjectTemplateBaseAllOf {
    /**
     * Constructs a new <code>ProjectTemplateBaseAllOf</code>.
     * @alias module:model/ProjectTemplateBaseAllOf
     */
    constructor() { 
        
        ProjectTemplateBaseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProjectTemplateBaseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectTemplateBaseAllOf} obj Optional instance to populate.
     * @return {module:model/ProjectTemplateBaseAllOf} The populated <code>ProjectTemplateBaseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectTemplateBaseAllOf();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('html_description')) {
                obj['html_description'] = ApiClient.convertToType(data['html_description'], 'String');
            }
            if (data.hasOwnProperty('public')) {
                obj['public'] = ApiClient.convertToType(data['public'], 'Boolean');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], UserCompact);
            }
            if (data.hasOwnProperty('team')) {
                obj['team'] = ApiClient.convertToType(data['team'], TeamCompact);
            }
            if (data.hasOwnProperty('requested_dates')) {
                obj['requested_dates'] = ApiClient.convertToType(data['requested_dates'], [DateVariableCompact]);
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('requested_roles')) {
                obj['requested_roles'] = ApiClient.convertToType(data['requested_roles'], [TemplateRole]);
            }
        }
        return obj;
    }


}

/**
 * Free-form textual information associated with the project template
 * @member {String} description
 */
ProjectTemplateBaseAllOf.prototype['description'] = undefined;

/**
 * The description of the project template with formatting as HTML.
 * @member {String} html_description
 */
ProjectTemplateBaseAllOf.prototype['html_description'] = undefined;

/**
 * True if the project template is public to its team.
 * @member {Boolean} public
 */
ProjectTemplateBaseAllOf.prototype['public'] = undefined;

/**
 * The current owner of the project template, may be null.
 * @member {module:model/UserCompact} owner
 */
ProjectTemplateBaseAllOf.prototype['owner'] = undefined;

/**
 * @member {module:model/TeamCompact} team
 */
ProjectTemplateBaseAllOf.prototype['team'] = undefined;

/**
 * Array of date variables in this project template. Calendar dates must be provided for these variables when instantiating a project.
 * @member {Array.<module:model/DateVariableCompact>} requested_dates
 */
ProjectTemplateBaseAllOf.prototype['requested_dates'] = undefined;

/**
 * Color of the project template.
 * @member {module:model/ProjectTemplateBaseAllOf.ColorEnum} color
 */
ProjectTemplateBaseAllOf.prototype['color'] = undefined;

/**
 * Array of template roles in this project template. User Ids can be provided for these variables when instantiating a project to assign template tasks to the user.
 * @member {Array.<module:model/TemplateRole>} requested_roles
 */
ProjectTemplateBaseAllOf.prototype['requested_roles'] = undefined;





/**
 * Allowed values for the <code>color</code> property.
 * @enum {String}
 * @readonly
 */
ProjectTemplateBaseAllOf['ColorEnum'] = {

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



export default ProjectTemplateBaseAllOf;
