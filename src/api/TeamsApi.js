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
import {EmptyResponseData} from '../model/EmptyResponseData';
import {ErrorResponse} from '../model/ErrorResponse';
import {TeamGidAddUserBody} from '../model/TeamGidAddUserBody';
import {TeamGidRemoveUserBody} from '../model/TeamGidRemoveUserBody';
import {TeamMembershipResponseData} from '../model/TeamMembershipResponseData';
import {TeamResponseArray} from '../model/TeamResponseArray';
import {TeamResponseData} from '../model/TeamResponseData';
import {TeamsBody} from '../model/TeamsBody';
import {TeamsBody1} from '../model/TeamsBody1';

/**
* Teams service.
* @module api/TeamsApi
* @version 1.0.5
*/
export class TeamsApi {

    /**
    * Constructs a new TeamsApi. 
    * @alias module:api/TeamsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the addUserForTeam operation.
     * @callback moduleapi/TeamsApi~addUserForTeamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamMembershipResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a user to a team
     * The user making this call must be a member of the team in order to add others. The user being added must exist in the same organization as the team.  Returns the complete team membership record for the newly added user.
     * @param {module:model/TeamGidAddUserBody} body The user to add to the team.
     * @param {String} team_gid Globally unique identifier for the team.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/TeamsApi~addUserForTeamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    addUserForTeam(body, team_gid, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addUserForTeam");
      }
      // verify the required parameter 'team_gid' is set
      if (team_gid === undefined || team_gid === null) {
        throw new Error("Missing the required parameter 'team_gid' when calling addUserForTeam");
      }

      let pathParams = {
        'team_gid': team_gid
      };
      let queryParams = {
        'opt_fields': this.apiClient.buildCollectionParam(opts['opt_fields'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json; charset=UTF-8'];
      let accepts = ['application/json; charset=UTF-8'];
      let returnType = TeamMembershipResponseData;

      return this.apiClient.callApi(
        '/teams/{team_gid}/addUser', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the createTeam operation.
     * @callback moduleapi/TeamsApi~createTeamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a team
     * Creates a team within the current workspace.
     * @param {module:model/TeamsBody1} body The team to create.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/TeamsApi~createTeamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createTeam(body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createTeam");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'limit': opts['limit'],'offset': opts['offset'],'opt_fields': this.apiClient.buildCollectionParam(opts['opt_fields'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json; charset=UTF-8'];
      let accepts = ['application/json; charset=UTF-8'];
      let returnType = TeamResponseData;

      return this.apiClient.callApi(
        '/teams', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getTeam operation.
     * @callback moduleapi/TeamsApi~getTeamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a team
     * Returns the full record for a single team.
     * @param {String} team_gid Globally unique identifier for the team.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/TeamsApi~getTeamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getTeam(team_gid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'team_gid' is set
      if (team_gid === undefined || team_gid === null) {
        throw new Error("Missing the required parameter 'team_gid' when calling getTeam");
      }

      let pathParams = {
        'team_gid': team_gid
      };
      let queryParams = {
        'limit': opts['limit'],'offset': opts['offset'],'opt_fields': this.apiClient.buildCollectionParam(opts['opt_fields'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json; charset=UTF-8'];
      let returnType = TeamResponseData;

      return this.apiClient.callApi(
        '/teams/{team_gid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getTeamsForUser operation.
     * @callback moduleapi/TeamsApi~getTeamsForUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamResponseArray{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get teams for a user
     * Returns the compact records for all teams to which the given user is assigned.
     * @param {String} user_gid A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
     * @param {String} organization The workspace or organization to filter teams on.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/TeamsApi~getTeamsForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getTeamsForUser(user_gid, organization, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'user_gid' is set
      if (user_gid === undefined || user_gid === null) {
        throw new Error("Missing the required parameter 'user_gid' when calling getTeamsForUser");
      }
      // verify the required parameter 'organization' is set
      if (organization === undefined || organization === null) {
        throw new Error("Missing the required parameter 'organization' when calling getTeamsForUser");
      }

      let pathParams = {
        'user_gid': user_gid
      };
      let queryParams = {
        'limit': opts['limit'],'offset': opts['offset'],'organization': organization,'opt_fields': this.apiClient.buildCollectionParam(opts['opt_fields'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json; charset=UTF-8'];
      let returnType = TeamResponseArray;

      return this.apiClient.callApi(
        '/users/{user_gid}/teams', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getTeamsForWorkspace operation.
     * @callback moduleapi/TeamsApi~getTeamsForWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamResponseArray{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get teams in a workspace
     * Returns the compact records for all teams in the workspace visible to the authorized user.
     * @param {String} workspace_gid Globally unique identifier for the workspace or organization.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/TeamsApi~getTeamsForWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getTeamsForWorkspace(workspace_gid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'workspace_gid' is set
      if (workspace_gid === undefined || workspace_gid === null) {
        throw new Error("Missing the required parameter 'workspace_gid' when calling getTeamsForWorkspace");
      }

      let pathParams = {
        'workspace_gid': workspace_gid
      };
      let queryParams = {
        'limit': opts['limit'],'offset': opts['offset'],'opt_fields': this.apiClient.buildCollectionParam(opts['opt_fields'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json; charset=UTF-8'];
      let returnType = TeamResponseArray;

      return this.apiClient.callApi(
        '/workspaces/{workspace_gid}/teams', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the removeUserForTeam operation.
     * @callback moduleapi/TeamsApi~removeUserForTeamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmptyResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a user from a team
     * The user making this call must be a member of the team in order to remove themselves or others.
     * @param {module:model/TeamGidRemoveUserBody} body The user to remove from the team.
     * @param {String} team_gid Globally unique identifier for the team.
     * @param {module:api/TeamsApi~removeUserForTeamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    removeUserForTeam(body, team_gid, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling removeUserForTeam");
      }
      // verify the required parameter 'team_gid' is set
      if (team_gid === undefined || team_gid === null) {
        throw new Error("Missing the required parameter 'team_gid' when calling removeUserForTeam");
      }

      let pathParams = {
        'team_gid': team_gid
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
      let returnType = EmptyResponseData;

      return this.apiClient.callApi(
        '/teams/{team_gid}/removeUser', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateTeam operation.
     * @callback moduleapi/TeamsApi~updateTeamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a team
     * Updates a team within the current workspace.
     * @param {module:model/TeamsBody} body The team to update.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/TeamsApi~updateTeamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateTeam(body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateTeam");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'limit': opts['limit'],'offset': opts['offset'],'opt_fields': this.apiClient.buildCollectionParam(opts['opt_fields'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json; charset=UTF-8'];
      let accepts = ['application/json; charset=UTF-8'];
      let returnType = TeamResponseData;

      return this.apiClient.callApi(
        '/teams', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}