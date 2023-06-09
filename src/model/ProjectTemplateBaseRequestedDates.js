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
 * The ProjectTemplateBaseRequestedDates model module.
 * @module model/ProjectTemplateBaseRequestedDates
 * @version 1.0.6
 */
export class ProjectTemplateBaseRequestedDates {
  /**
   * Constructs a new <code>ProjectTemplateBaseRequestedDates</code>.
   * @alias module:model/ProjectTemplateBaseRequestedDates
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProjectTemplateBaseRequestedDates</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectTemplateBaseRequestedDates} obj Optional instance to populate.
   * @return {module:model/ProjectTemplateBaseRequestedDates} The populated <code>ProjectTemplateBaseRequestedDates</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectTemplateBaseRequestedDates();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the date field in the project template. A value of `1` refers to the project start date, while `2` refers to the project due date.
 * @member {String} gid
 */
ProjectTemplateBaseRequestedDates.prototype.gid = undefined;

/**
 * The name of the date variable.
 * @member {String} name
 */
ProjectTemplateBaseRequestedDates.prototype.name = undefined;

/**
 * The description of what the date variable is used for when instantiating a project.
 * @member {String} description
 */
ProjectTemplateBaseRequestedDates.prototype.description = undefined;

