import eslintConfigNode from "@freaktechnik/eslint-config-node";
import ava from "eslint-plugin-ava";
import importPlugin from "eslint-plugin-import";
import { defineConfig } from "eslint/config";

// Extract node config slices to apply to this subset. Skipping the node_modules ignore at the end.
const [
    nodeRecommended,
    nodeConfig,
] = eslintConfigNode.slice(-4);

// Assume config base is already applying. Not using extends because we want to apply to different files.
export default defineConfig({
    name: "freaktechnik/eslint-config-test",
    files: [
        "test/**/*.js",
        "test/**/*.mjs",
    ],
    extends: [
        nodeRecommended,
        nodeConfig,
        ava.configs["flat/recommended"],
        // Using warnings + errors because recommended sets ecmaVersion 2018 <_<
        importPlugin.flatConfigs.errors,
        importPlugin.flatConfigs.warnings,
    ],
    languageOptions: {
        sourceType: "module",
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
        "n/no-unsupported-features": 0,
        "security/detect-non-literal-fs-filename": 0,
        "tree-shaking/no-side-effects-in-initialization": 0,
        "n/no-unsupported-features/es-syntax": [
            "error",
            {
                "ignores": [
                    "modules",
                    "asyncFunctions",
                ],
            },
        ],
        // Demoted to just a warning while the used resolver doesn't support ESM exports.
        "import/no-unresolved": "warn",
    },
    settings: {
        "import/resolver": "node",
    },
});
