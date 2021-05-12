<p align="center">
    <a href="https://inkline.io/">
        <img src="https://raw.githubusercontent.com/inkline/inkline/master/packages/docs/static/images/logo.png" alt="Inkline logo" width=72 height=72>
    </a>
</p>

<h1 align="center">Inkline Icons</h1>

<p align="center">
    Inkline Icons provides you with an awesome, maintainable Universal Vue.js 3 Icon Component with thousands of icons from more than 15 icon packs. Inkline is written and maintained by <a href="https://twitter.com/alexgrozav">@alexgrozav</a>.
    <br/>
    <br/>
    <br/>
    <a href="https://inkline.io">Homepage</a>
    ·
    <a href="https://inkline.io/docs/components/icon">Documentation</a>
    ·
    <a href="https://github.com/inkline/icons/issues">Issue Tracker</a>
</p>

<br/>

<p align="center">
    <a href="https://www.npmjs.com/package/@inkline/icons">
        <img src="https://img.shields.io/npm/v/@inkline/icons.svg" alt="npm version">
    </a>
    <a href="https://github.com/inkline/icons/actions/workflows/workflow.yml">
        <img src="https://github.com/inkline/icons/actions/workflows/workflow.yml/badge.svg" alt="Build">
    </a>
    <a href='https://codecov.io/gh/inkline/icons'><img src='https://codecov.io/gh/inkline/icons/branch/master/graph/badge.svg?token=C4PI2D5CAF' alt='Coverage Status' /></a>
    <a href="https://www.npmjs.com/package/@inkline/icons">
        <img src="https://img.shields.io/npm/dm/@inkline/icons.svg" alt="Downloads">
    </a>
    <a href="https://discord.gg/2w5UGnK">
        <img src="https://img.shields.io/discord/550436704482492429.svg" alt="Discord">
    </a>
</p>

<br/>
<br/>

## Table of contents
- [Installation](#installation)
- [Integration](#integration)
- [Usage](#usage)
- [Packs](#packs)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Contributing](#contributing)
- [Community](#community)
- [Releases](#releases)
- [Versioning](#versioning)
- [Creators](#creators)
- [Copyright and license](#copyright-and-license)

## Installation
Read the [Icon Documentation](https://inkline.io/docs/components/icon) page and find information on how to import and use the icon component.

To install the package standalone:

~~~bash
npm install @inkline/icons
~~~

## Integration

You can either import and register individual icons from the packs available to take advantage of tree-shaking, or you can import and register icon packs as a whole.

### Importing individual icons (tree-shaking)

~~~js
import { createApp } from 'vue';
import { InklineIcons } from '@inkline/icons';
import { faCheck, faHome } from '@inkline/icons/packs/fontawesome';
import App from './App.vue';

const app = createApp(App);

app.use(InklineIcons, {
    faCheck,
    faHome
});

app.mount('#app');
~~~

### Importing icon packs

~~~js
import { createApp } from 'vue';
import { InklineIcons } from '@inkline/icons';
import * as fontAwesomeIcons from '@inkline/icons/packs/fontawesome';
import * as materialDesignIcons from '@inkline/icons/packs/material-design';
import App from './App.vue';

const app = createApp(App);

app.use(InklineIcons, {
    ...fontAwesomeIcons,
    ...materialDesignIcons
});

app.mount('#app');
~~~

## Usage
Icons are available to be used by constructing SVGs using the Universal Vue.js 3 Icon Component or as a CSS mask, perfect for any use case.

### Component
Using `@inkline/icons` is very straightforward. Simply specify the imported icon name:

```html
<i-icon name="fa-check" />
```

### Scss
You can also import the icons as data svg scss variables and use them as masks:

```scss
@import '@inkline/icons/packs/inkline.scss';

.icon {
    width: 16px;
    height: 16px;
    mask-size: 16px 16px;
    mask-image: url($ink-chevron-down);
    mask-position: center center;
    mask-repeat: no-repeat;
    background-color: black;
}
```

## Packs
There are over 15 available free icon packs, and even more will be added in the future.

-   [**Bootstrap Icons**](https://icons.getbootstrap.com/)<br/>
    License: [MIT](https://github.com/twbs/icons/blob/main/LICENSE.md)<br/>
    Variants:<br/>
    -   Prefix: `bi`  <br/>
        Import: `@inkline/icons/packs/bootstrap`
    <br/>
-   [**CoreUI Icons**](https://icons.coreui.io/)<br/>
    License: [CC BY 4.0](https://github.com/coreui/coreui-icons/blob/master/LICENSE)<br/>
    Variants:<br/>
    -   Prefix: `cib` <br/>
        Import: `@inkline/icons/packs/coreui/brands`
    -   Prefix: `cif` <br/>
        Import: `@inkline/icons/packs/coreui/flag`
    -   Prefix: `cil` <br/>
        Import: `@inkline/icons/packs/coreui/linear`
    -   Prefix: `*` <br/>
        Import: `@inkline/icons/packs/coreui`
    <br/>
-   [**CryptoCurrency Icons**](http://cryptoicons.co/)<br/>
    License: [CC0 1.0 Universal](https://github.com/coreui/coreui-icons/blob/master/LICENSE)<br/>
    Variants:<br/>
    -   Prefix: `cc` <br/>
        Import: `@inkline/icons/packs/cryptocurrency/regular`
    -   Prefix: `ccc` <br/>
        Import: `@inkline/icons/packs/cryptocurrency/color`
    -   Prefix: `cci` <br/>
        Import: `@inkline/icons/packs/cryptocurrency/icon`
    -   Prefix: `*` <br/>
        Import: `@inkline/icons/packs/cryptocurrency`
    <br/>
-   [**FontAwesome Icons**](https://fontawesome.com/)<br/>
    License: [CC BY 4.0](https://github.com/FortAwesome/Font-Awesome/blob/master/LICENSE.txt)<br/>
    Variants:<br/>
    -   Prefix: `fab` <br/>
        Import: `@inkline/icons/packs/fontawesome/brands`
    -   Prefix: `far` <br/>
        Import: `@inkline/icons/packs/fontawesome/regular`
    -   Prefix: `fas` <br/>
        Import: `@inkline/icons/packs/fontawesome/solid`
    -   Prefix: `*` <br/>
        Import: `@inkline/icons/packs/fontawesome`
    <br/>
-   [**Flat Color Icons**](https://icons8.github.io/flat-color-icons/)<br/>
    License: [MIT / Good Boy](https://github.com/icons8/flat-color-icons/blob/master/LICENSE.md)<br/>
    Variants:<br/>
    -   Prefix: `fc` <br/>
        Import: `@inkline/icons/packs/flat-color`
    <br/>
-   [**Flag Icons**](https://flagicons.lipis.dev/)<br/>
    License: [MIT](https://github.com/lipis/flag-icon-css/blob/master/LICENSE)<br/>
    Variants:<br/>
    -   Prefix: `fi` <br/>
        Import: `@inkline/icons/packs/flag/4x3`
    -   Prefix: `fis` <br/>
        Import: `@inkline/icons/packs/flag/1x1`
    -   Prefix: `*` <br/>
        Import: `@inkline/icons/packs/flag`
    <br/>
-   [**Heroicons**](https://heroicons.com/)<br/>
    License: [MIT](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE)<br/>
    Variants:<br/>
    -   Prefix: `his` <br/>
        Import: `@inkline/icons/packs/heroicons/solid`
    -   Prefix: `hio` <br/>
        Import: `@inkline/icons/packs/heroicons/outline`
    -   Prefix: `*` <br/>
        Import: `@inkline/icons/packs/heroicons`
    <br/>
-   [**Inkline**](https://inkline.io/)<br/>
    License: [MIT](https://github.com/inkline/inkline/blob/master/packages/inkline/LICENSE)<br/>
    Variants:<br/>
    -   Prefix: `ink` <br/>
        Import: `@inkline/icons/packs/inkline`
    <br/>
-   [**Ionicons**](https://ionicons.com/)<br/>
    License: [MIT](https://github.com/ionic-team/ionicons/blob/master/LICENSE)<br/>
    Variants:<br/>
    -   Prefix: `ion` <br/>
        Import: `@inkline/icons/packs/ionicons`
    <br/>
-   [**Line Awesome**](https://icons8.com/line-awesome)<br/>
    License: [MIT](https://github.com/icons8/line-awesome/blob/master/LICENSE.md)<br/>
    Variants:<br/>
    -   Prefix: `la` <br/>
        Import: `@inkline/icons/packs/lineawesome`
    <br/>
-   [**Material Design Icons**](https://fonts.google.com/icons)<br/>
    License: [Apache 2.0](https://github.com/google/material-design-icons/blob/master/LICENSE)<br/>
    Variants:<br/>
    -   Prefix: `mdi` <br/>
        Import: `@inkline/icons/packs/material-design`
-   [**Primer Octicons**](https://primer.style/octicons)<br/>
    License: [MIT](https://github.com/primer/octicons/blob/master/LICENSE)<br/>
    Variants:<br/>
    -   Prefix: `oi` <br/>
        Import: `@inkline/icons/packs/octicons`
    <br/>
-   [**Pixelart Icons**](https://pixelarticons.com/)<br/>
    License: [MIT](https://github.com/halfmage/pixelarticons/blob/master/LICENSE)<br/>
    Variants:<br/>
    -   Prefix: `px` <br/>
        Import: `@inkline/icons/packs/pixelart`
    <br/>
-   [**Prime Icons**](http://primefaces.org/showcase/icons.xhtml)<br/>
    License: [MIT](https://github.com/primefaces/primeicons/blob/master/LICENSE)<br/>
    Variants:<br/>
    -   Prefix: `pi` <br/>
        Import: `@inkline/icons/packs/prime`
    <br/>
-   [**Remix Icon**](https://remixicon.com/)<br/>
    License: [Apache 2.0](https://github.com/Remix-Design/RemixIcon/blob/master/License)<br/>
    Variants:<br/>
    -   Prefix: `ri` <br/>
        Import: `@inkline/icons/packs/remix`
    <br/>
-   [**Simple Icons**](https://simpleicons.org/)<br/>
    License: [CC0 1.0 Universal](https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md)<br/>
    Variants:<br/>
    -   Prefix: `si` <br/>
        Import: `@inkline/icons/packs/simple`


## Bugs and feature requests
Have a bug or a feature request? Please first search for existing and closed issues.
If your problem or idea is not addressed yet, [please open a new issue](https://github.com/inkline/icons/issues/new).

## Community
Get updates on Inkline's development and chat with the project maintainers and community members.
- Follow [@inkline on Twitter](https://twitter.com/inkline).
- Join [Inkline on Discord](https://discord.com/invite/2w5UGnK).
- Join [Discussions on GitHub](https://github.com/inkline/inkline/discussions).

## Releases
[Previous releases](https://github.com/inkline/icons/releases) and their documentation are also available for download.

## Versioning
For increased transparency and backward compatibility,
Inkline is maintained under [the Semantic Versioning guidelines](https://semver.org/).

## Creators
**Alex Grozav**

- <https://twitter.com/alexgrozav>
- <https://facebook.com/alexgrozav>
- <https://github.com/alexgrozav>

## Contributing
Please read through our [contributing guidelines](https://github.com/inkline/inkline/blob/master/.github/CONTRIBUTING.md).
There you can find directions for opening issues, feature requests, coding standards, and how to setup a local development environment.

Thanks goes to [these wonderful people](https://github.com/inkline/icons#contributing).

## Copyright and license
Code copyright 2017-2021 [Inkline Icons Authors](https://github.com/inkline/icons/graphs/contributors).
Code released under the [MIT License](https://github.com/inkline/icons/blob/master/LICENSE).
