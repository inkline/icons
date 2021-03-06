import fse from 'fs-extra';
import path from 'path';
import { packageFolder } from './config';

const copy = [
    {
        from: path.resolve(__dirname, '..', 'package.json'),
        to: path.resolve(packageFolder, 'package.json')
    }
];

(async () => {
    for (const entry of copy) {
        try {
            await fse.copy(entry.from, entry.to);
        } catch (err) {
            console.log(err.message);
        }
    }
})();
