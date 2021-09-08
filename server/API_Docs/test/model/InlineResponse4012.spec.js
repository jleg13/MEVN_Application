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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DropBearTable);
  }
}(this, function(expect, DropBearTable) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('InlineResponse4012', function() {
      beforeEach(function() {
        instance = new DropBearTable.InlineResponse4012();
      });

      it('should create an instance of InlineResponse4012', function() {
        // TODO: update the code to test InlineResponse4012
        expect(instance).to.be.a(DropBearTable.InlineResponse4012);
      });

      it('should have the property errors (base name: "errors")', function() {
        // TODO: update the code to test the property errors
        expect(instance).to.have.property('errors');
        // expect(instance.errors).to.be(expectedValueLiteral);
      });

    });
  });

}));
