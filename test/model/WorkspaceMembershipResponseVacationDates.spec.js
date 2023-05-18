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
    instance = new AsanaPreview.WorkspaceMembershipResponseVacationDates();
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

  describe('WorkspaceMembershipResponseVacationDates', function() {
    it('should create an instance of WorkspaceMembershipResponseVacationDates', function() {
      // uncomment below and update the code to test WorkspaceMembershipResponseVacationDates
      //var instance = new AsanaPreview.WorkspaceMembershipResponseVacationDates();
      //expect(instance).to.be.a(AsanaPreview.WorkspaceMembershipResponseVacationDates);
    });

    it('should have the property startOn (base name: "start_on")', function() {
      // uncomment below and update the code to test the property startOn
      //var instance = new AsanaPreview.WorkspaceMembershipResponseVacationDates();
      //expect(instance).to.be();
    });

    it('should have the property endOn (base name: "end_on")', function() {
      // uncomment below and update the code to test the property endOn
      //var instance = new AsanaPreview.WorkspaceMembershipResponseVacationDates();
      //expect(instance).to.be();
    });

  });

}));
