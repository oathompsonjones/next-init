const promise = import("@oathompsonjones/eslint-config");

module.exports = promise.then((createConfig) => createConfig.default("./tsconfig.json"));
