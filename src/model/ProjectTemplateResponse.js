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
import ProjectTemplateBase from './ProjectTemplateBase';
import TeamCompact from './TeamCompact';
import TemplateRole from './TemplateRole';
import UserCompact from './UserCompact';

/**
 * The ProjectTemplateResponse model module.
 * @module model/ProjectTemplateResponse
 * @version 1.0.3
 */
class ProjectTemplateResponse {
    /**
     * Constructs a new <code>ProjectTemplateResponse</code>.
     * @alias module:model/ProjectTemplateResponse
     * @implements module:model/ProjectTemplateBase
     */
    constructor() { 
        ProjectTemplateBase.initialize(this);
        ProjectTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProjectTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectTemplateResponse} obj Optional instance to populate.
     * @return {module:model/ProjectTemplateResponse} The populated <code>ProjectTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectTemplateResponse();
            ProjectTemplateBase.constructFromObject(data, obj);

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
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
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
ProjectTemplateResponse.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
ProjectTemplateResponse.prototype['resource_type'] = undefined;

/**
 * Name of the project template.
 * @member {String} name
 */
ProjectTemplateResponse.prototype['name'] = undefined;

/**
 * Free-form textual information associated with the project template
 * @member {String} description
 */
ProjectTemplateResponse.prototype['description'] = undefined;

/**
 * The description of the project template with formatting as HTML.
 * @member {String} html_description
 */
ProjectTemplateResponse.prototype['html_description'] = undefined;

/**
 * True if the project template is public to its team.
 * @member {Boolean} public
 */
ProjectTemplateResponse.prototype['public'] = undefined;

/**
 * The current owner of the project template, may be null.
 * @member {module:model/UserCompact} owner
 */
ProjectTemplateResponse.prototype['owner'] = undefined;

/**
 * @member {module:model/TeamCompact} team
 */
ProjectTemplateResponse.prototype['team'] = undefined;

/**
 * Array of date variables in this project template. Calendar dates must be provided for these variables when instantiating a project.
 * @member {Array.<module:model/DateVariableCompact>} requested_dates
 */
ProjectTemplateResponse.prototype['requested_dates'] = undefined;

/**
 * Color of the project template.
 * @member {module:model/ProjectTemplateResponse.ColorEnum} color
 */
ProjectTemplateResponse.prototype['color'] = undefined;

/**
 * Array of template roles in this project template. User Ids can be provided for these variables when instantiating a project to assign template tasks to the user.
 * @member {Array.<module:model/TemplateRole>} requested_roles
 */
ProjectTemplateResponse.prototype['requested_roles'] = undefined;


// Implement ProjectTemplateBase interface:
/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
ProjectTemplateBase.prototype['gid'] = undefined;
/**
 * The base type of this resource.
 * @member {String} resource_type
 */
ProjectTemplateBase.prototype['resource_type'] = undefined;
/**
 * Name of the project template.
 * @member {String} name
 */
ProjectTemplateBase.prototype['name'] = undefined;
/**
 * Free-form textual information associated with the project template
 * @member {String} description
 */
ProjectTemplateBase.prototype['description'] = undefined;
/**
 * The description of the project template with formatting as HTML.
 * @member {String} html_description
 */
ProjectTemplateBase.prototype['html_description'] = undefined;
/**
 * True if the project template is public to its team.
 * @member {Boolean} public
 */
ProjectTemplateBase.prototype['public'] = undefined;
/**
 * The current owner of the project template, may be null.
 * @member {module:model/UserCompact} owner
 */
ProjectTemplateBase.prototype['owner'] = undefined;
/**
 * @member {module:model/TeamCompact} team
 */
ProjectTemplateBase.prototype['team'] = undefined;
/**
 * Array of date variables in this project template. Calendar dates must be provided for these variables when instantiating a project.
 * @member {Array.<module:model/DateVariableCompact>} requested_dates
 */
ProjectTemplateBase.prototype['requested_dates'] = undefined;
/**
 * Color of the project template.
 * @member {module:model/ProjectTemplateBase.ColorEnum} color
 */
ProjectTemplateBase.prototype['color'] = undefined;
/**
 * Array of template roles in this project template. User Ids can be provided for these variables when instantiating a project to assign template tasks to the user.
 * @member {Array.<module:model/TemplateRole>} requested_roles
 */
ProjectTemplateBase.prototype['requested_roles'] = undefined;



/**
 * Allowed values for the <code>color</code> property.
 * @enum {String}
 * @readonly
 */
ProjectTemplateResponse['ColorEnum'] = {

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



export default ProjectTemplateResponse;

