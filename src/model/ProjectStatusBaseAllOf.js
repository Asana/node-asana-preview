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

/**
 * The ProjectStatusBaseAllOf model module.
 * @module model/ProjectStatusBaseAllOf
 * @version 1.0.3
 */
class ProjectStatusBaseAllOf {
    /**
     * Constructs a new <code>ProjectStatusBaseAllOf</code>.
     * @alias module:model/ProjectStatusBaseAllOf
     * @param text {String} The text content of the status update.
     * @param color {module:model/ProjectStatusBaseAllOf.ColorEnum} The color associated with the status update.
     */
    constructor(text, color) { 
        
        ProjectStatusBaseAllOf.initialize(this, text, color);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, text, color) { 
        obj['text'] = text;
        obj['color'] = color;
    }

    /**
     * Constructs a <code>ProjectStatusBaseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectStatusBaseAllOf} obj Optional instance to populate.
     * @return {module:model/ProjectStatusBaseAllOf} The populated <code>ProjectStatusBaseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectStatusBaseAllOf();

            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('html_text')) {
                obj['html_text'] = ApiClient.convertToType(data['html_text'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The text content of the status update.
 * @member {String} text
 */
ProjectStatusBaseAllOf.prototype['text'] = undefined;

/**
 * [Opt In](/docs/inputoutput-options). The text content of the status update with formatting as HTML.
 * @member {String} html_text
 */
ProjectStatusBaseAllOf.prototype['html_text'] = undefined;

/**
 * The color associated with the status update.
 * @member {module:model/ProjectStatusBaseAllOf.ColorEnum} color
 */
ProjectStatusBaseAllOf.prototype['color'] = undefined;





/**
 * Allowed values for the <code>color</code> property.
 * @enum {String}
 * @readonly
 */
ProjectStatusBaseAllOf['ColorEnum'] = {

    /**
     * value: "green"
     * @const
     */
    "green": "green",

    /**
     * value: "yellow"
     * @const
     */
    "yellow": "yellow",

    /**
     * value: "red"
     * @const
     */
    "red": "red",

    /**
     * value: "blue"
     * @const
     */
    "blue": "blue"
};



export default ProjectStatusBaseAllOf;

