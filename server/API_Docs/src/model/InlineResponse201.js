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
import {ApiClient} from '../ApiClient';
import {InlineResponse201Data} from './InlineResponse201Data';

/**
 * The InlineResponse201 model module.
 * @module model/InlineResponse201
 * @version 1.0.0
 */
export class InlineResponse201 {
  /**
   * Constructs a new <code>InlineResponse201</code>.
   * @alias module:model/InlineResponse201
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse201</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse201} obj Optional instance to populate.
   * @return {module:model/InlineResponse201} The populated <code>InlineResponse201</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse201();
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [InlineResponse201Data]);
      if (data.hasOwnProperty('confirmation'))
        obj.confirmation = ApiClient.convertToType(data['confirmation'], 'String');
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/InlineResponse201Data>} data
 */
InlineResponse201.prototype.data = undefined;

/**
 * @member {String} confirmation
 */
InlineResponse201.prototype.confirmation = undefined;

/**
 * @member {String} msg
 */
InlineResponse201.prototype.msg = undefined;

