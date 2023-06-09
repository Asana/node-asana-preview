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
 * The PortfolioRequest model module.
 * @module model/PortfolioRequest
 * @version 1.0.6
 */
export class PortfolioRequest {
  /**
   * Constructs a new <code>PortfolioRequest</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *portfolio* gives a high-level overview of the status of multiple initiatives in Asana. Portfolios provide a dashboard overview of the state of multiple projects, including a progress report and the most recent [project status](/reference/project-statuses) update. Portfolios have some restrictions on size. Each portfolio has a max of 500 items and, like projects, a max of 20 custom fields.
   * @alias module:model/PortfolioRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PortfolioRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PortfolioRequest} obj Optional instance to populate.
   * @return {module:model/PortfolioRequest} The populated <code>PortfolioRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PortfolioRequest();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('color'))
        obj.color = ApiClient.convertToType(data['color'], 'String');
      if (data.hasOwnProperty('members'))
        obj.members = ApiClient.convertToType(data['members'], ['String']);
      if (data.hasOwnProperty('workspace'))
        obj.workspace = ApiClient.convertToType(data['workspace'], 'String');
      if (data.hasOwnProperty('public'))
        obj._public = ApiClient.convertToType(data['public'], 'Boolean');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
PortfolioRequest.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
PortfolioRequest.prototype.resource_type = undefined;

/**
 * The name of the portfolio.
 * @member {String} name
 */
PortfolioRequest.prototype.name = undefined;

/**
 * Allowed values for the <code>color</code> property.
 * @enum {String}
 * @readonly
 */
PortfolioRequest.ColorEnum = {
  /**
   * value: "dark-pink"
   * @const
   */
  dark_pink: "dark-pink",

  /**
   * value: "dark-green"
   * @const
   */
  dark_green: "dark-green",

  /**
   * value: "dark-blue"
   * @const
   */
  dark_blue: "dark-blue",

  /**
   * value: "dark-red"
   * @const
   */
  dark_red: "dark-red",

  /**
   * value: "dark-teal"
   * @const
   */
  dark_teal: "dark-teal",

  /**
   * value: "dark-brown"
   * @const
   */
  dark_brown: "dark-brown",

  /**
   * value: "dark-orange"
   * @const
   */
  dark_orange: "dark-orange",

  /**
   * value: "dark-purple"
   * @const
   */
  dark_purple: "dark-purple",

  /**
   * value: "dark-warm-gray"
   * @const
   */
  dark_warm_gray: "dark-warm-gray",

  /**
   * value: "light-pink"
   * @const
   */
  light_pink: "light-pink",

  /**
   * value: "light-green"
   * @const
   */
  light_green: "light-green",

  /**
   * value: "light-blue"
   * @const
   */
  light_blue: "light-blue",

  /**
   * value: "light-red"
   * @const
   */
  light_red: "light-red",

  /**
   * value: "light-teal"
   * @const
   */
  light_teal: "light-teal",

  /**
   * value: "light-brown"
   * @const
   */
  light_brown: "light-brown",

  /**
   * value: "light-orange"
   * @const
   */
  light_orange: "light-orange",

  /**
   * value: "light-purple"
   * @const
   */
  light_purple: "light-purple",

  /**
   * value: "light-warm-gray"
   * @const
   */
  light_warm_gray: "light-warm-gray"
};
/**
 * Color of the portfolio.
 * @member {module:model/PortfolioRequest.ColorEnum} color
 */
PortfolioRequest.prototype.color = undefined;

/**
 * An array of strings identifying users. These can either be the string \"me\", an email, or the gid of a user.
 * @member {Array.<String>} members
 */
PortfolioRequest.prototype.members = undefined;

/**
 * Gid of an object.
 * @member {String} workspace
 */
PortfolioRequest.prototype.workspace = undefined;

/**
 * True if the portfolio is public to its workspace members.
 * @member {Boolean} _public
 */
PortfolioRequest.prototype._public = undefined;

