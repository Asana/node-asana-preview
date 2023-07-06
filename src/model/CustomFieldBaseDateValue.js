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
 * The CustomFieldBaseDateValue model module.
 * @module model/CustomFieldBaseDateValue
 * @version 1.0.6
 */
export class CustomFieldBaseDateValue {
  /**
   * Constructs a new <code>CustomFieldBaseDateValue</code>.
   * *Conditional*. Only relevant for custom fields of type &#x60;date&#x60;. This object reflects the chosen date (and optionally, time) value of a &#x60;date&#x60; custom field. If no date is selected, the value of &#x60;date_value&#x60; will be &#x60;null&#x60;.
   * @alias module:model/CustomFieldBaseDateValue
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CustomFieldBaseDateValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomFieldBaseDateValue} obj Optional instance to populate.
   * @return {module:model/CustomFieldBaseDateValue} The populated <code>CustomFieldBaseDateValue</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CustomFieldBaseDateValue();
      if (data.hasOwnProperty('date'))
        obj._date = ApiClient.convertToType(data['date'], 'String');
      if (data.hasOwnProperty('date_time'))
        obj.date_time = ApiClient.convertToType(data['date_time'], 'String');
    }
    return obj;
  }
}

/**
 * A string representing the date in YYYY-MM-DD format.
 * @member {String} _date
 */
CustomFieldBaseDateValue.prototype._date = undefined;

/**
 * A string representing the date in ISO 8601 format. If no time value is selected, the value of `date-time` will be `null`.
 * @member {String} date_time
 */
CustomFieldBaseDateValue.prototype.date_time = undefined;

