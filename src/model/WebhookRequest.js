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
import {WebhookRequestFilters} from './WebhookRequestFilters';

/**
 * The WebhookRequest model module.
 * @module model/WebhookRequest
 * @version 1.0.6
 */
export class WebhookRequest {
  /**
   * Constructs a new <code>WebhookRequest</code>.
   * @alias module:model/WebhookRequest
   * @class
   * @param resource {String} A resource ID to subscribe to. Many Asana resources are valid to create webhooks on, but higher-level resources require filters.
   * @param target {String} The URL to receive the HTTP POST. The full URL will be used to deliver events from this webhook (including parameters) which allows encoding of application-specific state when the webhook is created.
   */
  constructor(resource, target) {
    this.resource = resource;
    this.target = target;
  }

  /**
   * Constructs a <code>WebhookRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebhookRequest} obj Optional instance to populate.
   * @return {module:model/WebhookRequest} The populated <code>WebhookRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new WebhookRequest();
      if (data.hasOwnProperty('resource'))
        obj.resource = ApiClient.convertToType(data['resource'], 'String');
      if (data.hasOwnProperty('target'))
        obj.target = ApiClient.convertToType(data['target'], 'String');
      if (data.hasOwnProperty('filters'))
        obj.filters = ApiClient.convertToType(data['filters'], [WebhookRequestFilters]);
    }
    return obj;
  }
}

/**
 * A resource ID to subscribe to. Many Asana resources are valid to create webhooks on, but higher-level resources require filters.
 * @member {String} resource
 */
WebhookRequest.prototype.resource = undefined;

/**
 * The URL to receive the HTTP POST. The full URL will be used to deliver events from this webhook (including parameters) which allows encoding of application-specific state when the webhook is created.
 * @member {String} target
 */
WebhookRequest.prototype.target = undefined;

/**
 * An array of WebhookFilter objects to specify a whitelist of filters to apply to events from this webhook. If a webhook event passes any of the filters the event will be delivered; otherwise no event will be sent to the receiving server.
 * @member {Array.<module:model/WebhookRequestFilters>} filters
 */
WebhookRequest.prototype.filters = undefined;

