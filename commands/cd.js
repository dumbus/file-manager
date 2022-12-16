import { directoryStorage } from '../utils/directoryStorage.js';
import { getTypeOfInstance, getAbsolutePath } from '../utils/fsUtils.js';

const cd = async (commandArguments) => {
    const newPath = commandArguments[0];
    const newAbsolutePath = await getAbsolutePath(newPath);

    const typeOfInstance = await getTypeOfInstance(newAbsolutePath);

    if (typeOfInstance === 'directory') {
        directoryStorage.setCurrentDirectory(newAbsolutePath);
    } else {
        throw new Error();
    }
}

export { cd };