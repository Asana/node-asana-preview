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
import {StoryResponseAssignee} from './StoryResponseAssignee';
import {StoryResponseTask} from './StoryResponseTask';

/**
 * The TimeTrackingEntryBase model module.
 * @module model/TimeTrackingEntryBase
 * @version 1.0.6
 */
export class TimeTrackingEntryBase {
  /**
   * Constructs a new <code>TimeTrackingEntryBase</code>.
   * A generic Asana Resource, containing a globally unique identifier.
   * @alias module:model/TimeTrackingEntryBase
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TimeTrackingEntryBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TimeTrackingEntryBase} obj Optional instance to populate.
   * @return {module:model/TimeTrackingEntryBase} The populated <code>TimeTrackingEntryBase</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TimeTrackingEntryBase();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('duration_minutes'))
        obj.duration_minutes = ApiClient.convertToType(data['duration_minutes'], 'Number');
      if (data.hasOwnProperty('entered_on'))
        obj.entered_on = ApiClient.convertToType(data['entered_on'], 'Date');
      if (data.hasOwnProperty('created_by'))
        obj.created_by = StoryResponseAssignee.constructFromObject(data['created_by']);
      if (data.hasOwnProperty('task'))
        obj.task = StoryResponseTask.constructFromObject(data['task']);
      if (data.hasOwnProperty('created_at'))
        obj.created_at = ApiClient.convertToType(data['created_at'], 'Date');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
TimeTrackingEntryBase.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
TimeTrackingEntryBase.prototype.resource_type = undefined;

/**
 * Time in minutes tracked by the entry.
 * @member {Number} duration_minutes
 */
TimeTrackingEntryBase.prototype.duration_minutes = undefined;

/**
 * The day that this entry is logged on.
 * @member {Date} entered_on
 */
TimeTrackingEntryBase.prototype.entered_on = undefined;

/**
 * @member {module:model/StoryResponseAssignee} created_by
 */
TimeTrackingEntryBase.prototype.created_by = undefined;

/**
 * @member {module:model/StoryResponseTask} task
 */
TimeTrackingEntryBase.prototype.task = undefined;

/**
 * The time at which this resource was created.
 * @member {Date} created_at
 */
TimeTrackingEntryBase.prototype.created_at = undefined;

