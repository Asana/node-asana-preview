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
import {ProjectGidProjectStatusesBody} from '../model/ProjectGidProjectStatusesBody';
import {ProjectStatusResponseArray} from '../model/ProjectStatusResponseArray';
import {ProjectStatusResponseData} from '../model/ProjectStatusResponseData';

/**
* ProjectStatuses service.
* @module api/ProjectStatusesApi
* @version 1.0.5
*/
export class ProjectStatusesApi {

    /**
    * Constructs a new ProjectStatusesApi. 
    * @alias module:api/ProjectStatusesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createProjectStatusForProject operation.
     * @callback moduleapi/ProjectStatusesApi~createProjectStatusForProjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectStatusResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a project status
     * *Deprecated: new integrations should prefer the &#x60;/status_updates&#x60; route.*  Creates a new status update on the project.  Returns the full record of the newly created project status update.
     * @param {module:model/ProjectGidProjectStatusesBody} body The project status to create.
     * @param {String} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/ProjectStatusesApi~createProjectStatusForProjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createProjectStatusForProject(body, project_gid, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createProjectStatusForProject");
      }
      // verify the required parameter 'project_gid' is set
      if (project_gid === undefined || project_gid === null) {
        throw new Error("Missing the required parameter 'project_gid' when calling createProjectStatusForProject");
      }

      let pathParams = {
        'project_gid': project_gid
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
      let returnType = ProjectStatusResponseData;

      return this.apiClient.callApi(
        '/projects/{project_gid}/project_statuses', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteProjectStatus operation.
     * @callback moduleapi/ProjectStatusesApi~deleteProjectStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmptyResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a project status
     * *Deprecated: new integrations should prefer the &#x60;/status_updates/{status_gid}&#x60; route.*  Deletes a specific, existing project status update.  Returns an empty data record.
     * @param {String} project_status_gid The project status update to get.
     * @param {module:api/ProjectStatusesApi~deleteProjectStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    deleteProjectStatus(project_status_gid, callback) {
      
      let postBody = null;
      // verify the required parameter 'project_status_gid' is set
      if (project_status_gid === undefined || project_status_gid === null) {
        throw new Error("Missing the required parameter 'project_status_gid' when calling deleteProjectStatus");
      }

      let pathParams = {
        'project_status_gid': project_status_gid
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
        '/project_statuses/{project_status_gid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getProjectStatus operation.
     * @callback moduleapi/ProjectStatusesApi~getProjectStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectStatusResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a project status
     * *Deprecated: new integrations should prefer the &#x60;/status_updates/{status_gid}&#x60; route.*  Returns the complete record for a single status update.
     * @param {String} project_status_gid The project status update to get.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/ProjectStatusesApi~getProjectStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getProjectStatus(project_status_gid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'project_status_gid' is set
      if (project_status_gid === undefined || project_status_gid === null) {
        throw new Error("Missing the required parameter 'project_status_gid' when calling getProjectStatus");
      }

      let pathParams = {
        'project_status_gid': project_status_gid
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
      let returnType = ProjectStatusResponseData;

      return this.apiClient.callApi(
        '/project_statuses/{project_status_gid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getProjectStatusesForProject operation.
     * @callback moduleapi/ProjectStatusesApi~getProjectStatusesForProjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectStatusResponseArray{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get statuses from a project
     * *Deprecated: new integrations should prefer the &#x60;/status_updates&#x60; route.*  Returns the compact project status update records for all updates on the project.
     * @param {String} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/ProjectStatusesApi~getProjectStatusesForProjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getProjectStatusesForProject(project_gid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'project_gid' is set
      if (project_gid === undefined || project_gid === null) {
        throw new Error("Missing the required parameter 'project_gid' when calling getProjectStatusesForProject");
      }

      let pathParams = {
        'project_gid': project_gid
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
      let returnType = ProjectStatusResponseArray;

      return this.apiClient.callApi(
        '/projects/{project_gid}/project_statuses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}