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
    describe('TimeTrackingEntryBase', function() {
      beforeEach(function() {
        instance = new AsanaPreview.TimeTrackingEntryBase();
      });

      it('should create an instance of TimeTrackingEntryBase', function() {
        // TODO: update the code to test TimeTrackingEntryBase
        expect(instance).to.be.a(AsanaPreview.TimeTrackingEntryBase);
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

      it('should have the property duration_minutes (base name: "duration_minutes")', function() {
        // TODO: update the code to test the property duration_minutes
        expect(instance).to.have.property('duration_minutes');
        // expect(instance.duration_minutes).to.be(expectedValueLiteral);
      });

      it('should have the property entered_on (base name: "entered_on")', function() {
        // TODO: update the code to test the property entered_on
        expect(instance).to.have.property('entered_on');
        // expect(instance.entered_on).to.be(expectedValueLiteral);
      });

      it('should have the property created_by (base name: "created_by")', function() {
        // TODO: update the code to test the property created_by
        expect(instance).to.have.property('created_by');
        // expect(instance.created_by).to.be(expectedValueLiteral);
      });

      it('should have the property task (base name: "task")', function() {
        // TODO: update the code to test the property task
        expect(instance).to.have.property('task');
        // expect(instance.task).to.be(expectedValueLiteral);
      });

      it('should have the property created_at (base name: "created_at")', function() {
        // TODO: update the code to test the property created_at
        expect(instance).to.have.property('created_at');
        // expect(instance.created_at).to.be(expectedValueLiteral);
      });

    });
  });

}));
