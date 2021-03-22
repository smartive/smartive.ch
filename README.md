# The Best smartive.ch Yet!

## Setup

1. `npm ci`
2. `cp .env.dist .env`
3. `npm run develop`
4. ???
5. Profit!

## Contributing

Some of the most important information if you are about to contribute.

### Atomic Design

This project uses an variation of the classic Atomic Design with a more intuitive approach to naming. Instead of `Atoms`, `Molecules`, `Organisms`, etc. this project works with the following terminology:

1. Identity: Herein we define the project’s core brand elements. Typefaces, typography, and colours.
2. Elements: Defines the project’s smallest reusable parts: Elements. A few well-known examples of elements are things like: buttons, links, inputs, drop-downs etc.
3. Components: Most blocks on the screen are Components. A Component can be anything that uses at least a few Elements.
4. Compositions: A Composition is a part that has multiple Components inside it. They define how to Components inside it should behave.
5. Layout: Abstract collection of design principles. Herein the amounts of white-space, grids and wrappers are defined
6. Pages: Each Page consists of an arrangement of Compositions and Components.

This is influenced and inspired by [How we’re using Component Based Design](https://medium.com/@wereheavyweight/how-were-using-component-based-design-5f9e3176babb)

### Design Systems / Systematized Design

We follow a systematized approach to our UI libraries, following closely the paradigm "Systematize everything!" from [Refactoring UI](https://refactoringui.com/book/).

Colours, fonts, spacings, shadows, etc. should be defined in the tailwind theme and only these should be used in your declarations.

But also apply some common sense and pragmatism. 😌

### Next.js

[Next.js](https://www.typescriptlang.org/) is used as a framework, especially for server-side rendering (SSR) and static site generation (SSG). Start a development server with `npm run develop`.

### Code Quality

#### Automated Tools

We use a set of tools for a reasonably high code quality.

1. [Prettier](https://prettier.io/) for Code Formatting `npm run prettier`
2. [ESLint](https://eslint.org/) for Code Guidelines `npm run lint`
3. [TypeScript](https://www.typescriptlang.org/) for Static Type Checking (done by Next)

These checks are also run on every merge request, and each of these must pass for the MR to be mergable.

### Conventions

#### Four Eye Principle

The default `master` branch is protected and nobody can commit to it. Every feature or bugfix is done in a separate Merge Request, which needs to pass the automated tests and needs to be reviewed by another developer.

**NO SELF-MERGES 😜**

#### Naming Conventions

Since we're using an automated release tool (see Releases & Deployment) our Merge Requests need to have a common naming pattern:

```
type(SCOPE): MESSAGE.

eg. feat(GFCH-123): Add Profile Image Upload for Users.
```

For simplicity we use the ticket number as a scope, otherwise we skip it (`feat: Message.`).
The following types exist:

```
feat: A new feature
fix: A bug fix
docs: Documentation only changes
style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
refactor: A code change that neither fixes a bug nor adds a feature
perf: A code change that improves performance
test: Adding missing or correcting existing tests
chore: Changes to the build process or auxiliary tools and libraries such as documentation generation
```

## Architecture

Berufsbildner is a React app with server-side rendering provided by Next.js.
