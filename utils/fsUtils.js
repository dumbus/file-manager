import { join, isAbsolute } from 'node:path';
import { lstat } from 'node:fs/promises';

import { directoryStorage } from './directoryStorage.js';

const getAbsolutePath = async (path) => {
    const currentDirectory = directoryStorage.getCurrentDirectory();
    const isPathAbsolute = isAbsolute(path);
    
    return isPathAbsolute ? path : join(currentDirectory, path);
};

const getTypeOfInstance = async (path) => {
    try {
        const absolutePath = await getAbsolutePath(path);
        const stat = await lstat(absolutePath);

        if (stat.isFile()) {
            return 'file'
        }

        if (stat.isDirectory()) {
            return 'directory'
        }
    } catch {
        return 'absence'
    }
}

export { getAbsolutePath, getTypeOfInstance }