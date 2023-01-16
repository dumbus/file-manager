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

const splitCommand = (trimmedInput) => {
    let splittedCommand = [];

    let currentCommandPart = '';

    let singleBracketFlag = 0;
    let doubleBracketFlag = 0;

    for (let i = 0; i < trimmedInput.length; i++) {
        const currentSymbol = trimmedInput[i];

        if (currentSymbol === ' ') {
            if (!singleBracketFlag && !doubleBracketFlag) {
                splittedCommand.push(currentCommandPart);
                currentCommandPart = '';
                continue;
            } else if (singleBracketFlag === 2) {
                splittedCommand.push(currentCommandPart);
                currentCommandPart = '';
                singleBracketFlag = 0;
                continue;
            } else if (doubleBracketFlag === 2) {
                splittedCommand.push(currentCommandPart);
                currentCommandPart = '';
                doubleBracketFlag = 0;
                continue;
            }
        }

        if (currentSymbol === `'`) {
            singleBracketFlag += 1;
            continue;
        }

        if (currentSymbol === `"`) {
            doubleBracketFlag += 1;
            continue;
        }

        currentCommandPart += currentSymbol;
    }

    splittedCommand.push(currentCommandPart);
    
    return splittedCommand;
}

const parseCommand = (trimmedInput) => {
    const splittedCommand = splitCommand(trimmedInput);

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

const isCommandCorrect = (command) => {
    let isOsCommandCorrectResult = true;
    const isCommandExistsResult = isCommandExists(command);
    const isCommandArgumentsCorrectResult = isCommandArgumentsCorrect(command);

    if (command.name === 'os') {
        isOsCommandCorrectResult = isOsCommandCorrect(command);
    }

    return isCommandExistsResult && isCommandArgumentsCorrectResult && isOsCommandCorrectResult;
}

export { isCommandCorrect, parseCommand };
