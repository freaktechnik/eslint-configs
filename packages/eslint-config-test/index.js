import eslintConfigNode from "@freaktechnik/eslint-config-node";
import ava from "eslint-plugin-ava";
import importPlugin from "eslint-plugin-import";

const [
    nodeRecommended,
    nodeConfig,
] = eslintConfigNode.slice(-3);

// Assume config base is already applying.,
export default [ {
    files: [
        "test/**/*.js",
        "test/**/*.mjs",
    ],
    plugins: {
        ...nodeRecommended.plugins,
        ava,
        import: importPlugin,
    },
    languageOptions: {
        ...nodeRecommended.languageOptions,
        ...nodeConfig.languageOptions,
        sourceType: "module",
    },
    rules: {
        ...importPlugin.flatConfigs.errors.rules,
        ...importPlugin.flatConfigs.warnings.rules,
        ...nodeRecommended.rules,
        ...nodeConfig.rules,
        ...ava.configs["flat/recommended"].rules,
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
    },
    settings: {
        "import/resolver": "node",
    },
} ];
