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
import {GoalRelationshipBaseSupportedGoal} from './GoalRelationshipBaseSupportedGoal';
import {GoalRelationshipBaseSupportingResource} from './GoalRelationshipBaseSupportingResource';

/**
 * The GoalRelationshipBase model module.
 * @module model/GoalRelationshipBase
 * @version 1.0.6
 */
export class GoalRelationshipBase {
  /**
   * Constructs a new <code>GoalRelationshipBase</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *goal relationship* is an object representing the relationship between a goal and another goal, a project, or a portfolio.
   * @alias module:model/GoalRelationshipBase
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GoalRelationshipBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GoalRelationshipBase} obj Optional instance to populate.
   * @return {module:model/GoalRelationshipBase} The populated <code>GoalRelationshipBase</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GoalRelationshipBase();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('resource_subtype'))
        obj.resource_subtype = ApiClient.convertToType(data['resource_subtype'], 'String');
      if (data.hasOwnProperty('supporting_resource'))
        obj.supporting_resource = GoalRelationshipBaseSupportingResource.constructFromObject(data['supporting_resource']);
      if (data.hasOwnProperty('contribution_weight'))
        obj.contribution_weight = ApiClient.convertToType(data['contribution_weight'], 'Number');
      if (data.hasOwnProperty('supported_goal'))
        obj.supported_goal = GoalRelationshipBaseSupportedGoal.constructFromObject(data['supported_goal']);
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
GoalRelationshipBase.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
GoalRelationshipBase.prototype.resource_type = undefined;

/**
 * Allowed values for the <code>resource_subtype</code> property.
 * @enum {String}
 * @readonly
 */
GoalRelationshipBase.ResourceSubtypeEnum = {
  /**
   * value: "subgoal"
   * @const
   */
  subgoal: "subgoal",

  /**
   * value: "supporting_work"
   * @const
   */
  supporting_work: "supporting_work"
};
/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
 * @member {module:model/GoalRelationshipBase.ResourceSubtypeEnum} resource_subtype
 */
GoalRelationshipBase.prototype.resource_subtype = undefined;

/**
 * @member {module:model/GoalRelationshipBaseSupportingResource} supporting_resource
 */
GoalRelationshipBase.prototype.supporting_resource = undefined;

/**
 * The weight that the supporting resource's progress contributes to the supported goal's progress. This can only be 0 or 1.
 * @member {Number} contribution_weight
 */
GoalRelationshipBase.prototype.contribution_weight = undefined;

/**
 * @member {module:model/GoalRelationshipBaseSupportedGoal} supported_goal
 */
GoalRelationshipBase.prototype.supported_goal = undefined;

