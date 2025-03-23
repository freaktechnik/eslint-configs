import globals from "globals";
import treeShaking from "eslint-plugin-tree-shaking";
import importPlugin from 'eslint-plugin-import';
import { defineConfig } from "eslint/config";

export default defineConfig({
    languageOptions: {
        globals: {
            ...globals.commonjs,
        },
        sourceType: "module",
        ecmaVersion: "latest",
    },
    plugins: {
        "tree-shaking": treeShaking,
        import: importPlugin,
    },
    settings: {
        "import/resolver": "webpack",
    },
    rules: {
        ...importPlugin.flatConfigs.errors.rules,
        ...importPlugin.flatConfig.warnings.rules,
        "tree-shaking/no-side-effects-in-initialization": "error",
    },
});
