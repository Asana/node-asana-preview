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
    describe('SectionTaskInsertRequest', function() {
      beforeEach(function() {
        instance = new AsanaPreview.SectionTaskInsertRequest();
      });

      it('should create an instance of SectionTaskInsertRequest', function() {
        // TODO: update the code to test SectionTaskInsertRequest
        expect(instance).to.be.a(AsanaPreview.SectionTaskInsertRequest);
      });

      it('should have the property task (base name: "task")', function() {
        // TODO: update the code to test the property task
        expect(instance).to.have.property('task');
        // expect(instance.task).to.be(expectedValueLiteral);
      });

      it('should have the property insert_before (base name: "insert_before")', function() {
        // TODO: update the code to test the property insert_before
        expect(instance).to.have.property('insert_before');
        // expect(instance.insert_before).to.be(expectedValueLiteral);
      });

      it('should have the property insert_after (base name: "insert_after")', function() {
        // TODO: update the code to test the property insert_after
        expect(instance).to.have.property('insert_after');
        // expect(instance.insert_after).to.be(expectedValueLiteral);
      });

    });
  });

}));
