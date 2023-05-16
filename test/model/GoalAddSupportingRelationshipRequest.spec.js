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
    instance = new AsanaPreview.GoalAddSupportingRelationshipRequest();
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

  describe('GoalAddSupportingRelationshipRequest', function() {
    it('should create an instance of GoalAddSupportingRelationshipRequest', function() {
      // uncomment below and update the code to test GoalAddSupportingRelationshipRequest
      //var instance = new AsanaPreview.GoalAddSupportingRelationshipRequest();
      //expect(instance).to.be.a(AsanaPreview.GoalAddSupportingRelationshipRequest);
    });

    it('should have the property supportingResource (base name: "supporting_resource")', function() {
      // uncomment below and update the code to test the property supportingResource
      //var instance = new AsanaPreview.GoalAddSupportingRelationshipRequest();
      //expect(instance).to.be();
    });

    it('should have the property insertBefore (base name: "insert_before")', function() {
      // uncomment below and update the code to test the property insertBefore
      //var instance = new AsanaPreview.GoalAddSupportingRelationshipRequest();
      //expect(instance).to.be();
    });

    it('should have the property insertAfter (base name: "insert_after")', function() {
      // uncomment below and update the code to test the property insertAfter
      //var instance = new AsanaPreview.GoalAddSupportingRelationshipRequest();
      //expect(instance).to.be();
    });

    it('should have the property contributionWeight (base name: "contribution_weight")', function() {
      // uncomment below and update the code to test the property contributionWeight
      //var instance = new AsanaPreview.GoalAddSupportingRelationshipRequest();
      //expect(instance).to.be();
    });

  });

}));
