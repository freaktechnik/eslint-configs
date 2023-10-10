import globals from "globals";
import treeShaking from "eslint-plugin-tree-shaking";
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

const dirname = path.dirname(fileURLToPath(import.meta.url)),
    compat = new FlatCompat({
        baseDirectory: dirname,
        resolvePluginsRelativeTo: dirname,
    });

export default [
    ...compat.extends("plugin:import/errors", "plugin:import/warnings"),
    {
        languageOptions: {
            globals: {
                ...globals.commonjs,
            },
            sourceType: "module",
            ecmaVersion: "latest",
        },
        plugins: {
            "tree-shaking": treeShaking,
        },
        settings: {
            "import/resolver": "webpack",
        },
        rules: {
            "tree-shaking/no-side-effects-in-initialization": "error",
        },
    },
];
