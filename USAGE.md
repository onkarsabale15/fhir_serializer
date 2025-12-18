# Usage Guide

This guide explains how to use `@fhir-r4/types` and `@fhir-r4/builder` packages.

## Installation

### For TypeScript Types Only

```bash
npm install @fhir-r4/types
```

### For Builder Classes (includes types automatically)

```bash
npm install @fhir-r4/builder
```

The `@fhir-r4/builder` package automatically installs `@fhir-r4/types` as a dependency.

---

## Using `@fhir-r4/types` (TypeScript Types)

Use this package when you only need TypeScript type definitions, interfaces, and enums.

### Basic Usage

```typescript
import { IPatient, IObservation, EResourceType, EGender } from '@fhir-r4/types';

// Define a patient using the interface
const patient: IPatient = {
  resourceType: EResourceType.PATIENT,
  id: 'patient-123',
  name: [{ given: ['John'], family: 'Doe' }],
  gender: EGender.MALE,
  birthDate: '1990-01-01'
};

// Define an observation
const observation: IObservation = {
  resourceType: EResourceType.OBSERVATION,
  status: 'final',
  code: {
    coding: [{ code: '85354-9', system: 'http://loinc.org' }]
  },
  subject: {
    reference: 'Patient/patient-123'
  },
  valueQuantity: {
    value: 120,
    unit: 'mmHg'
  }
};
```

### Using Enums

```typescript
import { EResourceType, EGender, EObservationStatus } from '@fhir-r4/types';

const resourceType = EResourceType.PATIENT; // "Patient"
const gender = EGender.MALE; // "male"
const status = EObservationStatus.FINAL; // "final"
```

### Type Safety

```typescript
import { IPatient, EResourceType } from '@fhir-r4/types';

// TypeScript will catch errors at compile time
const patient: IPatient = {
  resourceType: EResourceType.PATIENT,
  name: [{ given: ['John'], family: 'Doe' }], // ✅ Required field
  // gender: 'invalid', // ❌ TypeScript error - invalid value
};
```

---

## Using `@fhir-r4/builder` (Builder Classes)

Use this package when you want to build FHIR resources using classes with method chaining, validation, and IntelliSense support.

### Basic Usage

```javascript
import { Patient, EResourceType, EGender } from '@fhir-r4/builder';

// Create a patient using the builder class
const patient = new Patient()
  .setId('patient-123')
  .addName({ given: ['John'], family: 'Doe' })
  .setGender('male')
  .setBirthDate('1990-01-01');

// Convert to plain object
const patientJson = patient.toJSON();

// Validate
if (patient.validate()) {
  console.log('Valid patient resource');
  // Send to FHIR server, etc.
}
```

### Method Chaining

```javascript
import { Patient, Observation, EResourceType } from '@fhir-r4/builder';

// Fluent API with method chaining
const patient = new Patient()
  .setId('patient-123')
  .addName({ given: ['John'], family: 'Doe' })
  .addName({ given: ['Jane'], family: 'Smith' }) // Can add multiple names
  .setGender('male')
  .setBirthDate('1990-01-01')
  .addIdentifier({
    system: 'http://hospital.example.org',
    value: 'MRN-12345'
  });

// Create an observation
const observation = new Observation()
  .setStatus('final')
  .setCode({
    coding: [{ code: '85354-9', system: 'http://loinc.org' }]
  })
  .setSubject({ reference: 'Patient/patient-123' })
  .setValueQuantity({
    value: 120,
    unit: 'mmHg',
    system: 'http://unitsofmeasure.org',
    code: 'mm[Hg]'
  });
```

### Bundle Example

```javascript
import { Bundle, Patient, Observation, EBundleType } from '@fhir-r4/builder';

// Create a bundle
const bundle = new Bundle(EBundleType.COLLECTION)
  .setTimestamp('2024-01-01T12:00:00Z')
  .addEntry({
    resource: patient.toJSON()
  })
  .addEntry({
    resource: observation.toJSON()
  });

// Get the bundle as JSON
const bundleJson = bundle.toJSON();
```

### Validation

```javascript
import { Patient } from '@fhir-r4/builder';

const patient = new Patient()
  .setId('patient-123');
  // Missing required 'name' field

if (!patient.validate()) {
  console.error('Patient is invalid - missing required fields');
}

// Add required field
patient.addName({ given: ['John'], family: 'Doe' });

if (patient.validate()) {
  console.log('Patient is valid!');
}
```

### Using with TypeScript

```typescript
import { Patient, IPatient, EResourceType } from '@fhir-r4/builder';

// Builder classes work great with TypeScript too
const patient = new Patient()
  .setId('patient-123')
  .addName({ given: ['John'], family: 'Doe' });

// Type-safe access
const patientData: IPatient = patient.toJSON();

// TypeScript knows the structure
console.log(patientData.resourceType); // EResourceType.PATIENT
console.log(patientData.name?.[0]?.given); // string[] | undefined
```

---

## Complete Example

```javascript
import { 
  Patient, 
  Observation, 
  Bundle, 
  EResourceType, 
  EBundleType,
  EGender 
} from '@fhir-r4/builder';

// 1. Create a patient
const patient = new Patient()
  .setId('patient-123')
  .addName({ 
    given: ['John'], 
    family: 'Doe',
    use: 'official'
  })
  .setGender(EGender.MALE)
  .setBirthDate('1990-01-01')
  .addIdentifier({
    system: 'http://hospital.example.org',
    value: 'MRN-12345'
  });

// 2. Create an observation
const observation = new Observation()
  .setStatus('final')
  .setCode({
    coding: [{
      code: '85354-9',
      system: 'http://loinc.org',
      display: 'Blood pressure panel with all children optional'
    }]
  })
  .setSubject({ reference: 'Patient/patient-123' })
  .setValueQuantity({
    value: 120,
    unit: 'mmHg',
    system: 'http://unitsofmeasure.org',
    code: 'mm[Hg]'
  })
  .setEffectiveDateTime('2024-01-01T10:00:00Z');

// 3. Validate resources
if (!patient.validate()) {
  throw new Error('Invalid patient');
}

if (!observation.validate()) {
  throw new Error('Invalid observation');
}

// 4. Create a bundle
const bundle = new Bundle(EBundleType.COLLECTION)
  .setTimestamp('2024-01-01T12:00:00Z')
  .addEntry({ resource: patient.toJSON() })
  .addEntry({ resource: observation.toJSON() });

// 5. Get final JSON
const bundleJson = bundle.toJSON();

// 6. Send to FHIR server
// fetch('https://fhir.example.org/fhir', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/fhir+json' },
//   body: JSON.stringify(bundleJson)
// });
```

---

## When to Use Which Package?

### Use `@fhir-r4/types` when:
- ✅ You only need TypeScript type definitions
- ✅ You're building resources manually (plain objects)
- ✅ You want minimal bundle size
- ✅ You're using TypeScript and want type safety

### Use `@fhir-r4/builder` when:
- ✅ You want method chaining and fluent API
- ✅ You want built-in validation
- ✅ You're using JavaScript and want IntelliSense
- ✅ You want helper methods (e.g., `addName()`, `setGender()`)
- ✅ You want a more object-oriented approach

---

## IntelliSense Support

Both packages provide full IntelliSense support in modern IDEs:

```javascript
import { Patient } from '@fhir-r4/builder';

const patient = new Patient();
// Type: patient. and you'll see all available methods
patient.setId(/* IntelliSense shows parameter types */);
patient.addName(/* IntelliSense shows IHumanName structure */);
```

---

## Common Patterns

### Creating Multiple Resources

```javascript
import { Patient, Observation } from '@fhir-r4/builder';

const patients = [
  new Patient().setId('1').addName({ given: ['John'], family: 'Doe' }),
  new Patient().setId('2').addName({ given: ['Jane'], family: 'Smith' })
];

const observations = patients.map(patient => 
  new Observation()
    .setStatus('final')
    .setSubject({ reference: `Patient/${patient.id}` })
);
```

### Converting Between Formats

```javascript
import { Patient, IPatient } from '@fhir-r4/builder';

// From class to interface
const patient = new Patient().setId('123');
const patientJson: IPatient = patient.toJSON();

// From interface to class (via constructor)
const patientData: IPatient = { /* ... */ };
const patient = new Patient(patientData);
```

---

## Troubleshooting

### Import Errors

If you get import errors, make sure you've installed the correct package:

```bash
# For types only
npm install @fhir-r4/types

# For builder classes
npm install @fhir-r4/builder
```

### Type Errors

Make sure you're using the correct types:

```typescript
import { IPatient, EResourceType } from '@fhir-r4/types';
// or
import { IPatient, EResourceType } from '@fhir-r4/builder';
```

---

## Next Steps

- Check the [README.md](./README.md) for `@fhir-r4/types`
- Check the [builder/README.md](./builder/README.md) for `@fhir-r4/builder`
- Explore the available resources and their properties
- Build your FHIR R4 compliant resources!


