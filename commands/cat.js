import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import { getAbsolutePath, getTypeOfInstance } from '../utils/fsUtils.js';

const cat = async (commandArguments) => {
    const pathToFile = commandArguments[0];
    const absolutePathToFile = await getAbsolutePath(pathToFile);

    const typeOfInstance = await getTypeOfInstance(absolutePathToFile);

    return new Promise((res, rej) => {
        if (typeOfInstance === 'file') {
            const rs = createReadStream(absolutePathToFile);
    
            rs.on('data', (data) => {
                stdout.write(data);
            });

            rs.on('end', () => {
                res();
            });
    
            rs.on('error', (err) => {
                rej(err);
            });
        } else {
            throw new Error();
        }
    });
};

export { cat };