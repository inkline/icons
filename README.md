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
