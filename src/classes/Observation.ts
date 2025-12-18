import { Resource } from "./Resource";
import { IObservation } from "../types/resources/observation";
import { EResourceType } from "../types/primitives/allowedResourceTypes";
import { IIdentifier } from "../types/primitives/identifier";
import { IReference } from "../types/primitives/reference";
import { TObservationStatus } from "../types/primitives/observationStatus";
import { ICodeableConcept } from "../types/primitives/codeableConceps";
import { IQuantity } from "../types/primitives/quantity";
import { IRange } from "../types/primitives/range";
import { IRatio } from "../types/primitives/ratio";
import { ISampledData } from "../types/primitives/sampledData";
import { IAttachment } from "../types/primitives/attachment";
import { TDateTime } from "../types/primitives/dateTime";
import { TDate } from "../types/primitives/date";
import { IPeriod } from "../types/primitives/period";
import { IObservationComponent } from "../types/primitives/observationComponent";
import { IAnnotation } from "../types/primitives/annotation";
import { ITiming } from "../types/primitives/timing";
import { TInstant } from "../types/primitives/instant";
import { IObservationReferenceRange } from "../types/primitives/observationReferenceRange";

/**
 * Measurements and simple assertions made about a patient, device or other subject.
 * 
 * @class Observation
 * @extends {Resource<EResourceType.OBSERVATION>}
 * 
 * @example
 * ```javascript
 * const obs = new Observation();
 * obs.status = "final";
 * obs.code = { coding: [{ code: "85354-9" }] };
 * obs.subject = { reference: "Patient/123" };
 * obs.valueQuantity = { value: 120, unit: "mmHg" };
 * ```
 * 
 * @see {@link https://hl7.org/fhir/R4/observation.html|FHIR R4 Observation}
 */
export class Observation extends Resource<EResourceType.OBSERVATION> implements IObservation {
    identifier?: IIdentifier[];
    basedOn?: IReference<EResourceType.CARE_PLAN | EResourceType.DEVICE_REQUEST | EResourceType.IMMUNIZATION_RECOMMENDATION | EResourceType.MEDICATION_REQUEST | EResourceType.NUTRITION_ORDER | EResourceType.SERVICE_REQUEST>[];
    partOf?: IReference<EResourceType.MEDICATION_ADMINISTRATION | EResourceType.MEDICATION_DISPENSE | EResourceType.MEDICATION_STATEMENT | EResourceType.PROCEDURE | EResourceType.IMMUNIZATION | EResourceType.IMAGING_STUDY>[];
    /**
     * The status of the result value (REQUIRED)
     * @type {TObservationStatus}
     * @required
     */
    status!: TObservationStatus;
    category?: ICodeableConcept[];
    /**
     * Describes what was observed (REQUIRED)
     * @type {ICodeableConcept}
     * @required
     */
    code!: ICodeableConcept;
    subject?: IReference<EResourceType.PATIENT | EResourceType.GROUP | EResourceType.DEVICE | EResourceType.LOCATION>;
    focus?: IReference[];
    encounter?: IReference<EResourceType.ENCOUNTER>;
    effectiveDateTime?: TDateTime;
    effectivePeriod?: IPeriod;
    effectiveTiming?: ITiming;
    effectiveInstant?: TInstant;
    issued?: TInstant;
    performer?: IReference<EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE | EResourceType.ORGANIZATION | EResourceType.CARE_TEAM | EResourceType.PATIENT | EResourceType.RELATED_PERSON>[];
    valueQuantity?: IQuantity;
    valueCodeableConcept?: ICodeableConcept;
    valueString?: string;
    valueBoolean?: boolean;
    valueInteger?: number;
    valueRange?: IRange;
    valueRatio?: IRatio;
    valueSampledData?: ISampledData;
    valueTime?: string;
    valueDateTime?: TDateTime;
    valuePeriod?: IPeriod;
    dataAbsentReason?: ICodeableConcept;
    interpretation?: ICodeableConcept[];
    note?: IAnnotation[];
    bodySite?: ICodeableConcept;
    method?: ICodeableConcept;
    specimen?: IReference<EResourceType.SPECIMEN>;
    device?: IReference<EResourceType.DEVICE | EResourceType.DEVICE_METRIC>;
    referenceRange?: IObservationReferenceRange[];
    hasMember?: IReference<EResourceType.OBSERVATION | EResourceType.QUESTIONNAIRE_RESPONSE | EResourceType.MOLECULAR_SEQUENCE>[];
    derivedFrom?: IReference<EResourceType.DOCUMENT_REFERENCE | EResourceType.IMAGING_STUDY | EResourceType.MEDIA | EResourceType.QUESTIONNAIRE_RESPONSE | EResourceType.OBSERVATION | EResourceType.MOLECULAR_SEQUENCE>[];
    component?: IObservationComponent[];

    constructor(data?: Partial<IObservation>) {
        super(EResourceType.OBSERVATION, data);
        if (data) {
            this.status = data.status!;
            this.code = data.code!;
        }
    }

    /**
     * Sets the observation status
     * @param {TObservationStatus} status - The status value
     * @returns {this} Returns this instance for method chaining
     */
    setStatus(status: TObservationStatus): this {
        this.status = status;
        return this;
    }

    /**
     * Sets the observation code
     * @param {ICodeableConcept} code - The codeable concept describing what was observed
     * @returns {this} Returns this instance for method chaining
     */
    setCode(code: ICodeableConcept): this {
        this.code = code;
        return this;
    }

    /**
     * Sets the subject (patient, device, etc.)
     * @param {IReference<EResourceType.PATIENT | EResourceType.GROUP | EResourceType.DEVICE | EResourceType.LOCATION>} subject - Reference to the subject
     * @returns {this} Returns this instance for method chaining
     */
    setSubject(subject: IReference<EResourceType.PATIENT | EResourceType.GROUP | EResourceType.DEVICE | EResourceType.LOCATION>): this {
        this.subject = subject;
        return this;
    }

    /**
     * Sets a quantity value for the observation
     * @param {IQuantity} quantity - The quantity value
     * @returns {this} Returns this instance for method chaining
     */
    setValueQuantity(quantity: IQuantity): this {
        this.valueQuantity = quantity;
        return this;
    }

    /**
     * Validates that the observation has required fields
     * @returns {boolean} True if valid, false otherwise
     */
    validate(): boolean {
        return super.validate() && !!this.status && !!this.code;
    }

    /**
     * Converts the observation to a plain object
     * @returns {IObservation} The observation as a plain object
     */
    toJSON(): IObservation {
        const json: any = {
            ...super.toJSON(),
            status: this.status,
            code: this.code
        };
        if (this.identifier) json.identifier = this.identifier;
        if (this.basedOn) json.basedOn = this.basedOn;
        if (this.partOf) json.partOf = this.partOf;
        if (this.category) json.category = this.category;
        if (this.subject) json.subject = this.subject;
        if (this.focus) json.focus = this.focus;
        if (this.encounter) json.encounter = this.encounter;
        if (this.effectiveDateTime) json.effectiveDateTime = this.effectiveDateTime;
        if (this.effectivePeriod) json.effectivePeriod = this.effectivePeriod;
        if (this.effectiveTiming) json.effectiveTiming = this.effectiveTiming;
        if (this.effectiveInstant) json.effectiveInstant = this.effectiveInstant;
        if (this.issued) json.issued = this.issued;
        if (this.performer) json.performer = this.performer;
        if (this.valueQuantity) json.valueQuantity = this.valueQuantity;
        if (this.valueCodeableConcept) json.valueCodeableConcept = this.valueCodeableConcept;
        if (this.valueString) json.valueString = this.valueString;
        if (this.valueBoolean !== undefined) json.valueBoolean = this.valueBoolean;
        if (this.valueInteger !== undefined) json.valueInteger = this.valueInteger;
        if (this.valueRange) json.valueRange = this.valueRange;
        if (this.valueRatio) json.valueRatio = this.valueRatio;
        if (this.valueSampledData) json.valueSampledData = this.valueSampledData;
        if (this.valueTime) json.valueTime = this.valueTime;
        if (this.valueDateTime) json.valueDateTime = this.valueDateTime;
        if (this.valuePeriod) json.valuePeriod = this.valuePeriod;
        if (this.dataAbsentReason) json.dataAbsentReason = this.dataAbsentReason;
        if (this.interpretation) json.interpretation = this.interpretation;
        if (this.note) json.note = this.note;
        if (this.bodySite) json.bodySite = this.bodySite;
        if (this.method) json.method = this.method;
        if (this.specimen) json.specimen = this.specimen;
        if (this.device) json.device = this.device;
        if (this.referenceRange) json.referenceRange = this.referenceRange;
        if (this.hasMember) json.hasMember = this.hasMember;
        if (this.derivedFrom) json.derivedFrom = this.derivedFrom;
        if (this.component) json.component = this.component;
        return json as IObservation;
    }
}
