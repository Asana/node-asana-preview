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
import AddUserForWorkspace200Response from '../model/AddUserForWorkspace200Response';
import AddUserForWorkspaceRequest from '../model/AddUserForWorkspaceRequest';
import DeleteAttachment200Response from '../model/DeleteAttachment200Response';
import ErrorResponse from '../model/ErrorResponse';
import GetWorkspace200Response from '../model/GetWorkspace200Response';
import GetWorkspaces200Response from '../model/GetWorkspaces200Response';
import RemoveUserForWorkspaceRequest from '../model/RemoveUserForWorkspaceRequest';
import UpdateWorkspaceRequest from '../model/UpdateWorkspaceRequest';

/**
* Workspaces service.
* @module api/WorkspacesApi
* @version 1.0.3
*/
export default class WorkspacesApi {

    /**
    * Constructs a new WorkspacesApi. 
    * @alias module:api/WorkspacesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addUserForWorkspace operation.
     * @callback module:api/WorkspacesApi~addUserForWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AddUserForWorkspace200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a user to a workspace or organization
     * Add a user to a workspace or organization. The user can be referenced by their globally unique user ID or their email address. Returns the full user record for the invited user.
     * @param {String} workspaceGid Globally unique identifier for the workspace or organization.
     * @param {module:model/AddUserForWorkspaceRequest} addUserForWorkspaceRequest The user to add to the workspace.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<module:model/String>} opts.optFields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/WorkspacesApi~addUserForWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AddUserForWorkspace200Response}
     */
    addUserForWorkspace(workspaceGid, addUserForWorkspaceRequest, opts, callback) {
      opts = opts || {};
      let postBody = addUserForWorkspaceRequest;
      // verify the required parameter 'workspaceGid' is set
      if (workspaceGid === undefined || workspaceGid === null) {
        throw new Error("Missing the required parameter 'workspaceGid' when calling addUserForWorkspace");
      }
      // verify the required parameter 'addUserForWorkspaceRequest' is set
      if (addUserForWorkspaceRequest === undefined || addUserForWorkspaceRequest === null) {
        throw new Error("Missing the required parameter 'addUserForWorkspaceRequest' when calling addUserForWorkspace");
      }

      let pathParams = {
        'workspace_gid': workspaceGid
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AddUserForWorkspace200Response;
      return this.apiClient.callApi(
        '/workspaces/{workspace_gid}/addUser', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getWorkspace operation.
     * @callback module:api/WorkspacesApi~getWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetWorkspace200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a workspace
     * Returns the full workspace record for a single workspace.
     * @param {String} workspaceGid Globally unique identifier for the workspace or organization.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<module:model/String>} opts.optFields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/WorkspacesApi~getWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetWorkspace200Response}
     */
    getWorkspace(workspaceGid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'workspaceGid' is set
      if (workspaceGid === undefined || workspaceGid === null) {
        throw new Error("Missing the required parameter 'workspaceGid' when calling getWorkspace");
      }

      let pathParams = {
        'workspace_gid': workspaceGid
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
      let returnType = GetWorkspace200Response;
      return this.apiClient.callApi(
        '/workspaces/{workspace_gid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getWorkspaces operation.
     * @callback module:api/WorkspacesApi~getWorkspacesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetWorkspaces200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get multiple workspaces
     * Returns the compact records for all workspaces visible to the authorized user.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
     * @param {Array.<module:model/String>} opts.optFields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/WorkspacesApi~getWorkspacesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetWorkspaces200Response}
     */
    getWorkspaces(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'opt_pretty': opts['optPretty'],
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
      let accepts = ['application/json'];
      let returnType = GetWorkspaces200Response;
      return this.apiClient.callApi(
        '/workspaces', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the removeUserForWorkspace operation.
     * @callback module:api/WorkspacesApi~removeUserForWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteAttachment200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a user from a workspace or organization
     * Remove a user from a workspace or organization. The user making this call must be an admin in the workspace. The user can be referenced by their globally unique user ID or their email address. Returns an empty data record.
     * @param {String} workspaceGid Globally unique identifier for the workspace or organization.
     * @param {module:model/RemoveUserForWorkspaceRequest} removeUserForWorkspaceRequest The user to remove from the workspace.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {module:api/WorkspacesApi~removeUserForWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteAttachment200Response}
     */
    removeUserForWorkspace(workspaceGid, removeUserForWorkspaceRequest, opts, callback) {
      opts = opts || {};
      let postBody = removeUserForWorkspaceRequest;
      // verify the required parameter 'workspaceGid' is set
      if (workspaceGid === undefined || workspaceGid === null) {
        throw new Error("Missing the required parameter 'workspaceGid' when calling removeUserForWorkspace");
      }
      // verify the required parameter 'removeUserForWorkspaceRequest' is set
      if (removeUserForWorkspaceRequest === undefined || removeUserForWorkspaceRequest === null) {
        throw new Error("Missing the required parameter 'removeUserForWorkspaceRequest' when calling removeUserForWorkspace");
      }

      let pathParams = {
        'workspace_gid': workspaceGid
      };
      let queryParams = {
        'opt_pretty': opts['optPretty']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['personalAccessToken'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = DeleteAttachment200Response;
      return this.apiClient.callApi(
        '/workspaces/{workspace_gid}/removeUser', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateWorkspace operation.
     * @callback module:api/WorkspacesApi~updateWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetWorkspace200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a workspace
     * A specific, existing workspace can be updated by making a PUT request on the URL for that workspace. Only the fields provided in the data block will be updated; any unspecified fields will remain unchanged. Currently the only field that can be modified for a workspace is its name. Returns the complete, updated workspace record.
     * @param {String} workspaceGid Globally unique identifier for the workspace or organization.
     * @param {module:model/UpdateWorkspaceRequest} updateWorkspaceRequest The workspace object with all updated properties.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<module:model/String>} opts.optFields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/WorkspacesApi~updateWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetWorkspace200Response}
     */
    updateWorkspace(workspaceGid, updateWorkspaceRequest, opts, callback) {
      opts = opts || {};
      let postBody = updateWorkspaceRequest;
      // verify the required parameter 'workspaceGid' is set
      if (workspaceGid === undefined || workspaceGid === null) {
        throw new Error("Missing the required parameter 'workspaceGid' when calling updateWorkspace");
      }
      // verify the required parameter 'updateWorkspaceRequest' is set
      if (updateWorkspaceRequest === undefined || updateWorkspaceRequest === null) {
        throw new Error("Missing the required parameter 'updateWorkspaceRequest' when calling updateWorkspace");
      }

      let pathParams = {
        'workspace_gid': workspaceGid
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetWorkspace200Response;
      return this.apiClient.callApi(
        '/workspaces/{workspace_gid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}