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
 * The MembershipRequest model module.
 * @module model/MembershipRequest
 * @version 1.0.6
 */
export class MembershipRequest {
  /**
   * Constructs a new <code>MembershipRequest</code>.
   * @alias module:model/MembershipRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MembershipRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MembershipRequest} obj Optional instance to populate.
   * @return {module:model/MembershipRequest} The populated <code>MembershipRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MembershipRequest();
      if (data.hasOwnProperty('is_active'))
        obj.is_active = ApiClient.convertToType(data['is_active'], 'Boolean');
    }
    return obj;
  }
}

/**
 * *Optional*. Denotes if a member is active. Applies to all memberships
 * @member {Boolean} is_active
 */
MembershipRequest.prototype.is_active = undefined;

