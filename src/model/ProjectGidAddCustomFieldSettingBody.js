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
import {AddCustomFieldSettingRequest} from './AddCustomFieldSettingRequest';

/**
 * The ProjectGidAddCustomFieldSettingBody model module.
 * @module model/ProjectGidAddCustomFieldSettingBody
 * @version 1.0.6
 */
export class ProjectGidAddCustomFieldSettingBody {
  /**
   * Constructs a new <code>ProjectGidAddCustomFieldSettingBody</code>.
   * @alias module:model/ProjectGidAddCustomFieldSettingBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProjectGidAddCustomFieldSettingBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectGidAddCustomFieldSettingBody} obj Optional instance to populate.
   * @return {module:model/ProjectGidAddCustomFieldSettingBody} The populated <code>ProjectGidAddCustomFieldSettingBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectGidAddCustomFieldSettingBody();
      if (data.hasOwnProperty('data'))
        obj.data = AddCustomFieldSettingRequest.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/AddCustomFieldSettingRequest} data
 */
ProjectGidAddCustomFieldSettingBody.prototype.data = undefined;
