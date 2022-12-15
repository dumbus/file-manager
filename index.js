import { homedir } from 'node:os';
import { stdin as input, stdout as output } from 'node:process';
import readline from 'node:readline/promises';

import { printStartMessage, printEndMessage } from './utils/greeter.js';
import { directoryStorage } from './utils/directoryStorage.js';
import { isCommandCorrect } from './utils/validateCommand.js';

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
        console.log(isCommandCorrect(trimmedInput));
    }
});

rl.on('SIGINT', () => {
    rl.close();
    console.log('\r');
});

rl.on('close', async () => {
    await printEndMessage();
});
