import { createReadStream, createWriteStream } from 'node:fs';
import { basename, join } from 'node:path';

import { getAbsolutePath } from '../utils/fsUtils.js';

const cp = async (commandArguments) => {
    const pathToFile = commandArguments[0];
    const pathToNewDirectory = commandArguments[1];

    const absolutePathToFile = await getAbsolutePath(pathToFile);
    const absolutePathToNewDirectory = await getAbsolutePath(pathToNewDirectory);

    const fileName = basename(absolutePathToFile);
    const absolutePathToNewFile = await getAbsolutePath(join(absolutePathToNewDirectory, fileName));

    const rs = createReadStream(absolutePathToFile);
    const ws = createWriteStream(absolutePathToNewFile);

    rs.pipe(ws);
};

export { cp };