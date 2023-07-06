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
 * The UserCompact model module.
 * @module model/UserCompact
 * @version 1.0.6
 */
export class UserCompact {
  /**
   * Constructs a new <code>UserCompact</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
   * @alias module:model/UserCompact
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UserCompact</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserCompact} obj Optional instance to populate.
   * @return {module:model/UserCompact} The populated <code>UserCompact</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UserCompact();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
UserCompact.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
UserCompact.prototype.resource_type = undefined;

/**
 * *Read-only except when same user as requester*. The user’s name.
 * @member {String} name
 */
UserCompact.prototype.name = undefined;

