/**
 * quantimodo
 * QuantiModo makes it easy to retrieve normalized user data from a wide array of devices and applications. [Learn about QuantiModo](https://quantimo.do), check out our [docs](https://github.com/QuantiModo/docs) or contact us at [help.quantimo.do](https://help.quantimo.do).
 *
 * OpenAPI spec version: 5.8.728
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
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
    variableCategoryName: string;

    /**
     * Abbreviated name of the default unit for the variable
     */
    defaultUnitAbbreviatedName: string;

    /**
     * Id of the default unit for the variable
     */
    defaultUnitId: number;

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
     * The amount of time in seconds that elapses after the predictor/stimulus event before the outcome as perceived by a self-tracker is known as the onset delay. For example, the onset delay between the time a person takes an aspirin (predictor/stimulus event) and the time a person perceives a change in their headache severity (outcome) is approximately 30 minutes.
     */
    onsetDelay: number;

    /**
     * The amount of time over which a predictor/stimulus event can exert an observable influence on an outcome variable value. For instance, aspirin (stimulus/predictor) typically decreases headache severity for approximately four hours (duration of action) following the onset delay.
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

    /**
     * Example: 2014-10-23 03:41:06
     */
    createdAt?: Date;

    /**
     * Example: 34
     */
    unitId?: number;

    /**
     * Example: 10.764488721491
     */
    kurtosis?: number;

    /**
     * Example: 2202.3886251393
     */
    mean?: number;

    /**
     * Example: 2255.9284755781
     */
    median?: number;

    /**
     * Example: 7
     */
    mostCommonConnectorId?: number;

    /**
     * Example: 2
     */
    mostCommonOriginalUnitId?: number;

    /**
     * Example: 386
     */
    numberOfAggregateCorrelationsAsCause?: number;

    /**
     * Example: 2074
     */
    numberOfAggregateCorrelationsAsEffect?: number;

    /**
     * Example: 6
     */
    numberOfTrackingReminders?: number;

    /**
     * Example: 74
     */
    numberOfUniqueValues?: number;

    /**
     * Example: 307
     */
    numberOfUserVariables?: number;

    /**
     * Example: 8
     */
    secondMostCommonValue?: number;

    /**
     * Example: 0.2461351905455
     */
    skewness?: number;

    /**
     * Example: 1840.535129803
     */
    standardDeviation?: number;

    /**
     * Example: 7
     */
    thirdMostCommonValue?: number;

    /**
     * Example: 2017-07-31 03:57:06
     */
    updatedAt?: Date;

    /**
     * Example: 6
     */
    variableCategoryId?: number;

    /**
     * Example: 115947037.40816
     */
    variance?: number;

    /**
     * Example: 1
     */
    public?: boolean;

    /**
     * Example: 6
     */
    userVariableVariableCategoryId?: number;

    /**
     * Example: https://app.quantimo.do/ionic/Modo/www/img/variable_categories/sleep.svg
     */
    svgUrl?: string;

    /**
     * Example: https://app.quantimo.do/ionic/Modo/www/img/variable_categories/sleep.png
     */
    pngUrl?: string;

    /**
     * Example: img/variable_categories/sleep.png
     */
    pngPath?: string;

    /**
     * Example: https://maxcdn.icons8.com/Color/PNG/96/Household/sleeping_in_bed-96.png
     */
    variableCategoryImageUrl?: string;

    /**
     * Example: 1
     */
    manualTracking?: boolean;

    /**
     * Example: Sleep
     */
    userVariableVariableCategoryName?: string;

    /**
     * Example: Sleep
     */
    category?: string;

    /**
     * Example: 168
     */
    durationOfActionInHours?: number;

    /**
     * Example: Sleep Duration
     */
    variableName?: string;

    /**
     * Example: 308554
     */
    numberOfMeasurements?: number;

    /**
     * Example: Hours
     */
    unitName?: string;

    /**
     * Example: h
     */
    unitAbbreviatedName?: string;

    /**
     * Example: 1
     */
    unitCategoryId?: number;

    /**
     * Example: Duration
     */
    unitCategoryName?: string;

    /**
     * Example: Hours
     */
    defaultUnitName?: string;

    /**
     * Example: 1
     */
    defaultUnitCategoryId?: number;

    /**
     * Example: Duration
     */
    defaultUnitCategoryName?: string;

    /**
     * Example: 34
     */
    userVariableDefaultUnitId?: number;

    /**
     * Example: Hours
     */
    userVariableDefaultUnitName?: string;

    /**
     * Example: h
     */
    userVariableDefaultUnitAbbreviatedName?: string;

    /**
     * Example: 1
     */
    userVariableDefaultUnitCategoryId?: number;

    /**
     * Example: Duration
     */
    userVariableDefaultUnitCategoryName?: string;

    /**
     * Example: slider
     */
    inputType?: string;

}
export namespace Variable {
    export enum CombinationOperationEnum {
        MEAN = <any> 'MEAN',
        SUM = <any> 'SUM'
    }
}