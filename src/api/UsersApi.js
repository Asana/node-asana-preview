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
import GetUser200Response from '../model/GetUser200Response';

/**
* Users service.
* @module api/UsersApi
* @version 1.0.1
*/
export default class UsersApi {

    /**
    * Constructs a new UsersApi. 
    * @alias module:api/UsersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getUser operation.
     * @callback module:api/UsersApi~getUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetUser200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a user
     * Returns the full user record for the single user with the provided ID.
     * @param {String} userGid A string identifying a user. This can either be the string \"me\", an email, or the gid of a user.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.optFields Defines fields to return.  Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.  The gid of included objects will always be returned, regardless of the field options.
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {module:api/UsersApi~getUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetUser200Response}
     */
    getUser(userGid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'userGid' is set
      if (userGid === undefined || userGid === null) {
        throw new Error("Missing the required parameter 'userGid' when calling getUser");
      }

      let pathParams = {
        'user_gid': userGid
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
      let returnType = GetUser200Response;
      return this.apiClient.callApi(
        '/users/{user_gid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
