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
 * The GoalMetricCurrentValueRequest model module.
 * @module model/GoalMetricCurrentValueRequest
 * @version 1.0.6
 */
export class GoalMetricCurrentValueRequest {
  /**
   * Constructs a new <code>GoalMetricCurrentValueRequest</code>.
   * A generic Asana Resource, containing a globally unique identifier.
   * @alias module:model/GoalMetricCurrentValueRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GoalMetricCurrentValueRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GoalMetricCurrentValueRequest} obj Optional instance to populate.
   * @return {module:model/GoalMetricCurrentValueRequest} The populated <code>GoalMetricCurrentValueRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GoalMetricCurrentValueRequest();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('current_number_value'))
        obj.current_number_value = ApiClient.convertToType(data['current_number_value'], 'Number');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
GoalMetricCurrentValueRequest.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
GoalMetricCurrentValueRequest.prototype.resource_type = undefined;

/**
 * *Conditional*. This number is the current value of a goal metric of type number.
 * @member {Number} current_number_value
 */
GoalMetricCurrentValueRequest.prototype.current_number_value = undefined;

