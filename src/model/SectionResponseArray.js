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
import {SectionResponse} from './SectionResponse';

/**
 * The SectionResponseArray model module.
 * @module model/SectionResponseArray
 * @version 1.0.6
 */
export class SectionResponseArray {
  /**
   * Constructs a new <code>SectionResponseArray</code>.
   * @alias module:model/SectionResponseArray
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SectionResponseArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SectionResponseArray} obj Optional instance to populate.
   * @return {module:model/SectionResponseArray} The populated <code>SectionResponseArray</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SectionResponseArray();
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [SectionResponse]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/SectionResponse>} data
 */
SectionResponseArray.prototype.data = undefined;
