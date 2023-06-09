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
import {InlineResponse412Errors} from './InlineResponse412Errors';

/**
 * The InlineResponse412 model module.
 * @module model/InlineResponse412
 * @version 1.0.6
 */
export class InlineResponse412 {
  /**
   * Constructs a new <code>InlineResponse412</code>.
   * @alias module:model/InlineResponse412
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse412</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse412} obj Optional instance to populate.
   * @return {module:model/InlineResponse412} The populated <code>InlineResponse412</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse412();
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [InlineResponse412Errors]);
      if (data.hasOwnProperty('sync'))
        obj.sync = ApiClient.convertToType(data['sync'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/InlineResponse412Errors>} errors
 */
InlineResponse412.prototype.errors = undefined;

/**
 * A sync token to be used with the next call to the /events endpoint.
 * @member {String} sync
 */
InlineResponse412.prototype.sync = undefined;

