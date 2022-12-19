# File Manager

Assignment: https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/file-manager/assignment.md

## How to run application:
`npm run start -- --username=Your_Username`

> If you do not pass Your_Username, program will log in as 'Anonymous' 

## Available commands

### Navigation & working directory (nwd)
- `up` go upper from current directory
- `cd path_to_directory` go to dedicated folder from current directory (`path_to_directory` can be relative or absolute)
- `ls` prints in console list of all files and folders in current directory

### Basic operations with files
- `cat path_to_file` read file and print it's content in console
- `add new_file_name` create empty file in current working directory
- `rn path_to_file new_filename` rename file *path_to_file*
- `cp path_to_file path_to_new_directory` copy file *path_to_file* to *path_to_new_directory* folder
- `mv path_to_file path_to_new_directory` move file *path_to_file* to *path_to_new_directory* folder
- `rm path_to_file` delete file `path_to_file`

### Operating system info
- `os --EOL` get EOL (default system End-Of-Line)
- `os --cpus` get host machine CPUs info
- `os --homedir` get home directory
- `os --username` get current *system user name*
- `os --architecture` get CPU architecture

### Hash calculation
- `hash path_to_file` calculate hash for file *path_to_file*

### Compress and decompress operations
- `compress path_to_file path_to_destination` compress file *path_to_file* to *path_to_destination* folder
- `decompress path_to_file path_to_destination` decompress file *path_to_file* to *path_to_destination* folder

### Requirements for paths to files and directories
> If your path contains files or directories with spaces in names, you should use quotes (single or doubled) - ('|"):

- `cp "/home/user/file with spaces" "/home/user/folder with spaces"` - OK
- `cp '/home/user/file with spaces' '/home/user/folder with spaces'` - OK
- `cp "/home/user/file with spaces" '/home/user/folder with spaces'` - OK
- `cp /home/user/file with spaces /home/user/folder with spaces` - NOT OK

> If you want to switch to another disk in Windows, you should use name of disk with *:/*:

- `cd d:/` - OK
- `cd c:/` - OK
- `cd c:` - NOT OK
