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
    describe('TeamRequest', function() {
      beforeEach(function() {
        instance = new AsanaPreview.TeamRequest();
      });

      it('should create an instance of TeamRequest', function() {
        // TODO: update the code to test TeamRequest
        expect(instance).to.be.a(AsanaPreview.TeamRequest);
      });

      it('should have the property gid (base name: "gid")', function() {
        // TODO: update the code to test the property gid
        expect(instance).to.have.property('gid');
        // expect(instance.gid).to.be(expectedValueLiteral);
      });

      it('should have the property resource_type (base name: "resource_type")', function() {
        // TODO: update the code to test the property resource_type
        expect(instance).to.have.property('resource_type');
        // expect(instance.resource_type).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property html_description (base name: "html_description")', function() {
        // TODO: update the code to test the property html_description
        expect(instance).to.have.property('html_description');
        // expect(instance.html_description).to.be(expectedValueLiteral);
      });

      it('should have the property organization (base name: "organization")', function() {
        // TODO: update the code to test the property organization
        expect(instance).to.have.property('organization');
        // expect(instance.organization).to.be(expectedValueLiteral);
      });

      it('should have the property visibility (base name: "visibility")', function() {
        // TODO: update the code to test the property visibility
        expect(instance).to.have.property('visibility');
        // expect(instance.visibility).to.be(expectedValueLiteral);
      });

      it('should have the property edit_team_name_or_description_access_level (base name: "edit_team_name_or_description_access_level")', function() {
        // TODO: update the code to test the property edit_team_name_or_description_access_level
        expect(instance).to.have.property('edit_team_name_or_description_access_level');
        // expect(instance.edit_team_name_or_description_access_level).to.be(expectedValueLiteral);
      });

      it('should have the property edit_team_visibility_or_trash_team_access_level (base name: "edit_team_visibility_or_trash_team_access_level")', function() {
        // TODO: update the code to test the property edit_team_visibility_or_trash_team_access_level
        expect(instance).to.have.property('edit_team_visibility_or_trash_team_access_level');
        // expect(instance.edit_team_visibility_or_trash_team_access_level).to.be(expectedValueLiteral);
      });

      it('should have the property member_invite_management_access_level (base name: "member_invite_management_access_level")', function() {
        // TODO: update the code to test the property member_invite_management_access_level
        expect(instance).to.have.property('member_invite_management_access_level');
        // expect(instance.member_invite_management_access_level).to.be(expectedValueLiteral);
      });

      it('should have the property guest_invite_management_access_level (base name: "guest_invite_management_access_level")', function() {
        // TODO: update the code to test the property guest_invite_management_access_level
        expect(instance).to.have.property('guest_invite_management_access_level');
        // expect(instance.guest_invite_management_access_level).to.be(expectedValueLiteral);
      });

      it('should have the property join_request_management_access_level (base name: "join_request_management_access_level")', function() {
        // TODO: update the code to test the property join_request_management_access_level
        expect(instance).to.have.property('join_request_management_access_level');
        // expect(instance.join_request_management_access_level).to.be(expectedValueLiteral);
      });

      it('should have the property team_member_removal_access_level (base name: "team_member_removal_access_level")', function() {
        // TODO: update the code to test the property team_member_removal_access_level
        expect(instance).to.have.property('team_member_removal_access_level');
        // expect(instance.team_member_removal_access_level).to.be(expectedValueLiteral);
      });

    });
  });

}));
