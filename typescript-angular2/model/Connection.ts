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

export interface Connection {
    /**
     * id
     */
    id?: number;

    /**
     * ID of user that owns this correlation
     */
    userId?: number;

    /**
     * The id for the connector data source for which the connection is connected
     */
    connectorId: number;

    /**
     * Indicates whether a connector is currently connected to a service for a user.
     */
    connectStatus?: string;

    /**
     * Error message if there is a problem with authorizing this connection.
     */
    connectError?: string;

    /**
     * Time at which an update was requested by a user.
     */
    updateRequestedAt?: Date;

    /**
     * Indicates whether a connector is currently updated.
     */
    updateStatus?: string;

    /**
     * Indicates if there was an error during the update.
     */
    updateError?: string;

    /**
     * The time at which the connector was last successfully updated.
     */
    lastSuccessfulUpdatedAt?: Date;

    /**
     * When the record was first created. Use UTC ISO 8601 \"YYYY-MM-DDThh:mm:ss\"  datetime format
     */
    createdAt?: Date;

    /**
     * When the record in the database was last updated. Use UTC ISO 8601 \"YYYY-MM-DDThh:mm:ss\"  datetime format
     */
    updatedAt?: Date;

}
