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
import {ApiClient} from "../ApiClient";
import {ErrorResponse} from '../model/ErrorResponse';
import {RuleTriggerGidRunBody} from '../model/RuleTriggerGidRunBody';
import {RuleTriggerResponseData} from '../model/RuleTriggerResponseData';

/**
* Rules service.
* @module api/RulesApi
* @version 1.0.5
*/
export class RulesApi {

    /**
    * Constructs a new RulesApi. 
    * @alias module:api/RulesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the triggerRule operation.
     * @callback moduleapi/RulesApi~triggerRuleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RuleTriggerResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Trigger a rule
     * Trigger a rule which uses an [\&quot;incoming web request\&quot;](/docs/incoming-web-requests) trigger.
     * @param {module:model/RuleTriggerGidRunBody} body A dictionary of variables accessible from within the rule.
     * @param {String} rule_trigger_gid The ID of the incoming web request trigger. This value is a path parameter that is automatically generated for the API endpoint.
     * @param {module:api/RulesApi~triggerRuleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    triggerRule(body, rule_trigger_gid, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling triggerRule");
      }
      // verify the required parameter 'rule_trigger_gid' is set
      if (rule_trigger_gid === undefined || rule_trigger_gid === null) {
        throw new Error("Missing the required parameter 'rule_trigger_gid' when calling triggerRule");
      }

      let pathParams = {
        'rule_trigger_gid': rule_trigger_gid
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json; charset=UTF-8'];
      let accepts = ['application/json; charset=UTF-8'];
      let returnType = RuleTriggerResponseData;

      return this.apiClient.callApi(
        '/rule_triggers/{rule_trigger_gid}/run', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}