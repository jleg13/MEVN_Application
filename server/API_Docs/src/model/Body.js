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

/**
 * The Body model module.
 * @module model/Body
 * @version 1.0.0
 */
export class Body {
  /**
   * Constructs a new <code>Body</code>.
   * @alias module:model/Body
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Body</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body} obj Optional instance to populate.
   * @return {module:model/Body} The populated <code>Body</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Body();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('cuisine'))
        obj.cuisine = ApiClient.convertToType(data['cuisine'], 'String');
      if (data.hasOwnProperty('openTime'))
        obj.openTime = ApiClient.convertToType(data['openTime'], 'String');
      if (data.hasOwnProperty('closeTime'))
        obj.closeTime = ApiClient.convertToType(data['closeTime'], 'String');
      if (data.hasOwnProperty('seatingInterval'))
        obj.seatingInterval = ApiClient.convertToType(data['seatingInterval'], 'Number');
      if (data.hasOwnProperty('tableCapacityPerInterval'))
        obj.tableCapacityPerInterval = ApiClient.convertToType(data['tableCapacityPerInterval'], 'Number');
      if (data.hasOwnProperty('info'))
        obj.info = ApiClient.convertToType(data['info'], 'String');
      if (data.hasOwnProperty('image'))
        obj.image = ApiClient.convertToType(data['image'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
Body.prototype.name = undefined;

/**
 * @member {String} cuisine
 */
Body.prototype.cuisine = undefined;

/**
 * @member {String} openTime
 */
Body.prototype.openTime = undefined;

/**
 * @member {String} closeTime
 */
Body.prototype.closeTime = undefined;

/**
 * @member {Number} seatingInterval
 */
Body.prototype.seatingInterval = undefined;

/**
 * @member {Number} tableCapacityPerInterval
 */
Body.prototype.tableCapacityPerInterval = undefined;

/**
 * @member {String} info
 */
Body.prototype.info = undefined;

/**
 * @member {String} image
 */
Body.prototype.image = undefined;

