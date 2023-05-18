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
import CreateProjectFromAsanaTemplateRequestAllOf1Workspace from './CreateProjectFromAsanaTemplateRequestAllOf1Workspace';
import CustomFieldResponsePeopleValueInner from './CustomFieldResponsePeopleValueInner';
import PortfolioResponseCustomFieldSettingsInner from './PortfolioResponseCustomFieldSettingsInner';
import ProjectBaseCurrentStatus from './ProjectBaseCurrentStatus';
import ProjectBaseCurrentStatusUpdate from './ProjectBaseCurrentStatusUpdate';

/**
 * The ProjectBase model module.
 * @module model/ProjectBase
 * @version 1.0.4
 */
class ProjectBase {
    /**
     * Constructs a new <code>ProjectBase</code>.
     * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *project* represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. It exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.
     * @alias module:model/ProjectBase
     */
    constructor() { 
        
        ProjectBase.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProjectBase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectBase} obj Optional instance to populate.
     * @return {module:model/ProjectBase} The populated <code>ProjectBase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectBase();

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('archived')) {
                obj['archived'] = ApiClient.convertToType(data['archived'], 'Boolean');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('current_status')) {
                obj['current_status'] = ProjectBaseCurrentStatus.constructFromObject(data['current_status']);
            }
            if (data.hasOwnProperty('current_status_update')) {
                obj['current_status_update'] = ProjectBaseCurrentStatusUpdate.constructFromObject(data['current_status_update']);
            }
            if (data.hasOwnProperty('custom_field_settings')) {
                obj['custom_field_settings'] = ApiClient.convertToType(data['custom_field_settings'], [PortfolioResponseCustomFieldSettingsInner]);
            }
            if (data.hasOwnProperty('default_view')) {
                obj['default_view'] = ApiClient.convertToType(data['default_view'], 'String');
            }
            if (data.hasOwnProperty('due_date')) {
                obj['due_date'] = ApiClient.convertToType(data['due_date'], 'Date');
            }
            if (data.hasOwnProperty('due_on')) {
                obj['due_on'] = ApiClient.convertToType(data['due_on'], 'Date');
            }
            if (data.hasOwnProperty('html_notes')) {
                obj['html_notes'] = ApiClient.convertToType(data['html_notes'], 'String');
            }
            if (data.hasOwnProperty('members')) {
                obj['members'] = ApiClient.convertToType(data['members'], [CustomFieldResponsePeopleValueInner]);
            }
            if (data.hasOwnProperty('modified_at')) {
                obj['modified_at'] = ApiClient.convertToType(data['modified_at'], 'Date');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('public')) {
                obj['public'] = ApiClient.convertToType(data['public'], 'Boolean');
            }
            if (data.hasOwnProperty('privacy_setting')) {
                obj['privacy_setting'] = ApiClient.convertToType(data['privacy_setting'], 'String');
            }
            if (data.hasOwnProperty('start_on')) {
                obj['start_on'] = ApiClient.convertToType(data['start_on'], 'Date');
            }
            if (data.hasOwnProperty('workspace')) {
                obj['workspace'] = CreateProjectFromAsanaTemplateRequestAllOf1Workspace.constructFromObject(data['workspace']);
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
ProjectBase.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
ProjectBase.prototype['resource_type'] = undefined;

/**
 * Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
 * @member {String} name
 */
ProjectBase.prototype['name'] = undefined;

/**
 * True if the project is archived, false if not. Archived projects do not show in the UI by default and may be treated differently for queries.
 * @member {Boolean} archived
 */
ProjectBase.prototype['archived'] = undefined;

/**
 * Color of the project.
 * @member {module:model/ProjectBase.ColorEnum} color
 */
ProjectBase.prototype['color'] = undefined;

/**
 * The time at which this resource was created.
 * @member {Date} created_at
 */
ProjectBase.prototype['created_at'] = undefined;

/**
 * @member {module:model/ProjectBaseCurrentStatus} current_status
 */
ProjectBase.prototype['current_status'] = undefined;

/**
 * @member {module:model/ProjectBaseCurrentStatusUpdate} current_status_update
 */
ProjectBase.prototype['current_status_update'] = undefined;

/**
 * Array of Custom Field Settings (in compact form).
 * @member {Array.<module:model/PortfolioResponseCustomFieldSettingsInner>} custom_field_settings
 */
ProjectBase.prototype['custom_field_settings'] = undefined;

/**
 * The default view (list, board, calendar, or timeline) of a project.
 * @member {module:model/ProjectBase.DefaultViewEnum} default_view
 */
ProjectBase.prototype['default_view'] = undefined;

/**
 * *Deprecated: new integrations should prefer the `due_on` field.*
 * @member {Date} due_date
 */
ProjectBase.prototype['due_date'] = undefined;

/**
 * The day on which this project is due. This takes a date with format YYYY-MM-DD.
 * @member {Date} due_on
 */
ProjectBase.prototype['due_on'] = undefined;

/**
 * [Opt In](/docs/inputoutput-options). The notes of the project with formatting as HTML.
 * @member {String} html_notes
 */
ProjectBase.prototype['html_notes'] = undefined;

/**
 * Array of users who are members of this project.
 * @member {Array.<module:model/CustomFieldResponsePeopleValueInner>} members
 */
ProjectBase.prototype['members'] = undefined;

/**
 * The time at which this project was last modified. *Note: This does not currently reflect any changes in associations such as tasks or comments that may have been added or removed from the project.*
 * @member {Date} modified_at
 */
ProjectBase.prototype['modified_at'] = undefined;

/**
 * Free-form textual information associated with the project (ie., its description).
 * @member {String} notes
 */
ProjectBase.prototype['notes'] = undefined;

/**
 * True if the project is public to its team.
 * @member {Boolean} public
 */
ProjectBase.prototype['public'] = undefined;

/**
 * The privacy setting of the project
 * @member {module:model/ProjectBase.PrivacySettingEnum} privacy_setting
 */
ProjectBase.prototype['privacy_setting'] = undefined;

/**
 * The day on which work for this project begins, or null if the project has no start date. This takes a date with `YYYY-MM-DD` format. *Note: `due_on` or `due_at` must be present in the request when setting or unsetting the `start_on` parameter. Additionally, `start_on` and `due_on` cannot be the same date.*
 * @member {Date} start_on
 */
ProjectBase.prototype['start_on'] = undefined;

/**
 * @member {module:model/CreateProjectFromAsanaTemplateRequestAllOf1Workspace} workspace
 */
ProjectBase.prototype['workspace'] = undefined;





/**
 * Allowed values for the <code>color</code> property.
 * @enum {String}
 * @readonly
 */
ProjectBase['ColorEnum'] = {

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


/**
 * Allowed values for the <code>default_view</code> property.
 * @enum {String}
 * @readonly
 */
ProjectBase['DefaultViewEnum'] = {

    /**
     * value: "list"
     * @const
     */
    "list": "list",

    /**
     * value: "board"
     * @const
     */
    "board": "board",

    /**
     * value: "calendar"
     * @const
     */
    "calendar": "calendar",

    /**
     * value: "timeline"
     * @const
     */
    "timeline": "timeline"
};


/**
 * Allowed values for the <code>privacy_setting</code> property.
 * @enum {String}
 * @readonly
 */
ProjectBase['PrivacySettingEnum'] = {

    /**
     * value: "public_to_workspace"
     * @const
     */
    "public_to_workspace": "public_to_workspace",

    /**
     * value: "private_to_team"
     * @const
     */
    "private_to_team": "private_to_team",

    /**
     * value: "private"
     * @const
     */
    "private": "private"
};



export default ProjectBase;

