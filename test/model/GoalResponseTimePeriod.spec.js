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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AsanaPreview);
  }
}(this, function(expect, AsanaPreview) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('GoalResponseTimePeriod', function() {
      beforeEach(function() {
        instance = new AsanaPreview.GoalResponseTimePeriod();
      });

      it('should create an instance of GoalResponseTimePeriod', function() {
        // TODO: update the code to test GoalResponseTimePeriod
        expect(instance).to.be.a(AsanaPreview.GoalResponseTimePeriod);
      });

      it('should have the property gid (base name: "gid")', function() {
        // TODO: update the code to test the property gid
        expect(instance).to.have.property('gid');
        // expect(instance.gid).to.be(expectedValueLiteral);
      });

      it('should have the property resource_type (base name: "resource_type")', function() {
        // TODO: update the code to test the property resource_type
        expect(instance).to.have.property('resource_type');
        // expect(instance.resource_type).to.be(expectedValueLiteral);
      });

      it('should have the property end_on (base name: "end_on")', function() {
        // TODO: update the code to test the property end_on
        expect(instance).to.have.property('end_on');
        // expect(instance.end_on).to.be(expectedValueLiteral);
      });

      it('should have the property start_on (base name: "start_on")', function() {
        // TODO: update the code to test the property start_on
        expect(instance).to.have.property('start_on');
        // expect(instance.start_on).to.be(expectedValueLiteral);
      });

      it('should have the property period (base name: "period")', function() {
        // TODO: update the code to test the property period
        expect(instance).to.have.property('period');
        // expect(instance.period).to.be(expectedValueLiteral);
      });

      it('should have the property display_name (base name: "display_name")', function() {
        // TODO: update the code to test the property display_name
        expect(instance).to.have.property('display_name');
        // expect(instance.display_name).to.be(expectedValueLiteral);
      });

    });
  });

}));
