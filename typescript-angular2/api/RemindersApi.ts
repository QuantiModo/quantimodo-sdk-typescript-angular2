/**
 * QuantiModo
 * QuantiModo makes it easy to retrieve normalized user data from a wide array of devices and applications. [Learn about QuantiModo](https://quantimo.do), check out our [docs](https://github.com/QuantiModo/docs) or contact us at [help.quantimo.do](https://help.quantimo.do). 
 *
 * OpenAPI spec version: 2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH }                                         from '../variables';
import { Configuration }                                     from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class RemindersApi {
    protected basePath = 'https://app.quantimo.do/api';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }
	
	/**
     * 
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                objA[key] = objB[key];
            }
        }
        return <T1&T2>objA;
    }

    /**
     * Get specific pending tracking reminders
     * Specfic pending reminder instances that still need to be tracked.  
     * @param accessToken User&#39;s OAuth2 access token
     * @param userId User&#39;s id
     * @param variableCategoryName Limit tracking reminder notifications to a specific variable category
     * @param createdAt When the record was first created. Use UTC ISO 8601 \&quot;YYYY-MM-DDThh:mm:ss\&quot;  datetime format. Time zone should be UTC and not local.
     * @param updatedAt When the record was last updated. Use UTC ISO 8601 \&quot;YYYY-MM-DDThh:mm:ss\&quot;  datetime format. Time zone should be UTC and not local.
     * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
     * @param offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause. If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
     * @param sort Sort by given field. If the field is prefixed with &#39;-&#39;, it will sort in descending order.
     */
    public v1TrackingReminderNotificationsGet(accessToken?: string, userId?: number, variableCategoryName?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, sort?: string, extraHttpRequestParams?: any): Observable<models.InlineResponse2002> {
        return this.v1TrackingReminderNotificationsGetWithHttpInfo(accessToken, userId, variableCategoryName, createdAt, updatedAt, limit, offset, sort, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Skip a pending tracking reminder
     * Deletes the pending tracking reminder
     * @param body Id of the pending reminder to be skipped or deleted
     * @param accessToken User&#39;s OAuth2 access token
     * @param userId User&#39;s id
     */
    public v1TrackingReminderNotificationsSkipPost(body: models.TrackingReminderNotificationSkip, accessToken?: string, userId?: number, extraHttpRequestParams?: any): Observable<models.CommonResponse> {
        return this.v1TrackingReminderNotificationsSkipPostWithHttpInfo(body, accessToken, userId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Snooze a pending tracking reminder
     * Changes the reminder time to now plus one hour
     * @param body Id of the pending reminder to be snoozed
     * @param accessToken User&#39;s OAuth2 access token
     * @param userId User&#39;s id
     */
    public v1TrackingReminderNotificationsSnoozePost(body: models.TrackingReminderNotificationSnooze, accessToken?: string, userId?: number, extraHttpRequestParams?: any): Observable<models.CommonResponse> {
        return this.v1TrackingReminderNotificationsSnoozePostWithHttpInfo(body, accessToken, userId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Track a pending tracking reminder
     * Adds the default measurement for the pending tracking reminder with the reminder time as the measurment start time
     * @param body Id of the pending reminder to be tracked
     * @param accessToken User&#39;s OAuth2 access token
     * @param userId User&#39;s id
     */
    public v1TrackingReminderNotificationsTrackPost(body: models.TrackingReminderNotificationTrack, accessToken?: string, userId?: number, extraHttpRequestParams?: any): Observable<models.CommonResponse> {
        return this.v1TrackingReminderNotificationsTrackPostWithHttpInfo(body, accessToken, userId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Delete tracking reminder
     * Delete previously created tracking reminder
     * @param body Id of reminder to be deleted
     * @param accessToken User&#39;s OAuth2 access token
     * @param userId User&#39;s id
     */
    public v1TrackingRemindersDeletePost(body: models.TrackingReminderDelete, accessToken?: string, userId?: number, extraHttpRequestParams?: any): Observable<models.CommonResponse> {
        return this.v1TrackingRemindersDeletePostWithHttpInfo(body, accessToken, userId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get repeating tracking reminder settings
     * Users can be reminded to track certain variables at a specified frequency with a default value.
     * @param accessToken User&#39;s OAuth2 access token
     * @param userId User&#39;s id
     * @param variableCategoryName Limit tracking reminders to a specific variable category
     * @param createdAt When the record was first created. Use UTC ISO 8601 \&quot;YYYY-MM-DDThh:mm:ss\&quot;  datetime format. Time zone should be UTC and not local.
     * @param updatedAt When the record was last updated. Use UTC ISO 8601 \&quot;YYYY-MM-DDThh:mm:ss\&quot;  datetime format. Time zone should be UTC and not local.
     * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
     * @param offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause. If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
     * @param sort Sort by given field. If the field is prefixed with &#39;-&#39;, it will sort in descending order.
     */
    public v1TrackingRemindersGet(accessToken?: string, userId?: number, variableCategoryName?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, sort?: string, extraHttpRequestParams?: any): Observable<models.InlineResponse200> {
        return this.v1TrackingRemindersGetWithHttpInfo(accessToken, userId, variableCategoryName, createdAt, updatedAt, limit, offset, sort, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Store a Tracking Reminder
     * This is to enable users to create reminders to track a variable with a default value at a specified frequency
     * @param accessToken User&#39;s OAuth2 access token
     * @param userId User&#39;s id
     * @param body TrackingReminder that should be stored
     */
    public v1TrackingRemindersPost(accessToken?: string, userId?: number, body?: models.TrackingReminder, extraHttpRequestParams?: any): Observable<models.InlineResponse2001> {
        return this.v1TrackingRemindersPostWithHttpInfo(accessToken, userId, body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Get specific pending tracking reminders
     * Specfic pending reminder instances that still need to be tracked.  
     * @param accessToken User&#39;s OAuth2 access token
     * @param userId User&#39;s id
     * @param variableCategoryName Limit tracking reminder notifications to a specific variable category
     * @param createdAt When the record was first created. Use UTC ISO 8601 \&quot;YYYY-MM-DDThh:mm:ss\&quot;  datetime format. Time zone should be UTC and not local.
     * @param updatedAt When the record was last updated. Use UTC ISO 8601 \&quot;YYYY-MM-DDThh:mm:ss\&quot;  datetime format. Time zone should be UTC and not local.
     * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
     * @param offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause. If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
     * @param sort Sort by given field. If the field is prefixed with &#39;-&#39;, it will sort in descending order.
     */
    public v1TrackingReminderNotificationsGetWithHttpInfo(accessToken?: string, userId?: number, variableCategoryName?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, sort?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/v1/trackingReminderNotifications`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (accessToken !== undefined) {
            queryParameters.set('access_token', <any>accessToken);
        }
        if (userId !== undefined) {
            queryParameters.set('userId', <any>userId);
        }
        if (variableCategoryName !== undefined) {
            queryParameters.set('variableCategoryName', <any>variableCategoryName);
        }
        if (createdAt !== undefined) {
            queryParameters.set('createdAt', <any>createdAt);
        }
        if (updatedAt !== undefined) {
            queryParameters.set('updatedAt', <any>updatedAt);
        }
        if (limit !== undefined) {
            queryParameters.set('limit', <any>limit);
        }
        if (offset !== undefined) {
            queryParameters.set('offset', <any>offset);
        }
        if (sort !== undefined) {
            queryParameters.set('sort', <any>sort);
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];
        
        // authentication (access_token) required
        if (this.configuration.apiKey)
        {
            formParams.set('access_token', this.configuration.apiKey);
        }
        // authentication (quantimodo_oauth2) required
        // oauth required
        if (this.configuration.accessToken)
        {
            headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
        }
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Skip a pending tracking reminder
     * Deletes the pending tracking reminder
     * @param body Id of the pending reminder to be skipped or deleted
     * @param accessToken User&#39;s OAuth2 access token
     * @param userId User&#39;s id
     */
    public v1TrackingReminderNotificationsSkipPostWithHttpInfo(body: models.TrackingReminderNotificationSkip, accessToken?: string, userId?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/v1/trackingReminderNotifications/skip`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling v1TrackingReminderNotificationsSkipPost.');
        }
        if (accessToken !== undefined) {
            queryParameters.set('access_token', <any>accessToken);
        }
        if (userId !== undefined) {
            queryParameters.set('userId', <any>userId);
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];
        
        // authentication (access_token) required
        if (this.configuration.apiKey)
        {
            formParams.set('access_token', this.configuration.apiKey);
        }
        // authentication (quantimodo_oauth2) required
        // oauth required
        if (this.configuration.accessToken)
        {
            headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
        }
            

        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Snooze a pending tracking reminder
     * Changes the reminder time to now plus one hour
     * @param body Id of the pending reminder to be snoozed
     * @param accessToken User&#39;s OAuth2 access token
     * @param userId User&#39;s id
     */
    public v1TrackingReminderNotificationsSnoozePostWithHttpInfo(body: models.TrackingReminderNotificationSnooze, accessToken?: string, userId?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/v1/trackingReminderNotifications/snooze`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling v1TrackingReminderNotificationsSnoozePost.');
        }
        if (accessToken !== undefined) {
            queryParameters.set('access_token', <any>accessToken);
        }
        if (userId !== undefined) {
            queryParameters.set('userId', <any>userId);
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];
        
        // authentication (access_token) required
        if (this.configuration.apiKey)
        {
            formParams.set('access_token', this.configuration.apiKey);
        }
        // authentication (quantimodo_oauth2) required
        // oauth required
        if (this.configuration.accessToken)
        {
            headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
        }
            

        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Track a pending tracking reminder
     * Adds the default measurement for the pending tracking reminder with the reminder time as the measurment start time
     * @param body Id of the pending reminder to be tracked
     * @param accessToken User&#39;s OAuth2 access token
     * @param userId User&#39;s id
     */
    public v1TrackingReminderNotificationsTrackPostWithHttpInfo(body: models.TrackingReminderNotificationTrack, accessToken?: string, userId?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/v1/trackingReminderNotifications/track`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling v1TrackingReminderNotificationsTrackPost.');
        }
        if (accessToken !== undefined) {
            queryParameters.set('access_token', <any>accessToken);
        }
        if (userId !== undefined) {
            queryParameters.set('userId', <any>userId);
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];
        
        // authentication (access_token) required
        if (this.configuration.apiKey)
        {
            formParams.set('access_token', this.configuration.apiKey);
        }
        // authentication (quantimodo_oauth2) required
        // oauth required
        if (this.configuration.accessToken)
        {
            headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
        }
            

        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Delete tracking reminder
     * Delete previously created tracking reminder
     * @param body Id of reminder to be deleted
     * @param accessToken User&#39;s OAuth2 access token
     * @param userId User&#39;s id
     */
    public v1TrackingRemindersDeletePostWithHttpInfo(body: models.TrackingReminderDelete, accessToken?: string, userId?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/v1/trackingReminders/delete`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling v1TrackingRemindersDeletePost.');
        }
        if (accessToken !== undefined) {
            queryParameters.set('access_token', <any>accessToken);
        }
        if (userId !== undefined) {
            queryParameters.set('userId', <any>userId);
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];
        
        // authentication (access_token) required
        if (this.configuration.apiKey)
        {
            formParams.set('access_token', this.configuration.apiKey);
        }
        // authentication (quantimodo_oauth2) required
        // oauth required
        if (this.configuration.accessToken)
        {
            headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
        }
            

        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Get repeating tracking reminder settings
     * Users can be reminded to track certain variables at a specified frequency with a default value.
     * @param accessToken User&#39;s OAuth2 access token
     * @param userId User&#39;s id
     * @param variableCategoryName Limit tracking reminders to a specific variable category
     * @param createdAt When the record was first created. Use UTC ISO 8601 \&quot;YYYY-MM-DDThh:mm:ss\&quot;  datetime format. Time zone should be UTC and not local.
     * @param updatedAt When the record was last updated. Use UTC ISO 8601 \&quot;YYYY-MM-DDThh:mm:ss\&quot;  datetime format. Time zone should be UTC and not local.
     * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
     * @param offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause. If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
     * @param sort Sort by given field. If the field is prefixed with &#39;-&#39;, it will sort in descending order.
     */
    public v1TrackingRemindersGetWithHttpInfo(accessToken?: string, userId?: number, variableCategoryName?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, sort?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/v1/trackingReminders`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (accessToken !== undefined) {
            queryParameters.set('access_token', <any>accessToken);
        }
        if (userId !== undefined) {
            queryParameters.set('userId', <any>userId);
        }
        if (variableCategoryName !== undefined) {
            queryParameters.set('variableCategoryName', <any>variableCategoryName);
        }
        if (createdAt !== undefined) {
            queryParameters.set('createdAt', <any>createdAt);
        }
        if (updatedAt !== undefined) {
            queryParameters.set('updatedAt', <any>updatedAt);
        }
        if (limit !== undefined) {
            queryParameters.set('limit', <any>limit);
        }
        if (offset !== undefined) {
            queryParameters.set('offset', <any>offset);
        }
        if (sort !== undefined) {
            queryParameters.set('sort', <any>sort);
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];
        
        // authentication (access_token) required
        if (this.configuration.apiKey)
        {
            formParams.set('access_token', this.configuration.apiKey);
        }
        // authentication (quantimodo_oauth2) required
        // oauth required
        if (this.configuration.accessToken)
        {
            headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
        }
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Store a Tracking Reminder
     * This is to enable users to create reminders to track a variable with a default value at a specified frequency
     * @param accessToken User&#39;s OAuth2 access token
     * @param userId User&#39;s id
     * @param body TrackingReminder that should be stored
     */
    public v1TrackingRemindersPostWithHttpInfo(accessToken?: string, userId?: number, body?: models.TrackingReminder, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/v1/trackingReminders`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (accessToken !== undefined) {
            queryParameters.set('access_token', <any>accessToken);
        }
        if (userId !== undefined) {
            queryParameters.set('userId', <any>userId);
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];
        
        // authentication (access_token) required
        if (this.configuration.apiKey)
        {
            formParams.set('access_token', this.configuration.apiKey);
        }
        // authentication (quantimodo_oauth2) required
        // oauth required
        if (this.configuration.accessToken)
        {
            headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
        }
            

        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
