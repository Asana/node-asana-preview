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
 * The PortfolioResponseWorkspace model module.
 * @module model/PortfolioResponseWorkspace
 * @version 1.0.6
 */
export class PortfolioResponseWorkspace {
  /**
   * Constructs a new <code>PortfolioResponseWorkspace</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace. *Create-only*. The workspace or organization that the portfolio belongs to.
   * @alias module:model/PortfolioResponseWorkspace
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PortfolioResponseWorkspace</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PortfolioResponseWorkspace} obj Optional instance to populate.
   * @return {module:model/PortfolioResponseWorkspace} The populated <code>PortfolioResponseWorkspace</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PortfolioResponseWorkspace();
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
PortfolioResponseWorkspace.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
PortfolioResponseWorkspace.prototype.resource_type = undefined;

/**
 * The name of the workspace.
 * @member {String} name
 */
PortfolioResponseWorkspace.prototype.name = undefined;

