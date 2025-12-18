# @fhir-r4/builder

Builder classes for building valid FHIR R4 resources in JavaScript/TypeScript with full IntelliSense support.

## Installation

```bash
npm install @fhir-r4/builder
```

This package depends on `@fhir-r4/types` which will be installed automatically.

## Quick Start

```javascript
import { Patient, EResourceType, EGender } from '@fhir-r4/builder';

// Create a patient with method chaining
const patient = new Patient()
  .setId('patient-123')
  .addName({ given: ['John'], family: 'Doe' })
  .setGender('male')
  .setBirthDate('1990-01-01');

// Convert to JSON
const patientJson = patient.toJSON();

// Validate
if (patient.validate()) {
  console.log('Valid patient resource');
}
```

## Usage

### Using Builder Classes

Builder classes provide method chaining, validation, and full IntelliSense support:

```javascript
import { Patient, Observation, Bundle, EResourceType, EGender, EBundleType } from '@fhir-r4/builder';

// Create a patient
const patient = new Patient()
  .setId('patient-123')
  .addName({ given: ['John'], family: 'Doe' })
  .setGender(EGender.MALE)
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
    unit: 'mmHg'
  });

// Create a bundle
const bundle = new Bundle(EBundleType.COLLECTION)
  .setTimestamp('2024-01-01T12:00:00Z')
  .addEntry({ resource: patient.toJSON() })
  .addEntry({ resource: observation.toJSON() });

// Get final JSON
const bundleJson = bundle.toJSON();
```

### Validation

```javascript
import { Patient } from '@fhir-r4/builder';

const patient = new Patient().setId('123');
// Missing required 'name' field

if (!patient.validate()) {
  console.error('Invalid - missing required fields');
}

patient.addName({ given: ['John'], family: 'Doe' });

if (patient.validate()) {
  console.log('Valid!');
}
```

See [USAGE.md](../USAGE.md) for detailed usage examples.

## Features

- ✅ **Full FHIR R4 Compliance** - All resources follow FHIR R4 specifications
- ✅ **Type Safety** - Complete TypeScript types with strict checking
- ✅ **IntelliSense Support** - Detailed JSDoc comments for IDE autocomplete
- ✅ **Method Chaining** - Fluent API for building resources
- ✅ **Validation** - Built-in validation methods
- ✅ **Zero Runtime Dependencies** - Only depends on @fhir-r4/types

## API Documentation

All classes extend the base `Resource` class and provide:
- Constructor with optional initial data
- Setter methods with method chaining
- `validate()` method for validation
- `toJSON()` method to convert to plain object

## License

ISC

