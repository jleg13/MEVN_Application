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
import {InlineResponse2002Data} from './InlineResponse2002Data';

/**
 * The InlineResponse2002 model module.
 * @module model/InlineResponse2002
 * @version 1.0.0
 */
export class InlineResponse2002 {
  /**
   * Constructs a new <code>InlineResponse2002</code>.
   * @alias module:model/InlineResponse2002
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse2002</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2002} obj Optional instance to populate.
   * @return {module:model/InlineResponse2002} The populated <code>InlineResponse2002</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2002();
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [InlineResponse2002Data]);
      if (data.hasOwnProperty('confirmation'))
        obj.confirmation = ApiClient.convertToType(data['confirmation'], 'String');
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/InlineResponse2002Data>} data
 */
InlineResponse2002.prototype.data = undefined;

/**
 * @member {String} confirmation
 */
InlineResponse2002.prototype.confirmation = undefined;

/**
 * @member {String} msg
 */
InlineResponse2002.prototype.msg = undefined;

