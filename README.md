# Reproduction

This repo is for reproducting the error `expect(getByText("Example Component")).toBeInTheDocument();`.

## Steps to reproduce:

1. Clone this repo
2. Run `npm install`
3. Open `setupTests.ts`
4. Open `ExampleComponent.test.tsx`
5. `toBeInTheDocument()` shouldn't give any errors
6. Close `setupTests.ts`
7. `toBeInTheDocument()` should give an error
