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
 * The ProjectTemplateInstantiateProjectRequestRequestedRoles model module.
 * @module model/ProjectTemplateInstantiateProjectRequestRequestedRoles
 * @version 1.0.6
 */
export class ProjectTemplateInstantiateProjectRequestRequestedRoles {
  /**
   * Constructs a new <code>ProjectTemplateInstantiateProjectRequestRequestedRoles</code>.
   * @alias module:model/ProjectTemplateInstantiateProjectRequestRequestedRoles
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProjectTemplateInstantiateProjectRequestRequestedRoles</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectTemplateInstantiateProjectRequestRequestedRoles} obj Optional instance to populate.
   * @return {module:model/ProjectTemplateInstantiateProjectRequestRequestedRoles} The populated <code>ProjectTemplateInstantiateProjectRequestRequestedRoles</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectTemplateInstantiateProjectRequestRequestedRoles();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the template role in the project template.
 * @member {String} gid
 */
ProjectTemplateInstantiateProjectRequestRequestedRoles.prototype.gid = undefined;

/**
 * The user id that should be assigned to the template role.
 * @member {String} value
 */
ProjectTemplateInstantiateProjectRequestRequestedRoles.prototype.value = undefined;

