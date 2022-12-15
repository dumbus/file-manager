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

const isCommandCorrect = (trimmedInput) => {
    const command = parseCommand(trimmedInput);
    
    const isCommandExistsResult = isCommandExists(command);
    const isCommandArgumentsCorrectResult = isCommandArgumentsCorrect(command);

    return isCommandExistsResult && isCommandArgumentsCorrectResult;
}

export { isCommandCorrect };
