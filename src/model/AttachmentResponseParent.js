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
 * The AttachmentResponseParent model module.
 * @module model/AttachmentResponseParent
 * @version 1.0.6
 */
export class AttachmentResponseParent {
  /**
   * Constructs a new <code>AttachmentResponseParent</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. The *task* is the basic object around which many operations in Asana are centered.A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. The *task* is the basic object around which many operations in Asana are centered. The task this attachment is attached to.
   * @alias module:model/AttachmentResponseParent
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AttachmentResponseParent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AttachmentResponseParent} obj Optional instance to populate.
   * @return {module:model/AttachmentResponseParent} The populated <code>AttachmentResponseParent</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AttachmentResponseParent();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('resource_subtype'))
        obj.resource_subtype = ApiClient.convertToType(data['resource_subtype'], 'String');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
AttachmentResponseParent.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
AttachmentResponseParent.prototype.resource_type = undefined;

/**
 * The name of the task.
 * @member {String} name
 */
AttachmentResponseParent.prototype.name = undefined;

/**
 * The resource subtype of the parent resource that the filter applies to.
 * @member {String} resource_subtype
 */
AttachmentResponseParent.prototype.resource_subtype = undefined;

