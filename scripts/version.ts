import { resolve } from 'path';
import { writeFileSync } from 'fs';
import { iconPacks } from '../src/config';

const packageJSON = require(resolve(__dirname, '..', 'package.json'));

packageJSON.devDependencies['@inkline/icons'] = packageJSON.iconsVersion;

const packages = iconPacks.reduce((acc: { [key: string]: string }, iconPack) => {
    acc[iconPack.package] = packageJSON.devDependencies[iconPack.package];
    return acc;
}, {});

const outputPath = resolve(__dirname, '..', 'src', 'version.ts');
const outputContent = `export const versions = ${JSON.stringify(packages, null, 4)
    .replace(/"([^(")"-:]+)":/g,"$1:")}
`;

writeFileSync(outputPath, outputContent);
