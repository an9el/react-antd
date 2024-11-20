/* tslint:disable */
/* eslint-disable */
/**
 * JSON Placeholder
 * Fake Online REST API for Testing and Prototyping
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { UserCompany } from './UserCompany';
import {
    UserCompanyFromJSON,
    UserCompanyFromJSONTyped,
    UserCompanyToJSON,
    UserCompanyToJSONTyped,
} from './UserCompany';
import type { UserAddress } from './UserAddress';
import {
    UserAddressFromJSON,
    UserAddressFromJSONTyped,
    UserAddressToJSON,
    UserAddressToJSONTyped,
} from './UserAddress';

/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {number}
     * @memberof User
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    phone?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    website?: string;
    /**
     * 
     * @type {UserCompany}
     * @memberof User
     */
    company?: UserCompany;
    /**
     * 
     * @type {UserAddress}
     * @memberof User
     */
    address?: UserAddress;
}

/**
 * Check if a given object implements the User interface.
 */
export function instanceOfUser(value: object): value is User {
    return true;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'username': json['username'] == null ? undefined : json['username'],
        'email': json['email'] == null ? undefined : json['email'],
        'phone': json['phone'] == null ? undefined : json['phone'],
        'website': json['website'] == null ? undefined : json['website'],
        'company': json['company'] == null ? undefined : UserCompanyFromJSON(json['company']),
        'address': json['address'] == null ? undefined : UserAddressFromJSON(json['address']),
    };
}

export function UserToJSON(json: any): User {
    return UserToJSONTyped(json, false);
}

export function UserToJSONTyped(value?: User | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'username': value['username'],
        'email': value['email'],
        'phone': value['phone'],
        'website': value['website'],
        'company': UserCompanyToJSON(value['company']),
        'address': UserAddressToJSON(value['address']),
    };
}

