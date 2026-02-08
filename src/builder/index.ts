/**
 * @fhir-r4/builder
 * 
 * Builder classes for building valid FHIR R4 resources in JavaScript/TypeScript
 * Provides method chaining, validation, and full IntelliSense support
 * 
 * @packageDocumentation
 */

// Export all builder classes
export { Resource } from "../classes/Resource";
export { Patient } from "../classes/Patient";
export { Bundle } from "../classes/Bundle";
export { Observation } from "../classes/Observation";

// Export utility classes
export { CodeableConcept } from "../classes/CodeableConcept";

// Export mixins
export { IdentifierMixin } from "../classes/mixins/IdentifierMixin";
export type { IHasIdentifiers } from "../classes/mixins/IdentifierMixin";

// Re-export types from @fhir-r4/types
export type {
    IPatient,
    IEncounter,
    IObservation,
    ICondition,
    IPractitioner,
    IOrganization,
    IProcedure,
    IMedication,
    IAllergyIntolerance,
    IDiagnosticReport,
    IAppointment,
    ILocation,
    ICarePlan,
    IBundle,
    IMedicationRequest,
    IMedicationStatement,
    IMedicationAdministration,
    IImmunization,
    IGoal,
    ICareTeam,
    IRelatedPerson,
    IPractitionerRole,
    IDocumentReference,
    ISpecimen,
    IServiceRequest,
    ITask,
    IFlag,
    IList,
    IGroup,
    ICoverage,
    IAccount,
    IEpisodeOfCare,
    IPerson,
    IDevice
} from "@fhir-r4/types";

// Re-export enums from @fhir-r4/types
export {
    EResourceType,
    EBundleType,
    EObservationStatus,
    EEncounterStatus,
    EConditionStatus,
    EProcedureStatus,
    EMedicationStatus,
    EAllergyIntoleranceStatus,
    EDiagnosticReportStatus,
    EAppointmentStatus,
    ECarePlanStatus,
    EGoalStatus,
    ECareTeamStatus,
    EDocumentReferenceStatus,
    ESpecimenStatus,
    EMedicationRequestStatus,
    EMedicationStatementStatus,
    EMedicationAdministrationStatus,
    EImmunizationStatus,
    EServiceRequestStatus,
    ETaskStatus,
    EFlagStatus,
    EListStatus,
    EGroupType,
    ECoverageStatus,
    EAccountStatus,
    EEpisodeOfCareStatus,
    EDeviceStatus,
    EGender
} from "@fhir-r4/types";

// Re-export type aliases from @fhir-r4/types
export type {
    TResourceType,
    TBundleType,
    TObservationStatus,
    TEncounterStatus,
    TConditionStatus,
    TProcedureStatus,
    TMedicationStatus,
    TGender,
    TDate,
    TDateTime,
    TInstant
} from "@fhir-r4/types";

