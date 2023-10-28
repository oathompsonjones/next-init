# next-init
This repository contains the boilerplate for a Next.js TypeScript project.
To set your project up with just one command, add the following script to your `.bashrc` file:
```sh
function nextinit() {
    # Clones the repo
    git clone --depth=1 https://github.com/oathompsonjones/next-init.git .
    # Remove the git history
    rm -rf ./.git
    # Reinitialises git
    git init
    # Installs the dependencies
    pnpm i
    # Opens the index file in VSCode
    code ./src/index.ts
}
```
To use the function, simply run the command `nextinit` in an empty directory using a fresh bash terminal.
