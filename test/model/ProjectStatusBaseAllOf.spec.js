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
    instance = new AsanaPreview.ProjectStatusBaseAllOf();
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

  describe('ProjectStatusBaseAllOf', function() {
    it('should create an instance of ProjectStatusBaseAllOf', function() {
      // uncomment below and update the code to test ProjectStatusBaseAllOf
      //var instance = new AsanaPreview.ProjectStatusBaseAllOf();
      //expect(instance).to.be.a(AsanaPreview.ProjectStatusBaseAllOf);
    });

    it('should have the property resourceType (base name: "resource_type")', function() {
      // uncomment below and update the code to test the property resourceType
      //var instance = new AsanaPreview.ProjectStatusBaseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property text (base name: "text")', function() {
      // uncomment below and update the code to test the property text
      //var instance = new AsanaPreview.ProjectStatusBaseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property htmlText (base name: "html_text")', function() {
      // uncomment below and update the code to test the property htmlText
      //var instance = new AsanaPreview.ProjectStatusBaseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property color (base name: "color")', function() {
      // uncomment below and update the code to test the property color
      //var instance = new AsanaPreview.ProjectStatusBaseAllOf();
      //expect(instance).to.be();
    });

  });

}));
