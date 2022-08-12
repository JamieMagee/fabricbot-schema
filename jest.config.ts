import type { InitialOptionsTsJest } from "ts-jest/dist/types";

const config: InitialOptionsTsJest = {
  preset: "ts-jest/presets/default-esm",
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};

export default config;
