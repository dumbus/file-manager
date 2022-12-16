import { readdir } from 'node:fs/promises';

import { directoryStorage } from '../utils/directoryStorage.js';
import { getTypeOfInstance } from '../utils/fsUtils.js';

const ls = async () => {
    const currentDirectory = directoryStorage.getCurrentDirectory();

    try {
        const instances = await readdir(currentDirectory);
        const folders = [];
        const files = [];

        for (const instance of instances) {
            const typeOfInstance = await getTypeOfInstance(instance);

            if (typeOfInstance === 'directory') {
                folders.push({
                    'Name': instance,
                    'Type': 'directory'
                })
            }

            if (typeOfInstance === 'file') {
                files.push({
                    'Name': instance,
                    'Type': 'file'
                })
            }
        }
        
        console.table([...folders, ...files]);
    } catch {
        throw new Error();
    }
}

export { ls };