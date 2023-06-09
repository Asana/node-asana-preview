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
import {GoalGidAddFollowersBody} from '../model/GoalGidAddFollowersBody';
import {GoalGidRemoveFollowersBody} from '../model/GoalGidRemoveFollowersBody';
import {GoalGidSetMetricBody} from '../model/GoalGidSetMetricBody';
import {GoalGidSetMetricCurrentValueBody} from '../model/GoalGidSetMetricCurrentValueBody';
import {GoalResponseArray} from '../model/GoalResponseArray';
import {GoalResponseData} from '../model/GoalResponseData';
import {GoalsBody} from '../model/GoalsBody';
import {GoalsGoalGidBody} from '../model/GoalsGoalGidBody';

/**
* Goals service.
* @module api/GoalsApi
* @version 1.0.6
*/
export class GoalsApi {

    /**
    * Constructs a new GoalsApi. 
    * @alias module:api/GoalsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the addFollowers operation.
     * @callback moduleapi/GoalsApi~addFollowersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GoalResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a collaborator to a goal
     * Adds followers to a goal. Returns the goal the followers were added to. Each goal can be associated with zero or more followers in the system. Requests to add/remove followers, if successful, will return the complete updated goal record, described above.
     * @param {module:model/GoalGidAddFollowersBody} body The followers to be added as collaborators
     * @param {String} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/GoalsApi~addFollowersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    addFollowers(body, goal_gid, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addFollowers");
      }
      // verify the required parameter 'goal_gid' is set
      if (goal_gid === undefined || goal_gid === null) {
        throw new Error("Missing the required parameter 'goal_gid' when calling addFollowers");
      }

      let pathParams = {
        'goal_gid': goal_gid
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
      let returnType = GoalResponseData;

      return this.apiClient.callApi(
        '/goals/{goal_gid}/addFollowers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the createGoal operation.
     * @callback moduleapi/GoalsApi~createGoalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GoalResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a goal
     * Creates a new goal in a workspace or team.  Returns the full record of the newly created goal.
     * @param {module:model/GoalsBody} body The goal to create.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/GoalsApi~createGoalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createGoal(body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createGoal");
      }

      let pathParams = {
        
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
      let returnType = GoalResponseData;

      return this.apiClient.callApi(
        '/goals', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the createGoalMetric operation.
     * @callback moduleapi/GoalsApi~createGoalMetricCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GoalResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a goal metric
     * Creates and adds a goal metric to a specified goal. Note that this replaces an existing goal metric if one already exists.
     * @param {module:model/GoalGidSetMetricBody} body The goal metric to create.
     * @param {String} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/GoalsApi~createGoalMetricCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createGoalMetric(body, goal_gid, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createGoalMetric");
      }
      // verify the required parameter 'goal_gid' is set
      if (goal_gid === undefined || goal_gid === null) {
        throw new Error("Missing the required parameter 'goal_gid' when calling createGoalMetric");
      }

      let pathParams = {
        'goal_gid': goal_gid
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
      let returnType = GoalResponseData;

      return this.apiClient.callApi(
        '/goals/{goal_gid}/setMetric', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteGoal operation.
     * @callback moduleapi/GoalsApi~deleteGoalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmptyResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a goal
     * A specific, existing goal can be deleted by making a DELETE request on the URL for that goal.  Returns an empty data record.
     * @param {String} goal_gid Globally unique identifier for the goal.
     * @param {module:api/GoalsApi~deleteGoalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    deleteGoal(goal_gid, callback) {
      
      let postBody = null;
      // verify the required parameter 'goal_gid' is set
      if (goal_gid === undefined || goal_gid === null) {
        throw new Error("Missing the required parameter 'goal_gid' when calling deleteGoal");
      }

      let pathParams = {
        'goal_gid': goal_gid
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json; charset=UTF-8'];
      let returnType = EmptyResponseData;

      return this.apiClient.callApi(
        '/goals/{goal_gid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getGoal operation.
     * @callback moduleapi/GoalsApi~getGoalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GoalResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a goal
     * Returns the complete goal record for a single goal.
     * @param {String} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/GoalsApi~getGoalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getGoal(goal_gid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'goal_gid' is set
      if (goal_gid === undefined || goal_gid === null) {
        throw new Error("Missing the required parameter 'goal_gid' when calling getGoal");
      }

      let pathParams = {
        'goal_gid': goal_gid
      };
      let queryParams = {
        'opt_fields': this.apiClient.buildCollectionParam(opts['opt_fields'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json; charset=UTF-8'];
      let returnType = GoalResponseData;

      return this.apiClient.callApi(
        '/goals/{goal_gid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getGoals operation.
     * @callback moduleapi/GoalsApi~getGoalsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GoalResponseArray{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get goals
     * Returns compact goal records.
     * @param {Object} opts Optional parameters
     * @param {String} opts.portfolio Globally unique identifier for supporting portfolio.
     * @param {String} opts.project Globally unique identifier for supporting project.
     * @param {Boolean} opts.is_workspace_level Filter to goals with is_workspace_level set to query value. Must be used with the workspace parameter.
     * @param {String} opts.team Globally unique identifier for the team.
     * @param {String} opts.workspace Globally unique identifier for the workspace.
     * @param {Array.<String>} opts.time_periods Globally unique identifiers for the time periods.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/GoalsApi~getGoalsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getGoals(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'portfolio': opts['portfolio'],'project': opts['project'],'is_workspace_level': opts['is_workspace_level'],'team': opts['team'],'workspace': opts['workspace'],'time_periods': this.apiClient.buildCollectionParam(opts['time_periods'], 'multi'),'limit': opts['limit'],'offset': opts['offset'],'opt_fields': this.apiClient.buildCollectionParam(opts['opt_fields'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json; charset=UTF-8'];
      let returnType = GoalResponseArray;

      return this.apiClient.callApi(
        '/goals', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getParentGoalsForGoal operation.
     * @callback moduleapi/GoalsApi~getParentGoalsForGoalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GoalResponseArray{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get parent goals from a goal
     * Returns a compact representation of all of the parent goals of a goal.
     * @param {String} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/GoalsApi~getParentGoalsForGoalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getParentGoalsForGoal(goal_gid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'goal_gid' is set
      if (goal_gid === undefined || goal_gid === null) {
        throw new Error("Missing the required parameter 'goal_gid' when calling getParentGoalsForGoal");
      }

      let pathParams = {
        'goal_gid': goal_gid
      };
      let queryParams = {
        'opt_fields': this.apiClient.buildCollectionParam(opts['opt_fields'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json; charset=UTF-8'];
      let returnType = GoalResponseArray;

      return this.apiClient.callApi(
        '/goals/{goal_gid}/parentGoals', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the removeFollowers operation.
     * @callback moduleapi/GoalsApi~removeFollowersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GoalResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a collaborator from a goal
     * Removes followers from a goal. Returns the goal the followers were removed from. Each goal can be associated with zero or more followers in the system. Requests to add/remove followers, if successful, will return the complete updated goal record, described above.
     * @param {module:model/GoalGidRemoveFollowersBody} body The followers to be removed as collaborators
     * @param {String} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/GoalsApi~removeFollowersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    removeFollowers(body, goal_gid, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling removeFollowers");
      }
      // verify the required parameter 'goal_gid' is set
      if (goal_gid === undefined || goal_gid === null) {
        throw new Error("Missing the required parameter 'goal_gid' when calling removeFollowers");
      }

      let pathParams = {
        'goal_gid': goal_gid
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
      let returnType = GoalResponseData;

      return this.apiClient.callApi(
        '/goals/{goal_gid}/removeFollowers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateGoal operation.
     * @callback moduleapi/GoalsApi~updateGoalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GoalResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a goal
     * An existing goal can be updated by making a PUT request on the URL for that goal. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated goal record.
     * @param {module:model/GoalsGoalGidBody} body The updated fields for the goal.
     * @param {String} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/GoalsApi~updateGoalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateGoal(body, goal_gid, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateGoal");
      }
      // verify the required parameter 'goal_gid' is set
      if (goal_gid === undefined || goal_gid === null) {
        throw new Error("Missing the required parameter 'goal_gid' when calling updateGoal");
      }

      let pathParams = {
        'goal_gid': goal_gid
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
      let returnType = GoalResponseData;

      return this.apiClient.callApi(
        '/goals/{goal_gid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateGoalMetric operation.
     * @callback moduleapi/GoalsApi~updateGoalMetricCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GoalResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a goal metric
     * Updates a goal&#x27;s existing metric&#x27;s &#x60;current_number_value&#x60; if one exists, otherwise responds with a 400 status code.  Returns the complete updated goal metric record.
     * @param {module:model/GoalGidSetMetricCurrentValueBody} body The updated fields for the goal metric.
     * @param {String} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/GoalsApi~updateGoalMetricCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateGoalMetric(body, goal_gid, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateGoalMetric");
      }
      // verify the required parameter 'goal_gid' is set
      if (goal_gid === undefined || goal_gid === null) {
        throw new Error("Missing the required parameter 'goal_gid' when calling updateGoalMetric");
      }

      let pathParams = {
        'goal_gid': goal_gid
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
      let returnType = GoalResponseData;

      return this.apiClient.callApi(
        '/goals/{goal_gid}/setMetricCurrentValue', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}