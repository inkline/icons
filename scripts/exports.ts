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
        import: './build/index.js',
        require: './dist/icons.umd.js',
        sass: './build/index.scss',
        style: './dist/style.css',
    },
    './packs': {
        import: './build/packs/index.js',
        sass: './build/packs/index.scss'
    },
    './components': {
        import: './build/components/index.js',
        sass: './build/components/index.scss'
    },
    './controllers': {
        import: './build/controllers/index.js'
    },
    './helpers': {
        import: './build/helpers/index.js'
    }
};

iconPacks.forEach((iconPack) => {
    if (iconPack.variants.length === 1) {
        exportsMap[`./packs/${iconPack.name}`] = {
            import: `./build/packs/${iconPack.name}.js`,
            require: `./dist/packs/${iconPack.name}.umd.js`,
            sass: `./build/packs/${iconPack.name}.scss`
        };
    } else {
        exportsMap[`./packs/${iconPack.name}`] = {
            import: `./build/packs/${iconPack.name}/index.js`,
            require: `./dist/packs/${iconPack.name}/index.umd.js`,
            sass: `./build/packs/${iconPack.name}/index.scss`
        };

        iconPack.variants.forEach((iconPackVariant) => {
            exportsMap[`./packs/${iconPack.name}/${iconPackVariant.name}`] = {
                import: `./build/packs/${iconPack.name}/${iconPackVariant.name}.js`,
                require: `./dist/packs/${iconPack.name}/${iconPackVariant.name}.umd.js`,
                sass: `./build/packs/${iconPack.name}/${iconPackVariant.name}.scss`
            };
        });
    }
});

packageJSON.exports = exportsMap;

writeFileSync(packageJSONPath, JSON.stringify(packageJSON, null, 4));
