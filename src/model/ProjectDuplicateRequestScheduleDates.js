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
 * The ProjectDuplicateRequestScheduleDates model module.
 * @module model/ProjectDuplicateRequestScheduleDates
 * @version 1.0.5
 */
export class ProjectDuplicateRequestScheduleDates {
  /**
   * Constructs a new <code>ProjectDuplicateRequestScheduleDates</code>.
   * A dictionary of options to auto-shift dates. &#x60;task_dates&#x60; must be included to use this option. Requires either &#x60;start_on&#x60; or &#x60;due_on&#x60;, but not both.
   * @alias module:model/ProjectDuplicateRequestScheduleDates
   * @class
   * @param should_skip_weekends {Boolean} Determines if the auto-shifted dates should skip weekends.
   */
  constructor(should_skip_weekends) {
    this.should_skip_weekends = should_skip_weekends;
  }

  /**
   * Constructs a <code>ProjectDuplicateRequestScheduleDates</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectDuplicateRequestScheduleDates} obj Optional instance to populate.
   * @return {module:model/ProjectDuplicateRequestScheduleDates} The populated <code>ProjectDuplicateRequestScheduleDates</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectDuplicateRequestScheduleDates();
      if (data.hasOwnProperty('should_skip_weekends'))
        obj.should_skip_weekends = ApiClient.convertToType(data['should_skip_weekends'], 'Boolean');
      if (data.hasOwnProperty('due_on'))
        obj.due_on = ApiClient.convertToType(data['due_on'], 'String');
      if (data.hasOwnProperty('start_on'))
        obj.start_on = ApiClient.convertToType(data['start_on'], 'String');
    }
    return obj;
  }
}

/**
 * Determines if the auto-shifted dates should skip weekends.
 * @member {Boolean} should_skip_weekends
 */
ProjectDuplicateRequestScheduleDates.prototype.should_skip_weekends = undefined;

/**
 * Sets the last due date in the duplicated project to the given date. The rest of the due dates will be offset by the same amount as the due dates in the original project.
 * @member {String} due_on
 */
ProjectDuplicateRequestScheduleDates.prototype.due_on = undefined;

/**
 * Sets the first start date in the duplicated project to the given date. The rest of the start dates will be offset by the same amount as the start dates in the original project.
 * @member {String} start_on
 */
ProjectDuplicateRequestScheduleDates.prototype.start_on = undefined;

