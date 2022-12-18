import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';

import { getAbsolutePath, getTypeOfInstance } from '../utils/fsUtils.js';

const hash = async (commandArguments) => {
    const pathToFile = commandArguments[0];
    const absolutePathToFile = await getAbsolutePath(pathToFile);

    const isFileExists = (await getTypeOfInstance(absolutePathToFile) === 'file');

    if (isFileExists) {
        const textFromFile = await readFile(absolutePathToFile, { encoding: 'utf-8' });
        console.log(createHash('sha256').update(textFromFile).digest('hex'));
    } else {
        throw new Error();
    }
};

export { hash };