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
 * The WorkspaceAddUserRequest model module.
 * @module model/WorkspaceAddUserRequest
 * @version 1.0.6
 */
export class WorkspaceAddUserRequest {
  /**
   * Constructs a new <code>WorkspaceAddUserRequest</code>.
   * A user identification object for specification with the addUser/removeUser endpoints.
   * @alias module:model/WorkspaceAddUserRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>WorkspaceAddUserRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkspaceAddUserRequest} obj Optional instance to populate.
   * @return {module:model/WorkspaceAddUserRequest} The populated <code>WorkspaceAddUserRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new WorkspaceAddUserRequest();
      if (data.hasOwnProperty('user'))
        obj.user = ApiClient.convertToType(data['user'], 'String');
    }
    return obj;
  }
}

/**
 * A string identifying a user. This can either be the string \"me\", an email, or the gid of a user.
 * @member {String} user
 */
WorkspaceAddUserRequest.prototype.user = undefined;

