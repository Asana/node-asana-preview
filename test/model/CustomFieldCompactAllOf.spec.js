/**
 * Asana
 * This is the interface for interacting with the Asana platform
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AsanaPreview);
  }
}(this, function(expect, AsanaPreview) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AsanaPreview.CustomFieldCompactAllOf();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CustomFieldCompactAllOf', function() {
    it('should create an instance of CustomFieldCompactAllOf', function() {
      // uncomment below and update the code to test CustomFieldCompactAllOf
      //var instance = new AsanaPreview.CustomFieldCompactAllOf();
      //expect(instance).to.be.a(AsanaPreview.CustomFieldCompactAllOf);
    });

    it('should have the property resourceType (base name: "resource_type")', function() {
      // uncomment below and update the code to test the property resourceType
      //var instance = new AsanaPreview.CustomFieldCompactAllOf();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new AsanaPreview.CustomFieldCompactAllOf();
      //expect(instance).to.be();
    });

    it('should have the property resourceSubtype (base name: "resource_subtype")', function() {
      // uncomment below and update the code to test the property resourceSubtype
      //var instance = new AsanaPreview.CustomFieldCompactAllOf();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new AsanaPreview.CustomFieldCompactAllOf();
      //expect(instance).to.be();
    });

    it('should have the property enumOptions (base name: "enum_options")', function() {
      // uncomment below and update the code to test the property enumOptions
      //var instance = new AsanaPreview.CustomFieldCompactAllOf();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instance = new AsanaPreview.CustomFieldCompactAllOf();
      //expect(instance).to.be();
    });

    it('should have the property dateValue (base name: "date_value")', function() {
      // uncomment below and update the code to test the property dateValue
      //var instance = new AsanaPreview.CustomFieldCompactAllOf();
      //expect(instance).to.be();
    });

    it('should have the property enumValue (base name: "enum_value")', function() {
      // uncomment below and update the code to test the property enumValue
      //var instance = new AsanaPreview.CustomFieldCompactAllOf();
      //expect(instance).to.be();
    });

    it('should have the property multiEnumValues (base name: "multi_enum_values")', function() {
      // uncomment below and update the code to test the property multiEnumValues
      //var instance = new AsanaPreview.CustomFieldCompactAllOf();
      //expect(instance).to.be();
    });

    it('should have the property numberValue (base name: "number_value")', function() {
      // uncomment below and update the code to test the property numberValue
      //var instance = new AsanaPreview.CustomFieldCompactAllOf();
      //expect(instance).to.be();
    });

    it('should have the property textValue (base name: "text_value")', function() {
      // uncomment below and update the code to test the property textValue
      //var instance = new AsanaPreview.CustomFieldCompactAllOf();
      //expect(instance).to.be();
    });

    it('should have the property displayValue (base name: "display_value")', function() {
      // uncomment below and update the code to test the property displayValue
      //var instance = new AsanaPreview.CustomFieldCompactAllOf();
      //expect(instance).to.be();
    });

  });

}));
