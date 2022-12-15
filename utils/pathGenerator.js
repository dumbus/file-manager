import { homedir } from 'node:os';
import { join } from 'node:path';

export let homedir = homedir();

export const getLastDirectory = (...args) => {
    return join(...args);
}