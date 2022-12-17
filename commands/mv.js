import { cp } from './cp.js';
import { rm } from './rm.js';

const mv = async (commandArguments) => {
    const pathToFile = commandArguments[0];
    const pathToNewDirectory = commandArguments[1];

    await cp ([pathToFile, pathToNewDirectory]);
    await rm (pathToFile);
};

export { mv };