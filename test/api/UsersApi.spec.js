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
    instance = new AsanaPreview.UsersApi();
  });

  describe('(package)', function() {
    describe('UsersApi', function() {
      describe('getFavoritesForUser', function() {
        it('should call getFavoritesForUser successfully', function(done) {
          // TODO: uncomment, update parameter values for getFavoritesForUser call and complete the assertions
          /*
          var opts = {};

          instance.getFavoritesForUser(user_gid, resource_type, workspace, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(AsanaPreview.AsanaNamedResourceArray);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getUser', function() {
        it('should call getUser successfully', function(done) {
          // TODO: uncomment, update parameter values for getUser call and complete the assertions
          /*
          var opts = {};

          instance.getUser(user_gid, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(AsanaPreview.UserResponseData);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getUsers', function() {
        it('should call getUsers successfully', function(done) {
          // TODO: uncomment, update parameter values for getUsers call and complete the assertions
          /*
          var opts = {};

          instance.getUsers(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(AsanaPreview.UserResponseArray);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getUsersForTeam', function() {
        it('should call getUsersForTeam successfully', function(done) {
          // TODO: uncomment, update parameter values for getUsersForTeam call and complete the assertions
          /*
          var opts = {};

          instance.getUsersForTeam(team_gid, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(AsanaPreview.UserResponseArray);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getUsersForWorkspace', function() {
        it('should call getUsersForWorkspace successfully', function(done) {
          // TODO: uncomment, update parameter values for getUsersForWorkspace call and complete the assertions
          /*
          var opts = {};

          instance.getUsersForWorkspace(workspace_gid, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(AsanaPreview.UserResponseArray);

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
