import globals from "globals";
import treeShaking from "eslint-plugin-tree-shaking";
import importPlugin from 'eslint-plugin-import';
import { defineConfig } from "eslint/config";

export default defineConfig({
    name: "freaktechnik/eslint-config-webpack",
    extends: [
        importPlugin.flatConfigs.errors.rules,
        importPlugin.flatConfig.warnings.rules,
    ],
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
});
