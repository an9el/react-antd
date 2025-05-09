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
import type { UserAddressGeo } from './UserAddressGeo';
import {
    UserAddressGeoFromJSON,
    UserAddressGeoFromJSONTyped,
    UserAddressGeoToJSON,
    UserAddressGeoToJSONTyped,
} from './UserAddressGeo';

/**
 * 
 * @export
 * @interface UserAddress
 */
export interface UserAddress {
    /**
     * 
     * @type {string}
     * @memberof UserAddress
     */
    street?: string;
    /**
     * 
     * @type {string}
     * @memberof UserAddress
     */
    suite?: string;
    /**
     * 
     * @type {string}
     * @memberof UserAddress
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof UserAddress
     */
    zipcode?: string;
    /**
     * 
     * @type {UserAddressGeo}
     * @memberof UserAddress
     */
    geo?: UserAddressGeo;
}

/**
 * Check if a given object implements the UserAddress interface.
 */
export function instanceOfUserAddress(value: object): value is UserAddress {
    return true;
}

export function UserAddressFromJSON(json: any): UserAddress {
    return UserAddressFromJSONTyped(json, false);
}

export function UserAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserAddress {
    if (json == null) {
        return json;
    }
    return {
        
        'street': json['street'] == null ? undefined : json['street'],
        'suite': json['suite'] == null ? undefined : json['suite'],
        'city': json['city'] == null ? undefined : json['city'],
        'zipcode': json['zipcode'] == null ? undefined : json['zipcode'],
        'geo': json['geo'] == null ? undefined : UserAddressGeoFromJSON(json['geo']),
    };
}

export function UserAddressToJSON(json: any): UserAddress {
    return UserAddressToJSONTyped(json, false);
}

export function UserAddressToJSONTyped(value?: UserAddress | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'street': value['street'],
        'suite': value['suite'],
        'city': value['city'],
        'zipcode': value['zipcode'],
        'geo': UserAddressGeoToJSON(value['geo']),
    };
}

