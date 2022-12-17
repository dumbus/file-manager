import { rm as rem } from 'node:fs/promises';

import { getAbsolutePath } from '../utils/fsUtils.js';

const rm = async (commandArguments) => {
    const pathToFile = commandArguments[0];

    const absolutePathToFile = await getAbsolutePath(pathToFile);

    await rem(absolutePathToFile);
};

export { rm };