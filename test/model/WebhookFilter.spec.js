/**
 * Asana
 * This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).
 *
 * The version of the OpenAPI document: 1.0
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
    instance = new AsanaPreview.WebhookFilter();
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

  describe('WebhookFilter', function() {
    it('should create an instance of WebhookFilter', function() {
      // uncomment below and update the code to test WebhookFilter
      //var instance = new AsanaPreview.WebhookFilter();
      //expect(instance).to.be.a(AsanaPreview.WebhookFilter);
    });

    it('should have the property resourceType (base name: "resource_type")', function() {
      // uncomment below and update the code to test the property resourceType
      //var instance = new AsanaPreview.WebhookFilter();
      //expect(instance).to.be();
    });

    it('should have the property resourceSubtype (base name: "resource_subtype")', function() {
      // uncomment below and update the code to test the property resourceSubtype
      //var instance = new AsanaPreview.WebhookFilter();
      //expect(instance).to.be();
    });

    it('should have the property action (base name: "action")', function() {
      // uncomment below and update the code to test the property action
      //var instance = new AsanaPreview.WebhookFilter();
      //expect(instance).to.be();
    });

    it('should have the property fields (base name: "fields")', function() {
      // uncomment below and update the code to test the property fields
      //var instance = new AsanaPreview.WebhookFilter();
      //expect(instance).to.be();
    });

  });

}));