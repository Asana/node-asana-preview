/*
 * Asana
 * This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.46
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The UserTaskListCompact model module.
 * @module model/UserTaskListCompact
 * @version 1.0.5
 */
export class UserTaskListCompact {
  /**
   * Constructs a new <code>UserTaskListCompact</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A user task list represents the tasks assigned to a particular user. It provides API access to a user’s [My Tasks](https://asana.com/guide/help/fundamentals/my-tasks) view in Asana.
   * @alias module:model/UserTaskListCompact
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UserTaskListCompact</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserTaskListCompact} obj Optional instance to populate.
   * @return {module:model/UserTaskListCompact} The populated <code>UserTaskListCompact</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UserTaskListCompact();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('owner'))
        obj.owner = ApiClient.convertToType(data['owner'], Object);
      if (data.hasOwnProperty('workspace'))
        obj.workspace = ApiClient.convertToType(data['workspace'], Object);
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
UserTaskListCompact.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
UserTaskListCompact.prototype.resource_type = undefined;

/**
 * The name of the user task list.
 * @member {String} name
 */
UserTaskListCompact.prototype.name = undefined;

/**
 * The owner of the user task list, i.e. the person whose My Tasks is represented by this resource.
 * @member {Object} owner
 */
UserTaskListCompact.prototype.owner = undefined;

/**
 * The workspace in which the user task list is located.
 * @member {Object} workspace
 */
UserTaskListCompact.prototype.workspace = undefined;

