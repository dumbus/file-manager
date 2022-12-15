import { homedir } from 'node:os';
import { stdin as input, stdout as output } from 'node:process';
import readline from 'node:readline/promises';

import { printStartMessage, printEndMessage } from './utils/messenger.js';
import { directoryStorage } from './utils/directoryStorage.js';
import { isCommandCorrect, parseCommand } from './utils/validateCommand.js';
import { startCommand } from './utils/startCommand.js';

const INVALID_INPUT_MESSAGE = 'Invalid input';
const OPERATION_FAILED_MESSAGE = 'Operation failed';
const CURRENT_DIRECTORY_MESSAGE = 'You are currently in ';

await printStartMessage();

directoryStorage.setCurrentDirectory(homedir());

console.log(CURRENT_DIRECTORY_MESSAGE + directoryStorage.getCurrentDirectory());

const rl = readline.createInterface({ input, output });

rl.prompt();

rl.on('line', async (input) => {
    const trimmedInput = input.trim();

    if (trimmedInput === '.exit') {
        rl.close();
    } else {
        const command = parseCommand(trimmedInput);
        const isCommandPassedCorrect = isCommandCorrect(command);

        if (isCommandPassedCorrect) {
            try {
                await startCommand(command);
                // console.log(`Executing command ${command.name}`);
            } catch (e) {
                // console.log(OPERATION_FAILED_MESSAGE);
                console.log(e);
            }
        } else {
            console.log(INVALID_INPUT_MESSAGE);
        }

        console.log(CURRENT_DIRECTORY_MESSAGE + directoryStorage.getCurrentDirectory());
        
        rl.prompt();
    }
});

rl.on('SIGINT', () => {
    rl.close();
    console.log('\r');
});

rl.on('close', async () => {
    await printEndMessage();
});
