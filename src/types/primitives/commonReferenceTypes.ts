import { IReference } from "./reference";
import { EResourceType } from "./allowedResourceTypes";

// Common reference type aliases for better reusability
export type TPractitionerReference = IReference<EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE>;
export type TPractitionerReferenceWithOrganization = IReference<EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE | EResourceType.ORGANIZATION>;
export type TPractitionerReferenceExtended = IReference<EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE | EResourceType.ORGANIZATION | EResourceType.CARE_TEAM | EResourceType.PATIENT | EResourceType.RELATED_PERSON>;
export type TPractitionerReferenceWithDevice = IReference<EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE | EResourceType.ORGANIZATION | EResourceType.PATIENT | EResourceType.RELATED_PERSON | EResourceType.DEVICE>;
export type TPractitionerReferenceFull = IReference<EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE | EResourceType.ORGANIZATION | EResourceType.CARE_TEAM | EResourceType.PATIENT | EResourceType.RELATED_PERSON | EResourceType.DEVICE>;
export type TPatientPersonReference = IReference<EResourceType.PATIENT | EResourceType.RELATED_PERSON>;
export type TRecorderReference = IReference<EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE | EResourceType.PATIENT | EResourceType.RELATED_PERSON>;
export type TAsserterReference = IReference<EResourceType.PATIENT | EResourceType.RELATED_PERSON | EResourceType.PRACTITIONER | EResourceType.PRACTITIONER_ROLE>;

