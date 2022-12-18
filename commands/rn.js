import { rename } from 'node:fs/promises';
import { dirname, join } from 'node:path';

import { getAbsolutePath, getTypeOfInstance } from '../utils/fsUtils.js';

const rn = async (commandArguments) => {
    const pathToFile = commandArguments[0];
    const newFileName = commandArguments[1];

    const currentAbsolutePath = await getAbsolutePath(pathToFile);

    const absolutePathToDirectory = dirname(currentAbsolutePath);
    const absolutePathToNewFile = join(absolutePathToDirectory, newFileName);

    const isFileExists = (await getTypeOfInstance(currentAbsolutePath) === 'file');
    const isResultAbsent = (await getTypeOfInstance(absolutePathToNewFile) === 'absence')

    const isNewFileNameDirectory = newFileName.includes('/') || newFileName.includes('\\');

    if (isNewFileNameDirectory || !isFileExists || !isResultAbsent) {
        throw new Error();
    } else {
        await rename(currentAbsolutePath, absolutePathToNewFile);
    }
};

export { rn };