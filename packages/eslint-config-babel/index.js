import babelParser from "@babel/eslint-parser";
import babel from "@babel/eslint-plugin";

export default {
    files: [
        "**/*.js",
        "**/*.mjs",
        "**/*.jsx",
        "**/*.vue",
    ],
    languageOptions: {
        parser: babelParser,
    },
    plugins: {
        "@babel": babel,
    },
    rules: {
        "new-cap": 0,
        "object-curly-spacing": 0,
        "no-invalid-this": 0,
        "semi": 0,
        "@babel/new-cap": 2,
        "@babel/object-curly-spacing": [
            "error",
            "always",
        ],
        "@babel/no-invalid-this": 2,
        "@babel/semi": 2,
    },
};
