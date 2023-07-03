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
 * The ProjectSaveAsTemplateRequest model module.
 * @module model/ProjectSaveAsTemplateRequest
 * @version 1.0.5
 */
export class ProjectSaveAsTemplateRequest {
  /**
   * Constructs a new <code>ProjectSaveAsTemplateRequest</code>.
   * @alias module:model/ProjectSaveAsTemplateRequest
   * @class
   * @param name {String} The name of the new project template.
   * @param _public {Boolean} Sets the project template to public to its team.
   */
  constructor(name, _public) {
    this.name = name;
    this._public = _public;
  }

  /**
   * Constructs a <code>ProjectSaveAsTemplateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectSaveAsTemplateRequest} obj Optional instance to populate.
   * @return {module:model/ProjectSaveAsTemplateRequest} The populated <code>ProjectSaveAsTemplateRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectSaveAsTemplateRequest();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('workspace'))
        obj.workspace = ApiClient.convertToType(data['workspace'], 'String');
      if (data.hasOwnProperty('public'))
        obj._public = ApiClient.convertToType(data['public'], 'Boolean');
    }
    return obj;
  }
}

/**
 * The name of the new project template.
 * @member {String} name
 */
ProjectSaveAsTemplateRequest.prototype.name = undefined;

/**
 * Sets the team of the new project template. If the project exists in an organization, specify team and not workspace.
 * @member {String} team
 */
ProjectSaveAsTemplateRequest.prototype.team = undefined;

/**
 * Sets the workspace of the new project template. Only specify workspace if the project exists in a workspace.
 * @member {String} workspace
 */
ProjectSaveAsTemplateRequest.prototype.workspace = undefined;

/**
 * Sets the project template to public to its team.
 * @member {Boolean} _public
 */
ProjectSaveAsTemplateRequest.prototype._public = undefined;

