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
import {TaskRequest} from './TaskRequest';

/**
 * The TasksTaskGidBody model module.
 * @module model/TasksTaskGidBody
 * @version 1.0.5
 */
export class TasksTaskGidBody {
  /**
   * Constructs a new <code>TasksTaskGidBody</code>.
   * @alias module:model/TasksTaskGidBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TasksTaskGidBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TasksTaskGidBody} obj Optional instance to populate.
   * @return {module:model/TasksTaskGidBody} The populated <code>TasksTaskGidBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TasksTaskGidBody();
      if (data.hasOwnProperty('data'))
        obj.data = TaskRequest.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/TaskRequest} data
 */
TasksTaskGidBody.prototype.data = undefined;

