import globals from "globals";
import freaktechnikConfigBase from "./packages/eslint-config-base/index.js";

export default [
    ...freaktechnikConfigBase,
    {
        languageOptions: {
            globals: {
                ...globals.nodeBuiltin,
            },
        },
        rules: {
            "no-magic-numbers": 0
        }
    }
];
