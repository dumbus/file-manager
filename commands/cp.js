import { createReadStream, createWriteStream } from 'node:fs';
import { basename, join } from 'node:path';

import { getAbsolutePath, getTypeOfInstance } from '../utils/fsUtils.js';

const cp = async (commandArguments) => {
    const pathToFile = commandArguments[0];
    const pathToNewDirectory = commandArguments[1];

    const absolutePathToFile = await getAbsolutePath(pathToFile);
    const absolutePathToNewDirectory = await getAbsolutePath(pathToNewDirectory);

    const isOldFileExists = (await getTypeOfInstance(absolutePathToFile) === 'file');
    const isNewDirectoryExists = (await getTypeOfInstance(absolutePathToNewDirectory) === 'directory');

    const fileName = basename(absolutePathToFile);
    const absolutePathToNewFile = await getAbsolutePath(join(absolutePathToNewDirectory, fileName));

    const isNewFileAbsent = (await getTypeOfInstance(absolutePathToNewFile) === 'absence');

    if (isOldFileExists && isNewDirectoryExists && isNewFileAbsent) {
        const rs = createReadStream(absolutePathToFile);
        const ws = createWriteStream(absolutePathToNewFile);
    
        rs.pipe(ws);
    } else {
        throw new Error();
    }
};

export { cp };