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
    instance = new AsanaPreview.StatusUpdateResponse();
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

  describe('StatusUpdateResponse', function() {
    it('should create an instance of StatusUpdateResponse', function() {
      // uncomment below and update the code to test StatusUpdateResponse
      //var instance = new AsanaPreview.StatusUpdateResponse();
      //expect(instance).to.be.a(AsanaPreview.StatusUpdateResponse);
    });

    it('should have the property gid (base name: "gid")', function() {
      // uncomment below and update the code to test the property gid
      //var instance = new AsanaPreview.StatusUpdateResponse();
      //expect(instance).to.be();
    });

    it('should have the property resourceType (base name: "resource_type")', function() {
      // uncomment below and update the code to test the property resourceType
      //var instance = new AsanaPreview.StatusUpdateResponse();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new AsanaPreview.StatusUpdateResponse();
      //expect(instance).to.be();
    });

    it('should have the property resourceSubtype (base name: "resource_subtype")', function() {
      // uncomment below and update the code to test the property resourceSubtype
      //var instance = new AsanaPreview.StatusUpdateResponse();
      //expect(instance).to.be();
    });

    it('should have the property text (base name: "text")', function() {
      // uncomment below and update the code to test the property text
      //var instance = new AsanaPreview.StatusUpdateResponse();
      //expect(instance).to.be();
    });

    it('should have the property htmlText (base name: "html_text")', function() {
      // uncomment below and update the code to test the property htmlText
      //var instance = new AsanaPreview.StatusUpdateResponse();
      //expect(instance).to.be();
    });

    it('should have the property statusType (base name: "status_type")', function() {
      // uncomment below and update the code to test the property statusType
      //var instance = new AsanaPreview.StatusUpdateResponse();
      //expect(instance).to.be();
    });

    it('should have the property author (base name: "author")', function() {
      // uncomment below and update the code to test the property author
      //var instance = new AsanaPreview.StatusUpdateResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new AsanaPreview.StatusUpdateResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "created_by")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instance = new AsanaPreview.StatusUpdateResponse();
      //expect(instance).to.be();
    });

    it('should have the property hearted (base name: "hearted")', function() {
      // uncomment below and update the code to test the property hearted
      //var instance = new AsanaPreview.StatusUpdateResponse();
      //expect(instance).to.be();
    });

    it('should have the property hearts (base name: "hearts")', function() {
      // uncomment below and update the code to test the property hearts
      //var instance = new AsanaPreview.StatusUpdateResponse();
      //expect(instance).to.be();
    });

    it('should have the property liked (base name: "liked")', function() {
      // uncomment below and update the code to test the property liked
      //var instance = new AsanaPreview.StatusUpdateResponse();
      //expect(instance).to.be();
    });

    it('should have the property likes (base name: "likes")', function() {
      // uncomment below and update the code to test the property likes
      //var instance = new AsanaPreview.StatusUpdateResponse();
      //expect(instance).to.be();
    });

    it('should have the property modifiedAt (base name: "modified_at")', function() {
      // uncomment below and update the code to test the property modifiedAt
      //var instance = new AsanaPreview.StatusUpdateResponse();
      //expect(instance).to.be();
    });

    it('should have the property numHearts (base name: "num_hearts")', function() {
      // uncomment below and update the code to test the property numHearts
      //var instance = new AsanaPreview.StatusUpdateResponse();
      //expect(instance).to.be();
    });

    it('should have the property numLikes (base name: "num_likes")', function() {
      // uncomment below and update the code to test the property numLikes
      //var instance = new AsanaPreview.StatusUpdateResponse();
      //expect(instance).to.be();
    });

    it('should have the property parent (base name: "parent")', function() {
      // uncomment below and update the code to test the property parent
      //var instance = new AsanaPreview.StatusUpdateResponse();
      //expect(instance).to.be();
    });

  });

}));
