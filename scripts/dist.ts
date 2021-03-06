import { resolve } from 'path';
import { build } from 'vite';
import { iconPacks } from '../src/config';
import config from '../vite.packs.config';

(async () => {
    for (const iconPack of iconPacks) {
        const hasMultipleVariants = iconPack.variants.length > 1;
        const iconPackName = iconPack.name;
        const iconPackEntry = hasMultipleVariants
            ? resolve(__dirname, '..', 'src', 'packs', iconPack.name, 'index.ts')
            : resolve(__dirname, '..', 'src', 'packs', iconPack.name);
        const iconPackFileName = hasMultipleVariants ? `packs/${iconPack.name}/[name]` : 'packs/[name]';
        const iconPackLibraryName = `${iconPackName}-icons`;

        await build(config({
            name: iconPackLibraryName,
            entry: iconPackEntry,
            fileName: iconPackFileName
        }));

        if (hasMultipleVariants) {
            for (const iconPackVariant of iconPack.variants) {
                const iconPackVariantName = iconPackVariant.name as string;
                const iconPackVariantEntry = resolve(__dirname, '..', 'src', 'packs', iconPack.name, `${iconPackVariant.name}.ts`);
                const iconPackVariantFileName = `packs/${iconPack.name}/[name]`;
                const iconPackVariantLibraryName = `${iconPackName}-${iconPackVariantName}-icons`;

                await build(config({
                    name: iconPackVariantLibraryName,
                    entry: iconPackVariantEntry,
                    fileName: iconPackVariantFileName
                }));
            }
        }
    };
})();
