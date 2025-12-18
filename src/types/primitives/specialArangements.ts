/**
 * 
Code	Display	Definition
wheel	Wheelchair	The patient requires a wheelchair to be made available for the encounter.
add-bed	Additional bedding	An additional bed made available for a person accompanying the patient, for example a parent accompanying a child.
int	Interpreter	The patient is not fluent in the local language and requires an interpreter to be available. Refer to the Patient.Language property for the type of interpreter required.
att	Attendant	A person who accompanies a patient to provide assistive services necessary for the patient's care during the encounter.
dog	Guide dog	The patient has a guide dog and the location used for the encounter should be able to support the presence of the service animal.
 */

enum ESpecialArrangement{
    WHEELCHAIR = "wheel",
    ADDITIONAL_BEDDING = "add-bed",
    INTERPRETER = "int",
    ATTENDANT = "att",
    GUIDE_DOG = "dog"
}

type TSpecialArrangement = `${ESpecialArrangement}`;

export { ESpecialArrangement };
export type { TSpecialArrangement }