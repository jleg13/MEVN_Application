/*
 * DropBearTable
 * This is a sample server API for a new restaurant service.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: jlegresl@myune.edu.au
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.27
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {GuestreservationBody} from '../model/GuestreservationBody';
import {InlineResponse2003} from '../model/InlineResponse2003';
import {InlineResponse2004} from '../model/InlineResponse2004';
import {InlineResponse201} from '../model/InlineResponse201';
import {InlineResponse2011} from '../model/InlineResponse2011';
import {InlineResponse2012} from '../model/InlineResponse2012';
import {InlineResponse401} from '../model/InlineResponse401';
import {InlineResponse4011} from '../model/InlineResponse4011';
import {LoginBody} from '../model/LoginBody';
import {LoginGuestBody} from '../model/LoginGuestBody';
import {ReservationsReservationIdBody} from '../model/ReservationsReservationIdBody';
import {SignupBody} from '../model/SignupBody';
import {UserIdReservationsBody} from '../model/UserIdReservationsBody';

/**
* Apiuser service.
* @module api/ApiuserApi
* @version 1.0.0
*/
export class ApiuserApi {

    /**
    * Constructs a new ApiuserApi. 
    * @alias module:api/ApiuserApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the guestReservationPOST operation.
     * @callback moduleapi/ApiuserApi~guestReservationPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2012{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save reservation as a guest user
     * @param {module:model/GuestreservationBody} body Reservation object that needs to be saved to database
     * @param {module:api/ApiuserApi~guestReservationPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    guestReservationPOST(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling guestReservationPOST");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2012;

      return this.apiClient.callApi(
        '/guest-reservation', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the loginGuestPOST operation.
     * @callback moduleapi/ApiuserApi~loginGuestPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Login in as a guest user
     * @param {module:model/LoginGuestBody} body User object to login in
     * @param {module:api/ApiuserApi~loginGuestPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    loginGuestPOST(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling loginGuestPOST");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2003;

      return this.apiClient.callApi(
        '/login/guest', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the loginPOST operation.
     * @callback moduleapi/ApiuserApi~loginPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Login in as a registered user
     * @param {module:model/LoginBody} body User object to login in
     * @param {module:api/ApiuserApi~loginPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    loginPOST(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling loginPOST");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2003;

      return this.apiClient.callApi(
        '/login', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the signupPOST operation.
     * @callback moduleapi/ApiuserApi~signupPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2011{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new user
     * @param {module:model/SignupBody} body User object to save to database
     * @param {module:api/ApiuserApi~signupPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    signupPOST(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling signupPOST");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2011;

      return this.apiClient.callApi(
        '/signup', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the userIdNotificationGET operation.
     * @callback moduleapi/ApiuserApi~userIdNotificationGETCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} userId userId to send notification
     * @param {module:api/ApiuserApi~userIdNotificationGETCallback} callback The callback function, accepting three arguments: error, data, response
     */
    userIdNotificationGET(userId, callback) {
      
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling userIdNotificationGET");
      }

      let pathParams = {
        'userId': userId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/{userId}/notification', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the userIdReservationGET operation.
     * @callback moduleapi/ApiuserApi~userIdReservationGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a reservation of a user by reservation Id
     * @param {String} userId userId to find reservations
     * @param {String} reservationId reservationId to update
     * @param {module:api/ApiuserApi~userIdReservationGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    userIdReservationGET(userId, reservationId, callback) {
      
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling userIdReservationGET");
      }
      // verify the required parameter 'reservationId' is set
      if (reservationId === undefined || reservationId === null) {
        throw new Error("Missing the required parameter 'reservationId' when calling userIdReservationGET");
      }

      let pathParams = {
        'userId': userId,'reservationId': reservationId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse201;

      return this.apiClient.callApi(
        '/{userId}/reservations/{reservationId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the userIdReservationsGET operation.
     * @callback moduleapi/ApiuserApi~userIdReservationsGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all reservation of a user
     * @param {String} userId userId to find reservations
     * @param {module:api/ApiuserApi~userIdReservationsGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    userIdReservationsGET(userId, callback) {
      
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling userIdReservationsGET");
      }

      let pathParams = {
        'userId': userId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse201;

      return this.apiClient.callApi(
        '/{userId}/reservations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the userIdReservationsPOST operation.
     * @callback moduleapi/ApiuserApi~userIdReservationsPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2012{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post a new reservation for a user
     * @param {module:model/UserIdReservationsBody} body Reservation object that needs to be saved to database
     * @param {String} userId userId to find reservations
     * @param {module:api/ApiuserApi~userIdReservationsPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    userIdReservationsPOST(body, userId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling userIdReservationsPOST");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling userIdReservationsPOST");
      }

      let pathParams = {
        'userId': userId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2012;

      return this.apiClient.callApi(
        '/{userId}/reservations', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the userIdReservationsReservationIdDELETE operation.
     * @callback moduleapi/ApiuserApi~userIdReservationsReservationIdDELETECallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a reservation of a user
     * @param {String} userId userId to find reservation
     * @param {String} reservationId reservationId to delete
     * @param {module:api/ApiuserApi~userIdReservationsReservationIdDELETECallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    userIdReservationsReservationIdDELETE(userId, reservationId, callback) {
      
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling userIdReservationsReservationIdDELETE");
      }
      // verify the required parameter 'reservationId' is set
      if (reservationId === undefined || reservationId === null) {
        throw new Error("Missing the required parameter 'reservationId' when calling userIdReservationsReservationIdDELETE");
      }

      let pathParams = {
        'userId': userId,'reservationId': reservationId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2004;

      return this.apiClient.callApi(
        '/{userId}/reservations/{reservationId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the userIdReservationsReservationIdPUT operation.
     * @callback moduleapi/ApiuserApi~userIdReservationsReservationIdPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2012{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a reservation of a user
     * @param {module:model/ReservationsReservationIdBody} body Reservation object that needs to be saved to database
     * @param {String} userId userId to find reservation
     * @param {String} reservationId reservationId to update
     * @param {module:api/ApiuserApi~userIdReservationsReservationIdPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    userIdReservationsReservationIdPUT(body, userId, reservationId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling userIdReservationsReservationIdPUT");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling userIdReservationsReservationIdPUT");
      }
      // verify the required parameter 'reservationId' is set
      if (reservationId === undefined || reservationId === null) {
        throw new Error("Missing the required parameter 'reservationId' when calling userIdReservationsReservationIdPUT");
      }

      let pathParams = {
        'userId': userId,'reservationId': reservationId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2012;

      return this.apiClient.callApi(
        '/{userId}/reservations/{reservationId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}