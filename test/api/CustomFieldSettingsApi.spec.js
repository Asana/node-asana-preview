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

  beforeEach(function() {
    instance = new AsanaPreview.CustomFieldSettingsApi();
  });

  describe('(package)', function() {
    describe('CustomFieldSettingsApi', function() {
      describe('getCustomFieldSettingsForPortfolio', function() {
        it('should call getCustomFieldSettingsForPortfolio successfully', function(done) {
          // TODO: uncomment, update parameter values for getCustomFieldSettingsForPortfolio call and complete the assertions
          /*
          var opts = {};

          instance.getCustomFieldSettingsForPortfolio(portfolio_gid, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(AsanaPreview.CustomFieldSettingResponseArray);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCustomFieldSettingsForProject', function() {
        it('should call getCustomFieldSettingsForProject successfully', function(done) {
          // TODO: uncomment, update parameter values for getCustomFieldSettingsForProject call and complete the assertions
          /*
          var opts = {};

          instance.getCustomFieldSettingsForProject(project_gid, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(AsanaPreview.CustomFieldSettingResponseArray);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
