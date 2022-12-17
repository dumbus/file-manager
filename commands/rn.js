import { rename } from 'node:fs/promises';

import { getAbsolutePath } from '../utils/fsUtils.js';

const rn = async (commandArguments) => {
    const pathToFile = commandArguments[0];
    const newFileName = commandArguments[1];

    const currentAbsolutePath = await getAbsolutePath(pathToFile);
    const newAbsolutePath = await getAbsolutePath(newFileName);

    await rename(currentAbsolutePath, newAbsolutePath);
};

export { rn };