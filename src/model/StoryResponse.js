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
import {CustomFieldBaseEnumOptions} from './CustomFieldBaseEnumOptions';
import {CustomFieldResponsePeopleValue} from './CustomFieldResponsePeopleValue';
import {GoalResponseLikes} from './GoalResponseLikes';
import {StoryResponseAssignee} from './StoryResponseAssignee';
import {StoryResponseCustomField} from './StoryResponseCustomField';
import {StoryResponseOldDates} from './StoryResponseOldDates';
import {StoryResponseOldEnumValue} from './StoryResponseOldEnumValue';
import {StoryResponseOldSection} from './StoryResponseOldSection';
import {StoryResponsePreviews} from './StoryResponsePreviews';
import {StoryResponseProject} from './StoryResponseProject';
import {StoryResponseStory} from './StoryResponseStory';
import {StoryResponseTag} from './StoryResponseTag';
import {StoryResponseTarget} from './StoryResponseTarget';
import {StoryResponseTask} from './StoryResponseTask';

/**
 * The StoryResponse model module.
 * @module model/StoryResponse
 * @version 1.0.5
 */
export class StoryResponse {
  /**
   * Constructs a new <code>StoryResponse</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A story represents an activity associated with an object in the Asana system.
   * @alias module:model/StoryResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>StoryResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StoryResponse} obj Optional instance to populate.
   * @return {module:model/StoryResponse} The populated <code>StoryResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StoryResponse();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.created_at = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('resource_subtype'))
        obj.resource_subtype = ApiClient.convertToType(data['resource_subtype'], 'String');
      if (data.hasOwnProperty('text'))
        obj.text = ApiClient.convertToType(data['text'], 'String');
      if (data.hasOwnProperty('html_text'))
        obj.html_text = ApiClient.convertToType(data['html_text'], 'String');
      if (data.hasOwnProperty('is_pinned'))
        obj.is_pinned = ApiClient.convertToType(data['is_pinned'], 'Boolean');
      if (data.hasOwnProperty('sticker_name'))
        obj.sticker_name = ApiClient.convertToType(data['sticker_name'], 'String');
      if (data.hasOwnProperty('created_by'))
        obj.created_by = CustomFieldResponsePeopleValue.constructFromObject(data['created_by']);
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('is_editable'))
        obj.is_editable = ApiClient.convertToType(data['is_editable'], 'Boolean');
      if (data.hasOwnProperty('is_edited'))
        obj.is_edited = ApiClient.convertToType(data['is_edited'], 'Boolean');
      if (data.hasOwnProperty('hearted'))
        obj.hearted = ApiClient.convertToType(data['hearted'], 'Boolean');
      if (data.hasOwnProperty('hearts'))
        obj.hearts = ApiClient.convertToType(data['hearts'], [GoalResponseLikes]);
      if (data.hasOwnProperty('num_hearts'))
        obj.num_hearts = ApiClient.convertToType(data['num_hearts'], 'Number');
      if (data.hasOwnProperty('liked'))
        obj.liked = ApiClient.convertToType(data['liked'], 'Boolean');
      if (data.hasOwnProperty('likes'))
        obj.likes = ApiClient.convertToType(data['likes'], [GoalResponseLikes]);
      if (data.hasOwnProperty('num_likes'))
        obj.num_likes = ApiClient.convertToType(data['num_likes'], 'Number');
      if (data.hasOwnProperty('previews'))
        obj.previews = ApiClient.convertToType(data['previews'], [StoryResponsePreviews]);
      if (data.hasOwnProperty('old_name'))
        obj.old_name = ApiClient.convertToType(data['old_name'], 'String');
      if (data.hasOwnProperty('new_name'))
        obj.new_name = ApiClient.convertToType(data['new_name'], 'String');
      if (data.hasOwnProperty('old_dates'))
        obj.old_dates = StoryResponseOldDates.constructFromObject(data['old_dates']);
      if (data.hasOwnProperty('new_dates'))
        obj.new_dates = StoryResponseOldDates.constructFromObject(data['new_dates']);
      if (data.hasOwnProperty('old_resource_subtype'))
        obj.old_resource_subtype = ApiClient.convertToType(data['old_resource_subtype'], 'String');
      if (data.hasOwnProperty('new_resource_subtype'))
        obj.new_resource_subtype = ApiClient.convertToType(data['new_resource_subtype'], 'String');
      if (data.hasOwnProperty('story'))
        obj.story = StoryResponseStory.constructFromObject(data['story']);
      if (data.hasOwnProperty('assignee'))
        obj.assignee = StoryResponseAssignee.constructFromObject(data['assignee']);
      if (data.hasOwnProperty('follower'))
        obj.follower = StoryResponseAssignee.constructFromObject(data['follower']);
      if (data.hasOwnProperty('old_section'))
        obj.old_section = StoryResponseOldSection.constructFromObject(data['old_section']);
      if (data.hasOwnProperty('new_section'))
        obj.new_section = StoryResponseOldSection.constructFromObject(data['new_section']);
      if (data.hasOwnProperty('task'))
        obj.task = StoryResponseTask.constructFromObject(data['task']);
      if (data.hasOwnProperty('project'))
        obj.project = StoryResponseProject.constructFromObject(data['project']);
      if (data.hasOwnProperty('tag'))
        obj.tag = StoryResponseTag.constructFromObject(data['tag']);
      if (data.hasOwnProperty('custom_field'))
        obj.custom_field = StoryResponseCustomField.constructFromObject(data['custom_field']);
      if (data.hasOwnProperty('old_text_value'))
        obj.old_text_value = ApiClient.convertToType(data['old_text_value'], 'String');
      if (data.hasOwnProperty('new_text_value'))
        obj.new_text_value = ApiClient.convertToType(data['new_text_value'], 'String');
      if (data.hasOwnProperty('old_number_value'))
        obj.old_number_value = ApiClient.convertToType(data['old_number_value'], 'Number');
      if (data.hasOwnProperty('new_number_value'))
        obj.new_number_value = ApiClient.convertToType(data['new_number_value'], 'Number');
      if (data.hasOwnProperty('old_enum_value'))
        obj.old_enum_value = StoryResponseOldEnumValue.constructFromObject(data['old_enum_value']);
      if (data.hasOwnProperty('new_enum_value'))
        obj.new_enum_value = StoryResponseOldEnumValue.constructFromObject(data['new_enum_value']);
      if (data.hasOwnProperty('old_date_value'))
        obj.old_date_value = ApiClient.convertToType(data['old_date_value'], Object);
      if (data.hasOwnProperty('new_date_value'))
        obj.new_date_value = ApiClient.convertToType(data['new_date_value'], Object);
      if (data.hasOwnProperty('old_people_value'))
        obj.old_people_value = ApiClient.convertToType(data['old_people_value'], [CustomFieldResponsePeopleValue]);
      if (data.hasOwnProperty('new_people_value'))
        obj.new_people_value = ApiClient.convertToType(data['new_people_value'], [CustomFieldResponsePeopleValue]);
      if (data.hasOwnProperty('old_multi_enum_values'))
        obj.old_multi_enum_values = ApiClient.convertToType(data['old_multi_enum_values'], [CustomFieldBaseEnumOptions]);
      if (data.hasOwnProperty('new_multi_enum_values'))
        obj.new_multi_enum_values = ApiClient.convertToType(data['new_multi_enum_values'], [CustomFieldBaseEnumOptions]);
      if (data.hasOwnProperty('new_approval_status'))
        obj.new_approval_status = ApiClient.convertToType(data['new_approval_status'], 'String');
      if (data.hasOwnProperty('old_approval_status'))
        obj.old_approval_status = ApiClient.convertToType(data['old_approval_status'], 'String');
      if (data.hasOwnProperty('duplicate_of'))
        obj.duplicate_of = StoryResponseTask.constructFromObject(data['duplicate_of']);
      if (data.hasOwnProperty('duplicated_from'))
        obj.duplicated_from = StoryResponseTask.constructFromObject(data['duplicated_from']);
      if (data.hasOwnProperty('dependency'))
        obj.dependency = StoryResponseTask.constructFromObject(data['dependency']);
      if (data.hasOwnProperty('source'))
        obj.source = ApiClient.convertToType(data['source'], 'String');
      if (data.hasOwnProperty('target'))
        obj.target = StoryResponseTarget.constructFromObject(data['target']);
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
StoryResponse.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
StoryResponse.prototype.resource_type = undefined;

/**
 * The time at which this resource was created.
 * @member {Date} created_at
 */
StoryResponse.prototype.created_at = undefined;

/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
 * @member {String} resource_subtype
 */
StoryResponse.prototype.resource_subtype = undefined;

/**
 * The plain text of the comment to add. Cannot be used with html_text.
 * @member {String} text
 */
StoryResponse.prototype.text = undefined;

/**
 * [Opt In](/docs/inputoutput-options). HTML formatted text for a comment. This will not include the name of the creator.
 * @member {String} html_text
 */
StoryResponse.prototype.html_text = undefined;

/**
 * *Conditional*. Whether the story should be pinned on the resource.
 * @member {Boolean} is_pinned
 */
StoryResponse.prototype.is_pinned = undefined;

/**
 * Allowed values for the <code>sticker_name</code> property.
 * @enum {String}
 * @readonly
 */
StoryResponse.StickerNameEnum = {
  /**
   * value: "green_checkmark"
   * @const
   */
  green_checkmark: "green_checkmark",

  /**
   * value: "people_dancing"
   * @const
   */
  people_dancing: "people_dancing",

  /**
   * value: "dancing_unicorn"
   * @const
   */
  dancing_unicorn: "dancing_unicorn",

  /**
   * value: "heart"
   * @const
   */
  heart: "heart",

  /**
   * value: "party_popper"
   * @const
   */
  party_popper: "party_popper",

  /**
   * value: "people_waving_flags"
   * @const
   */
  people_waving_flags: "people_waving_flags",

  /**
   * value: "splashing_narwhal"
   * @const
   */
  splashing_narwhal: "splashing_narwhal",

  /**
   * value: "trophy"
   * @const
   */
  trophy: "trophy",

  /**
   * value: "yeti_riding_unicorn"
   * @const
   */
  yeti_riding_unicorn: "yeti_riding_unicorn",

  /**
   * value: "celebrating_people"
   * @const
   */
  celebrating_people: "celebrating_people",

  /**
   * value: "determined_climbers"
   * @const
   */
  determined_climbers: "determined_climbers",

  /**
   * value: "phoenix_spreading_love"
   * @const
   */
  phoenix_spreading_love: "phoenix_spreading_love"
};
/**
 * The name of the sticker in this story. `null` if there is no sticker.
 * @member {module:model/StoryResponse.StickerNameEnum} sticker_name
 */
StoryResponse.prototype.sticker_name = undefined;

/**
 * @member {module:model/CustomFieldResponsePeopleValue} created_by
 */
StoryResponse.prototype.created_by = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
StoryResponse.TypeEnum = {
  /**
   * value: "comment"
   * @const
   */
  comment: "comment",

  /**
   * value: "system"
   * @const
   */
  system: "system"
};
/**
 * @member {module:model/StoryResponse.TypeEnum} type
 */
StoryResponse.prototype.type = undefined;

/**
 * *Conditional*. Whether the text of the story can be edited after creation.
 * @member {Boolean} is_editable
 */
StoryResponse.prototype.is_editable = undefined;

/**
 * *Conditional*. Whether the text of the story has been edited after creation.
 * @member {Boolean} is_edited
 */
StoryResponse.prototype.is_edited = undefined;

/**
 * *Deprecated - please use likes instead* *Conditional*. True if the story is hearted by the authorized user, false if not.
 * @member {Boolean} hearted
 */
StoryResponse.prototype.hearted = undefined;

/**
 * *Deprecated - please use likes instead*  *Conditional*. Array of likes for users who have hearted this story.
 * @member {Array.<module:model/GoalResponseLikes>} hearts
 */
StoryResponse.prototype.hearts = undefined;

/**
 * *Deprecated - please use likes instead*  *Conditional*. The number of users who have hearted this story.
 * @member {Number} num_hearts
 */
StoryResponse.prototype.num_hearts = undefined;

/**
 * *Conditional*. True if the story is liked by the authorized user, false if not.
 * @member {Boolean} liked
 */
StoryResponse.prototype.liked = undefined;

/**
 * *Conditional*. Array of likes for users who have liked this story.
 * @member {Array.<module:model/GoalResponseLikes>} likes
 */
StoryResponse.prototype.likes = undefined;

/**
 * *Conditional*. The number of users who have liked this story.
 * @member {Number} num_likes
 */
StoryResponse.prototype.num_likes = undefined;

/**
 * *Conditional*. A collection of previews to be displayed in the story.  *Note: This property only exists for comment stories.*
 * @member {Array.<module:model/StoryResponsePreviews>} previews
 */
StoryResponse.prototype.previews = undefined;

/**
 * *Conditional*'
 * @member {String} old_name
 */
StoryResponse.prototype.old_name = undefined;

/**
 * *Conditional*
 * @member {String} new_name
 */
StoryResponse.prototype.new_name = undefined;

/**
 * @member {module:model/StoryResponseOldDates} old_dates
 */
StoryResponse.prototype.old_dates = undefined;

/**
 * @member {module:model/StoryResponseOldDates} new_dates
 */
StoryResponse.prototype.new_dates = undefined;

/**
 * *Conditional*
 * @member {String} old_resource_subtype
 */
StoryResponse.prototype.old_resource_subtype = undefined;

/**
 * *Conditional*
 * @member {String} new_resource_subtype
 */
StoryResponse.prototype.new_resource_subtype = undefined;

/**
 * @member {module:model/StoryResponseStory} story
 */
StoryResponse.prototype.story = undefined;

/**
 * @member {module:model/StoryResponseAssignee} assignee
 */
StoryResponse.prototype.assignee = undefined;

/**
 * @member {module:model/StoryResponseAssignee} follower
 */
StoryResponse.prototype.follower = undefined;

/**
 * @member {module:model/StoryResponseOldSection} old_section
 */
StoryResponse.prototype.old_section = undefined;

/**
 * @member {module:model/StoryResponseOldSection} new_section
 */
StoryResponse.prototype.new_section = undefined;

/**
 * @member {module:model/StoryResponseTask} task
 */
StoryResponse.prototype.task = undefined;

/**
 * @member {module:model/StoryResponseProject} project
 */
StoryResponse.prototype.project = undefined;

/**
 * @member {module:model/StoryResponseTag} tag
 */
StoryResponse.prototype.tag = undefined;

/**
 * @member {module:model/StoryResponseCustomField} custom_field
 */
StoryResponse.prototype.custom_field = undefined;

/**
 * *Conditional*
 * @member {String} old_text_value
 */
StoryResponse.prototype.old_text_value = undefined;

/**
 * *Conditional*
 * @member {String} new_text_value
 */
StoryResponse.prototype.new_text_value = undefined;

/**
 * *Conditional*
 * @member {Number} old_number_value
 */
StoryResponse.prototype.old_number_value = undefined;

/**
 * *Conditional*
 * @member {Number} new_number_value
 */
StoryResponse.prototype.new_number_value = undefined;

/**
 * @member {module:model/StoryResponseOldEnumValue} old_enum_value
 */
StoryResponse.prototype.old_enum_value = undefined;

/**
 * @member {module:model/StoryResponseOldEnumValue} new_enum_value
 */
StoryResponse.prototype.new_enum_value = undefined;

/**
 * @member {Object} old_date_value
 */
StoryResponse.prototype.old_date_value = undefined;

/**
 * @member {Object} new_date_value
 */
StoryResponse.prototype.new_date_value = undefined;

/**
 * *Conditional*. The old value of a people custom field story.
 * @member {Array.<module:model/CustomFieldResponsePeopleValue>} old_people_value
 */
StoryResponse.prototype.old_people_value = undefined;

/**
 * *Conditional*. The new value of a people custom field story.
 * @member {Array.<module:model/CustomFieldResponsePeopleValue>} new_people_value
 */
StoryResponse.prototype.new_people_value = undefined;

/**
 * *Conditional*. The old value of a multi-enum custom field story.
 * @member {Array.<module:model/CustomFieldBaseEnumOptions>} old_multi_enum_values
 */
StoryResponse.prototype.old_multi_enum_values = undefined;

/**
 * *Conditional*. The new value of a multi-enum custom field story.
 * @member {Array.<module:model/CustomFieldBaseEnumOptions>} new_multi_enum_values
 */
StoryResponse.prototype.new_multi_enum_values = undefined;

/**
 * *Conditional*. The new value of approval status.
 * @member {String} new_approval_status
 */
StoryResponse.prototype.new_approval_status = undefined;

/**
 * *Conditional*. The old value of approval status.
 * @member {String} old_approval_status
 */
StoryResponse.prototype.old_approval_status = undefined;

/**
 * @member {module:model/StoryResponseTask} duplicate_of
 */
StoryResponse.prototype.duplicate_of = undefined;

/**
 * @member {module:model/StoryResponseTask} duplicated_from
 */
StoryResponse.prototype.duplicated_from = undefined;

/**
 * @member {module:model/StoryResponseTask} dependency
 */
StoryResponse.prototype.dependency = undefined;

/**
 * Allowed values for the <code>source</code> property.
 * @enum {String}
 * @readonly
 */
StoryResponse.SourceEnum = {
  /**
   * value: "web"
   * @const
   */
  web: "web",

  /**
   * value: "email"
   * @const
   */
  email: "email",

  /**
   * value: "mobile"
   * @const
   */
  mobile: "mobile",

  /**
   * value: "api"
   * @const
   */
  api: "api",

  /**
   * value: "unknown"
   * @const
   */
  unknown: "unknown"
};
/**
 * The component of the Asana product the user used to trigger the story.
 * @member {module:model/StoryResponse.SourceEnum} source
 */
StoryResponse.prototype.source = undefined;

/**
 * @member {module:model/StoryResponseTarget} target
 */
StoryResponse.prototype.target = undefined;

