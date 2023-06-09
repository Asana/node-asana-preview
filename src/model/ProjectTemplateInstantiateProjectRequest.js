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
import {ProjectTemplateInstantiateProjectRequestRequestedDates} from './ProjectTemplateInstantiateProjectRequestRequestedDates';
import {ProjectTemplateInstantiateProjectRequestRequestedRoles} from './ProjectTemplateInstantiateProjectRequestRequestedRoles';

/**
 * The ProjectTemplateInstantiateProjectRequest model module.
 * @module model/ProjectTemplateInstantiateProjectRequest
 * @version 1.0.6
 */
export class ProjectTemplateInstantiateProjectRequest {
  /**
   * Constructs a new <code>ProjectTemplateInstantiateProjectRequest</code>.
   * @alias module:model/ProjectTemplateInstantiateProjectRequest
   * @class
   * @param name {String} The name of the new project.
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * Constructs a <code>ProjectTemplateInstantiateProjectRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectTemplateInstantiateProjectRequest} obj Optional instance to populate.
   * @return {module:model/ProjectTemplateInstantiateProjectRequest} The populated <code>ProjectTemplateInstantiateProjectRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectTemplateInstantiateProjectRequest();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('public'))
        obj._public = ApiClient.convertToType(data['public'], 'Boolean');
      if (data.hasOwnProperty('is_strict'))
        obj.is_strict = ApiClient.convertToType(data['is_strict'], 'Boolean');
      if (data.hasOwnProperty('requested_dates'))
        obj.requested_dates = ApiClient.convertToType(data['requested_dates'], [ProjectTemplateInstantiateProjectRequestRequestedDates]);
      if (data.hasOwnProperty('requested_roles'))
        obj.requested_roles = ApiClient.convertToType(data['requested_roles'], [ProjectTemplateInstantiateProjectRequestRequestedRoles]);
    }
    return obj;
  }
}

/**
 * The name of the new project.
 * @member {String} name
 */
ProjectTemplateInstantiateProjectRequest.prototype.name = undefined;

/**
 * *Optional*. Sets the team of the new project. If the project template exists in an _organization_, you may specify a value for `team`. If no value is provided then it defaults to the same team as the project template.
 * @member {String} team
 */
ProjectTemplateInstantiateProjectRequest.prototype.team = undefined;

/**
 * Sets the project to public to its team.
 * @member {Boolean} _public
 */
ProjectTemplateInstantiateProjectRequest.prototype._public = undefined;

/**
 * *Optional*. If set to `true`, the endpoint returns an \"Unprocessable Entity\" error if you fail to provide a calendar date value for any date variable. If set to `false`, a default date is used for each unfulfilled date variable (e.g., the current date is used as the Start Date of a project).
 * @member {Boolean} is_strict
 */
ProjectTemplateInstantiateProjectRequest.prototype.is_strict = undefined;

/**
 * Array of mappings of date variables to calendar dates.
 * @member {Array.<module:model/ProjectTemplateInstantiateProjectRequestRequestedDates>} requested_dates
 */
ProjectTemplateInstantiateProjectRequest.prototype.requested_dates = undefined;

/**
 * Array of mappings of template roles to user ids
 * @member {Array.<module:model/ProjectTemplateInstantiateProjectRequestRequestedRoles>} requested_roles
 */
ProjectTemplateInstantiateProjectRequest.prototype.requested_roles = undefined;

