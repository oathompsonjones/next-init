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

#### Packages Included
###### Dev Dependencies
[@oathompsonjones/eslint-config](https://npmjs.org/package/@oathompsonjones/eslint-config)
[@oathompsonjones/ts-config    ](https://npmjs.org/package/@oathompsonjones/ts-config    )
[@total-typescript/ts-reset    ](https://npmjs.org/package/@total-typescript/ts-reset    )
[@types/jest                   ](https://npmjs.org/package/@types/jest                   )
[@types/node                   ](https://npmjs.org/package/@types/node                   )
[eslint                        ](https://npmjs.org/package/eslint                        )
[jest                          ](https://npmjs.org/package/jest                          )
[ts-jest                       ](https://npmjs.org/package/ts-jest                       )
[typescript                    ](https://npmjs.org/package/typescript                    )
###### Dependencies
[simple-node-utils             ](https://npmjs.org/package/simple-node-utils             )

#### Files Generated
```
.
├── src
│   ├── index.ts
│   └── tests
│       └── index.test.ts
├── .eslintrc
├── .gitattributes
├── .gitignore
├── .npmignore
├── jest.config.js
├── LICENSE
├── package.json
├── pnpm-lock.yaml
├── README.md
└── tsconfig.json
```

# Next.js
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
