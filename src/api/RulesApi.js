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


import ApiClient from "../ApiClient";
import ErrorResponse from '../model/ErrorResponse';
import TriggerRule200Response from '../model/TriggerRule200Response';
import TriggerRuleRequest from '../model/TriggerRuleRequest';

/**
* Rules service.
* @module api/RulesApi
* @version 1.0.3
*/
export default class RulesApi {

    /**
    * Constructs a new RulesApi. 
    * @alias module:api/RulesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the triggerRule operation.
     * @callback module:api/RulesApi~triggerRuleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TriggerRule200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Trigger a rule
     * Trigger a rule which uses an [\"incoming web request\"](/docs/incoming-web-requests) trigger.
     * @param {String} ruleTriggerGid The ID of the incoming web request trigger. This value is a path parameter that is automatically generated for the API endpoint.
     * @param {module:model/TriggerRuleRequest} triggerRuleRequest A dictionary of variables accessible from within the rule.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.optFields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/RulesApi~triggerRuleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TriggerRule200Response}
     */
    triggerRule(ruleTriggerGid, triggerRuleRequest, opts, callback) {
      opts = opts || {};
      let postBody = triggerRuleRequest;
      // verify the required parameter 'ruleTriggerGid' is set
      if (ruleTriggerGid === undefined || ruleTriggerGid === null) {
        throw new Error("Missing the required parameter 'ruleTriggerGid' when calling triggerRule");
      }
      // verify the required parameter 'triggerRuleRequest' is set
      if (triggerRuleRequest === undefined || triggerRuleRequest === null) {
        throw new Error("Missing the required parameter 'triggerRuleRequest' when calling triggerRule");
      }

      let pathParams = {
        'rule_trigger_gid': ruleTriggerGid
      };
      let queryParams = {
        'opt_fields': this.apiClient.buildCollectionParam(opts['optFields'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['personalAccessToken'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TriggerRule200Response;
      return this.apiClient.callApi(
        '/rule_triggers/{rule_trigger_gid}/run', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}