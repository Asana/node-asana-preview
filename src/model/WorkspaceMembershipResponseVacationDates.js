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
 * The WorkspaceMembershipResponseVacationDates model module.
 * @module model/WorkspaceMembershipResponseVacationDates
 * @version 1.0.6
 */
export class WorkspaceMembershipResponseVacationDates {
  /**
   * Constructs a new <code>WorkspaceMembershipResponseVacationDates</code>.
   * Contains keys &#x60;start_on&#x60; and &#x60;end_on&#x60; for the vacation dates for the user in this workspace. If &#x60;start_on&#x60; is null, the entire &#x60;vacation_dates&#x60; object will be null. If &#x60;end_on&#x60; is before today, the entire &#x60;vacation_dates&#x60; object will be null.
   * @alias module:model/WorkspaceMembershipResponseVacationDates
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>WorkspaceMembershipResponseVacationDates</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkspaceMembershipResponseVacationDates} obj Optional instance to populate.
   * @return {module:model/WorkspaceMembershipResponseVacationDates} The populated <code>WorkspaceMembershipResponseVacationDates</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new WorkspaceMembershipResponseVacationDates();
      if (data.hasOwnProperty('start_on'))
        obj.start_on = ApiClient.convertToType(data['start_on'], 'String');
      if (data.hasOwnProperty('end_on'))
        obj.end_on = ApiClient.convertToType(data['end_on'], 'String');
    }
    return obj;
  }
}

/**
 * The day on which the user's vacation in this workspace starts. This is a date with `YYYY-MM-DD` format.
 * @member {String} start_on
 */
WorkspaceMembershipResponseVacationDates.prototype.start_on = undefined;

/**
 * The day on which the user's vacation in this workspace ends, or null if there is no end date. This is a date with `YYYY-MM-DD` format.
 * @member {String} end_on
 */
WorkspaceMembershipResponseVacationDates.prototype.end_on = undefined;

