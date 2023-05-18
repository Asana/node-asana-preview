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
import GetUserTaskList200Response from '../model/GetUserTaskList200Response';

/**
* UserTaskLists service.
* @module api/UserTaskListsApi
* @version 1.0.4
*/
export default class UserTaskListsApi {

    /**
    * Constructs a new UserTaskListsApi. 
    * @alias module:api/UserTaskListsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getUserTaskList operation.
     * @callback module:api/UserTaskListsApi~getUserTaskListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetUserTaskList200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a user task list
     * Returns the full record for a user task list.
     * @param {String} userTaskListGid Globally unique identifier for the user task list.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<module:model/String>} opts.optFields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/UserTaskListsApi~getUserTaskListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetUserTaskList200Response}
     */
    getUserTaskList(userTaskListGid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'userTaskListGid' is set
      if (userTaskListGid === undefined || userTaskListGid === null) {
        throw new Error("Missing the required parameter 'userTaskListGid' when calling getUserTaskList");
      }

      let pathParams = {
        'user_task_list_gid': userTaskListGid
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
      let accepts = ['application/json; charset=UTF-8'];
      let returnType = GetUserTaskList200Response;
      return this.apiClient.callApi(
        '/user_task_lists/{user_task_list_gid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserTaskListForUser operation.
     * @callback module:api/UserTaskListsApi~getUserTaskListForUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetUserTaskList200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a user's task list
     * Returns the full record for a user's task list.
     * @param {String} userGid A string identifying a user. This can either be the string \"me\", an email, or the gid of a user.
     * @param {String} workspace The workspace in which to get the user task list.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<module:model/String>} opts.optFields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/UserTaskListsApi~getUserTaskListForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetUserTaskList200Response}
     */
    getUserTaskListForUser(userGid, workspace, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'userGid' is set
      if (userGid === undefined || userGid === null) {
        throw new Error("Missing the required parameter 'userGid' when calling getUserTaskListForUser");
      }
      // verify the required parameter 'workspace' is set
      if (workspace === undefined || workspace === null) {
        throw new Error("Missing the required parameter 'workspace' when calling getUserTaskListForUser");
      }

      let pathParams = {
        'user_gid': userGid
      };
      let queryParams = {
        'opt_pretty': opts['optPretty'],
        'workspace': workspace,
        'opt_fields': this.apiClient.buildCollectionParam(opts['optFields'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['personalAccessToken'];
      let contentTypes = [];
      let accepts = ['application/json; charset=UTF-8'];
      let returnType = GetUserTaskList200Response;
      return this.apiClient.callApi(
        '/users/{user_gid}/user_task_list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
