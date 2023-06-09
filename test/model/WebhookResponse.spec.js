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
    describe('WebhookResponse', function() {
      beforeEach(function() {
        instance = new AsanaPreview.WebhookResponse();
      });

      it('should create an instance of WebhookResponse', function() {
        // TODO: update the code to test WebhookResponse
        expect(instance).to.be.a(AsanaPreview.WebhookResponse);
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

      it('should have the property active (base name: "active")', function() {
        // TODO: update the code to test the property active
        expect(instance).to.have.property('active');
        // expect(instance.active).to.be(expectedValueLiteral);
      });

      it('should have the property resource (base name: "resource")', function() {
        // TODO: update the code to test the property resource
        expect(instance).to.have.property('resource');
        // expect(instance.resource).to.be(expectedValueLiteral);
      });

      it('should have the property target (base name: "target")', function() {
        // TODO: update the code to test the property target
        expect(instance).to.have.property('target');
        // expect(instance.target).to.be(expectedValueLiteral);
      });

      it('should have the property created_at (base name: "created_at")', function() {
        // TODO: update the code to test the property created_at
        expect(instance).to.have.property('created_at');
        // expect(instance.created_at).to.be(expectedValueLiteral);
      });

      it('should have the property last_failure_at (base name: "last_failure_at")', function() {
        // TODO: update the code to test the property last_failure_at
        expect(instance).to.have.property('last_failure_at');
        // expect(instance.last_failure_at).to.be(expectedValueLiteral);
      });

      it('should have the property last_failure_content (base name: "last_failure_content")', function() {
        // TODO: update the code to test the property last_failure_content
        expect(instance).to.have.property('last_failure_content');
        // expect(instance.last_failure_content).to.be(expectedValueLiteral);
      });

      it('should have the property last_success_at (base name: "last_success_at")', function() {
        // TODO: update the code to test the property last_success_at
        expect(instance).to.have.property('last_success_at');
        // expect(instance.last_success_at).to.be(expectedValueLiteral);
      });

      it('should have the property filters (base name: "filters")', function() {
        // TODO: update the code to test the property filters
        expect(instance).to.have.property('filters');
        // expect(instance.filters).to.be(expectedValueLiteral);
      });

    });
  });

}));
