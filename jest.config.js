module.exports = {
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.json"
        }
    },
    moduleFileExtensions: [
        "ts",
        "js"
    ],
    transform: {
        "^.+\\.ts$": "ts-jest"
    },
    testMatch: [
        "**/src/**/*.spec.ts"
    ],
    testEnvironment: "node"
} 