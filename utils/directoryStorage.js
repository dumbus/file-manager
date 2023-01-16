const directoryStorage = {
    setCurrentDirectory(path) {
        directoryStorage.currentDirectory = path;
    },
    getCurrentDirectory() {
        return directoryStorage.currentDirectory;
    }
}

export { directoryStorage };