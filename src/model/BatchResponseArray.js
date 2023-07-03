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
import {BatchResponse} from './BatchResponse';

/**
 * The BatchResponseArray model module.
 * @module model/BatchResponseArray
 * @version 1.0.5
 */
export class BatchResponseArray {
  /**
   * Constructs a new <code>BatchResponseArray</code>.
   * @alias module:model/BatchResponseArray
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BatchResponseArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BatchResponseArray} obj Optional instance to populate.
   * @return {module:model/BatchResponseArray} The populated <code>BatchResponseArray</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BatchResponseArray();
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [BatchResponse]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/BatchResponse>} data
 */
BatchResponseArray.prototype.data = undefined;

