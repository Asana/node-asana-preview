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
 * The StatusUpdateCompact model module.
 * @module model/StatusUpdateCompact
 * @version 1.0.6
 */
export class StatusUpdateCompact {
  /**
   * Constructs a new <code>StatusUpdateCompact</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *status update* is an update on the progress of a particular project, portfolio, or goal, and is sent out to all of its parent&#x27;s followers when created. These updates include both text describing the update and a &#x60;status_type&#x60; intended to represent the overall state of the project.
   * @alias module:model/StatusUpdateCompact
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>StatusUpdateCompact</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatusUpdateCompact} obj Optional instance to populate.
   * @return {module:model/StatusUpdateCompact} The populated <code>StatusUpdateCompact</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StatusUpdateCompact();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('resource_subtype'))
        obj.resource_subtype = ApiClient.convertToType(data['resource_subtype'], 'String');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
StatusUpdateCompact.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
StatusUpdateCompact.prototype.resource_type = undefined;

/**
 * The title of the status update.
 * @member {String} title
 */
StatusUpdateCompact.prototype.title = undefined;

/**
 * Allowed values for the <code>resource_subtype</code> property.
 * @enum {String}
 * @readonly
 */
StatusUpdateCompact.ResourceSubtypeEnum = {
  /**
   * value: "project_status_update"
   * @const
   */
  project_status_update: "project_status_update",

  /**
   * value: "portfolio_status_update"
   * @const
   */
  portfolio_status_update: "portfolio_status_update",

  /**
   * value: "goal_status_update"
   * @const
   */
  goal_status_update: "goal_status_update"
};
/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning. The `resource_subtype`s for `status` objects represent the type of their parent.
 * @member {module:model/StatusUpdateCompact.ResourceSubtypeEnum} resource_subtype
 */
StatusUpdateCompact.prototype.resource_subtype = undefined;

