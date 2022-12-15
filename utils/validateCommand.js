const commands = {
    'up': 0,
    'cd': 1,
    'ls': 0,
    'cat': 1,
    'add': 1,
    'rn': 2,
    'cp': 2,
    'mv': 2,
    'rm': 1,
    'os': 1,
    'hash': 1,
    'compress': 2,
    'decompress': 2
};

const osArguments = ['--EOL', '--cpus', '--homedir', '--username', '--architecture'];

const parseCommand = (trimmedInput) => {
    const splittedCommand = trimmedInput.split(' ');

    const commandData = {
        name: splittedCommand[0],
        arguments: splittedCommand.slice(1)
    };

    return commandData;
};

const isCommandExists = (command) => {
    return command.name in commands;
}

const isCommandArgumentsCorrect = (command) => {
    return command.arguments.length === commands[command.name];
}

const isOsCommandCorrect = (command) => {
    return osArguments.includes(command.arguments[0])
}

const isCommandCorrect = (trimmedInput) => {
    const command = parseCommand(trimmedInput);
    
    let isOsCommandCorrectResult = true;
    const isCommandExistsResult = isCommandExists(command);
    const isCommandArgumentsCorrectResult = isCommandArgumentsCorrect(command);

    if (command.name === 'os') {
        isOsCommandCorrectResult = isOsCommandCorrect(command);
    }

    return isCommandExistsResult && isCommandArgumentsCorrectResult && isOsCommandCorrectResult;
}

export { isCommandCorrect };
