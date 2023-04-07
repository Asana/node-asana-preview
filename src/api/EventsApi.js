/**
 * Asana
 * This is the interface for interacting with the Asana platform
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ErrorResponse from '../model/ErrorResponse';
import GetEvents200Response from '../model/GetEvents200Response';
import GetEvents401Response from '../model/GetEvents401Response';
import GetEvents403Response from '../model/GetEvents403Response';
import GetEvents404Response from '../model/GetEvents404Response';
import GetEvents412Response from '../model/GetEvents412Response';
import GetEvents500Response from '../model/GetEvents500Response';

/**
* Events service.
* @module api/EventsApi
* @version 1.0.2
*/
export default class EventsApi {

    /**
    * Constructs a new EventsApi. 
    * @alias module:api/EventsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getEvents operation.
     * @callback module:api/EventsApi~getEventsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetEvents200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get events on a resource
     * Returns the full record for all events that have occurred since the sync token was created.  A `GET` request to the endpoint `/[path_to_resource]/events` can be made in lieu of including the resource ID in the data for the request.  Asana limits a single sync token to 100 events. If more than 100 events exist for a given resource, `has_more: true` will be returned in the response, indicating that there are more events to pull.  *Note: The resource returned will be the resource that triggered the event. This may be different from the one that the events were requested for. For example, a subscription to a project will contain events for tasks contained within the project.*
     * @param {String} resource A resource ID to subscribe to. The resource can be a task or project.
     * @param {Object} opts Optional parameters
     * @param {String} opts.sync A sync token received from the last request, or none on first sync. Events will be returned from the point in time that the sync token was generated.  *Note: On your first request, omit the sync token. The response will be the same as for an expired sync token, and will include a new valid sync token.If the sync token is too old (which may happen from time to time) the API will return a `412 Precondition Failed` error, and include a fresh sync token in the response.*
     * @param {Array.<String>} opts.optFields Defines fields to return.  Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.  The gid of included objects will always be returned, regardless of the field options.
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {module:api/EventsApi~getEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetEvents200Response}
     */
    getEvents(resource, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'resource' is set
      if (resource === undefined || resource === null) {
        throw new Error("Missing the required parameter 'resource' when calling getEvents");
      }

      let pathParams = {
      };
      let queryParams = {
        'resource': resource,
        'sync': opts['sync'],
        'opt_fields': this.apiClient.buildCollectionParam(opts['optFields'], 'csv'),
        'opt_pretty': opts['optPretty']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['personal_access_token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetEvents200Response;
      return this.apiClient.callApi(
        '/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
