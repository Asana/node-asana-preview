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
import GetTimePeriod200Response from '../model/GetTimePeriod200Response';
import GetTimePeriods200Response from '../model/GetTimePeriods200Response';

/**
* TimePeriods service.
* @module api/TimePeriodsApi
* @version 1.0.3
*/
export default class TimePeriodsApi {

    /**
    * Constructs a new TimePeriodsApi. 
    * @alias module:api/TimePeriodsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getTimePeriod operation.
     * @callback module:api/TimePeriodsApi~getTimePeriodCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTimePeriod200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a time period
     * Returns the full record for a single time period.
     * @param {String} timePeriodGid Globally unique identifier for the time period.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<module:model/String>} opts.optFields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/TimePeriodsApi~getTimePeriodCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTimePeriod200Response}
     */
    getTimePeriod(timePeriodGid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'timePeriodGid' is set
      if (timePeriodGid === undefined || timePeriodGid === null) {
        throw new Error("Missing the required parameter 'timePeriodGid' when calling getTimePeriod");
      }

      let pathParams = {
        'time_period_gid': timePeriodGid
      };
      let queryParams = {
        'opt_pretty': opts['optPretty'],
        'opt_fields': this.apiClient.buildCollectionParam(opts['optFields'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['personalAccessToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetTimePeriod200Response;
      return this.apiClient.callApi(
        '/time_periods/{time_period_gid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTimePeriods operation.
     * @callback module:api/TimePeriodsApi~getTimePeriodsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTimePeriods200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get time periods
     * Returns compact time period records.
     * @param {String} workspace Globally unique identifier for the workspace.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
     * @param {Date} opts.startOn ISO 8601 date string
     * @param {Date} opts.endOn ISO 8601 date string
     * @param {Array.<module:model/String>} opts.optFields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/TimePeriodsApi~getTimePeriodsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTimePeriods200Response}
     */
    getTimePeriods(workspace, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'workspace' is set
      if (workspace === undefined || workspace === null) {
        throw new Error("Missing the required parameter 'workspace' when calling getTimePeriods");
      }

      let pathParams = {
      };
      let queryParams = {
        'opt_pretty': opts['optPretty'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'start_on': opts['startOn'],
        'end_on': opts['endOn'],
        'workspace': workspace,
        'opt_fields': this.apiClient.buildCollectionParam(opts['optFields'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['personalAccessToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetTimePeriods200Response;
      return this.apiClient.callApi(
        '/time_periods', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
