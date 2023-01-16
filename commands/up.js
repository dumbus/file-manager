import { join } from 'node:path';
import { directoryStorage } from '../utils/directoryStorage.js';

const up = async () => {
    const currentDirectory = directoryStorage.getCurrentDirectory();
    const newCurrentDirectory = join(currentDirectory, '..');

    directoryStorage.setCurrentDirectory(newCurrentDirectory);
};

export { up };