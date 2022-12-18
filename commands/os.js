import { EOL, cpus, homedir, userInfo, arch } from 'node:os';

const OS_EOL_MESSAGE = 'Default system End-Of-Line:';
const OS_CPUS_MESSAGE = 'Overall amount of CPUS:';
const OS_HOMEDIR_MESSAGE = 'Home directory:';
const OS_USERNAME_MESSAGE = 'System user name:';
const OS_ARCHITECTURE_MESSAGE = 'CPU architecture:';
const MHZ_TO_GHZ = 0.001;

const showEol = async () => {
    console.log(OS_EOL_MESSAGE, JSON.stringify(EOL));
}

const showCpus = async () => {
    const numberOfCpus = cpus().length;

    const cpusInfo = {};

    cpus().map((cpu, i) => {
        const currentCpu = {};

        currentCpu['CPU Model: '] = cpu.model;
        currentCpu['CPU clock rate, GHz: '] = cpu.speed * MHZ_TO_GHZ;

        cpusInfo[i + 1] = currentCpu;
    });

    console.log(OS_CPUS_MESSAGE, numberOfCpus);
    console.table(cpusInfo);
}

const showHomedir = async () => {
    console.log(OS_HOMEDIR_MESSAGE, homedir());
};

const showUsername = async () => {
    console.log(OS_USERNAME_MESSAGE, userInfo().username);
};

const showArchitecture = async () => {
    console.log(OS_ARCHITECTURE_MESSAGE, arch());
};

const os = async (commandArguments) => {
    const osArg = commandArguments[0];

    switch (osArg) {
        case '--EOL':
            await showEol();
            break;

        case '--cpus':
            await showCpus();
            break;

        case '--homedir':
            await showHomedir();
            break;

        case '--username':
            await showUsername();
            break;

        case '--architecture':
            await showArchitecture();
            break;
    }
};

export { os };