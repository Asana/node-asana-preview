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
 * The UserBaseResponsePhoto model module.
 * @module model/UserBaseResponsePhoto
 * @version 1.0.6
 */
export class UserBaseResponsePhoto {
  /**
   * Constructs a new <code>UserBaseResponsePhoto</code>.
   * A map of the user’s profile photo in various sizes, or null if no photo is set. Sizes provided are 21, 27, 36, 60, 128, and 1024. All images are in PNG format, except for 1024 (which is in JPEG format).
   * @alias module:model/UserBaseResponsePhoto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UserBaseResponsePhoto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserBaseResponsePhoto} obj Optional instance to populate.
   * @return {module:model/UserBaseResponsePhoto} The populated <code>UserBaseResponsePhoto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UserBaseResponsePhoto();
      if (data.hasOwnProperty('image_21x21'))
        obj.image_21x21 = ApiClient.convertToType(data['image_21x21'], 'String');
      if (data.hasOwnProperty('image_27x27'))
        obj.image_27x27 = ApiClient.convertToType(data['image_27x27'], 'String');
      if (data.hasOwnProperty('image_36x36'))
        obj.image_36x36 = ApiClient.convertToType(data['image_36x36'], 'String');
      if (data.hasOwnProperty('image_60x60'))
        obj.image_60x60 = ApiClient.convertToType(data['image_60x60'], 'String');
      if (data.hasOwnProperty('image_128x128'))
        obj.image_128x128 = ApiClient.convertToType(data['image_128x128'], 'String');
      if (data.hasOwnProperty('image_1024x1024'))
        obj.image_1024x1024 = ApiClient.convertToType(data['image_1024x1024'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} image_21x21
 */
UserBaseResponsePhoto.prototype.image_21x21 = undefined;

/**
 * @member {String} image_27x27
 */
UserBaseResponsePhoto.prototype.image_27x27 = undefined;

/**
 * @member {String} image_36x36
 */
UserBaseResponsePhoto.prototype.image_36x36 = undefined;

/**
 * @member {String} image_60x60
 */
UserBaseResponsePhoto.prototype.image_60x60 = undefined;

/**
 * @member {String} image_128x128
 */
UserBaseResponsePhoto.prototype.image_128x128 = undefined;

/**
 * @member {String} image_1024x1024
 */
UserBaseResponsePhoto.prototype.image_1024x1024 = undefined;

