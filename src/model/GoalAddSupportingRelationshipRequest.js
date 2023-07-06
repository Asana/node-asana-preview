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
 * The GoalAddSupportingRelationshipRequest model module.
 * @module model/GoalAddSupportingRelationshipRequest
 * @version 1.0.6
 */
export class GoalAddSupportingRelationshipRequest {
  /**
   * Constructs a new <code>GoalAddSupportingRelationshipRequest</code>.
   * @alias module:model/GoalAddSupportingRelationshipRequest
   * @class
   * @param supporting_resource {String} The gid of the supporting resource to add to the parent goal. Must be the gid of a goal, project, or portfolio.
   */
  constructor(supporting_resource) {
    this.supporting_resource = supporting_resource;
  }

  /**
   * Constructs a <code>GoalAddSupportingRelationshipRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GoalAddSupportingRelationshipRequest} obj Optional instance to populate.
   * @return {module:model/GoalAddSupportingRelationshipRequest} The populated <code>GoalAddSupportingRelationshipRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GoalAddSupportingRelationshipRequest();
      if (data.hasOwnProperty('supporting_resource'))
        obj.supporting_resource = ApiClient.convertToType(data['supporting_resource'], 'String');
      if (data.hasOwnProperty('insert_before'))
        obj.insert_before = ApiClient.convertToType(data['insert_before'], 'String');
      if (data.hasOwnProperty('insert_after'))
        obj.insert_after = ApiClient.convertToType(data['insert_after'], 'String');
      if (data.hasOwnProperty('contribution_weight'))
        obj.contribution_weight = ApiClient.convertToType(data['contribution_weight'], 'Number');
    }
    return obj;
  }
}

/**
 * The gid of the supporting resource to add to the parent goal. Must be the gid of a goal, project, or portfolio.
 * @member {String} supporting_resource
 */
GoalAddSupportingRelationshipRequest.prototype.supporting_resource = undefined;

/**
 * An id of a subgoal of this parent goal. The new subgoal will be added before the one specified here. `insert_before` and `insert_after` parameters cannot both be specified. Currently only supported when adding a subgoal.
 * @member {String} insert_before
 */
GoalAddSupportingRelationshipRequest.prototype.insert_before = undefined;

/**
 * An id of a subgoal of this parent goal. The new subgoal will be added after the one specified here. `insert_before` and `insert_after` parameters cannot both be specified. Currently only supported when adding a subgoal.
 * @member {String} insert_after
 */
GoalAddSupportingRelationshipRequest.prototype.insert_after = undefined;

/**
 * The weight that the supporting resource's progress will contribute to the supported goal's progress. This can only be 0 or 1.
 * @member {Number} contribution_weight
 */
GoalAddSupportingRelationshipRequest.prototype.contribution_weight = undefined;

