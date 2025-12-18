# Setup Guide for Local Development

This guide explains how to set up and link both `@fhir-r4/types` and `@fhir-r4/builder` packages for local development with IntelliSense support.

## Step 1: Build the Types Package

```powershell
# In the root directory (ts_code)
npm run build
```

This creates the `dist` directory with compiled files and `package.json`.

## Step 2: Build the Builder Package

```powershell
# First, link the types package (if not already linked)
npm link ./dist

# Then build the builder package
cd builder
npm link @fhir-r4/types
npm run build
cd ..
```

This creates the `builder/dist` directory with compiled files and `package.json`.

## Step 3: Link Both Packages in Your Test Project

```powershell
# In your test project directory
# Link types package
npm link ..\ts_code\dist

# Link builder package
npm link ..\ts_code\builder\dist
```

Or, if you want to link from root directories:

```powershell
# Link from root directories
npm link ..\ts_code
npm link ..\ts_code\builder
```

## Step 4: Verify IntelliSense Works

Create a test file (e.g., `test.js`):

```javascript
import { Patient, EResourceType, EGender } from '@fhir-r4/builder';

// Type 'new Patient().' and you should see IntelliSense
const patient = new Patient()
  .setId('patient-123')      // ✅ IntelliSense here
  .addName({                  // ✅ IntelliSense here
    given: ['John'],
    family: 'Doe'
  })
  .setGender(EGender.MALE)    // ✅ IntelliSense here
  .setBirthDate('1990-01-01'); // ✅ IntelliSense here

// Type 'patient.' and you should see all properties and methods
console.log(patient.name);    // ✅ IntelliSense here
```

## Troubleshooting IntelliSense

### If IntelliSense is not working:

1. **Ensure both packages are linked:**
   ```powershell
   npm ls @fhir-r4/types
   npm ls @fhir-r4/builder
   ```
   Both should show `->` pointing to your local directories.

2. **Restart your IDE/editor** after linking packages.

3. **For VS Code**, try:
   - Reload window: `Ctrl+Shift+P` → "Reload Window"
   - Check TypeScript version: `Ctrl+Shift+P` → "TypeScript: Select TypeScript Version"

4. **Ensure .d.ts files exist:**
   ```powershell
   # Check types package
   ls dist\index.d.ts
   
   # Check builder package
   ls builder\dist\builder\index.d.ts
   ```

5. **For plain JavaScript files**, ensure your `jsconfig.json` or `tsconfig.json` has:
   ```json
   {
     "compilerOptions": {
       "module": "esnext",
       "moduleResolution": "node",
       "checkJs": false
     },
     "include": ["**/*.js"]
   }
   ```

## Quick Rebuild After Changes

After making changes to the source code:

```powershell
# Rebuild types
npm run build

# Rebuild builder
cd builder
npm run build
cd ..
```

Then restart your IDE or reload the window.

## Using in TypeScript

For TypeScript projects, IntelliSense works automatically:

```typescript
import { Patient, IPatient, EGender } from '@fhir-r4/builder';

const patient: IPatient = new Patient()
  .setId('patient-123')
  .addName({ given: ['John'], family: 'Doe' })
  .setGender(EGender.MALE)
  .toJSON();
```

The type definitions are fully available, and you'll get:
- ✅ Type checking
- ✅ IntelliSense autocomplete
- ✅ JSDoc hover tooltips
- ✅ Method signature help

