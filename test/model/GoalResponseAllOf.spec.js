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
    instance = new AsanaPreview.GoalResponseAllOf();
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

  describe('GoalResponseAllOf', function() {
    it('should create an instance of GoalResponseAllOf', function() {
      // uncomment below and update the code to test GoalResponseAllOf
      //var instance = new AsanaPreview.GoalResponseAllOf();
      //expect(instance).to.be.a(AsanaPreview.GoalResponseAllOf);
    });

    it('should have the property likes (base name: "likes")', function() {
      // uncomment below and update the code to test the property likes
      //var instance = new AsanaPreview.GoalResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property numLikes (base name: "num_likes")', function() {
      // uncomment below and update the code to test the property numLikes
      //var instance = new AsanaPreview.GoalResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property team (base name: "team")', function() {
      // uncomment below and update the code to test the property team
      //var instance = new AsanaPreview.GoalResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property workspace (base name: "workspace")', function() {
      // uncomment below and update the code to test the property workspace
      //var instance = new AsanaPreview.GoalResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property followers (base name: "followers")', function() {
      // uncomment below and update the code to test the property followers
      //var instance = new AsanaPreview.GoalResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property timePeriod (base name: "time_period")', function() {
      // uncomment below and update the code to test the property timePeriod
      //var instance = new AsanaPreview.GoalResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property metric (base name: "metric")', function() {
      // uncomment below and update the code to test the property metric
      //var instance = new AsanaPreview.GoalResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instance = new AsanaPreview.GoalResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property currentStatusUpdate (base name: "current_status_update")', function() {
      // uncomment below and update the code to test the property currentStatusUpdate
      //var instance = new AsanaPreview.GoalResponseAllOf();
      //expect(instance).to.be();
    });

  });

}));
