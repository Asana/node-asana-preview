/**
 * Asana
 * This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CustomFieldBaseDateValue from './CustomFieldBaseDateValue';
import CustomFieldBaseEnumOptionsInner from './CustomFieldBaseEnumOptionsInner';
import CustomFieldBaseEnumValue from './CustomFieldBaseEnumValue';

/**
 * The StoryResponseCustomField model module.
 * @module model/StoryResponseCustomField
 * @version 1.0.4
 */
class StoryResponseCustomField {
    /**
     * Constructs a new <code>StoryResponseCustomField</code>.
     * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. Custom Fields store the metadata that is used in order to add user-specified information to tasks in Asana. Be sure to reference the [custom fields](/reference/custom-fields) developer documentation for more information about how custom fields relate to various resources in Asana.  Users in Asana can [lock custom fields](https://asana.com/guide/help/premium/custom-fields#gl-lock-fields), which will make them read-only when accessed by other users. Attempting to edit a locked custom field will return HTTP error code &#x60;403 Forbidden&#x60;.
     * @alias module:model/StoryResponseCustomField
     */
    constructor() { 
        
        StoryResponseCustomField.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StoryResponseCustomField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StoryResponseCustomField} obj Optional instance to populate.
     * @return {module:model/StoryResponseCustomField} The populated <code>StoryResponseCustomField</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StoryResponseCustomField();

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('resource_subtype')) {
                obj['resource_subtype'] = ApiClient.convertToType(data['resource_subtype'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('enum_options')) {
                obj['enum_options'] = ApiClient.convertToType(data['enum_options'], [CustomFieldBaseEnumOptionsInner]);
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('is_formula_field')) {
                obj['is_formula_field'] = ApiClient.convertToType(data['is_formula_field'], 'Boolean');
            }
            if (data.hasOwnProperty('date_value')) {
                obj['date_value'] = CustomFieldBaseDateValue.constructFromObject(data['date_value']);
            }
            if (data.hasOwnProperty('enum_value')) {
                obj['enum_value'] = CustomFieldBaseEnumValue.constructFromObject(data['enum_value']);
            }
            if (data.hasOwnProperty('multi_enum_values')) {
                obj['multi_enum_values'] = ApiClient.convertToType(data['multi_enum_values'], [CustomFieldBaseEnumOptionsInner]);
            }
            if (data.hasOwnProperty('number_value')) {
                obj['number_value'] = ApiClient.convertToType(data['number_value'], 'Number');
            }
            if (data.hasOwnProperty('text_value')) {
                obj['text_value'] = ApiClient.convertToType(data['text_value'], 'String');
            }
            if (data.hasOwnProperty('display_value')) {
                obj['display_value'] = ApiClient.convertToType(data['display_value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
StoryResponseCustomField.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
StoryResponseCustomField.prototype['resource_type'] = undefined;

/**
 * The name of the custom field.
 * @member {String} name
 */
StoryResponseCustomField.prototype['name'] = undefined;

/**
 * The type of the custom field. Must be one of the given values. 
 * @member {module:model/StoryResponseCustomField.ResourceSubtypeEnum} resource_subtype
 */
StoryResponseCustomField.prototype['resource_subtype'] = undefined;

/**
 * *Deprecated: new integrations should prefer the resource_subtype field.* The type of the custom field. Must be one of the given values. 
 * @member {module:model/StoryResponseCustomField.TypeEnum} type
 */
StoryResponseCustomField.prototype['type'] = undefined;

/**
 * *Conditional*. Only relevant for custom fields of type `enum`. This array specifies the possible values which an `enum` custom field can adopt. To modify the enum options, refer to [working with enum options](/reference/createenumoptionforcustomfield).
 * @member {Array.<module:model/CustomFieldBaseEnumOptionsInner>} enum_options
 */
StoryResponseCustomField.prototype['enum_options'] = undefined;

/**
 * *Conditional*. Determines if the custom field is enabled or not.
 * @member {Boolean} enabled
 */
StoryResponseCustomField.prototype['enabled'] = undefined;

/**
 * *Conditional*. This flag describes whether a custom field is a formula custom field.
 * @member {Boolean} is_formula_field
 */
StoryResponseCustomField.prototype['is_formula_field'] = undefined;

/**
 * @member {module:model/CustomFieldBaseDateValue} date_value
 */
StoryResponseCustomField.prototype['date_value'] = undefined;

/**
 * @member {module:model/CustomFieldBaseEnumValue} enum_value
 */
StoryResponseCustomField.prototype['enum_value'] = undefined;

/**
 * *Conditional*. Only relevant for custom fields of type `multi_enum`. This object is the chosen values of a `multi_enum` custom field.
 * @member {Array.<module:model/CustomFieldBaseEnumOptionsInner>} multi_enum_values
 */
StoryResponseCustomField.prototype['multi_enum_values'] = undefined;

/**
 * *Conditional*. This number is the value of a `number` custom field.
 * @member {Number} number_value
 */
StoryResponseCustomField.prototype['number_value'] = undefined;

/**
 * *Conditional*. This string is the value of a `text` custom field.
 * @member {String} text_value
 */
StoryResponseCustomField.prototype['text_value'] = undefined;

/**
 * A string representation for the value of the custom field. Integrations that don't require the underlying type should use this field to read values. Using this field will future-proof an app against new custom field types.
 * @member {String} display_value
 */
StoryResponseCustomField.prototype['display_value'] = undefined;





/**
 * Allowed values for the <code>resource_subtype</code> property.
 * @enum {String}
 * @readonly
 */
StoryResponseCustomField['ResourceSubtypeEnum'] = {

    /**
     * value: "text"
     * @const
     */
    "text": "text",

    /**
     * value: "enum"
     * @const
     */
    "enum": "enum",

    /**
     * value: "multi_enum"
     * @const
     */
    "multi_enum": "multi_enum",

    /**
     * value: "number"
     * @const
     */
    "number": "number",

    /**
     * value: "date"
     * @const
     */
    "date": "date",

    /**
     * value: "people"
     * @const
     */
    "people": "people"
};


/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
StoryResponseCustomField['TypeEnum'] = {

    /**
     * value: "text"
     * @const
     */
    "text": "text",

    /**
     * value: "enum"
     * @const
     */
    "enum": "enum",

    /**
     * value: "multi_enum"
     * @const
     */
    "multi_enum": "multi_enum",

    /**
     * value: "number"
     * @const
     */
    "number": "number"
};



export default StoryResponseCustomField;

