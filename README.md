# Northwestern Libraries Admin Component Repository

A collection of Northwestern University Libraries React components, used cross-projects for creating Admin UI interfaces. Also included is a Style Guide via Styleguidist.

## Usage

View available components at: https://nulib.github.io/nulib-admin-ui-components/styleguide/

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

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

## Running the tests

...coming soon

## Deployment

To deploy updates to the component repo, make sure to commit all your changes, and run the following NPM commands (assuming `yarn` here):

```
yarn build
yarn styleguide:build
```

Then make a PR to the `master` branch.

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
