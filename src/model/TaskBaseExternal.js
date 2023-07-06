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
 * The TaskBaseExternal model module.
 * @module model/TaskBaseExternal
 * @version 1.0.6
 */
export class TaskBaseExternal {
  /**
   * Constructs a new <code>TaskBaseExternal</code>.
   * *OAuth Required*. *Conditional*. This field is returned only if external values are set or included by using [Opt In] (/docs/inputoutput-options). The external field allows you to store app-specific metadata on tasks, including a gid that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external gid is set, you can use the notation &#x60;external:custom_gid&#x60; to reference your object anywhere in the API where you may use the original object gid. See the page on Custom External Data for more details.
   * @alias module:model/TaskBaseExternal
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TaskBaseExternal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskBaseExternal} obj Optional instance to populate.
   * @return {module:model/TaskBaseExternal} The populated <code>TaskBaseExternal</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TaskBaseExternal();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} gid
 */
TaskBaseExternal.prototype.gid = undefined;

/**
 * @member {String} data
 */
TaskBaseExternal.prototype.data = undefined;

