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
 * The AllOfProjectTemplateResponseOwner model module.
 * @module model/AllOfProjectTemplateResponseOwner
 * @version 1.0.5
 */
export class AllOfProjectTemplateResponseOwner {
  /**
   * Constructs a new <code>AllOfProjectTemplateResponseOwner</code>.
   * The current owner of the project template, may be null.
   * @alias module:model/AllOfProjectTemplateResponseOwner
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AllOfProjectTemplateResponseOwner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfProjectTemplateResponseOwner} obj Optional instance to populate.
   * @return {module:model/AllOfProjectTemplateResponseOwner} The populated <code>AllOfProjectTemplateResponseOwner</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfProjectTemplateResponseOwner();
    }
    return obj;
  }
}
