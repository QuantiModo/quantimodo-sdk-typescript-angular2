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

import * as models from './models';

export interface TrackingReminderNotification {
    /**
     * id for the specific PENDING tracking remidner
     */
    id: number;

    /**
     * id for the repeating tracking remidner
     */
    trackingReminderId: number;

    /**
     * clientId
     */
    clientId?: string;

    /**
     * ID of User
     */
    userId?: number;

    /**
     * Id for the variable to be tracked
     */
    variableId?: number;

    /**
     * UTC ISO 8601 \"YYYY-MM-DDThh:mm:ss\"  timestamp for the specific time the variable should be tracked in UTC.  This will be used for the measurement startTime if the track endpoint is used.
     */
    pendingReminderTime?: Date;

    /**
     * Default value to use for the measurement when tracking
     */
    defaultValue?: number;

    /**
     * String identifier for the sound to accompany the reminder
     */
    reminderSound?: string;

    /**
     * True if the reminders should appear as a popup notification
     */
    popUp?: boolean;

    /**
     * True if the reminders should be delivered via SMS
     */
    sms?: boolean;

    /**
     * True if the reminders should be delivered via email
     */
    email?: boolean;

    /**
     * True if the reminders should appear in the notification bar
     */
    notificationBar?: boolean;

    /**
     * When the record in the database was last updated. Use UTC ISO 8601 \"YYYY-MM-DDThh:mm:ss\"  datetime format. Time zone should be UTC and not local.
     */
    updatedAt?: Date;

    /**
     * Name of the variable to be used when sending measurements
     */
    variableName?: string;

    /**
     * Name of the variable category to be used when sending measurements
     */
    variableCategoryName?: string;

    /**
     * Abbreviated name of the unit to be used when sending measurements
     */
    unitAbbreviatedName?: string;

    /**
     * The way multiple measurements are aggregated over time
     */
    combinationOperation?: TrackingReminderNotification.CombinationOperationEnum;

}
export namespace TrackingReminderNotification {
    export enum CombinationOperationEnum {
        MEAN = <any> 'MEAN',
        SUM = <any> 'SUM'
    }
}
