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
import {JobResponseData} from '../model/JobResponseData';
import {ProjectTemplateGidInstantiateProjectBody} from '../model/ProjectTemplateGidInstantiateProjectBody';
import {ProjectTemplateResponseArray} from '../model/ProjectTemplateResponseArray';
import {ProjectTemplateResponseData} from '../model/ProjectTemplateResponseData';

/**
* ProjectTemplates service.
* @module api/ProjectTemplatesApi
* @version 1.0.6
*/
export class ProjectTemplatesApi {

    /**
    * Constructs a new ProjectTemplatesApi. 
    * @alias module:api/ProjectTemplatesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the deleteProjectTemplate operation.
     * @callback moduleapi/ProjectTemplatesApi~deleteProjectTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmptyResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a project template
     * A specific, existing project template can be deleted by making a DELETE request on the URL for that project template.  Returns an empty data record.
     * @param {String} project_template_gid Globally unique identifier for the project template.
     * @param {module:api/ProjectTemplatesApi~deleteProjectTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    deleteProjectTemplate(project_template_gid, callback) {
      
      let postBody = null;
      // verify the required parameter 'project_template_gid' is set
      if (project_template_gid === undefined || project_template_gid === null) {
        throw new Error("Missing the required parameter 'project_template_gid' when calling deleteProjectTemplate");
      }

      let pathParams = {
        'project_template_gid': project_template_gid
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
        '/project_templates/{project_template_gid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getProjectTemplate operation.
     * @callback moduleapi/ProjectTemplatesApi~getProjectTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectTemplateResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a project template
     * Returns the complete project template record for a single project template.
     * @param {String} project_template_gid Globally unique identifier for the project template.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/ProjectTemplatesApi~getProjectTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getProjectTemplate(project_template_gid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'project_template_gid' is set
      if (project_template_gid === undefined || project_template_gid === null) {
        throw new Error("Missing the required parameter 'project_template_gid' when calling getProjectTemplate");
      }

      let pathParams = {
        'project_template_gid': project_template_gid
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
      let returnType = ProjectTemplateResponseData;

      return this.apiClient.callApi(
        '/project_templates/{project_template_gid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getProjectTemplates operation.
     * @callback moduleapi/ProjectTemplatesApi~getProjectTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectTemplateResponseArray{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get multiple project templates
     * Returns the compact project template records for all project templates in the given team or workspace.
     * @param {Object} opts Optional parameters
     * @param {String} opts.workspace The workspace to filter results on.
     * @param {String} opts.team The team to filter projects on.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/ProjectTemplatesApi~getProjectTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getProjectTemplates(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'workspace': opts['workspace'],'team': opts['team'],'limit': opts['limit'],'offset': opts['offset'],'opt_fields': this.apiClient.buildCollectionParam(opts['opt_fields'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json; charset=UTF-8'];
      let returnType = ProjectTemplateResponseArray;

      return this.apiClient.callApi(
        '/project_templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getProjectTemplatesForTeam operation.
     * @callback moduleapi/ProjectTemplatesApi~getProjectTemplatesForTeamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectTemplateResponseArray{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a team&#x27;s project templates
     * Returns the compact project template records for all project templates in the team.
     * @param {String} team_gid Globally unique identifier for the team.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/ProjectTemplatesApi~getProjectTemplatesForTeamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getProjectTemplatesForTeam(team_gid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'team_gid' is set
      if (team_gid === undefined || team_gid === null) {
        throw new Error("Missing the required parameter 'team_gid' when calling getProjectTemplatesForTeam");
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
      let returnType = ProjectTemplateResponseArray;

      return this.apiClient.callApi(
        '/teams/{team_gid}/project_templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the instantiateProject operation.
     * @callback moduleapi/ProjectTemplatesApi~instantiateProjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Instantiate a project from a project template
     * Creates and returns a job that will asynchronously handle the project instantiation.  To form this request, it is recommended to first make a request to [get a project template](/reference/getprojecttemplate). Then, from the response, copy the &#x60;gid&#x60; from the object in the &#x60;requested_dates&#x60; array. This &#x60;gid&#x60; should be used in &#x60;requested_dates&#x60; to instantiate a project.  _Note: The body of this request will differ if your workspace is an organization. To determine if your workspace is an organization, use the [is_organization](/reference/workspaces) parameter._
     * @param {String} project_template_gid Globally unique identifier for the project template.
     * @param {Object} opts Optional parameters
     * @param {module:model/ProjectTemplateGidInstantiateProjectBody} opts.body Describes the inputs used for instantiating a project, such as the resulting project&#x27;s name, which team it should be created in, and values for date variables.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/ProjectTemplatesApi~instantiateProjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    instantiateProject(project_template_gid, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'project_template_gid' is set
      if (project_template_gid === undefined || project_template_gid === null) {
        throw new Error("Missing the required parameter 'project_template_gid' when calling instantiateProject");
      }

      let pathParams = {
        'project_template_gid': project_template_gid
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
      let returnType = JobResponseData;

      return this.apiClient.callApi(
        '/project_templates/{project_template_gid}/instantiateProject', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}