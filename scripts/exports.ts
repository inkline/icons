import { resolve } from "path";
import { iconPacks } from '../src/config';
import {writeFileSync} from "fs";

const packageJSONPath = resolve(__dirname, '..', 'package.json');
const packageJSON = require(packageJSONPath);
const exportsMap: {
    [key: string]: {
        import?: string;
        require?: string;
        sass?: string;
        style?: string;
    }
} = {
    '.': {
        import: './lib/index.js',
        require: './dist/icons.umd.js',
        sass: './lib/index.scss',
        style: './dist/style.css',
    },
    './config': {
        import: './lib/config.js'
    },
    './version': {
        import: './lib/version.js'
    },
    './plugin': {
        import: './lib/plugin.js'
    },
    './packs': {
        import: './lib/packs/index.js',
        sass: './lib/packs/index.scss'
    },
    './packs/': {
        import: './lib/packs/',
        sass: './lib/packs/'
    },
    './components': {
        import: './lib/components/index.js',
        sass: './lib/components/index.scss'
    },
    './controllers': {
        import: './lib/controllers/index.js'
    },
    './helpers': {
        import: './lib/helpers/index.js'
    }
};

iconPacks.forEach((iconPack) => {
    if (iconPack.variants.length === 1) {
        exportsMap[`./packs/${iconPack.name}`] = {
            import: `./lib/packs/${iconPack.name}.js`,
            require: `./dist/packs/${iconPack.name}.umd.js`,
            sass: `./lib/packs/${iconPack.name}.scss`
        };
    } else {
        exportsMap[`./packs/${iconPack.name}`] = {
            import: `./lib/packs/${iconPack.name}/index.js`,
            require: `./dist/packs/${iconPack.name}/index.umd.js`,
            sass: `./lib/packs/${iconPack.name}/index.scss`
        };

        iconPack.variants.forEach((iconPackVariant) => {
            exportsMap[`./packs/${iconPack.name}/${iconPackVariant.name}`] = {
                import: `./lib/packs/${iconPack.name}/${iconPackVariant.name}.js`,
                require: `./dist/packs/${iconPack.name}/${iconPackVariant.name}.umd.js`,
                sass: `./lib/packs/${iconPack.name}/${iconPackVariant.name}.scss`
            };
        });
    }
});

packageJSON.exports = exportsMap;

writeFileSync(packageJSONPath, JSON.stringify(packageJSON, null, 4) + '\n');
