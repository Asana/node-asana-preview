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
import {GoalResponseWorkspace} from './GoalResponseWorkspace';

/**
 * The OrganizationExportResponse model module.
 * @module model/OrganizationExportResponse
 * @version 1.0.5
 */
export class OrganizationExportResponse {
  /**
   * Constructs a new <code>OrganizationExportResponse</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. An *organization_export* object represents a request to export the complete data of an Organization in JSON format.
   * @alias module:model/OrganizationExportResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OrganizationExportResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrganizationExportResponse} obj Optional instance to populate.
   * @return {module:model/OrganizationExportResponse} The populated <code>OrganizationExportResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OrganizationExportResponse();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.created_at = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('download_url'))
        obj.download_url = ApiClient.convertToType(data['download_url'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('organization'))
        obj.organization = GoalResponseWorkspace.constructFromObject(data['organization']);
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
OrganizationExportResponse.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
OrganizationExportResponse.prototype.resource_type = undefined;

/**
 * The time at which this resource was created.
 * @member {Date} created_at
 */
OrganizationExportResponse.prototype.created_at = undefined;

/**
 * Download this URL to retreive the full export of the organization in JSON format. It will be compressed in a gzip (.gz) container.  *Note: May be null if the export is still in progress or failed.  If present, this URL may only be valid for 1 hour from the time of retrieval. You should avoid persisting this URL somewhere and rather refresh on demand to ensure you do not keep stale URLs.*
 * @member {String} download_url
 */
OrganizationExportResponse.prototype.download_url = undefined;

/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
OrganizationExportResponse.StateEnum = {
  /**
   * value: "pending"
   * @const
   */
  pending: "pending",

  /**
   * value: "started"
   * @const
   */
  started: "started",

  /**
   * value: "finished"
   * @const
   */
  finished: "finished",

  /**
   * value: "error"
   * @const
   */
  error: "error"
};
/**
 * The current state of the export.
 * @member {module:model/OrganizationExportResponse.StateEnum} state
 */
OrganizationExportResponse.prototype.state = undefined;

/**
 * @member {module:model/GoalResponseWorkspace} organization
 */
OrganizationExportResponse.prototype.organization = undefined;

