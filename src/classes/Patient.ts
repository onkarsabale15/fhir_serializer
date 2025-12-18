import { Resource } from "./Resource";
import { IPatient } from "../types/resources/patient";
import { EResourceType } from "../types/primitives/allowedResourceTypes";
import { IIdentifier } from "../types/primitives/identifier";
import { IHumanName } from "../types/primitives/humanName";
import { IContactPoint } from "../types/primitives/contactPoint";
import { TGender } from "../types/primitives/gender";
import { TDate } from "../types/primitives/date";
import { TDateTime } from "../types/primitives/dateTime";
import { IAddress } from "../types/primitives/address";
import { ICodeableConcept } from "../types/primitives/codeableConceps";
import { TMaritalStatus } from "../types/primitives/maritalStatus";
import { IAttachment } from "../types/primitives/attachment";
import { IContact } from "../types/primitives/contact";
import { ICommunication } from "../types/primitives/communication";
import { IReference } from "../types/primitives/reference";
import { Ilink } from "../types/primitives/link";

/**
 * A Patient resource represents a person receiving care or other health-related services.
 * 
 * @class Patient
 * @extends {Resource<EResourceType.PATIENT>}
 * 
 * @example
 * ```javascript
 * const patient = new Patient();
 * patient.name = [{ given: ["John"], family: "Doe" }];
 * patient.gender = "male";
 * patient.birthDate = "1990-01-01";
 * ```
 * 
 * @see {@link https://hl7.org/fhir/R4/patient.html|FHIR R4 Patient}
 */
export class Patient extends Resource<EResourceType.PATIENT> implements IPatient {
    /**
     * An identifier for this patient
     * @type {IIdentifier[] | undefined}
     */
    identifier?: IIdentifier[];

    /**
     * A name associated with the patient (REQUIRED)
     * @type {IHumanName[]}
     * @required
     */
    name: IHumanName[];

    /**
     * A contact detail for the person
     * @type {IContactPoint[] | undefined}
     */
    telecom?: IContactPoint[];

    /**
     * Administrative Gender - the gender that the patient is considered to have for administration and record keeping purposes
     * @type {TGender | undefined}
     * @see {@link https://hl7.org/fhir/R4/valueset-administrative-gender.html|Administrative Gender}
     */
    gender?: TGender;

    /**
     * The date of birth for the individual
     * @type {TDate | undefined}
     */
    birthDate?: TDate;

    /**
     * Indicates if the individual is deceased or not
     * @type {boolean | undefined}
     */
    deceasedBoolean?: boolean;

    /**
     * Indicates the actual or approximate date of death
     * @type {TDateTime | undefined}
     */
    deceasedDateTime?: TDateTime;

    /**
     * Address(es) for the contact person
     * @type {IAddress[] | undefined}
     */
    address?: IAddress[];

    /**
     * This field contains a patient's most recent marital (civil) status
     * @type {ICodeableConcept<TMaritalStatus> | undefined}
     */
    maritalStatus?: ICodeableConcept<TMaritalStatus>;

    /**
     * Indicates whether the patient is part of a multiple birth
     * @type {boolean | undefined}
     */
    multipleBirthBoolean?: boolean;

    /**
     * Indicates the actual number of births (e.g., 2 for twins)
     * @type {number | undefined}
     */
    multipleBirthInteger?: number;

    /**
     * Image of the patient
     * @type {IAttachment[] | undefined}
     */
    photo?: IAttachment[];

    /**
     * A contact party (e.g., guardian, partner, friend) for the patient
     * @type {IContact[] | undefined}
     */
    contact?: IContact[];

    /**
     * A language which may be used to communicate with the patient about his or her health
     * @type {ICommunication[] | undefined}
     */
    communication?: ICommunication[];

    /**
     * Patient's nominated care provider
     * @type {IReference<EResourceType.PRACTITIONER | EResourceType.ORGANIZATION>[] | undefined}
     */
    generalPractitioner?: IReference<EResourceType.PRACTITIONER | EResourceType.ORGANIZATION>[];

    /**
     * Organization that is the custodian of the patient record
     * @type {IReference<EResourceType.ORGANIZATION> | undefined}
     */
    managingOrganization?: IReference<EResourceType.ORGANIZATION>;

    /**
     * Link to another patient resource that concerns the same actual person
     * @type {Ilink[] | undefined}
     */
    link?: Ilink[];

    /**
     * Creates an instance of Patient
     * 
     * @param {Partial<IPatient>} [data] - Optional initial patient data
     */
    constructor(data?: Partial<IPatient>) {
        super(EResourceType.PATIENT, data);
        this.name = data?.name || [];
        if (data) {
            if (data.identifier) this.identifier = data.identifier;
            if (data.telecom) this.telecom = data.telecom;
            if (data.gender) this.gender = data.gender;
            if (data.birthDate) this.birthDate = data.birthDate;
            if (data.deceasedBoolean !== undefined) this.deceasedBoolean = data.deceasedBoolean;
            if (data.deceasedDateTime) this.deceasedDateTime = data.deceasedDateTime;
            if (data.address) this.address = data.address;
            if (data.maritalStatus) this.maritalStatus = data.maritalStatus;
            if (data.multipleBirthBoolean !== undefined) this.multipleBirthBoolean = data.multipleBirthBoolean;
            if (data.multipleBirthInteger !== undefined) this.multipleBirthInteger = data.multipleBirthInteger;
            if (data.photo) this.photo = data.photo;
            if (data.contact) this.contact = data.contact;
            if (data.communication) this.communication = data.communication;
            if (data.generalPractitioner) this.generalPractitioner = data.generalPractitioner;
            if (data.managingOrganization) this.managingOrganization = data.managingOrganization;
            if (data.link) this.link = data.link;
        }
    }

    /**
     * Adds an identifier to the patient
     * @param {IIdentifier} identifier - The identifier to add
     * @returns {this} Returns this instance for method chaining
     */
    addIdentifier(identifier: IIdentifier): this {
        if (!this.identifier) {
            this.identifier = [];
        }
        this.identifier.push(identifier);
        return this;
    }

    /**
     * Adds a name to the patient
     * @param {IHumanName} name - The name to add
     * @returns {this} Returns this instance for method chaining
     */
    addName(name: IHumanName): this {
        if (!this.name) {
            this.name = [];
        }
        this.name.push(name);
        return this;
    }

    /**
     * Sets the patient's gender
     * @param {TGender} gender - The gender value
     * @returns {this} Returns this instance for method chaining
     */
    setGender(gender: TGender): this {
        this.gender = gender;
        return this;
    }

    /**
     * Sets the patient's birth date
     * @param {TDate} birthDate - The birth date
     * @returns {this} Returns this instance for method chaining
     */
    setBirthDate(birthDate: TDate): this {
        this.birthDate = birthDate;
        return this;
    }

    /**
     * Validates that the patient has required fields
     * @returns {boolean} True if valid, false otherwise
     */
    validate(): boolean {
        return super.validate() && Array.isArray(this.name) && this.name.length > 0;
    }

    /**
     * Converts the patient to a plain object
     * @returns {IPatient} The patient as a plain object
     */
    toJSON(): IPatient {
        return {
            ...super.toJSON(),
            name: this.name,
            ...(this.identifier && { identifier: this.identifier }),
            ...(this.telecom && { telecom: this.telecom }),
            ...(this.gender && { gender: this.gender }),
            ...(this.birthDate && { birthDate: this.birthDate }),
            ...(this.deceasedBoolean !== undefined && { deceasedBoolean: this.deceasedBoolean }),
            ...(this.deceasedDateTime && { deceasedDateTime: this.deceasedDateTime }),
            ...(this.address && { address: this.address }),
            ...(this.maritalStatus && { maritalStatus: this.maritalStatus }),
            ...(this.multipleBirthBoolean !== undefined && { multipleBirthBoolean: this.multipleBirthBoolean }),
            ...(this.multipleBirthInteger !== undefined && { multipleBirthInteger: this.multipleBirthInteger }),
            ...(this.photo && { photo: this.photo }),
            ...(this.contact && { contact: this.contact }),
            ...(this.communication && { communication: this.communication }),
            ...(this.generalPractitioner && { generalPractitioner: this.generalPractitioner }),
            ...(this.managingOrganization && { managingOrganization: this.managingOrganization }),
            ...(this.link && { link: this.link })
        };
    }

    /**
     * Serializes the patient by cleaning undefined/null values and empty objects/arrays
     * @returns {IPatient} The cleaned patient as a plain object
     */
    serialize(): IPatient {
        return Resource.clean(this.toJSON()) as IPatient;
    }
}


