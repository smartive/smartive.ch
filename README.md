# smartive.ch

## Setup

Make sure to create an `.env.local` file in the project root with all the secret env variables which can be found in 1Password under `smartive.ch Secret Env Vars`.

1. `nvm use`
2. `npm ci`
3. `npm run develop`

## Contributing

Some of the most important information if you are about to contribute. Enjoy.

### DatoCMS

We use [DatoCMS](https://www.datocms.com/) as a headless CMS. You can find the admin interface here: [cms.smartive.ch](https://cms.smartive.ch). If you need access, please contact the webmasters role.

We use GraphQL to query the data from DatoCMS. Types are generated automatically with `npm run generate`. Type generation is also run on `npm run develop`, so you don't have to worry about it.

Note: Currently not all content is managed in DatoCMS. Some content is still managed in the codebase. This will be changed in the future. We are working on it! 👷

### Next.js

[Next.js](https://www.nextjs.org/) is used as a framework. Start a development server with `npm run develop`. 🚀

### Code Quality

#### Automated Tools

We use a set of tools for a reasonably high code quality.

1. [Prettier](https://prettier.io/) for Code Formatting `npm run prettier`
2. [ESLint](https://eslint.org/) for Code Guidelines `npm run lint`
3. [TypeScript](https://www.typescriptlang.org/) for Static Type Checking (done by Next)

These checks are also run on every merge request, and each of these must pass for the MR to be mergable.

### Integration Tests

We render all our pages automatically with [Playwright](https://playwright.dev/) to check for errors.

To run the tests locally make sure the development build is running with `npm run develop` and then start the tests with `npm run test`.

### Conventions

#### Four Eye Principle

The default `main` branch is protected and nobody can commit to it. Every feature or bugfix is done in a separate Merge Request, which needs to pass the automated tests and needs to be reviewed by another developer.

**NO SELF-MERGES 😜**

#### Naming Conventions

Since we're using an automated release tool (see Releases & Deployment) our Merge Requests need to have a common naming pattern:

```
type: MESSAGE.
```

Example:

```
feat: Add Profile Image Upload for Users.
```

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

This is a React app with server-side rendering provided by Next.js.

## Deployment Model

~We follow loosely the Gitlab Flow.~ All our Merge Requests are merged against our default branch `main` and are automatically deployed to our [production](https://smartive.ch) system on Vercel.
