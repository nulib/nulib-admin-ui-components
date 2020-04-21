# Northwestern Libraries Admin Component Repository

A collection of Northwestern University Libraries React components, used cross-projects for creating Admin UI interfaces. Also included is a Style Guide via Styleguidist.

## Usage

View available components and how to import them in a React application: https://nulib.github.io/nulib-admin-ui-components/styleguide/

### Installing

Install the package to your React project via Github (for now) with `npm` or `yarn`:

```
npm install --save https://nulib.github.io/nulib-admin-ui-components
yarn add https://nulib.github.io/nulib-admin-ui-components
```

And import components:

```
import { Button, PrimaryButton } from "nulib-admin-ui-components";
...
<PrimaryButton disabled>Disabled until form validated</PrimaryButton>
```

Imported components have their styling inlined, and will appear consistent across any consuming application.

## Developing

To work on the component repository:

1. Clone the project
2. `cd` into `nulib-admin-ui-components` directory
3. Install all dependencies with either `yarn` or `npm`:

```
yarn install
npm install
```

Develop components within the Styleguidist application environemnt. Run:

```
yarn styleguide
```

Follow the instructions outputted from the above command for a `localhost` address to visit in your browser. The Style Guide will auto re-load as you build or update new components. If hot reloading appears not to be working, stop `Ctrl-C` and restart: `yarn styleduide`.

## Running the tests

...coming soon

## Deployment

To deploy updates to the component repo, make sure to commit all your changes, and run the following NPM commands (assuming `yarn` here):

```
yarn build
yarn styleguide:build
```

Then make a PR to the `master` branch.

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

## Acknowledgments

- https://medium.com/otorio/build-a-react-component-library-with-antd-and-styleguidist-5927931d62c6
