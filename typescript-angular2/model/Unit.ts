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

export interface Unit {
    /**
     * Unit name
     */
    name: string;

    /**
     * Unit abbreviation
     */
    abbreviatedName: string;

    /**
     * Unit category
     */
    category: Unit.CategoryEnum;

    /**
     * The minimum allowed value for measurements. While you can record a value below this minimum, it will be excluded from the correlation analysis.
     */
    minimumAllowedValue?: number;

    /**
     * The maximum allowed value for measurements. While you can record a value above this maximum, it will be excluded from the correlation analysis.
     */
    maximumAllowedValue?: number;

    /**
     * Conversion steps list
     */
    conversionSteps: Array<models.ConversionStep>;

}
export namespace Unit {
    export enum CategoryEnum {
        Distance = <any> 'Distance',
        Duration = <any> 'Duration',
        Energy = <any> 'Energy',
        Frequency = <any> 'Frequency',
        Miscellany = <any> 'Miscellany',
        Pressure = <any> 'Pressure',
        Proportion = <any> 'Proportion',
        Rating = <any> 'Rating',
        Temperature = <any> 'Temperature',
        Volume = <any> 'Volume',
        Weight = <any> 'Weight'
    }
}
