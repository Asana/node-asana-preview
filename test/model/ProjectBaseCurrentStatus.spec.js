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
    describe('ProjectBaseCurrentStatus', function() {
      beforeEach(function() {
        instance = new AsanaPreview.ProjectBaseCurrentStatus();
      });

      it('should create an instance of ProjectBaseCurrentStatus', function() {
        // TODO: update the code to test ProjectBaseCurrentStatus
        expect(instance).to.be.a(AsanaPreview.ProjectBaseCurrentStatus);
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

      it('should have the property title (base name: "title")', function() {
        // TODO: update the code to test the property title
        expect(instance).to.have.property('title');
        // expect(instance.title).to.be(expectedValueLiteral);
      });

      it('should have the property text (base name: "text")', function() {
        // TODO: update the code to test the property text
        expect(instance).to.have.property('text');
        // expect(instance.text).to.be(expectedValueLiteral);
      });

      it('should have the property html_text (base name: "html_text")', function() {
        // TODO: update the code to test the property html_text
        expect(instance).to.have.property('html_text');
        // expect(instance.html_text).to.be(expectedValueLiteral);
      });

      it('should have the property color (base name: "color")', function() {
        // TODO: update the code to test the property color
        expect(instance).to.have.property('color');
        // expect(instance.color).to.be(expectedValueLiteral);
      });

      it('should have the property author (base name: "author")', function() {
        // TODO: update the code to test the property author
        expect(instance).to.have.property('author');
        // expect(instance.author).to.be(expectedValueLiteral);
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

      it('should have the property modified_at (base name: "modified_at")', function() {
        // TODO: update the code to test the property modified_at
        expect(instance).to.have.property('modified_at');
        // expect(instance.modified_at).to.be(expectedValueLiteral);
      });

    });
  });

}));
