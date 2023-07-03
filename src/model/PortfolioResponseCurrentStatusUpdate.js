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
 * The PortfolioResponseCurrentStatusUpdate model module.
 * @module model/PortfolioResponseCurrentStatusUpdate
 * @version 1.0.5
 */
export class PortfolioResponseCurrentStatusUpdate {
  /**
   * Constructs a new <code>PortfolioResponseCurrentStatusUpdate</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *status update* is an update on the progress of a particular project, portfolio, or goal, and is sent out to all of its parent&#x27;s followers when created. These updates include both text describing the update and a &#x60;status_type&#x60; intended to represent the overall state of the project.A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *status update* is an update on the progress of a particular project, portfolio, or goal, and is sent out to all of its parent&#x27;s followers when created. These updates include both text describing the update and a &#x60;status_type&#x60; intended to represent the overall state of the project. The latest &#x60;status_update&#x60; posted to this portfolio.
   * @alias module:model/PortfolioResponseCurrentStatusUpdate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PortfolioResponseCurrentStatusUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PortfolioResponseCurrentStatusUpdate} obj Optional instance to populate.
   * @return {module:model/PortfolioResponseCurrentStatusUpdate} The populated <code>PortfolioResponseCurrentStatusUpdate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PortfolioResponseCurrentStatusUpdate();
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
PortfolioResponseCurrentStatusUpdate.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
PortfolioResponseCurrentStatusUpdate.prototype.resource_type = undefined;

/**
 * The title of the status update.
 * @member {String} title
 */
PortfolioResponseCurrentStatusUpdate.prototype.title = undefined;

/**
 * Allowed values for the <code>resource_subtype</code> property.
 * @enum {String}
 * @readonly
 */
PortfolioResponseCurrentStatusUpdate.ResourceSubtypeEnum = {
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
 * @member {module:model/PortfolioResponseCurrentStatusUpdate.ResourceSubtypeEnum} resource_subtype
 */
PortfolioResponseCurrentStatusUpdate.prototype.resource_subtype = undefined;

