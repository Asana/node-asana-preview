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
 * The TeamRequestAllOf model module.
 * @module model/TeamRequestAllOf
 * @version 1.0.3
 */
class TeamRequestAllOf {
    /**
     * Constructs a new <code>TeamRequestAllOf</code>.
     * @alias module:model/TeamRequestAllOf
     */
    constructor() { 
        
        TeamRequestAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TeamRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamRequestAllOf} obj Optional instance to populate.
     * @return {module:model/TeamRequestAllOf} The populated <code>TeamRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeamRequestAllOf();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('html_description')) {
                obj['html_description'] = ApiClient.convertToType(data['html_description'], 'String');
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = ApiClient.convertToType(data['organization'], 'String');
            }
            if (data.hasOwnProperty('visibility')) {
                obj['visibility'] = ApiClient.convertToType(data['visibility'], 'String');
            }
            if (data.hasOwnProperty('edit_team_name_or_description_access_level')) {
                obj['edit_team_name_or_description_access_level'] = ApiClient.convertToType(data['edit_team_name_or_description_access_level'], 'String');
            }
            if (data.hasOwnProperty('edit_team_visibility_or_trash_team_access_level')) {
                obj['edit_team_visibility_or_trash_team_access_level'] = ApiClient.convertToType(data['edit_team_visibility_or_trash_team_access_level'], 'String');
            }
            if (data.hasOwnProperty('member_invite_management_access_level')) {
                obj['member_invite_management_access_level'] = ApiClient.convertToType(data['member_invite_management_access_level'], 'String');
            }
            if (data.hasOwnProperty('guest_invite_management_access_level')) {
                obj['guest_invite_management_access_level'] = ApiClient.convertToType(data['guest_invite_management_access_level'], 'String');
            }
            if (data.hasOwnProperty('join_request_management_access_level')) {
                obj['join_request_management_access_level'] = ApiClient.convertToType(data['join_request_management_access_level'], 'String');
            }
            if (data.hasOwnProperty('team_member_removal_access_level')) {
                obj['team_member_removal_access_level'] = ApiClient.convertToType(data['team_member_removal_access_level'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The description of the team. 
 * @member {String} description
 */
TeamRequestAllOf.prototype['description'] = undefined;

/**
 * The description of the team with formatting as HTML. 
 * @member {String} html_description
 */
TeamRequestAllOf.prototype['html_description'] = undefined;

/**
 * The organization/workspace the team belongs to. This must be the same organization you are in and cannot be changed once set. 
 * @member {String} organization
 */
TeamRequestAllOf.prototype['organization'] = undefined;

/**
 * The visibility of the team to users in the same organization 
 * @member {module:model/TeamRequestAllOf.VisibilityEnum} visibility
 */
TeamRequestAllOf.prototype['visibility'] = undefined;

/**
 * Controls who can edit team name and description 
 * @member {module:model/TeamRequestAllOf.EditTeamNameOrDescriptionAccessLevelEnum} edit_team_name_or_description_access_level
 */
TeamRequestAllOf.prototype['edit_team_name_or_description_access_level'] = undefined;

/**
 * Controls who can edit team visibility and trash teams 
 * @member {module:model/TeamRequestAllOf.EditTeamVisibilityOrTrashTeamAccessLevelEnum} edit_team_visibility_or_trash_team_access_level
 */
TeamRequestAllOf.prototype['edit_team_visibility_or_trash_team_access_level'] = undefined;

/**
 * Controls who can accept or deny member invites for a given team 
 * @member {module:model/TeamRequestAllOf.MemberInviteManagementAccessLevelEnum} member_invite_management_access_level
 */
TeamRequestAllOf.prototype['member_invite_management_access_level'] = undefined;

/**
 * Controls who can accept or deny guest invites for a given team 
 * @member {module:model/TeamRequestAllOf.GuestInviteManagementAccessLevelEnum} guest_invite_management_access_level
 */
TeamRequestAllOf.prototype['guest_invite_management_access_level'] = undefined;

/**
 * Controls who can accept or deny join team requests for a Membership by Request team 
 * @member {module:model/TeamRequestAllOf.JoinRequestManagementAccessLevelEnum} join_request_management_access_level
 */
TeamRequestAllOf.prototype['join_request_management_access_level'] = undefined;

/**
 * Controls who can remove team members 
 * @member {module:model/TeamRequestAllOf.TeamMemberRemovalAccessLevelEnum} team_member_removal_access_level
 */
TeamRequestAllOf.prototype['team_member_removal_access_level'] = undefined;





/**
 * Allowed values for the <code>visibility</code> property.
 * @enum {String}
 * @readonly
 */
TeamRequestAllOf['VisibilityEnum'] = {

    /**
     * value: "secret"
     * @const
     */
    "secret": "secret",

    /**
     * value: "request_to_join"
     * @const
     */
    "request_to_join": "request_to_join",

    /**
     * value: "public"
     * @const
     */
    "public": "public"
};


/**
 * Allowed values for the <code>edit_team_name_or_description_access_level</code> property.
 * @enum {String}
 * @readonly
 */
TeamRequestAllOf['EditTeamNameOrDescriptionAccessLevelEnum'] = {

    /**
     * value: "all_team_members"
     * @const
     */
    "all_team_members": "all_team_members",

    /**
     * value: "only_team_admins"
     * @const
     */
    "only_team_admins": "only_team_admins"
};


/**
 * Allowed values for the <code>edit_team_visibility_or_trash_team_access_level</code> property.
 * @enum {String}
 * @readonly
 */
TeamRequestAllOf['EditTeamVisibilityOrTrashTeamAccessLevelEnum'] = {

    /**
     * value: "all_team_members"
     * @const
     */
    "all_team_members": "all_team_members",

    /**
     * value: "only_team_admins"
     * @const
     */
    "only_team_admins": "only_team_admins"
};


/**
 * Allowed values for the <code>member_invite_management_access_level</code> property.
 * @enum {String}
 * @readonly
 */
TeamRequestAllOf['MemberInviteManagementAccessLevelEnum'] = {

    /**
     * value: "all_team_members"
     * @const
     */
    "all_team_members": "all_team_members",

    /**
     * value: "only_team_admins"
     * @const
     */
    "only_team_admins": "only_team_admins"
};


/**
 * Allowed values for the <code>guest_invite_management_access_level</code> property.
 * @enum {String}
 * @readonly
 */
TeamRequestAllOf['GuestInviteManagementAccessLevelEnum'] = {

    /**
     * value: "all_team_members"
     * @const
     */
    "all_team_members": "all_team_members",

    /**
     * value: "only_team_admins"
     * @const
     */
    "only_team_admins": "only_team_admins"
};


/**
 * Allowed values for the <code>join_request_management_access_level</code> property.
 * @enum {String}
 * @readonly
 */
TeamRequestAllOf['JoinRequestManagementAccessLevelEnum'] = {

    /**
     * value: "all_team_members"
     * @const
     */
    "all_team_members": "all_team_members",

    /**
     * value: "only_team_admins"
     * @const
     */
    "only_team_admins": "only_team_admins"
};


/**
 * Allowed values for the <code>team_member_removal_access_level</code> property.
 * @enum {String}
 * @readonly
 */
TeamRequestAllOf['TeamMemberRemovalAccessLevelEnum'] = {

    /**
     * value: "all_team_members"
     * @const
     */
    "all_team_members": "all_team_members",

    /**
     * value: "only_team_admins"
     * @const
     */
    "only_team_admins": "only_team_admins"
};



export default TeamRequestAllOf;

