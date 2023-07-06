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
import {CustomFieldResponsePeopleValue} from './CustomFieldResponsePeopleValue';

/**
 * The StoryResponseStory model module.
 * @module model/StoryResponseStory
 * @version 1.0.6
 */
export class StoryResponseStory {
  /**
   * Constructs a new <code>StoryResponseStory</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A story represents an activity associated with an object in the Asana system.
   * @alias module:model/StoryResponseStory
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>StoryResponseStory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StoryResponseStory} obj Optional instance to populate.
   * @return {module:model/StoryResponseStory} The populated <code>StoryResponseStory</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StoryResponseStory();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.created_at = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('created_by'))
        obj.created_by = CustomFieldResponsePeopleValue.constructFromObject(data['created_by']);
      if (data.hasOwnProperty('resource_subtype'))
        obj.resource_subtype = ApiClient.convertToType(data['resource_subtype'], 'String');
      if (data.hasOwnProperty('text'))
        obj.text = ApiClient.convertToType(data['text'], 'String');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
StoryResponseStory.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
StoryResponseStory.prototype.resource_type = undefined;

/**
 * The time at which this resource was created.
 * @member {Date} created_at
 */
StoryResponseStory.prototype.created_at = undefined;

/**
 * @member {module:model/CustomFieldResponsePeopleValue} created_by
 */
StoryResponseStory.prototype.created_by = undefined;

/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
 * @member {String} resource_subtype
 */
StoryResponseStory.prototype.resource_subtype = undefined;

/**
 * *Create-only*. Human-readable text for the story or comment. This will not include the name of the creator. *Note: This is not guaranteed to be stable for a given type of story. For example, text for a reassignment may not always say “assigned to …” as the text for a story can both be edited and change based on the language settings of the user making the request.* Use the `resource_subtype` property to discover the action that created the story.
 * @member {String} text
 */
StoryResponseStory.prototype.text = undefined;

