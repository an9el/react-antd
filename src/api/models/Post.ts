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
 * @interface Post
 */
export interface Post {
    /**
     * 
     * @type {number}
     * @memberof Post
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof Post
     */
    userId?: number;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    body?: string;
}

/**
 * Check if a given object implements the Post interface.
 */
export function instanceOfPost(value: object): boolean {
    return true;
}

export function PostFromJSON(json: any): Post {
    return PostFromJSONTyped(json, false);
}

export function PostFromJSONTyped(json: any, ignoreDiscriminator: boolean): Post {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'userId': json['userId'] == null ? undefined : json['userId'],
        'title': json['title'] == null ? undefined : json['title'],
        'body': json['body'] == null ? undefined : json['body'],
    };
}

export function PostToJSON(value?: Post | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'userId': value['userId'],
        'title': value['title'],
        'body': value['body'],
    };
}

