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
 * The ErrorResponseErrors model module.
 * @module model/ErrorResponseErrors
 * @version 1.0.6
 */
export class ErrorResponseErrors {
  /**
   * Constructs a new <code>ErrorResponseErrors</code>.
   * @alias module:model/ErrorResponseErrors
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ErrorResponseErrors</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorResponseErrors} obj Optional instance to populate.
   * @return {module:model/ErrorResponseErrors} The populated <code>ErrorResponseErrors</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ErrorResponseErrors();
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('help'))
        obj.help = ApiClient.convertToType(data['help'], 'String');
      if (data.hasOwnProperty('phrase'))
        obj.phrase = ApiClient.convertToType(data['phrase'], 'String');
    }
    return obj;
  }
}

/**
 * Message providing more detail about the error that occurred, if available.
 * @member {String} message
 */
ErrorResponseErrors.prototype.message = undefined;

/**
 * Additional information directing developers to resources on how to address and fix the problem, if available.
 * @member {String} help
 */
ErrorResponseErrors.prototype.help = undefined;

/**
 * *500 errors only*. A unique error phrase which can be used when contacting developer support to help identify the exact occurrence of the problem in Asana’s logs.
 * @member {String} phrase
 */
ErrorResponseErrors.prototype.phrase = undefined;
