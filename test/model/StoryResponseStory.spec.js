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
    describe('StoryResponseStory', function() {
      beforeEach(function() {
        instance = new AsanaPreview.StoryResponseStory();
      });

      it('should create an instance of StoryResponseStory', function() {
        // TODO: update the code to test StoryResponseStory
        expect(instance).to.be.a(AsanaPreview.StoryResponseStory);
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

      it('should have the property created_at (base name: "created_at")', function() {
        // TODO: update the code to test the property created_at
        expect(instance).to.have.property('created_at');
        // expect(instance.created_at).to.be(expectedValueLiteral);
      });

      it('should have the property created_by (base name: "created_by")', function() {
        // TODO: update the code to test the property created_by
        expect(instance).to.have.property('created_by');
        // expect(instance.created_by).to.be(expectedValueLiteral);
      });

      it('should have the property resource_subtype (base name: "resource_subtype")', function() {
        // TODO: update the code to test the property resource_subtype
        expect(instance).to.have.property('resource_subtype');
        // expect(instance.resource_subtype).to.be(expectedValueLiteral);
      });

      it('should have the property text (base name: "text")', function() {
        // TODO: update the code to test the property text
        expect(instance).to.have.property('text');
        // expect(instance.text).to.be(expectedValueLiteral);
      });

    });
  });

}));
