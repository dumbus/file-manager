import { pipeline } from 'node:stream';
import { promisify } from 'node:util';
import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliDecompress, constants } from 'node:zlib';
import { basename, join } from 'node:path';

import { getAbsolutePath, getTypeOfInstance } from '../utils/fsUtils.js';

const decompress = async (commandArguments) => {
    const pathToFile = commandArguments[0];
    const pathToDestination = commandArguments[1];

    const absolutePathToFile = await getAbsolutePath(pathToFile);
    const absolutePathToDestination = await getAbsolutePath(pathToDestination);

    const fileName = basename(absolutePathToFile).slice(0, basename(absolutePathToFile).length - 3);
    const absolutePathToNewFile = await getAbsolutePath(join(absolutePathToDestination, fileName));

    const isSourceExists = (await getTypeOfInstance(absolutePathToFile) === 'file');
    const isDestinationExists = (await getTypeOfInstance(absolutePathToDestination) === 'directory');
    const isResultAbsent = (await getTypeOfInstance(absolutePathToNewFile) === 'absence');

    if (isSourceExists && isDestinationExists && isResultAbsent) {
        const promisifiedPipeline = promisify(pipeline);

        const rs = createReadStream(absolutePathToFile);
        const ws = createWriteStream(absolutePathToNewFile);

        const brotliStream = createBrotliDecompress()

        await promisifiedPipeline(rs, brotliStream, ws);
    } else {
        throw new Error();
    }
};

export { decompress };