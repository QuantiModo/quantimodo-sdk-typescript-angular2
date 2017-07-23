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

export interface Variable {
    /**
     * Variable ID
     */
    id?: number;

    /**
     * User-defined variable display name.
     */
    name: string;

    /**
     * Variable category like Mood, Sleep, Physical Activity, Treatment, Symptom, etc.
     */
    category: string;

    /**
     * Abbreviated name of the default unit for the variable
     */
    unitAbbreviatedName: string;

    /**
     * Id of the default unit for the variable
     */
    abbreviatedUnitId: number;

    /**
     * Comma-separated list of source names to limit variables to those sources
     */
    sources: string;

    /**
     * The minimum allowed value for measurements. While you can record a value below this minimum, it will be excluded from the correlation analysis.
     */
    minimumAllowedValue: number;

    /**
     * The maximum allowed value for measurements. While you can record a value above this maximum, it will be excluded from the correlation analysis.
     */
    maximumAllowedValue: number;

    /**
     * Way to aggregate measurements over time. Options are \"MEAN\" or \"SUM\". SUM should be used for things like minutes of exercise.  If you use MEAN for exercise, then a person might exercise more minutes in one day but add separate measurements that were smaller.  So when we are doing correlational analysis, we would think that the person exercised less that day even though they exercised more.  Conversely, we must use MEAN for things such as ratings which cannot be SUMMED.
     */
    combinationOperation: Variable.CombinationOperationEnum;

    /**
     * When it comes to analysis to determine the effects of this variable, knowing when it did not occur is as important as knowing when it did occur. For example, if you are tracking a medication, it is important to know when you did not take it, but you do not have to log zero values for all the days when you haven't taken it. Hence, you can specify a filling value (typically 0) to insert whenever data is missing.
     */
    fillingValue: number;

    /**
     * The Variable this Variable should be joined with. If the variable is joined with some other variable then it is not shown to user in the list of variables.
     */
    joinWith: string;

    /**
     * Array of Variables that are joined with this Variable
     */
    joinedVariables: Array<models.Variable>;

    /**
     * Id of the parent variable if this variable has any parent
     */
    parent: number;

    /**
     * Array of Variables that are sub variables to this Variable
     */
    subVariables: Array<models.Variable>;

    /**
     * The amount of time in seconds that elapses after the predictor/stimulus event before the outcome as perceived by a self-tracker is known as the “onset delay”. For example, the “onset delay” between the time a person takes an aspirin (predictor/stimulus event) and the time a person perceives a change in their headache severity (outcome) is approximately 30 minutes.
     */
    onsetDelay: number;

    /**
     * The amount of time over which a predictor/stimulus event can exert an observable influence on an outcome variable’s value. For instance, aspirin (stimulus/predictor) typically decreases headache severity for approximately four hours (duration of action) following the onset delay.
     */
    durationOfAction: number;

    /**
     * Earliest measurement time
     */
    earliestMeasurementTime: number;

    /**
     * Latest measurement time
     */
    latestMeasurementTime: number;

    /**
     * When this variable or its settings were last updated
     */
    updated: number;

    /**
     * A value of 1 indicates that this variable is generally a cause in a causal relationship.  An example of a causeOnly variable would be a variable such as Cloud Cover which would generally not be influenced by the behaviour of the user.
     */
    causeOnly: number;

    /**
     * Number of correlations
     */
    numberOfCorrelations: number;

    /**
     * Outcome variables (those with `outcome` == 1) are variables for which a human would generally want to identify the influencing factors. These include symptoms of illness, physique, mood, cognitive performance, etc.  Generally correlation calculations are only performed on outcome variables.
     */
    outcome: number;

    /**
     * The number of measurements that a given user had for this variable the last time a correlation calculation was performed. Generally correlation values are only updated once the current number of measurements for a variable is more than 10% greater than the rawMeasurementsAtLastAnalysis.  This avoids a computationally-demanding recalculation when there's not enough new data to make a significant difference in the correlation.
     */
    rawMeasurementsAtLastAnalysis: number;

    /**
     * Number of measurements
     */
    numberOfRawMeasurements: number;

    /**
     * Last unit
     */
    lastUnit: string;

    /**
     * Last value
     */
    lastValue: number;

    /**
     * Most common value
     */
    mostCommonValue: number;

    /**
     * Most common unit
     */
    mostCommonUnit: string;

    /**
     * Last source
     */
    lastSource: number;

    /**
     * 
     */
    imageUrl?: string;

    /**
     * 
     */
    ionIcon?: string;

}
export namespace Variable {
    export enum CombinationOperationEnum {
        MEAN = <any> 'MEAN',
        SUM = <any> 'SUM'
    }
}
