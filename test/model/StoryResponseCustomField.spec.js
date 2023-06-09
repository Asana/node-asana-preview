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
    describe('StoryResponseCustomField', function() {
      beforeEach(function() {
        instance = new AsanaPreview.StoryResponseCustomField();
      });

      it('should create an instance of StoryResponseCustomField', function() {
        // TODO: update the code to test StoryResponseCustomField
        expect(instance).to.be.a(AsanaPreview.StoryResponseCustomField);
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

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property resource_subtype (base name: "resource_subtype")', function() {
        // TODO: update the code to test the property resource_subtype
        expect(instance).to.have.property('resource_subtype');
        // expect(instance.resource_subtype).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property enum_options (base name: "enum_options")', function() {
        // TODO: update the code to test the property enum_options
        expect(instance).to.have.property('enum_options');
        // expect(instance.enum_options).to.be(expectedValueLiteral);
      });

      it('should have the property enabled (base name: "enabled")', function() {
        // TODO: update the code to test the property enabled
        expect(instance).to.have.property('enabled');
        // expect(instance.enabled).to.be(expectedValueLiteral);
      });

      it('should have the property is_formula_field (base name: "is_formula_field")', function() {
        // TODO: update the code to test the property is_formula_field
        expect(instance).to.have.property('is_formula_field');
        // expect(instance.is_formula_field).to.be(expectedValueLiteral);
      });

      it('should have the property date_value (base name: "date_value")', function() {
        // TODO: update the code to test the property date_value
        expect(instance).to.have.property('date_value');
        // expect(instance.date_value).to.be(expectedValueLiteral);
      });

      it('should have the property enum_value (base name: "enum_value")', function() {
        // TODO: update the code to test the property enum_value
        expect(instance).to.have.property('enum_value');
        // expect(instance.enum_value).to.be(expectedValueLiteral);
      });

      it('should have the property multi_enum_values (base name: "multi_enum_values")', function() {
        // TODO: update the code to test the property multi_enum_values
        expect(instance).to.have.property('multi_enum_values');
        // expect(instance.multi_enum_values).to.be(expectedValueLiteral);
      });

      it('should have the property number_value (base name: "number_value")', function() {
        // TODO: update the code to test the property number_value
        expect(instance).to.have.property('number_value');
        // expect(instance.number_value).to.be(expectedValueLiteral);
      });

      it('should have the property text_value (base name: "text_value")', function() {
        // TODO: update the code to test the property text_value
        expect(instance).to.have.property('text_value');
        // expect(instance.text_value).to.be(expectedValueLiteral);
      });

      it('should have the property display_value (base name: "display_value")', function() {
        // TODO: update the code to test the property display_value
        expect(instance).to.have.property('display_value');
        // expect(instance.display_value).to.be(expectedValueLiteral);
      });

    });
  });

}));
