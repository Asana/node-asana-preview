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
import {ProjectGidSectionsBody} from '../model/ProjectGidSectionsBody';
import {SectionGidAddTaskBody} from '../model/SectionGidAddTaskBody';
import {SectionResponseArray} from '../model/SectionResponseArray';
import {SectionResponseData} from '../model/SectionResponseData';
import {SectionsInsertBody} from '../model/SectionsInsertBody';
import {SectionsSectionGidBody} from '../model/SectionsSectionGidBody';

/**
* Sections service.
* @module api/SectionsApi
* @version 1.0.6
*/
export class SectionsApi {

    /**
    * Constructs a new SectionsApi. 
    * @alias module:api/SectionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the addTaskForSection operation.
     * @callback moduleapi/SectionsApi~addTaskForSectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmptyResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add task to section
     * Add a task to a specific, existing section. This will remove the task from other sections of the project.  The task will be inserted at the top of a section unless an insert_before or insert_after parameter is declared.  This does not work for separators (tasks with the resource_subtype of section).
     * @param {String} section_gid The globally unique identifier for the section.
     * @param {Object} opts Optional parameters
     * @param {module:model/SectionGidAddTaskBody} opts.body The task and optionally the insert location.
     * @param {module:api/SectionsApi~addTaskForSectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    addTaskForSection(section_gid, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'section_gid' is set
      if (section_gid === undefined || section_gid === null) {
        throw new Error("Missing the required parameter 'section_gid' when calling addTaskForSection");
      }

      let pathParams = {
        'section_gid': section_gid
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
        '/sections/{section_gid}/addTask', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the createSectionForProject operation.
     * @callback moduleapi/SectionsApi~createSectionForProjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SectionResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a section in a project
     * Creates a new section in a project. Returns the full record of the newly created section.
     * @param {String} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {module:model/ProjectGidSectionsBody} opts.body The section to create.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/SectionsApi~createSectionForProjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createSectionForProject(project_gid, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'project_gid' is set
      if (project_gid === undefined || project_gid === null) {
        throw new Error("Missing the required parameter 'project_gid' when calling createSectionForProject");
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
      let returnType = SectionResponseData;

      return this.apiClient.callApi(
        '/projects/{project_gid}/sections', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteSection operation.
     * @callback moduleapi/SectionsApi~deleteSectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmptyResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a section
     * A specific, existing section can be deleted by making a DELETE request on the URL for that section.  Note that sections must be empty to be deleted.  The last remaining section cannot be deleted.  Returns an empty data block.
     * @param {String} section_gid The globally unique identifier for the section.
     * @param {module:api/SectionsApi~deleteSectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    deleteSection(section_gid, callback) {
      
      let postBody = null;
      // verify the required parameter 'section_gid' is set
      if (section_gid === undefined || section_gid === null) {
        throw new Error("Missing the required parameter 'section_gid' when calling deleteSection");
      }

      let pathParams = {
        'section_gid': section_gid
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
        '/sections/{section_gid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getSection operation.
     * @callback moduleapi/SectionsApi~getSectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SectionResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a section
     * Returns the complete record for a single section.
     * @param {String} section_gid The globally unique identifier for the section.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/SectionsApi~getSectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getSection(section_gid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'section_gid' is set
      if (section_gid === undefined || section_gid === null) {
        throw new Error("Missing the required parameter 'section_gid' when calling getSection");
      }

      let pathParams = {
        'section_gid': section_gid
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
      let returnType = SectionResponseData;

      return this.apiClient.callApi(
        '/sections/{section_gid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getSectionsForProject operation.
     * @callback moduleapi/SectionsApi~getSectionsForProjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SectionResponseArray{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get sections in a project
     * Returns the compact records for all sections in the specified project.
     * @param {String} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/SectionsApi~getSectionsForProjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getSectionsForProject(project_gid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'project_gid' is set
      if (project_gid === undefined || project_gid === null) {
        throw new Error("Missing the required parameter 'project_gid' when calling getSectionsForProject");
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
      let returnType = SectionResponseArray;

      return this.apiClient.callApi(
        '/projects/{project_gid}/sections', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the insertSectionForProject operation.
     * @callback moduleapi/SectionsApi~insertSectionForProjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmptyResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Move or Insert sections
     * Move sections relative to each other. One of &#x60;before_section&#x60; or &#x60;after_section&#x60; is required.  Sections cannot be moved between projects.  Returns an empty data block.
     * @param {String} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {module:model/SectionsInsertBody} opts.body The section&#x27;s move action.
     * @param {module:api/SectionsApi~insertSectionForProjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    insertSectionForProject(project_gid, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'project_gid' is set
      if (project_gid === undefined || project_gid === null) {
        throw new Error("Missing the required parameter 'project_gid' when calling insertSectionForProject");
      }

      let pathParams = {
        'project_gid': project_gid
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
        '/projects/{project_gid}/sections/insert', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateSection operation.
     * @callback moduleapi/SectionsApi~updateSectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SectionResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a section
     * A specific, existing section can be updated by making a PUT request on the URL for that project. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged. (note that at this time, the only field that can be updated is the &#x60;name&#x60; field.)  When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the task.  Returns the complete updated section record.
     * @param {String} section_gid The globally unique identifier for the section.
     * @param {Object} opts Optional parameters
     * @param {module:model/SectionsSectionGidBody} opts.body The section to create.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/SectionsApi~updateSectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateSection(section_gid, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'section_gid' is set
      if (section_gid === undefined || section_gid === null) {
        throw new Error("Missing the required parameter 'section_gid' when calling updateSection");
      }

      let pathParams = {
        'section_gid': section_gid
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
      let returnType = SectionResponseData;

      return this.apiClient.callApi(
        '/sections/{section_gid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}