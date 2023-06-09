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
 * The StoryResponseProject model module.
 * @module model/StoryResponseProject
 * @version 1.0.6
 */
export class StoryResponseProject {
  /**
   * Constructs a new <code>StoryResponseProject</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *project* represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. It exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.
   * @alias module:model/StoryResponseProject
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>StoryResponseProject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StoryResponseProject} obj Optional instance to populate.
   * @return {module:model/StoryResponseProject} The populated <code>StoryResponseProject</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StoryResponseProject();
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
StoryResponseProject.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
StoryResponseProject.prototype.resource_type = undefined;

/**
 * Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
 * @member {String} name
 */
StoryResponseProject.prototype.name = undefined;

