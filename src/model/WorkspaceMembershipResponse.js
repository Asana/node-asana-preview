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
import UserCompact from './UserCompact';
import UserTaskListCompact from './UserTaskListCompact';
import WorkspaceCompact from './WorkspaceCompact';
import WorkspaceMembershipCompact from './WorkspaceMembershipCompact';
import WorkspaceMembershipResponseAllOf from './WorkspaceMembershipResponseAllOf';
import WorkspaceMembershipResponseAllOfVacationDates from './WorkspaceMembershipResponseAllOfVacationDates';

/**
 * The WorkspaceMembershipResponse model module.
 * @module model/WorkspaceMembershipResponse
 * @version 1.0.3
 */
class WorkspaceMembershipResponse {
    /**
     * Constructs a new <code>WorkspaceMembershipResponse</code>.
     * @alias module:model/WorkspaceMembershipResponse
     * @implements module:model/WorkspaceMembershipCompact
     * @implements module:model/WorkspaceMembershipResponseAllOf
     */
    constructor() { 
        WorkspaceMembershipCompact.initialize(this);WorkspaceMembershipResponseAllOf.initialize(this);
        WorkspaceMembershipResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkspaceMembershipResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkspaceMembershipResponse} obj Optional instance to populate.
     * @return {module:model/WorkspaceMembershipResponse} The populated <code>WorkspaceMembershipResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkspaceMembershipResponse();
            WorkspaceMembershipCompact.constructFromObject(data, obj);
            WorkspaceMembershipResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = UserCompact.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('workspace')) {
                obj['workspace'] = WorkspaceCompact.constructFromObject(data['workspace']);
            }
            if (data.hasOwnProperty('user_task_list')) {
                obj['user_task_list'] = UserTaskListCompact.constructFromObject(data['user_task_list']);
            }
            if (data.hasOwnProperty('is_active')) {
                obj['is_active'] = ApiClient.convertToType(data['is_active'], 'Boolean');
            }
            if (data.hasOwnProperty('is_admin')) {
                obj['is_admin'] = ApiClient.convertToType(data['is_admin'], 'Boolean');
            }
            if (data.hasOwnProperty('is_guest')) {
                obj['is_guest'] = ApiClient.convertToType(data['is_guest'], 'Boolean');
            }
            if (data.hasOwnProperty('vacation_dates')) {
                obj['vacation_dates'] = WorkspaceMembershipResponseAllOfVacationDates.constructFromObject(data['vacation_dates']);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
WorkspaceMembershipResponse.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
WorkspaceMembershipResponse.prototype['resource_type'] = undefined;

/**
 * @member {module:model/UserCompact} user
 */
WorkspaceMembershipResponse.prototype['user'] = undefined;

/**
 * @member {module:model/WorkspaceCompact} workspace
 */
WorkspaceMembershipResponse.prototype['workspace'] = undefined;

/**
 * @member {module:model/UserTaskListCompact} user_task_list
 */
WorkspaceMembershipResponse.prototype['user_task_list'] = undefined;

/**
 * Reflects if this user still a member of the workspace.
 * @member {Boolean} is_active
 */
WorkspaceMembershipResponse.prototype['is_active'] = undefined;

/**
 * Reflects if this user is an admin of the workspace.
 * @member {Boolean} is_admin
 */
WorkspaceMembershipResponse.prototype['is_admin'] = undefined;

/**
 * Reflects if this user is a guest of the workspace.
 * @member {Boolean} is_guest
 */
WorkspaceMembershipResponse.prototype['is_guest'] = undefined;

/**
 * @member {module:model/WorkspaceMembershipResponseAllOfVacationDates} vacation_dates
 */
WorkspaceMembershipResponse.prototype['vacation_dates'] = undefined;

/**
 * The time at which this resource was created.
 * @member {Date} created_at
 */
WorkspaceMembershipResponse.prototype['created_at'] = undefined;


// Implement WorkspaceMembershipCompact interface:
/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
WorkspaceMembershipCompact.prototype['gid'] = undefined;
/**
 * The base type of this resource.
 * @member {String} resource_type
 */
WorkspaceMembershipCompact.prototype['resource_type'] = undefined;
/**
 * @member {module:model/UserCompact} user
 */
WorkspaceMembershipCompact.prototype['user'] = undefined;
/**
 * @member {module:model/WorkspaceCompact} workspace
 */
WorkspaceMembershipCompact.prototype['workspace'] = undefined;
// Implement WorkspaceMembershipResponseAllOf interface:
/**
 * @member {module:model/UserTaskListCompact} user_task_list
 */
WorkspaceMembershipResponseAllOf.prototype['user_task_list'] = undefined;
/**
 * Reflects if this user still a member of the workspace.
 * @member {Boolean} is_active
 */
WorkspaceMembershipResponseAllOf.prototype['is_active'] = undefined;
/**
 * Reflects if this user is an admin of the workspace.
 * @member {Boolean} is_admin
 */
WorkspaceMembershipResponseAllOf.prototype['is_admin'] = undefined;
/**
 * Reflects if this user is a guest of the workspace.
 * @member {Boolean} is_guest
 */
WorkspaceMembershipResponseAllOf.prototype['is_guest'] = undefined;
/**
 * @member {module:model/WorkspaceMembershipResponseAllOfVacationDates} vacation_dates
 */
WorkspaceMembershipResponseAllOf.prototype['vacation_dates'] = undefined;
/**
 * The time at which this resource was created.
 * @member {Date} created_at
 */
WorkspaceMembershipResponseAllOf.prototype['created_at'] = undefined;




export default WorkspaceMembershipResponse;

