import globals from "globals";
import freaktechnikConfigBase from "@freaktechnik/eslint-config-base";

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
