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
import {AddFollowersRequest} from './AddFollowersRequest';

/**
 * The ProjectGidAddFollowersBody model module.
 * @module model/ProjectGidAddFollowersBody
 * @version 1.0.6
 */
export class ProjectGidAddFollowersBody {
  /**
   * Constructs a new <code>ProjectGidAddFollowersBody</code>.
   * @alias module:model/ProjectGidAddFollowersBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProjectGidAddFollowersBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectGidAddFollowersBody} obj Optional instance to populate.
   * @return {module:model/ProjectGidAddFollowersBody} The populated <code>ProjectGidAddFollowersBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectGidAddFollowersBody();
      if (data.hasOwnProperty('data'))
        obj.data = AddFollowersRequest.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/AddFollowersRequest} data
 */
ProjectGidAddFollowersBody.prototype.data = undefined;

