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
    instance = new AsanaPreview.ProjectRequest();
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

  describe('ProjectRequest', function() {
    it('should create an instance of ProjectRequest', function() {
      // uncomment below and update the code to test ProjectRequest
      //var instance = new AsanaPreview.ProjectRequest();
      //expect(instance).to.be.a(AsanaPreview.ProjectRequest);
    });

    it('should have the property gid (base name: "gid")', function() {
      // uncomment below and update the code to test the property gid
      //var instance = new AsanaPreview.ProjectRequest();
      //expect(instance).to.be();
    });

    it('should have the property resourceType (base name: "resource_type")', function() {
      // uncomment below and update the code to test the property resourceType
      //var instance = new AsanaPreview.ProjectRequest();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new AsanaPreview.ProjectRequest();
      //expect(instance).to.be();
    });

    it('should have the property archived (base name: "archived")', function() {
      // uncomment below and update the code to test the property archived
      //var instance = new AsanaPreview.ProjectRequest();
      //expect(instance).to.be();
    });

    it('should have the property color (base name: "color")', function() {
      // uncomment below and update the code to test the property color
      //var instance = new AsanaPreview.ProjectRequest();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new AsanaPreview.ProjectRequest();
      //expect(instance).to.be();
    });

    it('should have the property currentStatus (base name: "current_status")', function() {
      // uncomment below and update the code to test the property currentStatus
      //var instance = new AsanaPreview.ProjectRequest();
      //expect(instance).to.be();
    });

    it('should have the property currentStatusUpdate (base name: "current_status_update")', function() {
      // uncomment below and update the code to test the property currentStatusUpdate
      //var instance = new AsanaPreview.ProjectRequest();
      //expect(instance).to.be();
    });

    it('should have the property customFieldSettings (base name: "custom_field_settings")', function() {
      // uncomment below and update the code to test the property customFieldSettings
      //var instance = new AsanaPreview.ProjectRequest();
      //expect(instance).to.be();
    });

    it('should have the property defaultView (base name: "default_view")', function() {
      // uncomment below and update the code to test the property defaultView
      //var instance = new AsanaPreview.ProjectRequest();
      //expect(instance).to.be();
    });

    it('should have the property dueDate (base name: "due_date")', function() {
      // uncomment below and update the code to test the property dueDate
      //var instance = new AsanaPreview.ProjectRequest();
      //expect(instance).to.be();
    });

    it('should have the property dueOn (base name: "due_on")', function() {
      // uncomment below and update the code to test the property dueOn
      //var instance = new AsanaPreview.ProjectRequest();
      //expect(instance).to.be();
    });

    it('should have the property htmlNotes (base name: "html_notes")', function() {
      // uncomment below and update the code to test the property htmlNotes
      //var instance = new AsanaPreview.ProjectRequest();
      //expect(instance).to.be();
    });

    it('should have the property members (base name: "members")', function() {
      // uncomment below and update the code to test the property members
      //var instance = new AsanaPreview.ProjectRequest();
      //expect(instance).to.be();
    });

    it('should have the property modifiedAt (base name: "modified_at")', function() {
      // uncomment below and update the code to test the property modifiedAt
      //var instance = new AsanaPreview.ProjectRequest();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instance = new AsanaPreview.ProjectRequest();
      //expect(instance).to.be();
    });

    it('should have the property _public (base name: "public")', function() {
      // uncomment below and update the code to test the property _public
      //var instance = new AsanaPreview.ProjectRequest();
      //expect(instance).to.be();
    });

    it('should have the property startOn (base name: "start_on")', function() {
      // uncomment below and update the code to test the property startOn
      //var instance = new AsanaPreview.ProjectRequest();
      //expect(instance).to.be();
    });

    it('should have the property workspace (base name: "workspace")', function() {
      // uncomment below and update the code to test the property workspace
      //var instance = new AsanaPreview.ProjectRequest();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "custom_fields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instance = new AsanaPreview.ProjectRequest();
      //expect(instance).to.be();
    });

    it('should have the property followers (base name: "followers")', function() {
      // uncomment below and update the code to test the property followers
      //var instance = new AsanaPreview.ProjectRequest();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instance = new AsanaPreview.ProjectRequest();
      //expect(instance).to.be();
    });

    it('should have the property team (base name: "team")', function() {
      // uncomment below and update the code to test the property team
      //var instance = new AsanaPreview.ProjectRequest();
      //expect(instance).to.be();
    });

  });

}));
