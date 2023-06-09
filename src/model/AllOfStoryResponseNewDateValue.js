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
 * The AllOfStoryResponseNewDateValue model module.
 * @module model/AllOfStoryResponseNewDateValue
 * @version 1.0.6
 */
export class AllOfStoryResponseNewDateValue {
  /**
   * Constructs a new <code>AllOfStoryResponseNewDateValue</code>.
   * @alias module:model/AllOfStoryResponseNewDateValue
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AllOfStoryResponseNewDateValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfStoryResponseNewDateValue} obj Optional instance to populate.
   * @return {module:model/AllOfStoryResponseNewDateValue} The populated <code>AllOfStoryResponseNewDateValue</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfStoryResponseNewDateValue();
    }
    return obj;
  }
}
