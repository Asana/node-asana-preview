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
    describe('GoalRemoveSupportingRelationshipRequest', function() {
      beforeEach(function() {
        instance = new AsanaPreview.GoalRemoveSupportingRelationshipRequest();
      });

      it('should create an instance of GoalRemoveSupportingRelationshipRequest', function() {
        // TODO: update the code to test GoalRemoveSupportingRelationshipRequest
        expect(instance).to.be.a(AsanaPreview.GoalRemoveSupportingRelationshipRequest);
      });

      it('should have the property supporting_resource (base name: "supporting_resource")', function() {
        // TODO: update the code to test the property supporting_resource
        expect(instance).to.have.property('supporting_resource');
        // expect(instance.supporting_resource).to.be(expectedValueLiteral);
      });

    });
  });

}));
