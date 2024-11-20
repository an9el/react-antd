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
/**
 * 
 * @export
 * @interface Photo
 */
export interface Photo {
    /**
     * 
     * @type {number}
     * @memberof Photo
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof Photo
     */
    albumId?: number;
    /**
     * 
     * @type {string}
     * @memberof Photo
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof Photo
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof Photo
     */
    thumbnailUrl?: string;
}

/**
 * Check if a given object implements the Photo interface.
 */
export function instanceOfPhoto(value: object): value is Photo {
    return true;
}

export function PhotoFromJSON(json: any): Photo {
    return PhotoFromJSONTyped(json, false);
}

export function PhotoFromJSONTyped(json: any, ignoreDiscriminator: boolean): Photo {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'albumId': json['albumId'] == null ? undefined : json['albumId'],
        'title': json['title'] == null ? undefined : json['title'],
        'url': json['url'] == null ? undefined : json['url'],
        'thumbnailUrl': json['thumbnailUrl'] == null ? undefined : json['thumbnailUrl'],
    };
}

export function PhotoToJSON(json: any): Photo {
    return PhotoToJSONTyped(json, false);
}

export function PhotoToJSONTyped(value?: Photo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'albumId': value['albumId'],
        'title': value['title'],
        'url': value['url'],
        'thumbnailUrl': value['thumbnailUrl'],
    };
}

