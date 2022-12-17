import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

import { directoryStorage } from '../utils/directoryStorage.js';
import { getAbsolutePath, getTypeOfInstance } from '../utils/fsUtils.js';

const add = async (commandArguments) => {
    const fileName = commandArguments[0];
    const currentDirectory = directoryStorage.getCurrentDirectory();
    const pathToFile = join(currentDirectory, fileName);
    const absolutePathToFile = await getAbsolutePath(pathToFile);

    const typeOfInstance = await getTypeOfInstance(absolutePathToFile);

    if (typeOfInstance === 'absence') {
        await writeFile(absolutePathToFile, '');
    } else {
        throw new Error();
    }
};

export { add };