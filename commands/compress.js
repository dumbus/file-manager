import { pipeline } from 'node:stream';
import { promisify } from 'node:util';
import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliCompress, constants } from 'node:zlib';
import { basename, join } from 'node:path';

import { getAbsolutePath, getTypeOfInstance } from '../utils/fsUtils.js';

const compress = async (commandArguments) => {
    const pathToFile = commandArguments[0];
    const pathToDestination = commandArguments[1];

    const absolutePathToFile = await getAbsolutePath(pathToFile);
    const absolutePathToDestination = await getAbsolutePath(pathToDestination);

    const fileName = basename(absolutePathToFile) + '.br';
    const absolutePathToNewFile = await getAbsolutePath(join(absolutePathToDestination, fileName));

    const isSourceExists = (await getTypeOfInstance(absolutePathToFile) === 'file');
    const isDestinationExists = (await getTypeOfInstance(absolutePathToDestination) === 'directory');
    const isResultAbsent = (await getTypeOfInstance(absolutePathToNewFile) === 'absence');

    if (isSourceExists && isDestinationExists && isResultAbsent) {
        const promisifiedPipeline = promisify(pipeline);

        const rs = createReadStream(absolutePathToFile);
        const ws = createWriteStream(absolutePathToNewFile);

        const brotliStream = createBrotliCompress({
            params: {
              [constants.BROTLI_PARAM_QUALITY]: constants.BROTLI_MIN_QUALITY,
            }
        })

        await promisifiedPipeline(rs, brotliStream, ws);
    } else {
        throw new Error();
    }
};

export { compress };