# smartive.ch
The yet-again-all-new smartive.ch website is built with [Gatsby](https://www.gatsbyjs.org)
- a «Blazing-fast static site generator for React».

## Structure
All files in `pages` represent, surprise surprise, pages/routes on smartive.ch.
They compose different components into full pages. So if you want to change
something, that's probably where you start looking.

These components live inside `components` and are structured by an Atomic Design
approach, which all of us should know by now. It might not be perfect, but it's
at least something. Relevant SASS files are placed inside the component's folder,
but there are also some old, legacy SCSS files in `scss`.

## Content
Currently most of the stuff is statically exported from the `data` directory,
but if someone wants to do this properly with GraphQL, they're more than welcome
to do so.

## Setup

```
yarn
```

## Development

```
yarn develop
```

This runs gatsby in dev mode on `localhost:8000` with HMR, etc.

## Deployment
A CI pipeline has been setup on GitLab. `develop` is automatically deployed to stage.smartive.ch and `master` to smartive.ch.
