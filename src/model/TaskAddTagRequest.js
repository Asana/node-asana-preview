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
 * The TaskAddTagRequest model module.
 * @module model/TaskAddTagRequest
 * @version 1.0.6
 */
export class TaskAddTagRequest {
  /**
   * Constructs a new <code>TaskAddTagRequest</code>.
   * @alias module:model/TaskAddTagRequest
   * @class
   * @param tag {String} The tag to add to the task.
   */
  constructor(tag) {
    this.tag = tag;
  }

  /**
   * Constructs a <code>TaskAddTagRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskAddTagRequest} obj Optional instance to populate.
   * @return {module:model/TaskAddTagRequest} The populated <code>TaskAddTagRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TaskAddTagRequest();
      if (data.hasOwnProperty('tag'))
        obj.tag = ApiClient.convertToType(data['tag'], 'String');
    }
    return obj;
  }
}

/**
 * The tag to add to the task.
 * @member {String} tag
 */
TaskAddTagRequest.prototype.tag = undefined;

