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
 * The EnumOptionInsertRequest model module.
 * @module model/EnumOptionInsertRequest
 * @version 1.0.6
 */
export class EnumOptionInsertRequest {
  /**
   * Constructs a new <code>EnumOptionInsertRequest</code>.
   * @alias module:model/EnumOptionInsertRequest
   * @class
   * @param enum_option {String} The gid of the enum option to relocate.
   */
  constructor(enum_option) {
    this.enum_option = enum_option;
  }

  /**
   * Constructs a <code>EnumOptionInsertRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnumOptionInsertRequest} obj Optional instance to populate.
   * @return {module:model/EnumOptionInsertRequest} The populated <code>EnumOptionInsertRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EnumOptionInsertRequest();
      if (data.hasOwnProperty('enum_option'))
        obj.enum_option = ApiClient.convertToType(data['enum_option'], 'String');
      if (data.hasOwnProperty('before_enum_option'))
        obj.before_enum_option = ApiClient.convertToType(data['before_enum_option'], 'String');
      if (data.hasOwnProperty('after_enum_option'))
        obj.after_enum_option = ApiClient.convertToType(data['after_enum_option'], 'String');
    }
    return obj;
  }
}

/**
 * The gid of the enum option to relocate.
 * @member {String} enum_option
 */
EnumOptionInsertRequest.prototype.enum_option = undefined;

/**
 * An existing enum option within this custom field before which the new enum option should be inserted. Cannot be provided together with after_enum_option.
 * @member {String} before_enum_option
 */
EnumOptionInsertRequest.prototype.before_enum_option = undefined;

/**
 * An existing enum option within this custom field after which the new enum option should be inserted. Cannot be provided together with before_enum_option.
 * @member {String} after_enum_option
 */
EnumOptionInsertRequest.prototype.after_enum_option = undefined;

