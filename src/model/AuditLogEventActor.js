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

import ApiClient from '../ApiClient';

/**
 * The AuditLogEventActor model module.
 * @module model/AuditLogEventActor
 * @version 1.0.4
 */
class AuditLogEventActor {
    /**
     * Constructs a new <code>AuditLogEventActor</code>.
     * The entity that triggered the event. Will typically be a user.
     * @alias module:model/AuditLogEventActor
     */
    constructor() { 
        
        AuditLogEventActor.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuditLogEventActor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuditLogEventActor} obj Optional instance to populate.
     * @return {module:model/AuditLogEventActor} The populated <code>AuditLogEventActor</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuditLogEventActor();

            if (data.hasOwnProperty('actor_type')) {
                obj['actor_type'] = ApiClient.convertToType(data['actor_type'], 'String');
            }
            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The type of actor. Can be one of `user`, `asana`, `asana_support`, `anonymous`, or `external_administrator`.
 * @member {module:model/AuditLogEventActor.ActorTypeEnum} actor_type
 */
AuditLogEventActor.prototype['actor_type'] = undefined;

/**
 * Globally unique identifier of the actor, if it is a user.
 * @member {String} gid
 */
AuditLogEventActor.prototype['gid'] = undefined;

/**
 * The name of the actor, if it is a user.
 * @member {String} name
 */
AuditLogEventActor.prototype['name'] = undefined;

/**
 * The email of the actor, if it is a user.
 * @member {String} email
 */
AuditLogEventActor.prototype['email'] = undefined;





/**
 * Allowed values for the <code>actor_type</code> property.
 * @enum {String}
 * @readonly
 */
AuditLogEventActor['ActorTypeEnum'] = {

    /**
     * value: "user"
     * @const
     */
    "user": "user",

    /**
     * value: "asana"
     * @const
     */
    "asana": "asana",

    /**
     * value: "asana_support"
     * @const
     */
    "asana_support": "asana_support",

    /**
     * value: "anonymous"
     * @const
     */
    "anonymous": "anonymous",

    /**
     * value: "external_administrator"
     * @const
     */
    "external_administrator": "external_administrator"
};



export default AuditLogEventActor;

