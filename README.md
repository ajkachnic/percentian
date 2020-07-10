# Percentian

A toy library I created to see how quickly I could implment it

The final time was 9:03 minutes not including writing tests and docs (done beforehand)

## Install

```sh
npm install percentian
# Or
yarn add percentian
```

## Usage

### Creating a percent

```typescript
import { Percent } from 'percentian';

// From string
const percent = new Percent('500%')

// Or from a number
const percent = new Percent(5)
```

### Getting values

```typescript
import { Percent } from 'percentian';

const percent = new Percent(5)

console.log(percent.text) // 500%
console.log(percent.rawText) // "500"
console.log(percent.number) // 5
```

### Updating value

```typescript
import { Percent } from 'percentian';

const percent = new Percent(5)

percent.update(2)

console.log(percent.text) // 200%
```

## API

```typescript
{
  text: string, // A string representation of the percent
  number: number, // A numerical representation of the percent
  rawText: string, // A string representation of the percent without the percent sign
  update: (value: string | number) => void // Update the value of the percent
}
```
