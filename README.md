# Northwestern Libraries Admin React Components

A collection of Northwestern University Libraries React components, used cross-projects for creating Admin UI interfaces. Style guide via Styleguidist.

## Style guide and examples

View the style guide and usage examples:

https://nulib.github.io/admin-react-components/styleguide/

### Using the component library and assets

Add the package to your React project:

```
# Yarn
yarn add @nulib/admin-react-components

# NPM
npm install --save @nulib/admin-react-components
```

## Developing

To develop in the component repository:

1. Clone the project
2. Enter the `admin-react-components` directory: `cd admin-react-components`
3. Install dependencies

```
# Yarn
yarn install

# NPM
npm install
```

Use Styleguidis for a development environment. Run:

```
yarn styleguide
```

which will spin up a local Styleguidist webpack dev server that handles live-reloading as you write tests, build out components, and write documentation.

## Running the tests

```
yarn test

// or
yarn test:watch
```

## Building the package

To build the package, we use Rollup:

```
yarn build
```

To directly build the latest version of the style guide:

```
yarn styleguide:build
```

## ADR

To document architecture decisions, we use the [adr-tools](https://github.com/npryce/adr-tools) package. To document a new architecture decision via `adr-tools` markdown template generator, run:

```
adr new your-text-here
```

## Built With

- [React](https://reactjs.org/) - JavaScript components
- [Bulma](https://bulma.io/) - UI CSS only framework
- [Styleguidist](https://react-styleguidist.js.org/) - Used as development environment and style guide

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **Adam J. Arling** - _Developer_ - [Northwestern Univeristy Libraries](https://github.com/nulib) [Github](https://github.com/adamjarling)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
