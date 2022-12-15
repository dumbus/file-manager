import { argv } from 'node:process';

const getUsername = async () => {
    const usernameArg = argv[2];

    let username = 'anonymous';

    if (usernameArg && usernameArg.startsWith('--username')) {
        username = usernameArg.slice(11);
    }

    return username;
}

const printStartMessage = async () => {
    const username = await getUsername();
    console.log(`Welcome to the File Manager, ${username}!`);
}

const printEndMessage = async () => {
    const username = await getUsername();
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
}

export { printStartMessage, printEndMessage };