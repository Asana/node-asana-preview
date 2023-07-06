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
import {PortfolioMembershipResponse} from './PortfolioMembershipResponse';

/**
 * The PortfolioMembershipResponseArray model module.
 * @module model/PortfolioMembershipResponseArray
 * @version 1.0.6
 */
export class PortfolioMembershipResponseArray {
  /**
   * Constructs a new <code>PortfolioMembershipResponseArray</code>.
   * @alias module:model/PortfolioMembershipResponseArray
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PortfolioMembershipResponseArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PortfolioMembershipResponseArray} obj Optional instance to populate.
   * @return {module:model/PortfolioMembershipResponseArray} The populated <code>PortfolioMembershipResponseArray</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PortfolioMembershipResponseArray();
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [PortfolioMembershipResponse]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/PortfolioMembershipResponse>} data
 */
PortfolioMembershipResponseArray.prototype.data = undefined;

