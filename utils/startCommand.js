import { up } from '../commands/up.js';
import { cd } from '../commands/cd.js';
import { ls } from '../commands/ls.js';
import { cat } from '../commands/cat.js';
import { add } from '../commands/add.js';
import { rn } from '../commands/rn.js';
import { cp } from '../commands/cp.js';

const startCommand = async (command) => {
    const commandName = command.name;
    const commandArguments = command.arguments;

    switch (commandName) {
        case 'up':
            await up();
            break;
        
        case 'cd':
            await cd(commandArguments);
            break;
        
        case 'ls':
            await ls();
            break;
        
        case 'cat':
            await cat(commandArguments);
            break;

        case 'add':
            await add(commandArguments);
            break;

        case 'rn':
            await rn(commandArguments);
            break;
        
        case 'cp':
            await cp(commandArguments);
            break;

        case 'mv':
            await mv(commandArguments);
            break;
        
        case 'rm':
            await rm(commandArguments);
            break;

        case 'os':
            await os(commandArguments);
            break;

        case 'hash':
            await hash(commandArguments);
            break;

        case 'compress':
            await compress(commandArguments);
            break;

        case 'decompress':
            await decompress(commandArguments);
            break;
    }
}

export { startCommand };