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
import GetEvents401Response from '../model/GetEvents401Response';
import GetEvents403Response from '../model/GetEvents403Response';
import GetEvents404Response from '../model/GetEvents404Response';
import GetEvents500Response from '../model/GetEvents500Response';
import GetProject200Response from '../model/GetProject200Response';
import GetProjects200Response from '../model/GetProjects200Response';

/**
* Projects service.
* @module api/ProjectsApi
* @version 1.0.1
*/
export default class ProjectsApi {

    /**
    * Constructs a new ProjectsApi. 
    * @alias module:api/ProjectsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getProject operation.
     * @callback module:api/ProjectsApi~getProjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetProject200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a project
     * Returns the complete project record for a single project.
     * @param {String} projectGid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.optFields Defines fields to return.  Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.  The gid of included objects will always be returned, regardless of the field options.
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {module:api/ProjectsApi~getProjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetProject200Response}
     */
    getProject(projectGid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'projectGid' is set
      if (projectGid === undefined || projectGid === null) {
        throw new Error("Missing the required parameter 'projectGid' when calling getProject");
      }

      let pathParams = {
        'project_gid': projectGid
      };
      let queryParams = {
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
      let returnType = GetProject200Response;
      return this.apiClient.callApi(
        '/projects/{project_gid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getProjects operation.
     * @callback module:api/ProjectsApi~getProjectsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetProjects200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get multiple projects
     * Returns the compact project records for some filtered set of projects. Use one or more of the parameters provided to filter the projects returned.  *Note: This endpoint may timeout for large domains. Try filtering by team!*
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.optFields Defines fields to return.  Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.  The gid of included objects will always be returned, regardless of the field options.
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Number} opts.limit The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token.  An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.  'Note: You can only pass in an offset that was returned to you via a previously paginated request.
     * @param {Boolean} opts.archived Only return projects whose `archived` field takes on the value of this parameter.
     * @param {String} opts.team The team to filter projects on.
     * @param {String} opts.workspace The workspace or organization to filter projects on.
     * @param {module:api/ProjectsApi~getProjectsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetProjects200Response}
     */
    getProjects(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'opt_fields': this.apiClient.buildCollectionParam(opts['optFields'], 'csv'),
        'opt_pretty': opts['optPretty'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'archived': opts['archived'],
        'team': opts['team'],
        'workspace': opts['workspace']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['personal_access_token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetProjects200Response;
      return this.apiClient.callApi(
        '/projects', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
