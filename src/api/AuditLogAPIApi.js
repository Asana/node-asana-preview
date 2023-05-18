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
import GetAuditLogEvents200Response from '../model/GetAuditLogEvents200Response';

/**
* AuditLogAPI service.
* @module api/AuditLogAPIApi
* @version 1.0.4
*/
export default class AuditLogAPIApi {

    /**
    * Constructs a new AuditLogAPIApi. 
    * @alias module:api/AuditLogAPIApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getAuditLogEvents operation.
     * @callback module:api/AuditLogAPIApi~getAuditLogEventsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAuditLogEvents200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get audit log events
     * Retrieve the audit log events that have been captured in your domain.  This endpoint will return a list of [AuditLogEvent](/reference/audit-log-api) objects, sorted by creation time in ascending order. Note that the Audit Log API captures events from October 8th, 2021 and later. Queries for events before this date will not return results.  There are a number of query parameters (below) that can be used to filter the set of [AuditLogEvent](/reference/audit-log-api) objects that are returned in the response. Any combination of query parameters is valid. When no filters are provided, all of the events that have been captured in your domain will match.  The list of events will always be [paginated](/docs/pagination). The default limit is 1000 events. The next set of events can be retrieved using the `offset` from the previous response. If there are no events that match the provided filters in your domain, the endpoint will return `null` for the `next_page` field. Querying again with the same filters may return new events if they were captured after the last request. Once a response includes a `next_page` with an `offset`, subsequent requests can be made with the latest `offset` to poll for new events that match the provided filters.  *Note: If the filters you provided match events in your domain and `next_page` is present in the response, we will continue to send `next_page` on subsequent requests even when there are no more events that match the filters. This was put in place so that you can implement an audit log stream that will return future events that match these filters. If you are not interested in future events that match the filters you have defined, you can rely on checking empty `data` response for the end of current events that match your filters.*  When no `offset` is provided, the response will begin with the oldest events that match the provided filters. It is important to note that [AuditLogEvent](/reference/audit-log-api) objects will be permanently deleted from our systems after 90 days. If you wish to keep a permanent record of these events, we recommend using a SIEM tool to ingest and store these logs.
     * @param {String} workspaceGid Globally unique identifier for the workspace or organization.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.startAt Filter to events created after this time (inclusive).
     * @param {Date} opts.endAt Filter to events created before this time (exclusive).
     * @param {String} opts.eventType Filter to events of this type. Refer to the [supported audit log events](/docs/audit-log-events#supported-audit-log-events) for a full list of values.
     * @param {module:model/String} opts.actorType Filter to events with an actor of this type. This only needs to be included if querying for actor types without an ID. If `actor_gid` is included, this should be excluded.
     * @param {String} opts.actorGid Filter to events triggered by the actor with this ID.
     * @param {String} opts.resourceGid Filter to events with this resource ID.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
     * @param {Array.<module:model/String>} opts.optFields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/AuditLogAPIApi~getAuditLogEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetAuditLogEvents200Response}
     */
    getAuditLogEvents(workspaceGid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'workspaceGid' is set
      if (workspaceGid === undefined || workspaceGid === null) {
        throw new Error("Missing the required parameter 'workspaceGid' when calling getAuditLogEvents");
      }

      let pathParams = {
        'workspace_gid': workspaceGid
      };
      let queryParams = {
        'start_at': opts['startAt'],
        'end_at': opts['endAt'],
        'event_type': opts['eventType'],
        'actor_type': opts['actorType'],
        'actor_gid': opts['actorGid'],
        'resource_gid': opts['resourceGid'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'opt_fields': this.apiClient.buildCollectionParam(opts['optFields'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['personalAccessToken'];
      let contentTypes = [];
      let accepts = ['application/json; charset=UTF-8'];
      let returnType = GetAuditLogEvents200Response;
      return this.apiClient.callApi(
        '/workspaces/{workspace_gid}/audit_log_events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
