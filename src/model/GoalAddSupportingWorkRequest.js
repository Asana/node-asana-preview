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
 * The GoalAddSupportingWorkRequest model module.
 * @module model/GoalAddSupportingWorkRequest
 * @version 1.0.6
 */
export class GoalAddSupportingWorkRequest {
  /**
   * Constructs a new <code>GoalAddSupportingWorkRequest</code>.
   * @alias module:model/GoalAddSupportingWorkRequest
   * @class
   * @param supporting_work {String} The project/portfolio gid to add as supporting work for a goal
   */
  constructor(supporting_work) {
    this.supporting_work = supporting_work;
  }

  /**
   * Constructs a <code>GoalAddSupportingWorkRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GoalAddSupportingWorkRequest} obj Optional instance to populate.
   * @return {module:model/GoalAddSupportingWorkRequest} The populated <code>GoalAddSupportingWorkRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GoalAddSupportingWorkRequest();
      if (data.hasOwnProperty('supporting_work'))
        obj.supporting_work = ApiClient.convertToType(data['supporting_work'], 'String');
    }
    return obj;
  }
}

/**
 * The project/portfolio gid to add as supporting work for a goal
 * @member {String} supporting_work
 */
GoalAddSupportingWorkRequest.prototype.supporting_work = undefined;

