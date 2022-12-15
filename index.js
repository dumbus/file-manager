import { homedir } from 'node:os';

import { printStartMessage, printEndMessage } from './utils/greeter.js';
import { directoryStorage } from './utils/directoryStorage.js';

const INVALID_INPUT_MESSAGE = 'Invalid input';
const OPERATION_FAILED_MESSAGE = 'Operation failed';
const CURRENT_DIRECTORY_MESSAGE = 'You are currently in ';

directoryStorage.setCurrentDirectory(homedir());

await printStartMessage();
