import eslintConfigNode from "@freaktechnik/eslint-config-node";
import ava from "eslint-plugin-ava";
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

const dirname = path.dirname(fileURLToPath(import.meta.url)),
    compat = new FlatCompat({
        baseDirectory: dirname,
        resolvePluginsRelativeTo: dirname,
    });

export default {
    ...(compat.extends("plugin:ava/recommended")[0]),
    ...(compat.extends("plugin:import/errors")[0]),
    ...(compat.extends("plugin:import/warnings")[0]),
    // Add node specific rules, assume base will always apply.
    ...eslintConfigNode.at(-2),
    ...eslintConfigNode.at(-1),
    files: [ "test/**/*.js" ],
    plugins: {
        ava,
    },
    rules: {
        "jsdoc/check-param-names": 0,
        "jsdoc/check-tag-names": 0,
        "jsdoc/check-types": 0,
        "jsdoc/require-description-complete-sentence": 0,
        "jsdoc/require-hyphen-before-param-description": 0,
        "jsdoc/require-param": 0,
        "jsdoc/require-param-type": 0,
        "jsdoc/require-param-description": 0,
        "jsdoc/require-returns-type": 0,
        "jsdoc/require-returns-description": 0,
        "one-var": 0,
        "no-magic-numbers": 0,
        "node/no-unsupported-features": 0,
        "filenames/match-regex": [
            2,
            "^_?[a-z0-9-]+$",
        ],
        "security/detect-non-literal-fs-filename": 0,
        "tree-shaking/no-side-effects-in-initialization": 0,
        "node/no-unsupported-features/es-syntax": [
            "error",
            {
                "ignores": [
                    "modules",
                    "asyncFunctions",
                ],
            },
        ],
    },
    settings: {
        "import/resolver": "node",
    },
};
