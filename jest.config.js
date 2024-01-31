/**
 * Identity obj proxy is needed for jest to be able to properly import scss files.
 */
module.exports = {
    clearMocks: true,
    coverageReporters: ["lcov"],
    moduleNameMapper: {
        "\\.(scss)$": "identity-obj-proxy",
    },
    modulePathIgnorePatterns: ["/cypress", ".yalc"],
    preset: "ts-jest",
    setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
    testEnvironment: "jest-environment-jsdom",
    transform: {
        "^.+\\.tsx?$": [
            "ts-jest",
            {
                tsconfig: "tsconfig.jest.json",
                diagnostics: false,
            },
        ],
    },
};
